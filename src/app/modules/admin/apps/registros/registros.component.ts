import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule,ReactiveFormsModule,UntypedFormBuilder, UntypedFormGroup,Validators} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { TranslocoModule } from '@ngneat/transloco';
import { Ciudad, Paises, Departamento } from 'app/modules/Models/location.model';
import { LocationService } from 'app/modules/services/location.service';
import { CausalNoIngresos, Medicamentos, Zonas } from 'app/modules/Models/caracteristicas.model';
import { NgFor, NgForOf } from '@angular/common';
import { Farmacia, IPS, TipoIdentificacion } from 'app/modules/Models/actividad.model';
import { ActividadesService } from 'app/modules/services/actividades.service';
import { FuseCardComponent } from '@fuse/components/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CaracteristicasService } from 'app/modules/services/caracteristicas.service';
import { EPS, EstadoInscripcion } from 'app/modules/Models/ejecuciones.model';
import { GestionesGeneralesService } from 'app/modules/services/gestiones-generales.service';
import { Medico } from 'app/modules/Models/tablasMaestrasMedicamento.model';
import { DatosClinicosService } from 'app/modules/services/datos-clinicos.service';
import { ZonasEnfermeras } from 'app/modules/Models/tablaMaestraTablasSecundarias.model';
import { TablasSecundariasService } from 'app/modules/services/tablas-secundarias.service';
import { Diagnosticos } from 'app/modules/Models/datosClinicos.model';

@Component({
    selector: 'app-registros',
    templateUrl: './registros.component.html',
    styleUrls: ['./registros.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
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

    // Constante de fechas
    fechaformula = (d: Date | null): boolean => {
        const day = (d || new Date()).getDay();
        // Prevent Saturday and Sunday from being selected.
        return day !== 0 && day !== 6;
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
    medicamentos: Medicamentos[];
    selectMedicamentos: any[];
    aseguradoras: EPS[];
    selectasegurador: any[];
    medicos: Medico[];
    selectMedico: any[];
    zonaenfermeras: ZonasEnfermeras[];
    selectZonaEnfermeras: any[];
    diagnosticos: Diagnosticos[];
    selectDiagnostico: any[];
    causalnoingresos: CausalNoIngresos[];
    selectCausalnoIngresos: any[];
    puntosEntrega: Farmacia[];
    selectPuntoEntrega: any[];
    estadoInscripcion: EstadoInscripcion[];
    selectEstadoInscripcion: any[];
    ipsAtencion: IPS[];
    selectIpsAtencion: any[];

    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _http: LocationService,
        private _httpservice: ActividadesService,
        private _httpcaracteristicas: CaracteristicasService,
        private _httpgestiones: GestionesGeneralesService,
        private _httpdatosmedicos: DatosClinicosService,
        private _httpZonaEnfermeras: TablasSecundariasService
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
                email: [''],
                nroReporteWeb: ['', Validators.required],
                ipsAtencion: [''],
            }),
            step2: this._formBuilder.group({
                medicamento: ['', Validators.required],
                asegurador: [''],
                fechaformula: [''],
                medicotratante: ['', Validators.required],
                enfermerazona: [''],
                diagnosticopaciente: [''],
                fechaprogramacion: [''],
                causalnoingreso: [''],
                consentimientoInf: [''],
                formula: [''],
                hcdiagnostico: [''],
                ccadres: [''],
            }),
            step3: this._formBuilder.group({
                nombrescompletos: ['', Validators.required],
                emailreportado: ['', [Validators.required, Validators.email]],
            }),
            step4: this._formBuilder.group({
                estadoInscripcion: ['', Validators.required],
                about: [''],
            }),
        });

        // carga los datos a los select.
        this.cargaEstadoInscripcion();
        this.cargarPaises();
        this.cargarEstados(1);
        this.cargaCiudad(1);
        this.cargaZona();
        this.cargaTipoIdentificacion();
        this.cargaMedicamentos();
        this.cargaAseguradora();
        this.cargaMedico();
        this.cargaZonaEnfermeras();
        this.cargaDiagnosticos();
        this.cargaCausalNoIngresos();
        this.cargaPuntoEntrega();
        this.cargaIPS();
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
                this.selectTipoIdentificacion = Object.values(
                    this.tipoIdentificacion[1]
                );
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

    // Consulta de medicamentos existentes
    cargaMedicamentos(): void {
        this._httpcaracteristicas.getAllMedicamentos().subscribe({
            next: (response) => {
                this.medicamentos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectMedicamentos = Object.values(this.medicamentos[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar medicamentos se ha completado.`
                );
            },
        });
    }

    // Aseguradoras del servicio medico, para Colobia EPS
    cargaAseguradora(): void {
        this._httpgestiones.getAllEps().subscribe({
            next: (response) => {
                this.aseguradoras = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectasegurador = Object.values(this.aseguradoras[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar aseguradoras se ha completado.`
                );
            },
        });
    }

    // Medico prestador de servicio
    cargaMedico(): void {
        this._httpdatosmedicos.getAllMedicos().subscribe({
            next: (response) => {
                this.medicos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectMedico = Object.values(this.medicos[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar Médicos se ha completado.`
                );
            },
        });
    }

    // Enfermera asignada al producto de servicio
    cargaZonaEnfermeras(): void {
        this._httpZonaEnfermeras.getAllZonasEnfermeras().subscribe({
            next: (response) => {
                this.zonaenfermeras = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectZonaEnfermeras = Object.values(
                    this.zonaenfermeras[1]
                );
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar Zona de enfermeras se ha completado.`
                );
            },
        });
    }

    // Diagnosticos para pacientes
    cargaDiagnosticos(): void {
        this._httpdatosmedicos.getAllDiagnosticos().subscribe({
            next: (response) => {
                this.diagnosticos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectDiagnostico = Object.values(this.diagnosticos[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar Zona de enfermeras se ha completado.`
                );
            },
        });
    }

    // Consulta de causal no ingresos
    cargaCausalNoIngresos(): void {
        this._httpcaracteristicas.getAllCausalNoIngresos().subscribe({
            next: (response) => {
                this.causalnoingresos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectCausalnoIngresos = Object.values(
                    this.causalnoingresos[1]
                );
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar causal de no ingresos se ha completado.`
                );
            },
        });
    }

    // Consulta de puntos de entrega - farmacias
    cargaPuntoEntrega(): void {
        this._httpservice.getAllFarmacia().subscribe({
            next: (response) => {
                this.puntosEntrega = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectPuntoEntrega = Object.values(this.puntosEntrega[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar puntos de entrega - farmacias se ha completado.`
                );
            },
        });
    }

    // Consulta de estado inscripcion existentes
    cargaEstadoInscripcion(): void {
        this._httpgestiones.getAllEstadoInscripcion().subscribe({
            next: (response) => {
                this.estadoInscripcion = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectEstadoInscripcion = Object.values(
                    this.estadoInscripcion[1]
                );
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estado inscripcion se ha completado.`
                );
            },
        });
    }

    // Consulta las IPS existentes
    cargaIPS(): void {
        this._httpservice.getAllIPS().subscribe({
            next: (response) => {
                this.ipsAtencion = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectIpsAtencion = Object.values(this.ipsAtencion[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar IPS se ha completado.`
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