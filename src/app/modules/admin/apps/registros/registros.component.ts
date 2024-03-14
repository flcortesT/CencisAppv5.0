import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormsModule,ReactiveFormsModule,UntypedFormBuilder, UntypedFormGroup,Validators} from '@angular/forms';
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
import { CausalNoIngresos, Medicamentos, MedicosActivos, Zonas } from 'app/modules/Models/caracteristicas.model';
import { AsyncPipe, DatePipe, NgFor, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { Farmacia, IPS, Regimen, Sexo, TipoIdentificacion } from 'app/modules/Models/actividad.model';
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
import { Observable } from 'rxjs';
import { ComentariosManager } from 'app/modules/Models/comentariosManager.model';
import { DateTime } from 'luxon';
import { RouterLink } from '@angular/router';

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
        NgIf,
        MatIconModule,
        RouterLink,
        AsyncPipe,
        TitleCasePipe,
        DatePipe,
    ],
})
export class RegistrosComponent implements OnInit {
    horizontalStepperForm: UntypedFormGroup;
    activities$: Observable<ComentariosManager[]>;

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
    sexo: Sexo[];
    ips: IPS[];
    regimen: Regimen[];
    regiones: Zonas[];
    tipoIdentificacion: TipoIdentificacion[];
    selectTipoIdentificacion: any[];
    selectIps: any[];
    selectSexo: any[];
    selectRegimen: any[];
    selectRegion: any[];
    selectCountries: any[];
    selectState: any[];
    medicamentos: Medicamentos[];
    selectMedicamentos: any[];
    aseguradoras: EPS[];
    selectasegurador: any[];
    medicos: MedicosActivos[];
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
    paisSeleccionado?: number;
    departamentoSeleccionado?: number;

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
                sexo: [''],
                fechaNacimiento: [''],
                nombres: ['', Validators.required],
                otrosNombres: [''],
                primerApellido: ['', Validators.required],
                segundoApellido: [''],
                telefono1: [''],
                telefono2: [''],
                telefono3: [''],
                email: [''],
                emailAlterno: [''],
                direccionPrincipal: [''],
                direccionSecundaria: [''],
                regimen: [''],
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
                farmacia: [''],
                ips: [''],
                fechaInscripcion: [''],
                fechaProximaCita: [''],
                medicoFormulador: [''],
                medicoActual: [''],
                referente: [''],
                distrito: [''],
                cuidador: [''],
                parentesco: [''],
            }),
            step3: this._formBuilder.group({
                nombrescompletos: ['', Validators.required],
                emailreportado: ['', [Validators.required, Validators.email]],
            }),
            step4: this._formBuilder.group({}),
            step5: this._formBuilder.group({
                estadoInscripcion: ['', Validators.required],
                about: [''],
            }),
        });

        // carga los datos a los select.
        this.cargaEstadoInscripcion();
        this.cargarPaises();
        this.cargaZona();
        this.cargaTipoIdentificacion();
        this.cargaMedicamentos();
        this.cargaAseguradora();
        this.cargaZonaEnfermeras();
        this.cargaDiagnosticos();
        this.cargaCausalNoIngresos();
        this.cargaPuntoEntrega();
        this.cargaSexo();
        this.cargaRegimen();
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

    // Seleccionar pais
    seleccionarPais(paisId: number) {
        this.paisSeleccionado = paisId;
        this.departamentos = [];
        this.cities = [];
        this.ips = [];
        this._http.getAllState(paisId).subscribe({
            next: (response) => {
                this.departamentos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectState = Object.values(this.departamentos[1]);
                this.onIpsSelected(paisId['paisId']);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estados del país ${paisId['nombrePais']} se ha completado.`
                );
            },
        });
    }

    // Consulta de la tabla sexo
    cargaSexo(): void {
        this._httpservice.getAllSexo().subscribe({
            next: (response) => {
                this.sexo = Object.keys(response).map((key) => response[key]);
                this.selectSexo = Object.values(this.sexo[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(`La petición para cargar sexo se ha completado.`);
            },
        });
    }

    // Consulta de la tabla regimen.
    cargaRegimen(): void {
        this._httpservice.getAllRegimen().subscribe({
            next: (response) => {
                this.regimen = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectRegimen = Object.values(this.regimen[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(`La petición para cargar sexo se ha completado.`);
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

    /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean {
        return DateTime.fromISO(current).hasSame(
            DateTime.fromISO(compare),
            'day'
        );
    }

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string {
        return DateTime.fromISO(date).toRelativeCalendar();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // Consulta las ciudades existentes
    onStateSelected(departamentoId: number): void {
        this._http.getAllCity(departamentoId).subscribe({
            next: (response) => {
                if (response.isSuccess && response.message) {
                    this.cities = response.message;
                    this.selectCity = this.cities;
                } else {
                    console.error(
                        'No se encontraron Ciudades o la petición no fue exitosa.'
                    );
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estados del país ${departamentoId['departamentoId']} se ha completado.`
                );
            },
        });
    }

    // funcion que permite seleccioanr el pais como llave primaria.
    onCountrySelected(paisesId: number): void {
        this._http.getAllState(paisesId).subscribe({
            next: (response) => {
                if (response.isSuccess && response.message) {
                    this.departamentos = response.message;
                    this.selectState = this.departamentos;
                } else {
                    console.error(
                        'No se encontraron departamentos o la petición no fue exitosa.'
                    );
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estados del país ${paisesId['paisesId']} se ha completado.`
                );
            },
        });
    }

    /**
     * Maneja la selección de un médico por su ID de medicamentos.
     * Realiza una llamada HTTP para obtener todos los médicos activos relacionados.
     * @param medicamentosID El ID de los medicamentos seleccionados.
     */
    onMedicoSelected(medicamentosID: number): void {
        this._httpcaracteristicas
            .getAllMedicosActivos(medicamentosID['medicamentosID'])
            .subscribe({
                next: (response) => {
                    if (response.isSuccess && response.message) {
                        this.medicos = response.message;
                        this.selectMedico = this.medicos;
                    } else {
                        console.error(
                            'No se encontraron departamentos o la petición no fue exitosa.'
                        );
                    }
                },
                error: (error) => {
                    console.error(error);
                },
                complete: () => {
                    console.log(
                        `La petición para cargar estados del país ${medicamentosID['medicamentosID']} se ha completado.`
                    );
                },
            });
    }

    /**
     * Funcion que permite seleccionar todas las IPS por pais
     * @param paisID 
     */
    onIpsSelected(paisID: number): void{
        console.log(paisID['paisID']);
        this._httpservice.getAllIPSByCountry(paisID['paisID']).subscribe({
            next: (response) => {
                if (response.isSuccess && response.message) {
                    this.ips = response.message;
                    this.selectIps = this.ips;
                } else {
                    console.error(
                        'No se encontraron departamentos o la petición no fue exitosa.'
                    );
                }
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    `La petición para cargar estados del país ${paisID['paisID']} se ha completado.`
                );
            },
        });
    }
}