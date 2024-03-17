import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosClinicos, DatosClinicosCimzia, DatosClinicosFirmagon, DatosClinicosMyalept, DatosClinicosSativex, DatosClinicosTestMG, DatosClinicosVimpat, Diagnosticos, Dosis, Especialidades, Frecuencia, Medico, PeriodoConvulsionesDia, PresentacionMedicamento, TratamientoAntiespastico, UsoPrevio } from '../Models/datosClinicos.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DatosClinicosService {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    // Consulta de registros de medicos
    getAllMedicos(): Observable<Medico> {
        return this.http
            .get<Medico>(environment.baseUrl + 'Medico')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de datos clinicos.
    getAllDatosClinicos(): Observable<DatosClinicos> {
        return this.http
            .get<DatosClinicos>(environment.baseUrl + 'DatosClinicos')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllPresentacionMedicamento(): Observable<PresentacionMedicamento> {
        return this.http
            .get<PresentacionMedicamento>(
                environment.baseUrl + 'PresentacionMedicamento'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDosis(): Observable<Dosis> {
        return this.http
            .get<Dosis>(environment.baseUrl + 'PresentacionMedicamento')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllEspecialidades(): Observable<Especialidades> {
        return this.http
            .get<Especialidades>(environment.baseUrl + 'Especialidades')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllFrecuencia(): Observable<Frecuencia> {
        return this.http
            .get<Frecuencia>(environment.baseUrl + 'Frecuencia')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDiagnosticos(): Observable<Diagnosticos> {
        return this.http
            .get<Diagnosticos>(environment.baseUrl + 'Diagnostico')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllUsoPrevio(): Observable<UsoPrevio> {
        return this.http
            .get<UsoPrevio>(environment.baseUrl + 'UsoPrevio')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosCimzia(): Observable<DatosClinicosCimzia> {
        return this.http
            .get<DatosClinicosCimzia>(
                environment.baseUrl + 'DatosClinicosCimzia'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosFirmagon(): Observable<DatosClinicosFirmagon> {
        return this.http
            .get<DatosClinicosFirmagon>(
                environment.baseUrl + 'DatosClinicosFirmagon'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosMyalept(): Observable<DatosClinicosMyalept> {
        return this.http
            .get<DatosClinicosMyalept>(
                environment.baseUrl + 'DatosClinicosMyalept'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosSativex(): Observable<DatosClinicosSativex> {
        return this.http
            .get<DatosClinicosSativex>(
                environment.baseUrl + 'DatosClinicosSativex'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosTestMG(): Observable<DatosClinicosTestMG> {
        return this.http
            .get<DatosClinicosTestMG>(
                environment.baseUrl + 'DatosClinicosTestMG'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllDatosClinicosVimpat(): Observable<DatosClinicosVimpat> {
        return this.http
            .get<DatosClinicosVimpat>(
                environment.baseUrl + 'DatosClinicosVimpat'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllPeriodoConvulsionesDia(): Observable<PeriodoConvulsionesDia> {
        return this.http
            .get<PeriodoConvulsionesDia>(
                environment.baseUrl + 'PeriodoConvulsionesDia'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTratamientoAntiespatisco(): Observable<TratamientoAntiespastico> {
        return this.http
            .get<TratamientoAntiespastico>(
                environment.baseUrl + 'TratamientoAntiespastico'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosById(id: number): Observable<DatosClinicos> {
        return this.http
            .get<DatosClinicos>(environment.baseUrl + 'DatosClinicos/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDosisById(id: number): Observable<Dosis> {
        return this.http
            .get<Dosis>(environment.baseUrl + 'Dosis/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllEspecialidadesById(id: number): Observable<Especialidades> {
        return this.http
            .get<Especialidades>(environment.baseUrl + 'Especialidades/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllPresentacionMedicamentoById(
        id: number
    ): Observable<PresentacionMedicamento> {
        return this.http
            .get<PresentacionMedicamento>(
                environment.baseUrl + 'PresentacionMedicamento/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllFrecuenciaById(id: number): Observable<Frecuencia> {
        return this.http
            .get<Frecuencia>(environment.baseUrl + 'Frecuencia/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDiagnosticosById(id: number): Observable<Diagnosticos> {
        return this.http
            .get<Diagnosticos>(environment.baseUrl + 'Diagnosticos/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllUsoPrevioById(id: number): Observable<UsoPrevio> {
        return this.http
            .get<UsoPrevio>(environment.baseUrl + 'UsoPrevio/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllMedicoById(id: number): Observable<Medico> {
        return this.http
            .get<Medico>(environment.baseUrl + 'Medico/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosCimziaById(id: number): Observable<DatosClinicosCimzia> {
        return this.http
            .get<DatosClinicosCimzia>(
                environment.baseUrl + 'DatosClinicosCimzia/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosFirmagonById(
        id: number
    ): Observable<DatosClinicosFirmagon> {
        return this.http
            .get<DatosClinicosFirmagon>(
                environment.baseUrl + 'DatosClinicosFirmagon/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosMyaleptById(
        id: number
    ): Observable<DatosClinicosMyalept> {
        return this.http
            .get<DatosClinicosMyalept>(
                environment.baseUrl + 'DatosClinicosMyalept/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosSativexById(
        id: number
    ): Observable<DatosClinicosSativex> {
        return this.http
            .get<DatosClinicosSativex>(
                environment.baseUrl + 'DatosClinicosSativex/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosTestMGById(id: number): Observable<DatosClinicosTestMG> {
        return this.http
            .get<DatosClinicosTestMG>(
                environment.baseUrl + 'DatosClinicosTestMG/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllDatosClinicosVimpatById(id: number): Observable<DatosClinicosVimpat> {
        return this.http
            .get<DatosClinicosVimpat>(
                environment.baseUrl + 'DatosClinicosVimpat/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllPeriodoConvulsionesDiaById(
        id: number
    ): Observable<PeriodoConvulsionesDia> {
        return this.http
            .get<PeriodoConvulsionesDia>(
                environment.baseUrl + 'PeriodoConvulsionesDia/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTratamientoAntiespaticoById(
        id: number
    ): Observable<TratamientoAntiespastico> {
        return this.http
            .get<TratamientoAntiespastico>(
                environment.baseUrl + 'TratamientoAntiespatico/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla medico.
    crearMedico(data: any): Observable<Medico> {
        return this.http
            .post<Medico>(
                environment.baseUrl + 'Medico',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicos(data: any): Observable<DatosClinicos> {
        return this.http
            .post<DatosClinicos>(
                environment.baseUrl + 'DatosClinicos',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearPresentacionMedicamento(
        data: any
    ): Observable<PresentacionMedicamento> {
        return this.http
            .post<PresentacionMedicamento>(
                environment.baseUrl + 'PresentacionMedicamento',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDosis(data: any): Observable<Dosis> {
        return this.http
            .post<Dosis>(
                environment.baseUrl + 'Dosis',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearEspecialidades(data: any): Observable<Especialidades> {
        return this.http
            .post<Especialidades>(
                environment.baseUrl + 'Especialidades',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearFrecuencia(data: any): Observable<Frecuencia> {
        return this.http
            .post<Frecuencia>(
                environment.baseUrl + 'Frecuencia',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDiagnosticos(data: any): Observable<Diagnosticos> {
        return this.http
            .post<Diagnosticos>(
                environment.baseUrl + 'Diagnosticos',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearUsoPrevio(data: any): Observable<UsoPrevio> {
        return this.http
            .post<UsoPrevio>(
                environment.baseUrl + 'UsoPrevio',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosCimzia(data: any): Observable<DatosClinicosCimzia> {
        return this.http
            .post<DatosClinicosCimzia>(
                environment.baseUrl + 'DatosClinicosCimzia',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosFirmagon(data: any): Observable<DatosClinicosFirmagon> {
        return this.http
            .post<DatosClinicosFirmagon>(
                environment.baseUrl + 'DatosClinicosFirmagon',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosMyalept(data: any): Observable<DatosClinicosMyalept> {
        return this.http
            .post<DatosClinicosMyalept>(
                environment.baseUrl + 'DatosClinicosMyalept',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosSativex(data: any): Observable<DatosClinicosSativex> {
        return this.http
            .post<DatosClinicosSativex>(
                environment.baseUrl + 'DatosClinicosSativex',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosTestMG(data: any): Observable<DatosClinicosTestMG> {
        return this.http
            .post<DatosClinicosTestMG>(
                environment.baseUrl + 'DatosClinicosTestMG',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearDatosClinicosVimpat(data: any): Observable<DatosClinicosVimpat> {
        return this.http
            .post<DatosClinicosVimpat>(
                environment.baseUrl + 'DatosClinicosVimpat',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearPeriodoConvulsionesDia(data: any): Observable<PeriodoConvulsionesDia> {
        return this.http
            .post<PeriodoConvulsionesDia>(
                environment.baseUrl + 'PeriodoConvulsionesDia',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTratamientoAntiespastico(
        data: any
    ): Observable<TratamientoAntiespastico> {
        return this.http
            .post<TratamientoAntiespastico>(
                environment.baseUrl + 'TratamientoAntiespastico',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateMedico(id: number, data: any): Observable<Medico> {
        return this.http
            .put<Medico>(
                environment.baseUrl + 'Medico/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicos(id: number, data: any): Observable<DatosClinicos> {
        return this.http
            .put<DatosClinicos>(
                environment.baseUrl + 'DatosClinicos/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updatePresentacionMedicamento(
        id: number,
        data: any
    ): Observable<PresentacionMedicamento> {
        return this.http
            .put<PresentacionMedicamento>(
                environment.baseUrl + 'PresentacionMedicamento/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDosis(id: number, data: any): Observable<Dosis> {
        return this.http
            .put<Dosis>(
                environment.baseUrl + 'Dosis/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateEspecialidades(id: number, data: any): Observable<Especialidades> {
        return this.http
            .put<Especialidades>(
                environment.baseUrl + 'Especialidades/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateFrecuencia(id: number, data: any): Observable<Frecuencia> {
        return this.http
            .put<Frecuencia>(
                environment.baseUrl + 'Frecuencia/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDiagnosticos(id: number, data: any): Observable<Diagnosticos> {
        return this.http
            .put<Diagnosticos>(
                environment.baseUrl + 'Diagnosticos/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateUsoPrevio(id: number, data: any): Observable<UsoPrevio> {
        return this.http
            .put<UsoPrevio>(
                environment.baseUrl + 'UsoPrevio/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosCimzia(
        id: number,
        data: any
    ): Observable<DatosClinicosCimzia> {
        return this.http
            .put<DatosClinicosCimzia>(
                environment.baseUrl + 'DatosClinicosCimzia/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosFirmagon(
        id: number,
        data: any
    ): Observable<DatosClinicosFirmagon> {
        return this.http
            .put<DatosClinicosFirmagon>(
                environment.baseUrl + 'DatosClinicosFirmagon/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosMyalept(
        id: number,
        data: any
    ): Observable<DatosClinicosMyalept> {
        return this.http
            .put<DatosClinicosMyalept>(
                environment.baseUrl + 'DatosClinicosMyalept/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosSativex(
        id: number,
        data: any
    ): Observable<DatosClinicosSativex> {
        return this.http
            .put<DatosClinicosSativex>(
                environment.baseUrl + 'DatosClinicosSativex/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosTestMG(
        id: number,
        data: any
    ): Observable<DatosClinicosTestMG> {
        return this.http
            .put<DatosClinicosTestMG>(
                environment.baseUrl + 'DatosClinicosTestMG/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateDatosClinicosVimpat(
        id: number,
        data: any
    ): Observable<DatosClinicosVimpat> {
        return this.http
            .put<DatosClinicosVimpat>(
                environment.baseUrl + 'DatosClinicosVimpat/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updatePeriodoConvulsionesDia(
        id: number,
        data: any
    ): Observable<PeriodoConvulsionesDia> {
        return this.http
            .put<PeriodoConvulsionesDia>(
                environment.baseUrl + 'PeriodoConvulsionesDia/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTratamientoAntiespastico(
        id: number,
        data: any
    ): Observable<TratamientoAntiespastico> {
        return this.http
            .put<DatosClinicosVimpat>(
                environment.baseUrl + 'TratamientoAntiespastico/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteMedicoById(id: number): Observable<Medico> {
        return this.http
            .delete<Medico>(
                environment.baseUrl + 'Medico/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosById(id: number): Observable<DatosClinicos> {
        return this.http
            .delete<DatosClinicos>(
                environment.baseUrl + 'DatosClinicos/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deletePresentacionMedicamentoById(
        id: number
    ): Observable<PresentacionMedicamento> {
        return this.http
            .delete<PresentacionMedicamento>(
                environment.baseUrl + 'PresentacionMedicamento/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDosisById(id: number): Observable<Dosis> {
        return this.http
            .delete<Dosis>(
                environment.baseUrl + 'Dosis/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteEspecialidadesById(id: number): Observable<Especialidades> {
        return this.http
            .delete<Especialidades>(
                environment.baseUrl + 'Especialidades/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteFrecuenciaById(id: number): Observable<Frecuencia> {
        return this.http
            .delete<Frecuencia>(
                environment.baseUrl + 'Frecuencia/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDiagnosticosById(id: number): Observable<Diagnosticos> {
        return this.http
            .delete<Diagnosticos>(
                environment.baseUrl + 'Diagnosticos/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteUsoPrevioById(id: number): Observable<UsoPrevio> {
        return this.http
            .delete<UsoPrevio>(
                environment.baseUrl + 'UsoPrevio/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosCimziaById(id: number): Observable<DatosClinicosCimzia> {
        return this.http
            .delete<DatosClinicosCimzia>(
                environment.baseUrl + 'DatosClinicosCimzia/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosFirmagonById(
        id: number
    ): Observable<DatosClinicosFirmagon> {
        return this.http
            .delete<DatosClinicosFirmagon>(
                environment.baseUrl + 'DatosClinicosFirmagon/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosMyaleptById(
        id: number
    ): Observable<DatosClinicosMyalept> {
        return this.http
            .delete<DatosClinicosMyalept>(
                environment.baseUrl + 'DatosClinicosMyalept/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosSativexById(
        id: number
    ): Observable<DatosClinicosSativex> {
        return this.http
            .delete<DatosClinicosSativex>(
                environment.baseUrl + 'DatosClinicosSativex/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosTestMGById(id: number): Observable<DatosClinicosTestMG> {
        return this.http
            .delete<DatosClinicosTestMG>(
                environment.baseUrl + 'DatosClinicosTestMG/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteDatosClinicosVimpatById(id: number): Observable<DatosClinicosVimpat> {
        return this.http
            .delete<DatosClinicosVimpat>(
                environment.baseUrl + 'DatosClinicosVimpat/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteByPeriodoConvulsionesDiaId(
        id: number
    ): Observable<PeriodoConvulsionesDia> {
        return this.http
            .delete<PeriodoConvulsionesDia>(
                environment.baseUrl + 'PeriodoConvulsionesDia/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTratamientoAntiespasticoById(
        id: number
    ): Observable<TratamientoAntiespastico> {
        return this.http
            .delete<TratamientoAntiespastico>(
                environment.baseUrl + 'TratamientoAntiespastico/' + id,
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
