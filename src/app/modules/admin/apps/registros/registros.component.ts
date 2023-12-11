import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormsModule,ReactiveFormsModule,UntypedFormBuilder, UntypedFormGroup,Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_FORMATS, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslocoModule } from '@ngneat/transloco';
import {
    Ciudad,
    Paises,
    Departamento,
} from 'app/modules/Models/location.model';
import { LocationService } from 'app/modules/services/location.service';
import { Zonas } from 'app/modules/Models/caracteristicas.model';
import { NgFor, NgForOf } from '@angular/common';
import { TipoIdentificacion } from 'app/modules/Models/actividad.model';
import { ActividadesService } from 'app/modules/services/actividades.service';
import { FuseCardComponent } from '@fuse/components/card';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-registros',
    templateUrl: './registros.component.html',
    styleUrls: ['./registros.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [
         { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS }
     ],
    standalone: true,
    imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRadioModule,
        TranslocoModule,
        FuseCardComponent,
        MatDatepickerModule,
        NgFor,
        NgForOf,
    ],
})
export class RegistrosComponent implements OnInit {
    horizontalStepperForm: UntypedFormGroup;
    verticalStepperForm: UntypedFormGroup;

    // Constante de fechas
    MY_DATE_FORMATS = {
        parse: {
            dateInput: 'DD/MM/YYYY',
        },

        display: {
            dateInput: 'DD/MM/YYYY',

            monthYearLabel: 'MMMM YYYY',

            dateA11yLabel: 'LL',

            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    // variables de trabajo para cargar select de localizacion
    countries: Paises[];
    departamentos: Departamento[];
    selectCity: any[];
    cities: Ciudad[];
    regiones: Zonas[];
    tipoIdentificacion: TipoIdentificacion[];
    selectTipoIdentificacion: any[];
    selectRegion: any[];
    selectCountries: any[];
    selectState: any[];

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _http: LocationService,
        private _httpservice: ActividadesService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Horizontal stepper form
        this.horizontalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                pais: ['', Validators.required],
                departamento: [''],
                ciudad: [''],
                zona: [''],
                tipoidentificacion: [''],
                numeroidenticacion: [''],
                nombres: ['', Validators.required],
                telefono1: ['', Validators.required],
                telefono2: [''],
                email: ['', [Validators.required, Validators.email]],
            }),
            step2: this._formBuilder.group({
                medicamento: ['', Validators.required],
                asegurador: [''],
                fechaformula: [''],
                medicotratante: [''],
                enfermerazona: [''],
                diagnosticopaciente: [''],
                fechaprogramacion: [''],
                causalnoingreso: [''],
                puntosentrega: [''],
            }),
            step3: this._formBuilder.group({
                byEmail: this._formBuilder.group({
                    companyNews: [true],
                    featuredProducts: [false],
                    messages: [true],
                }),
                pushNotifications: ['everything', Validators.required],
            }),
        });

        // Vertical stepper form
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                email: ['', [Validators.required, Validators.email]],
                country: ['', Validators.required],
                language: ['', Validators.required],
            }),
            step2: this._formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                userName: ['', Validators.required],
                about: [''],
            }),
            step3: this._formBuilder.group({
                byEmail: this._formBuilder.group({
                    companyNews: [true],
                    featuredProducts: [false],
                    messages: [true],
                }),
                pushNotifications: ['everything', Validators.required],
            }),
        });
    }
}