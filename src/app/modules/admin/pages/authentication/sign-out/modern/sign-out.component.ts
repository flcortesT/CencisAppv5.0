import { I18nPluralPipe, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'sign-out-modern',
    templateUrl: './sign-out.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [NgIf, RouterLink, I18nPluralPipe, TranslocoModule],
})
export class SignOutModernComponent implements OnInit {
    countdown: number = 5;
    countdownMapping: any = {
        '=1': '# second',
        other: '# seconds',
    };

    /**
     * Constructor
     */
    constructor(private _authService: AuthService, private router: Router) {}

    ngOnInit(): void {
        this.startRedirectCountdown();
    }

    startRedirectCountdown() {
        const interval = setInterval(() => {
            this.countdown--;

            if (this.countdown === 0) {
                clearInterval(interval);
                this.router.navigate(['/sign-in']); // Asegúrate de que la ruta coincida con la configuración de tu enrutador
            }
        }, 1000);
    }

    /**
     * Salida segura del sistema.
     */
    onSignOut() {
        this._authService.signOut().subscribe({
            next: () => {
                console.log('Signed out successfully');
                alert('Has cerrado sesión correctamente.'); // Alerta nativa para éxito
                // Redireccionamiento o cualquier otra lógica adicional aquí
            },
            error: (error) => {
                console.error('Sign out failed', error);
                alert('Error al cerrar sesión. Por favor, inténtalo de nuevo.'); // Alerta nativa para error
            },
        });
    }
}
