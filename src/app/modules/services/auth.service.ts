import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable, catchError, retry, throwError } from "rxjs";
import { Roles } from "../Models/Auth/roles.model";

@Injectable({
    providedIn: 'root',
})
export class authServices {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
    };

    /// Login del sistema a traves de la api de .net 7 llamada TeraQ Data Manager.
    login({
        userName,
        email,
        password,
    }: {
        userName: string;
        email: string;
        password: string;
    }): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Auth/Login',
            {
                userName,
                email,
                password,
            },
            this.httpOptions
        );
    }

    /// creacion de roles en el sistema.
    createRoles({ nameRole }: { nameRole: string }): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Authentication/CreateRoles',
            nameRole,
            this.httpOptions
        );
    }

    // Consulta de registros de accion actual.
    getAllRoles(): Observable<Roles> {
        return this.http
            .get<Roles>(environment.baseUrl + 'Authentication/GetRoles')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    /// Register new user
    register({
        username,
        fullName,
        company,
        password,
        confirmPassword,
        phoneNumber,
        role,
        fechaCreacion,
        isSuperAdmin,
        Active,
    }: {
        username: string;
        fullName: string;
        company: string;
        password: string;
        confirmPassword: string;
        phoneNumber: string;
        role: string;
        fechaCreacion: string;
        isSuperAdmin: boolean;
        Active: boolean;
    }): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Auth/Register',
            {
                username,
                fullName,
                company,
                password,
                confirmPassword,
                phoneNumber,
                role,
                fechaCreacion,
                isSuperAdmin,
                Active,
            },
            this.httpOptions
        );
    }

    /// Reseteo  de password
    reset({
        email,
        token,
        newPassword,
        confirmPassword,
    }: {
        email: string;
        token: string;
        newPassword: string;
        confirmPassword: string;
    }): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Auth/ResetPassword',
            {
                email,
                token,
                newPassword,
                confirmPassword,
            },
            this.httpOptions
        );
    }

    /// Envio de token por olvido de password donde alli le permite recobrar la clave.
    forgetpassword({ email }: { email: string }): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Auth/ForgetPassword',
            {
                email,
            },
            this.httpOptions
        );
    }

    /// Logout system
    logout(): Observable<any> {
        return this.http.post(
            environment.baseUrl + 'Auth/logout',
            {},
            this.httpOptions
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
}

