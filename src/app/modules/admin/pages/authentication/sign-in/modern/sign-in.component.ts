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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector: 'sign-in-modern',
    templateUrl: './sign-in.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
})
export class SignInModernComponent implements OnInit {
    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };
    signInForm: UntypedFormGroup;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder,
        private router: Router
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signInForm = this._formBuilder.group({
            emails: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            rememberMe: [''],
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in: Login al sistema dejando el token listo para trabajar con la sesion para trabajar.
     */
    signIn(): void {
        if (this.signInForm.invalid) {
            return;
        }

        const { emails, password, rememberMe } = this.signInForm.value; // Asegúrate de usar 'email' en lugar de 'emails' si ese es el nombre correcto del campo.
        this._authService.signIn({ emails, password, rememberMe }).subscribe({
            next: () => {
                // Configurar mensaje de éxito
                this.alert = {
                    type: 'success',
                    message: 'Ha ingresado exitosamente al sistema!',
                };
                this.showAlert = true;
                // Limpia el formulario de registro
                this.signInForm.reset;
                // Ocultar mensaje después de 10 segundos
                setTimeout(() => (this.showAlert = false), 10000);

                // Redireccionar al usuario al dashboard
                this.router.navigate(['/dashboards/project']);
            },
            error: () => {
                // Configurar mensaje de error
                this.alert = {
                    type: 'error',
                    message:
                        'Un error se ha presentado en su proceso de ingreso.',
                };
                this.showAlert = true;

                // Ocultar mensaje después de 10 segundos
                setTimeout(() => (this.showAlert = false), 10000);
            },
        });
    }
}
