import { NgFor, NgIf } from '@angular/common';
import {
    Component,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {
    FormGroup,
    FormsModule,
    NgForm,
    ReactiveFormsModule,
    UntypedFormBuilder,
    Validators,
    AbstractControl,
    ValidatorFn,
    ValidationErrors,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Route, Router, RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { Roles } from 'app/modules/Models/Auth/roles.model';
import { Paises } from 'app/modules/Models/location.model';
import { LocationService } from 'app/modules/services/location.service';
import { Subject, finalize, takeUntil, timer } from 'rxjs';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'sign-up-modern',
    templateUrl: './sign-up.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        RouterLink,
        NgFor,
        NgIf,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatSelectModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        TranslocoModule,
    ],
})
export class SignUpModernComponent implements OnInit, OnDestroy {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: '',
    };

    signUpForm: FormGroup;
    showAlert: boolean = false;
    countries: Paises[] = [];
    selectCountries: any[] = [];
    roles: Roles[] = [];
    selectRoles: any[] = [];
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    isSubmitting: boolean = false;
  

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _httpLocation: LocationService,
        private _formBuilder: UntypedFormBuilder,
        private _route: Router
    ) { }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = this.createSignUpForm();
        this.loadCountries();
        this.loadRoles();
    }

    /**
     * Crea y retorna el FormGroup para el formulario de registro.
     */
    createSignUpForm(): FormGroup {
        return this._formBuilder.group(
            {
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        this.passwordPolicyValidator(),
                    ],
                ],
                confirmPassword: ['', Validators.required],
                avatar: ['vacio'],
                agreements: [true],
            },
            { validator: this.passwordMatchValidator }
        );
    }

    /**
     * Validador personalizado para asegurar que las contraseñas coincidan.
     */
    passwordMatchValidator(fg: FormGroup): { [key: string]: boolean } | null {
        const password = fg.get('password')?.value;
        const confirmPassword = fg.get('confirmPassword')?.value;
        if (password && confirmPassword && password !== confirmPassword) {
            return { mismatch: true };
        }
        return null;
    }

    /**
     * 
     * @returns Validación de la politica de password
     */
    passwordPolicyValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value;
            if (!value) {
                return null; // No validar si el campo está vacío, usar Validators.required para comprobar si el campo está vacío
            }

            const errors: ValidationErrors = {};

            // Requiere al menos un dígito
            if (!/\d/.test(value)) {
                errors.requireDigit = true;
            }

            // Requiere al menos una minúscula
            if (!/[a-z]/.test(value)) {
                errors.requireLowercase = true;
            }

            // Requiere al menos una mayúscula
            if (!/[A-Z]/.test(value)) {
                errors.requireUppercase = true;
            }

            // Requiere al menos un caracter no alfanumérico
            if (!/\W/.test(value)) {
                errors.requireNonAlphanumeric = true;
            }

            // Longitud mínima
            if (value.length < 8) {
                errors.requiredLength = true;
            }

            return Object.keys(errors).length === 0 ? null : errors;
        };
    }

    /**
     * Consulta y carga los países disponibles desde el servicio.
     */
    loadCountries(): void {
        this._httpLocation
            .getAllCountry()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    this.countries = Object.keys(response).map(
                        (key) => response[key]
                    );
                    this.selectCountries = Object.values(this.countries[1]);
                },
                error: (error) => {
                    // Implementar manejo de errores adecuado
                },
                complete: () => console.log('Paises cargados exitosamente...'),
            });
    }

    /**
     * Consulta y carga los roles disponibles desde el servicio de autenticación.
     */
    loadRoles(): void {
        this._authService
            .roles()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    this.roles = Object.keys(response).map(
                        (key) => response[key]
                    );
                    this.selectRoles = Object.values(this.roles[1]);
                },
                error: (error) => {
                    // Implementar manejo de errores adecuado
                },
                complete: () => console.log('Roles cargados exitosamente...'),
            });
    }

    /**
     * Envía el formulario de registro si es válido.
     */
    signUp(): void {
        // Antes de iniciar, asegura de no iniciar si el formulario es invalido o se estado un proceso de registro.
        if (this.signUpForm.invalid || this.isSubmitting) {
            this.signUpForm.markAllAsTouched();
            return; // Sal la función de banda.
        }

        this.isSubmitting = true; // Marca iniciador del proceso de enfondo.

        // Inicia proceso de registro
        this._authService
            .signUp(this.signUpForm.value)
            .pipe(
                takeUntil(this._unsubscribeAll),
                finalize(() => (this.isSubmitting = false)) // Asegura de resetear isSubmitting cuando se complete la suscripción.
            )
            .subscribe({
                next: () => {
                    this.alert = {
                        type: 'success',
                        message: 'Se ha registrado exitosamente!',
                    };
                    this.showAlert = true;
                    // Ocultra delete mensaje post 10 seconds
                    timer(10000).subscribe(() => (this.showAlert = false));
                    //limpia el formulario
                    this.signUpForm.reset();
                },
                error: (error) => {
                    this.alert = {
                        type: 'error',
                        message:
                            'Registro ya existe en la base de datos. Verifique los datos o contactar al admin del sistema.',
                    };
                    //limpia el formulario
                    this.signUpForm.reset();
                    this.showAlert = true;
                    // Implementa el ocultamiento automatico del alerta
                    timer(10000).subscribe(() => (this.showAlert = false));
                    // Notese la personalización pos error en el area visual podría hacerce more particularizado al error
                },
                complete: () => console.log('Registro completo.'),
            });
    }

    /**
     * Salida del sistema.
     */
    onSignOut() {
        this._authService.signOut().subscribe({
            next: () => {
                console.log('Signed out successfully');
                this.alert = {
                    type: 'success',
                    message:
                        'Se ha cerrado correctamente el sistema CENCISAPP!',
                }; // Alerta nativa para éxito
                // Redireccionamiento o cualquier otra lógica adicional aquí
                 this._route.navigate(['/sign-in']);
            },
            error: (error) => {
                console.error('Sign out failed', error);
                this.alert = {
                    type: 'success',
                    message: 'No se ha cerrado exitosamente el sistema!',
                }; // Alerta nativa para error
            },
        });
    }

    ngOnDestroy(): void {
        // Cancela todas las suscripciones para evitar fugas de memoria
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
