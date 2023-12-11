import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CIE, CaracteristicasVivienda, CausalInterrupcionSueno, CausalNoIngresos, Causalidad, CieMedicamento, Comorbilidad, ConfiguracionUsuarioDistrito, ConfiguracionUsuarioGeneral, ConfiguracionUsuarioZonas, ConsentimientoGS, Distritos, Laboratorios, Medicamentos, Perfiles, TipoConfiguracion, Zonas } from '../Models/caracteristicas.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { MaestraCaracteristicas } from '../Models/actividad.model';


@Injectable({
    providedIn: 'root',
})
export class CaracteristicasService {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
    };
  
    // Consulta de registros de accion actual.
    getAllCaracteristicasVivienda(): Observable<CaracteristicasVivienda> {
        return this.http
            .get<CaracteristicasVivienda>(
                environment.baseUrl + 'CaracteristicasVivienda'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de caraceristicas
    getAllMaestraCaracteristicas(): Observable<MaestraCaracteristicas> {
        return this.http
            .get<MaestraCaracteristicas>(
                `${environment.baseUrl}MaestraCaracteristicas`
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCausalidad(): Observable<Causalidad> {
        return this.http
            .get<Causalidad>(environment.baseUrl + 'Causalidad')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCausalNoIngresos(): Observable<CausalNoIngresos> {
        return this.http
            .get<CausalNoIngresos>(environment.baseUrl + 'CausalNoIngresos')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCausalInterrupcionSueno(): Observable<CausalInterrupcionSueno> {
        return this.http
            .get<CausalInterrupcionSueno>(
                environment.baseUrl + 'CausalInterrupcionSueno'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCIE(): Observable<CIE> {
        return this.http
            .get<CIE>(environment.baseUrl + 'CIE')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCIEMedicamento(): Observable<CieMedicamento> {
        return this.http
            .get<CieMedicamento>(environment.baseUrl + 'CieMedicamento')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllComorbilidad(): Observable<Comorbilidad> {
        return this.http
            .get<Comorbilidad>(environment.baseUrl + 'Comorbilidad')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllConfiguracionUsuarioGeneral(): Observable<ConfiguracionUsuarioGeneral> {
        return this.http
            .get<ConfiguracionUsuarioGeneral>(
                environment.baseUrl + 'ConfiguracionUsuarioGeneral'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllConfiguracionUsuarioDistrito(): Observable<ConfiguracionUsuarioDistrito> {
        return this.http
            .get<ConfiguracionUsuarioDistrito>(
                environment.baseUrl + 'ConfiguracionUsuarioDistrito'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllConfiguracionUsuarioZonas(): Observable<ConfiguracionUsuarioZonas> {
        return this.http
            .get<ConfiguracionUsuarioZonas>(
                environment.baseUrl + 'ConfiguracionUsuarioZonas'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllConsentimientosGS(): Observable<ConsentimientoGS> {
        return this.http
            .get<ConsentimientoGS>(environment.baseUrl + 'ConsentimientosGS')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllZonas(): Observable<Zonas> {
        return this.http
            .get<Zonas>(environment.baseUrl + 'Zonas')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllPerfiles(): Observable<Perfiles> {
        return this.http
            .get<Perfiles>(environment.baseUrl + 'Perfiles')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoConfiguracion(): Observable<TipoConfiguracion> {
        return this.http
            .get<TipoConfiguracion>(environment.baseUrl + 'TipoConfiguracion')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDistritos(): Observable<Distritos> {
        return this.http
            .get<Distritos>(environment.baseUrl + 'Distritos')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllMedicamentos(): Observable<Medicamentos> {
        return this.http
            .get<Medicamentos>(environment.baseUrl + 'Medicamentos')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllLaboratorios(): Observable<Laboratorios> {
        return this.http
            .get<Laboratorios>(environment.baseUrl + 'Laboratorios')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCaracteristicasViviendaById(
        id: number
    ): Observable<CaracteristicasVivienda> {
        return this.http
            .get<CaracteristicasVivienda>(
                environment.baseUrl + 'CaracteristicasVivienda/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de maetracaracteristicas
    getAllCaracteristicasById(id: number): Observable<MaestraCaracteristicas> {
        return this.http
            .get<MaestraCaracteristicas>(
                environment.baseUrl + 'MaestraCaracteristicas/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCausalidadById(id: number): Observable<Causalidad> {
        return this.http
            .get<Causalidad>(environment.baseUrl + 'Causalidad/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCausalInterrupcionSuenoById(
        id: number
    ): Observable<CausalInterrupcionSueno> {
        return this.http
            .get<CausalInterrupcionSueno>(
                environment.baseUrl + 'CausalInterrupcionSueno/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCausalNoIngresosById(id: number): Observable<CausalNoIngresos> {
        return this.http
            .get<CausalNoIngresos>(
                environment.baseUrl + 'CausalNoIngresos/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllComorbilidadById(id: number): Observable<Comorbilidad> {
        return this.http
            .get<Comorbilidad>(environment.baseUrl + 'Comorbilidad/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllConfiguracionUsuarioDistritoById(
        id: number
    ): Observable<ConfiguracionUsuarioDistrito> {
        return this.http
            .get<ConfiguracionUsuarioDistrito>(
                environment.baseUrl + 'ConfiguracionUsuarioDistrito/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllConsentimientoGSById(id: number): Observable<ConsentimientoGS> {
        return this.http
            .get<ConsentimientoGS>(
                environment.baseUrl + 'ConsentimientoGS/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllZonasById(id: number): Observable<Zonas> {
        return this.http
            .get<Zonas>(environment.baseUrl + 'Zonas/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllPerfilesById(id: number): Observable<Perfiles> {
        return this.http
            .get<Perfiles>(environment.baseUrl + 'Perfiles/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoConfiguracionById(id: number): Observable<TipoConfiguracion> {
        return this.http
            .get<TipoConfiguracion>(
                environment.baseUrl + 'TipoConfiguracion/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDistritosById(id: number): Observable<Distritos> {
        return this.http
            .get<Distritos>(environment.baseUrl + 'Distritos/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllMedicamentosById(id: number): Observable<Medicamentos> {
        return this.http
            .get<Medicamentos>(environment.baseUrl + 'Medicamentos/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllLaboratoriosById(id: number): Observable<Laboratorios> {
        return this.http
            .get<Laboratorios>(environment.baseUrl + 'Laboratorios/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCaracteristicasVivienda(
        data: any
    ): Observable<CaracteristicasVivienda> {
        return this.http
            .post<CaracteristicasVivienda>(
                environment.baseUrl + 'CaracteristicasVivienda',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCaracteristicas(data: any): Observable<MaestraCaracteristicas> {
        return this.http
            .post<MaestraCaracteristicas>(
                environment.baseUrl + 'MaestraCaracteristicas',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCIE(data: any): Observable<CIE> {
        return this.http
            .post<CIE>(
                environment.baseUrl + 'CIE',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCIEMedicamento(data: any): Observable<CieMedicamento> {
        return this.http
            .post<CieMedicamento>(
                environment.baseUrl + 'CieMedicamento',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCausalidad(data: any): Observable<Causalidad> {
        return this.http
            .post<Causalidad>(
                environment.baseUrl + 'Causalidad',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCausalInterrupcionSueno(
        data: any
    ): Observable<CausalInterrupcionSueno> {
        return this.http
            .post<CausalInterrupcionSueno>(
                environment.baseUrl + 'CausalInterrupcionSueno',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCausalNoIngresos(data: any): Observable<CausalNoIngresos> {
        return this.http
            .post<CausalNoIngresos>(
                environment.baseUrl + 'CausalNoIngresos',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearComorbilidad(data: any): Observable<Comorbilidad> {
        return this.http
            .post<Comorbilidad>(
                environment.baseUrl + 'Comorbilidad',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearConfiguracionUsuarioGeneral(
        data: any
    ): Observable<ConfiguracionUsuarioGeneral> {
        return this.http
            .post<ConfiguracionUsuarioGeneral>(
                environment.baseUrl + 'ConfiguracionUsuarioGeneral',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearConfiguracionUsuarioDistrito(
        data: any
    ): Observable<ConfiguracionUsuarioDistrito> {
        return this.http
            .post<ConfiguracionUsuarioDistrito>(
                environment.baseUrl + 'ConfiguracionUsuarioDistrito',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearConfiguracionUsuarioZonas(
        data: any
    ): Observable<ConfiguracionUsuarioZonas> {
        return this.http
            .post<ConfiguracionUsuarioZonas>(
                environment.baseUrl + 'ConfiguracionUsuarioZonas',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearConsentimientoGS(data: any): Observable<ConsentimientoGS> {
        return this.http
            .post<ConsentimientoGS>(
                environment.baseUrl + 'ConsentimientoGS',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearZonas(data: any): Observable<Zonas> {
        return this.http
            .post<Zonas>(
                environment.baseUrl + 'Zonas',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearPerfiles(data: any): Observable<Perfiles> {
        return this.http
            .post<Perfiles>(
                environment.baseUrl + 'Perfiles',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoConfiguracion(data: any): Observable<TipoConfiguracion> {
        return this.http
            .post<TipoConfiguracion>(
                environment.baseUrl + 'TipoConfiguracion',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDistritos(data: any): Observable<Distritos> {
        return this.http
            .post<Distritos>(
                environment.baseUrl + 'Distritos',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearMedicamentos(data: any): Observable<Medicamentos> {
        return this.http
            .post<Medicamentos>(
                environment.baseUrl + 'Medicamentos',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearLaboratorios(data: any): Observable<Laboratorios> {
        return this.http
            .post<Laboratorios>(
                environment.baseUrl + 'Laboratorios',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCaracteristicasVivienda(
        id: number,
        data: any
    ): Observable<CaracteristicasVivienda> {
        return this.http
            .put<CaracteristicasVivienda>(
                environment.baseUrl + 'CaracteristicasVivienda/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCaracteristicas(
        id: number,
        data: any
    ): Observable<MaestraCaracteristicas> {
        return this.http
            .put<MaestraCaracteristicas>(
                environment.baseUrl + 'MaestraCaracteristicas/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCausalidad(id: number, data: any): Observable<Causalidad> {
        return this.http
            .put<Causalidad>(
                environment.baseUrl + 'Causalidad/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCausalInterrupcionSueno(
        id: number,
        data: any
    ): Observable<CausalInterrupcionSueno> {
        return this.http
            .put<CausalInterrupcionSueno>(
                environment.baseUrl + 'CausalInterrupcionSueno/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCausalNoIngresos(
        id: number,
        data: any
    ): Observable<CausalNoIngresos> {
        return this.http
            .put<CausalNoIngresos>(
                environment.baseUrl + 'CausalNoIngresos/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCIE(id: number, data: any): Observable<CIE> {
        return this.http
            .put<CIE>(
                environment.baseUrl + 'CIE/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCIEMedicamento(id: number, data: any): Observable<CieMedicamento> {
        return this.http
            .put<CieMedicamento>(
                environment.baseUrl + 'CieMedicamento/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateComorbilidad(id: number, data: any): Observable<Comorbilidad> {
        return this.http
            .put<Comorbilidad>(
                environment.baseUrl + 'Comorbilidad/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateConfiguracionUsuarioGeneral(
        id: number,
        data: any
    ): Observable<ConfiguracionUsuarioGeneral> {
        return this.http
            .put<ConfiguracionUsuarioGeneral>(
                environment.baseUrl + 'ConfiguracionUsuarioGeneral/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateConfiguracionUsuarioDistrito(
        id: number,
        data: any
    ): Observable<ConfiguracionUsuarioDistrito> {
        return this.http
            .put<ConfiguracionUsuarioDistrito>(
                environment.baseUrl + 'ConfiguracionUsuarioDistrito/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateConfiguracionUsuarioZonas(
        id: number,
        data: any
    ): Observable<ConfiguracionUsuarioZonas> {
        return this.http
            .put<ConfiguracionUsuarioZonas>(
                environment.baseUrl + 'ConfiguracionUsuarioZonas/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateConsentimientosGS(
        id: number,
        data: any
    ): Observable<ConsentimientoGS> {
        return this.http
            .put<ConsentimientoGS>(
                environment.baseUrl + 'ConsentimientosGS/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateZonas(id: number, data: any): Observable<Zonas> {
        return this.http
            .put<Zonas>(
                environment.baseUrl + 'Zonas/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updatePerfiles(id: number, data: any): Observable<Perfiles> {
        return this.http
            .put<Perfiles>(
                environment.baseUrl + 'Perfiles/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoConfiguracion(
        id: number,
        data: any
    ): Observable<TipoConfiguracion> {
        return this.http
            .put<TipoConfiguracion>(
                environment.baseUrl + 'TipoConfiguracion/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDistritos(id: number, data: any): Observable<Distritos> {
        return this.http
            .put<Distritos>(
                environment.baseUrl + 'Distritos/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateMedicamentos(id: number, data: any): Observable<Medicamentos> {
        return this.http
            .put<Medicamentos>(
                environment.baseUrl + 'Medicamentos/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateLaboratorios(id: number, data: any): Observable<Laboratorios> {
        return this.http
            .put<Laboratorios>(
                environment.baseUrl + 'Laboratorios/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCaracteristicasViviendaById(
        id: number
    ): Observable<CaracteristicasVivienda> {
        return this.http
            .delete<CaracteristicasVivienda>(
                environment.baseUrl + 'CaracteristicasVivienda/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCaracteristicas(id: number): Observable<MaestraCaracteristicas> {
        return this.http
            .delete<MaestraCaracteristicas>(
                environment.baseUrl + 'MaestraCaracteristicas/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCausalidadById(id: number): Observable<Causalidad> {
        return this.http
            .delete<Causalidad>(
                environment.baseUrl + 'Causalidad/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCausalInterrupcionSuenoById(
        id: number
    ): Observable<CausalInterrupcionSueno> {
        return this.http
            .delete<CausalInterrupcionSueno>(
                environment.baseUrl + 'CausalInterrupcionSueno/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCausalNoIngresosById(id: number): Observable<CausalNoIngresos> {
        return this.http
            .delete<CausalNoIngresos>(
                environment.baseUrl + 'CausalNoIngresos/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCIEById(id: number): Observable<CIE> {
        return this.http
            .delete<CIE>(environment.baseUrl + 'CIE/' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteCIEMedicamentoById(id: number): Observable<CieMedicamento> {
        return this.http
            .delete<CieMedicamento>(
                environment.baseUrl + 'CieMedicamento/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteComorbilidadById(id: number): Observable<Comorbilidad> {
        return this.http
            .delete<Comorbilidad>(
                environment.baseUrl + 'Comorbilidad/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteConfiguracionUsuarioGeneralById(
        id: number
    ): Observable<ConfiguracionUsuarioGeneral> {
        return this.http
            .delete<ConfiguracionUsuarioGeneral>(
                environment.baseUrl + 'Comorbilidad/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteConfiguracionUsuarioDistritoById(
        id: number
    ): Observable<ConfiguracionUsuarioDistrito> {
        return this.http
            .delete<ConfiguracionUsuarioDistrito>(
                environment.baseUrl + 'CongiguracionUsuarioDistrito/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteConfiguracionUsuarioZonasById(
        id: number
    ): Observable<ConfiguracionUsuarioZonas> {
        return this.http
            .delete<ConfiguracionUsuarioZonas>(
                environment.baseUrl + 'CongiguracionUsuarioZonas/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteConsentimientoGSById(id: number): Observable<ConsentimientoGS> {
        return this.http
            .delete<ConsentimientoGS>(
                environment.baseUrl + 'ConsentimientosGS/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deletePerfilesById(id: number): Observable<Perfiles> {
        return this.http
            .delete<Perfiles>(
                environment.baseUrl + 'Perfiles/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoConfiguracionById(id: number): Observable<TipoConfiguracion> {
        return this.http
            .delete<TipoConfiguracion>(
                environment.baseUrl + 'TipoConfiguracion/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDistritosById(id: number): Observable<Distritos> {
        return this.http
            .delete<Distritos>(
                environment.baseUrl + 'Distritos/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteMedicamentosById(id: number): Observable<Medicamentos> {
        return this.http
            .delete<Medicamentos>(
                environment.baseUrl + 'Medicamentos/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteLaboratoriosById(id: number): Observable<Laboratorios> {
        return this.http
            .delete<Laboratorios>(
                environment.baseUrl + 'Laboratorios/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Control de errores
    errorHandl(error: {
        error: { message: string };
        status: any;
        message: any;
    }) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(() => {
            return errorMessage;
        });
    }
}
