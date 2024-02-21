import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { catchError, Observable, throwError } from 'rxjs';

/**
 * Intercept
 *
 * @param req
 * @param next
 */
export const authInterceptor = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);

    // Solo clonamos la request si es necesario agregar el Authorization header
    const newReq =
        authService.accessToken &&
        !AuthUtils.isTokenExpired(authService.accessToken)
            ? req.clone({
                  headers: req.headers.set(
                      'Authorization',
                      'Bearer ' + authService.accessToken
                  ),
              })
            : req;

    // Manejo de la respuesta y posibles errores
    return next(newReq).pipe(
        catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
                authService.signOut();
                location.reload(); // Considera estrategias alternativas para una mejor UX
            }
            return throwError(() => error);
        })
    );
};
