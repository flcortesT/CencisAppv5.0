import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { of, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn | CanActivateChildFn = (_route, state) => {
    // Inyecta el Router para manejar redirecciones.
    const router: Router = inject(Router);

    // Utiliza el AuthService para verificar el estado de autenticación del usuario.
    return inject(AuthService)
        .check()
        .pipe(
            switchMap((authenticated) => {
                // Si el usuario no está autenticado...
                if (!authenticated) {
                    // Decide la URL de redirección basándose en la URL actual.
                    const redirectURL = state.url === '/sign-out' ? '' : `redirectURL=${state.url}`;
                    // Construye y devuelve una URLTree hacia la página de inicio de sesión.
                    const urlTree = router.parseUrl(`sign-in?${redirectURL}`);

                    return of(urlTree);
                }

                // Permite el acceso a la ruta si el usuario está autenticado.
                return of(true);
            })
        );
};