import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';

export const NoAuthGuard: CanActivateFn | CanActivateChildFn = (_route,_state) => {
    // Inyecta el servicio Router para manejar la navegación.
    const router: Router = inject(Router);

    // Utiliza el servicio AuthService para verificar el estado de autenticación del usuario.
    return inject(AuthService)
        .check()
        .pipe(
            switchMap((authenticated) => {
                // Si el usuario está autenticado...
                if (authenticated) {
                    // Redirige al usuario a la página de inicio (o cualquier otra página definida como 'home').
                    // Aquí, '' representa la ruta raíz. Considera cambiar esto según la lógica de tu aplicación.
                    return of(router.parseUrl(''));
                }

                // Si el usuario no está autenticado, permite el acceso a la ruta actual.
                return of(true);
            })
        );
};

