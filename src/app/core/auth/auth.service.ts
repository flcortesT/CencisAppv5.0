import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/modules/Models/Auth/user.model';
import { environment } from 'environments/environment';
import { BehaviorSubject, catchError, Observable, of, retry, switchMap, tap, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private authenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated = this.authenticatedSubject.asObservable();
    isHandling401Error: any;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        private _router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post(
            environment.baseUrl + 'Authentication/ForgetPassword/',
            email
        );
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post(
            environment.baseUrl + 'Authentication/reset-password',
            password
        );
    }

    /**
     * Query Roles
     */
    roles() {
        return this._httpClient
            .get(environment.baseUrl + 'Authentication/GetRoles')
            .pipe(retry(1), catchError(this.errorHandl));
    }
    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: {
        emails: string;
        password: string;
        rememberMe: boolean;
    }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this.isAuthenticated) {
            return throwError(() => new Error('User is already logged in.'));
        }

        return this._httpClient
            .post(environment.baseUrl + 'Authentication/login', credentials)
            .pipe(
                switchMap((response: any) => {
                    // Store the access token in the local storage
                    this.accessToken = response.accessToken;

                    // Set the authenticated flag to true
                    this.authenticatedSubject.next(true);

                    // Store the user on the user service
                    this._userService.user = response.user;

                    // Return a new observable with the response
                    return of(response);
                })
            );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Sign in using the token
        return this._httpClient
            .post('api/auth/sign-in-with-token', {
                accessToken: this.accessToken,
            })
            .pipe(
                catchError(() =>
                    // Return false
                    of(false)
                ),
                switchMap((response: any) => {
                    // Replace the access token with the new one if it's available on
                    // the response object.
                    //
                    // This is an added optional step for better security. Once you sign
                    // in using the token, you should generate a new one on the server
                    // side and attach it to the response object. Then the following
                    // piece of code can replace the token with the refreshed one.
                    if (response.accessToken) {
                        this.accessToken = response.accessToken;
                    }

                    // Set the authenticated flag to true
                    this.authenticatedSubject.next(true);

                    // Store the user on the user service
                    this._userService.user = response.user;

                    // Return true
                    return of(true);
                })
            );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        // Realiza una solicitud al endpoint del servidor para cerrar sesión
        return this._httpClient
            .post(environment.baseUrl + 'Authentication/logout', {})
            .pipe(
                tap(() => {
                    // Asumiendo que el backend ha invalidado la cookie de sesión,
                    // limpia cualquier estado en el cliente relacionado con la autenticación del usuario.
                    // Si estás utilizando localStorage para almacenar algún estado adicional o token (aunque
                    // el token principal esté en una cookie HttpOnly), deberías limpiarlo aquí.
                    // Nota: Si todo el manejo de sesión se basa en cookies HttpOnly, es posible que no necesites
                    // hacer nada en localStorage.
                    localStorage.removeItem('accessToken'); // Esto podría ser innecesario dependiendo de tu implementación específica.
                  
                    // Actualiza el estado de autenticación a no autenticado.
                    this.authenticatedSubject.next(false);
                     this._router.navigate(['/sign-in']);
                }),
                catchError((error) => {
                    // Maneja cualquier error que pueda ocurrir durante el proceso de cierre de sesión
                    console.error('Error during sign out:', error);
                    return throwError(() => new Error('Error during sign out'));
                })
            );
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(data: any): Observable<User> {
        return this._httpClient
            .post<User>(
                `${environment.baseUrl}Authentication/register`, // Usa plantillas de cadena para concatenar
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(
                retry(1), // Reintentar una vez en caso de falla es razonable
                catchError(this.errorHandl) // Asegúrate de tener una función errorHandl definida
            );
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string }): Observable<any> {
        return this._httpClient.post(
            environment.baseUrl + 'Authentication/UnlockSession',
            credentials
        );
    }

    // Control de errores
    errorHandl(error: {
        error: { message: string };
        status: any;
        message: any;
    }) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this.isAuthenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            return of(false);
        }

        // If the access token exists, and it didn't expire, sign in using it
        return this.signInUsingToken();
    }
}
