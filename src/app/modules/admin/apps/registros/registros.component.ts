import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule,  Validators } from '@angular/forms';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseMasonryComponent } from '@fuse/components/masonry';
import { TranslocoModule } from '@ngneat/transloco';
import { Ciudad, Paises, Departamento } from 'app/modules/Models/location.model';
import { LocationService } from 'app/modules/services/location.service';
import { Zonas } from 'app/modules/Models/caracteristicas.model';
import { NgFor, NgForOf } from '@angular/common';
import { TipoIdentificacion } from 'app/modules/Models/actividad.model';
import { ActividadesService } from 'app/modules/services/actividades.service';

@Component({
    selector: 'app-registros',
    templateUrl: './registros.component.html',
    styleUrls: ['./registros.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgForOf,
        ReactiveFormsModule,
        MatStepperModule,
        MatSlideToggleModule,
        TranslocoModule,
        MatButtonModule,
        FuseCardComponent,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatDividerModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatLuxonDateModule,
        FuseMasonryComponent,
    ],
})
export class RegistrosComponent implements OnInit {
    verticalStepperForm: FormGroup;
   
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

    constructor(
        private _http: LocationService,
        private _httpservice: ActividadesService,
        public _formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                countryId: 0,
                pais: ['', Validators.required],
                departamento: [''],
                ciudad: [''],
                zona: [''],
                tipoidentificacion: [''],
                numeroidenticacion: [''],
                nombres: ['', Validators.required],
                telefono1: ['', Validators.required],
                telefono2: [''],
                email: [''],
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
                nombrereportante: [''],
                emailreportante: [''],
            }),
            step4: this._formBuilder.group({
                observaciones: [''],
            }),
        });

        // Carga la tabla de pais en su arranque.
        this.cargarPaises();
        this.cargarEstados(1);
        this.cargaCiudad(1);
        this.cargaZona();
        this.cargaTipoIdentificacion();
        
    }

    /// Consultan los datos relacionados a Pais
    cargarPaises() {
        this._http.getAllCountry().subscribe({
            next: (response) => {
                this.countries = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectCountries = Object.values(this.countries[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log('La petición para cargar países se ha completado.');
            },
        });
    }

    /// Consulta los departamentos existentes.
    cargarEstados(paisId: number): void {
        const valorState = 0;

        this._http.getAllStateOrCountries(paisId, valorState).subscribe({
            next: (response) => {
                this.departamentos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectState = Object.values(this.departamentos[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estados del país ${paisId} se ha completado.`
                );
            },
        });
    }

    // Consulta las ciudades existentes
    cargaCiudad(StateId: number): void {
        const valorCountry = 0;
        this._http.getAllCity().subscribe({
            next: (response) => {
                this.cities = Object.keys(response).map((key) => response[key]);
                this.selectCity = Object.values(this.cities[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar ciudades se ha completado.`
                );
            },
        });
    }

    // Consulta las ciudades existentes
    cargaZona(): void {
        this._http.getAllRegion().subscribe({
            next: (response) => {
                this.regiones = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectRegion = Object.values(this.regiones[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar regiones se ha completado.`
                );
            },
        });
    }

    // Consulta de tipos de identificacion existentes
    cargaTipoIdentificacion(): void {
        this._httpservice.getAllTipoIdentificacion().subscribe({
            next: (response) => {
                this.tipoIdentificacion = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectTipoIdentificacion = Object.values(this.tipoIdentificacion[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar tipos de identificación se ha completado.`
                );
            },
        });
    }

    // funcion que permite seleccioanr el pais como llave primaria.
    onCountrySelected(pais: number): void {
        const valorCity = 0;
        const valorState = 0;
        const valorPais = Object.values(pais)[0];
        this._http
            .getCityByCountry(valorPais, valorCity, valorState)
            .subscribe({
                next: (response) => {
                    this.cities = Object.keys(response).map(
                        (key) => response[key]
                    );
                    this.selectCity = Object.values(this.cities[1]);
                },
                error: (error: any) => {
                    console.error(error);
                },
                complete: () => {
                    console.log(
                        'La petición para cargar paises se ha completado.'
                    );
                },
            });
    }
}
