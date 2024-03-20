import { NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormBuilder,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'forgot-password-modern',
    templateUrl: './forgot-password.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        NgIf,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        RouterLink,
        TranslocoModule,
    ],
})
export class ForgotPasswordModernComponent implements OnInit {
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    forgotPasswordForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Send the reset link
     */
    sendResetLink(): void {
        // Verificar si el formulario es válido
        if (this.forgotPasswordForm.invalid) {
            return;
        }
       
        // Desactivar el formulario para prevenir envíos múltiples
        this.forgotPasswordForm.disable();

        // Ocultar alertas previas
        this.showAlert = false;
        
        // Llamar al servicio AuthService para enviar el enlace de restablecimiento
        this._authService
            .forgotPassword(this.forgotPasswordForm.get('email').value)
            .subscribe({
                next: () => {
                    // Manejar la respuesta exitosa
                    this.alert = {
                        type: 'success',
                        message: '¡Enlace para restablecer contraseña enviado! Revisa tu correo si estás registrado en nuestro sistema.',
                    };
                    this.showAlert = true;
                    this.forgotPasswordForm.enable(); // Re-activar el formulario
                    this.forgotPasswordForm.reset(); // Opcional: resetear el formulario
                },
                error: () => {
                    // Manejar errores (ej. usuario no encontrado)
                    this.alert = {
                        type: 'error',
                        message: 'Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.',
                    };
                    this.showAlert = true;
                    this.forgotPasswordForm.enable(); // Re-activar el formulario para permitir correcciones
                },
            });
    }
}
