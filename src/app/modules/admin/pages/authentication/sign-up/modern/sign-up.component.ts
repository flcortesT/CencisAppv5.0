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
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertComponent, FuseAlertType } from '@fuse/components/alert';
import { TranslocoModule } from '@ngneat/transloco';
import { AuthService } from 'app/core/auth/auth.service';
import { Roles } from 'app/modules/Models/Auth/roles.model';
import { Paises } from 'app/modules/Models/location.model';
import { LocationService } from 'app/modules/services/location.service';
import { Subject, finalize, takeUntil, timer } from 'rxjs';

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
                userName: ['', Validators.required],
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                password: ['', [Validators.required, Validators.minLength(6)]],
                confirmPassword: ['', Validators.required],
                phoneNumber: ['', Validators.required],
                role: ['', Validators.required],
                fechaCreacion: [new Date().toISOString()],
                avatar: ['vacio'],
                isSuperUser: [false],
                nombrePais: ['', Validators.required],
                company: ['', Validators.required],
                multiPais: [false],
                agreements: [true, Validators.requiredTrue],
                status: ['online'],
                active: [true],
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
                    // Ocultra delete mensaje post 5 seconds
                    timer(5000).subscribe(() => (this.showAlert = false));
                },
                error: (error) => {
                    this.alert = {
                        type: 'error',
                        message:
                            'Hay problemas con el registro. intentalo con el admin del sistema.',
                    };
                    this.showAlert = true;
                    // Implementa el ocultamiento automatico del alerta
                    timer(5000).subscribe(() => (this.showAlert = false));
                    // Notese la personalización pos error en el area visual podría hacerce more particularizado al error
                },
                complete: () => console.log('Registro completo.'),
            });
    }

    ngOnDestroy(): void {
        // Cancela todas las suscripciones para evitar fugas de memoria
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
