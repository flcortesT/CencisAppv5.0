import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { Subject, finalize, takeUntil } from 'rxjs';

@Component({
    selector: 'auth-forgot-password',
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
        TranslocoModule,
        RouterLink,
    ],
})
export class AuthForgotPasswordComponent implements OnInit {
    @ViewChild('forgotPasswordNgForm') forgotPasswordNgForm;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

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
        private _formBuilder: UntypedFormBuilder
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
        if (this.forgotPasswordForm.invalid) {
            return;
        }

        this.forgotPasswordForm.disable();
        this.showAlert = false;

        this._authService
            .forgotPassword(this.forgotPasswordForm.get('email').value)
            .pipe(
                takeUntil(this._unsubscribeAll), // Asegura que se desuscriba automáticamente
                finalize(() => {
                    this.forgotPasswordForm.enable();
                    this.forgotPasswordNgForm.resetForm();
                    this.showAlert = true;
                })
            )
            .subscribe({
                next: (response) => {
                    this.alert = {
                        type: 'success',
                        message:
                            '¡Enlace para restablecer contraseña enviado! Recibirás un correo electrónico si estás registrado en nuestro sistema.',
                    };
                },
                error: (error) => {
                    this.alert = {
                        type: 'error',
                        message: 'Email no encontrado! Esta seguro que hace parte de la familia Cencis Salud?',
                    };
                },
            });
    }

    ngOnDestroy(): void {
        // Emite un valor para desencadenar la desuscripción y completa el Subject para limpiar.
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
