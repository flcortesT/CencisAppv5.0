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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { FuseValidators } from '@fuse/validators';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'reset-password-modern',
    templateUrl: './reset-password.component.html',
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
        MatIconModule,
        MatProgressSpinnerModule,
        RouterLink,
        TranslocoModule,
    ],
})
    
export class ResetPasswordModernComponent implements OnInit {
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    resetPasswordForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(private _formBuilder: UntypedFormBuilder,
                private _authenticationService: AuthService) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.resetPasswordForm = this._formBuilder.group(
            {
                email: ['', Validators.required],
                token: ['', Validators.required],
                password: ['', Validators.required],
                passwordConfirm: ['', Validators.required],
            },
            {
                validators: FuseValidators.mustMatch(
                    'password',
                    'passwordConfirm'
                ),
            }
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Reset password
     */
    resetPassword(): void {
        if (this.resetPasswordForm.invalid) {
            this.alert = {
                type: 'error',
                message: 'Please ensure the form is filled out correctly.',
            };
            this.showAlert = true;
            return;
        }

        const { email, token, newPassword, confirmPassword } = this.resetPasswordForm.value;

        this._authenticationService
            .resetPassword({email, token, newPassword, confirmPassword})
            .subscribe({
                next: () => {
                    // Manejo de la respuesta exitosa
                    this.alert = {
                        type: 'success',
                        message: 'Tu password ha sido cambiado exitosamente....',
                    };
                    this.showAlert = true;
                },
                error: () => {
                    // Manejo de errores
                    this.alert = {
                        type: 'error',
                        message:
                            'Un error ha pasado en el proceso de recuperación de tu contraseña',
                    };
                    this.showAlert = true;
                },
            });
    }
}
