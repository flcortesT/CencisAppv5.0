import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccionActual, AccionTomada, Acciones, AccionesxMedicamento, ActividadComplementaria, Afiliacion, AplicacionSeguimiento, AplicacionSeguimientoVitales, EsquemaAplicacion, Farmacia, IPS, MaestraActividad, MaestraDatosClinicos, Paciente, Regimen, Sexo, TipoIdentificacion, Usuario } from '../Models/actividad.model';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { EscalaDolor } from '../Models/ejecuciones.model';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllAccionActual(): Observable<AccionActual> {
    return this.http
      .get<AccionActual>(environment.baseUrl + 'AccionActual')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAcciones(): Observable<Acciones> {
    return this.http
      .get<Acciones>(environment.baseUrl + 'Acciones')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAccionesxMedicamento(): Observable<AccionesxMedicamento> {
    return this.http
      .get<AccionesxMedicamento>(environment.baseUrl + 'AccionesxMedicamento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAccionTomada(): Observable<AccionTomada> {
    return this.http
      .get<AccionTomada>(environment.baseUrl + 'AccionTomada')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllActividadComplementaria(): Observable<ActividadComplementaria> {
    return this.http
      .get<ActividadComplementaria>(environment.baseUrl + 'ActividadComplementaria')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAfiliacion(): Observable<Afiliacion> {
    return this.http
      .get<Afiliacion>(environment.baseUrl + 'Afiliacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllRegimen(): Observable<Regimen> {
    return this.http
      .get<Regimen>(environment.baseUrl + 'Regimen')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllPaciente(): Observable<Paciente> {
    return this.http
      .get<Paciente>(environment.baseUrl + 'Paciente')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllTipoIdentificacion(): Observable<TipoIdentificacion> {
    return this.http
        .get<TipoIdentificacion>(environment.baseUrl + 'TiposIdentificacion')
        .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllSexo(): Observable<Sexo> {
    return this.http
      .get<Sexo>(environment.baseUrl + 'Sexo')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllUsuario(): Observable<Usuario> {
    return this.http
      .get<Usuario>(environment.baseUrl + 'Usuario')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAplicacionSeguimiento(): Observable<AplicacionSeguimiento> {
    return this.http
      .get<AplicacionSeguimiento>(environment.baseUrl + 'AplicacionSeguimiento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllAplicacionSeguimientoVitales(): Observable<AplicacionSeguimientoVitales> {
    return this.http
      .get<AplicacionSeguimientoVitales>(environment.baseUrl + 'AplicacionSeguimientoVitales')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllFarmacia(): Observable<Farmacia> {
    return this.http
      .get<Farmacia>(environment.baseUrl + 'Farmacia')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllIPS(): Observable<IPS> {
    return this.http
      .get<IPS>(environment.baseUrl + 'Ips')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de acciones.
  getAllEscalaDolor(): Observable<EscalaDolor> {
    return this.http
      .get<EscalaDolor>(environment.baseUrl + 'EscalaDolor')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // Consulta de registros de acciones.
  getAllEsquemaAplicacion(): Observable<EsquemaAplicacion> {
    return this.http
      .get<EsquemaAplicacion>(environment.baseUrl + 'EsquemaAplicacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllMaestraActividad(): Observable<MaestraActividad> {
    return this.http
      .get<MaestraActividad>(`${environment.baseUrl}MaestraActividades`)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllMaestraDatosClinicos(): Observable<MaestraDatosClinicos> {
    return this.http
      .get<MaestraDatosClinicos>(`${environment.baseUrl}MaestraDatosClinicos`)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAccionActualById(id: number): Observable<AccionActual> {
    return this.http
      .get<AccionActual>(environment.baseUrl + 'AccionActual/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAccionesById(id: number): Observable<Acciones> {
    return this.http
      .get<Acciones>(environment.baseUrl + 'Acciones/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllMaestraDatosClinicosById(id: number): Observable<MaestraDatosClinicos> {
    return this.http
      .get<MaestraDatosClinicos>(environment.baseUrl + 'MaestraDatosClinicos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAccionesxMedicamentoById(id: number): Observable<AccionesxMedicamento> {
    return this.http
      .get<AccionesxMedicamento>(environment.baseUrl + 'AccionesxMedicamento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAccionTomadaById(id: number): Observable<AccionTomada> {
    return this.http
      .get<AccionTomada>(environment.baseUrl + 'AccionTomada/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllActividadComplementariaById(id: number): Observable<ActividadComplementaria> {
    return this.http
      .get<ActividadComplementaria>(environment.baseUrl + 'ActividadComplementaria/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAfiliacionById(id: number): Observable<Afiliacion> {
    return this.http
      .get<Afiliacion>(environment.baseUrl + 'Afiliacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllRegimenById(id: number): Observable<Regimen> {
    return this.http
      .get<Regimen>(environment.baseUrl + 'Regimen/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPacienteById(id: number): Observable<Paciente> {
    return this.http
      .get<Paciente>(environment.baseUrl + 'Paciente/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllTipoIdentificacionById(id: number): Observable<TipoIdentificacion> {
    return this.http
      .get<TipoIdentificacion>(environment.baseUrl + 'TiposIdentificacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllSexoById(id: number): Observable<Sexo> {
    return this.http
      .get<Sexo>(environment.baseUrl + 'Sexo/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllUsuarioById(id: number): Observable<Usuario> {
    return this.http
      .get<Usuario>(environment.baseUrl + 'Usuario/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAplicacionSeguimientoById(id: number): Observable<AplicacionSeguimiento> {
    return this.http
      .get<AplicacionSeguimiento>(environment.baseUrl + 'AplicacionSeguimiento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllAplicacionSeguimientoVitalesById(id: number): Observable<AplicacionSeguimientoVitales> {
    return this.http
      .get<AplicacionSeguimientoVitales>(environment.baseUrl + 'AplicacionSeguimientoVitales/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllFarmaciaById(id: number): Observable<Farmacia> {
    return this.http
      .get<Farmacia>(environment.baseUrl + 'Farmacia/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllIpsById(id: number): Observable<IPS> {
    return this.http
      .get<IPS>(environment.baseUrl + 'Ips/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllEscalaDolorById(id: number): Observable<EscalaDolor> {
    return this.http
      .get<EscalaDolor>(environment.baseUrl + 'EscalaDolor/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllEsquemaAplicacionById(id: number): Observable<EsquemaAplicacion> {
    return this.http
      .get<EsquemaAplicacion>(environment.baseUrl + 'EsquemaAplicacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getAllMaestraActividadById(id: number): Observable<MaestraActividad> {
    return this.http
      .get<MaestraActividad>(environment.baseUrl + 'MaestraActividad/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearAccionActual(data: any): Observable<AccionActual> {
    return this.http
      .post<AccionActual>(
        environment.baseUrl + 'AccionActual',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAcciones(data: any): Observable<Acciones> {
    return this.http
      .post<Acciones>(
        environment.baseUrl + 'Acciones',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAccionesxMedicamento(data: any): Observable<AccionesxMedicamento> {
    return this.http
      .post<AccionesxMedicamento>(
        environment.baseUrl + 'AccionesxMedicamento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAccionTomada(data: any): Observable<AccionTomada> {
    return this.http
      .post<AccionTomada>(
        environment.baseUrl + 'AccionTomada',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearActividadComplentaria(data: any): Observable<ActividadComplementaria> {
    return this.http
      .post<ActividadComplementaria>(
        environment.baseUrl + 'ActividadComplementaria',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAfiliacion(data: any): Observable<Afiliacion> {
    return this.http
      .post<Afiliacion>(
        environment.baseUrl + 'Afiliacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearRegimen(data: any): Observable<Regimen> {
    return this.http
      .post<Regimen>(
        environment.baseUrl + 'Regimen',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearPaciente(data: any): Observable<Paciente> {
    return this.http
      .post<Paciente>(
        environment.baseUrl + 'Paciente',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearTipoIdentificacion(data: any): Observable<TipoIdentificacion> {
    return this.http
      .post<TipoIdentificacion>(
        environment.baseUrl + 'TiposIdentificacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearSexo(data: any): Observable<Sexo> {
    return this.http
      .post<Sexo>(
        environment.baseUrl + 'Sexo',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearUsuario(data: any): Observable<Usuario> {
    return this.http
      .post<Usuario>(
        environment.baseUrl + 'Usuario',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAplicacionSeguimiento(data: any): Observable<AplicacionSeguimiento> {
    return this.http
      .post<AplicacionSeguimiento>(
        environment.baseUrl + 'AplicacionSeguimiento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearAplicacionSeguimientoVitales(data: any): Observable<AplicacionSeguimientoVitales> {
    return this.http
      .post<AplicacionSeguimientoVitales>(
        environment.baseUrl + 'AplicacionSeguimientoVitales',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearFarmacia(data: any): Observable<Farmacia> {
    return this.http
      .post<Farmacia>(
        environment.baseUrl + 'Farmacia',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearIps(data: any): Observable<IPS> {
    return this.http
      .post<IPS>(
        environment.baseUrl + 'Ips',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla acciones.
  crearEscalaDolor(data: any): Observable<EscalaDolor> {
    return this.http
      .post<EscalaDolor>(
        environment.baseUrl + 'EscalaDolor',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla esquema aplicacion.
  crearEsquemaAplicacion(data: any): Observable<EsquemaAplicacion> {
    return this.http
      .post<EsquemaAplicacion>(
        environment.baseUrl + 'EsquemaAplicacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creacion de un nuevo regostro en la tabla de actividades
  crearMaestraActividad(data: any): Observable<MaestraActividad> {
    return this.http
      .post<MaestraActividad>(
        environment.baseUrl + 'MaestraActividad',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creacion de un nuevo regostro en la tabla de actividades
  crearMaestraDatosClinicos(data: any): Observable<MaestraDatosClinicos> {
    return this.http
      .post<MaestraDatosClinicos>(
        environment.baseUrl + 'MaestraDatosClinicos',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAccionActual(id: number, data: any): Observable<AccionActual> {
    return this.http
      .put<AccionActual>(
        environment.baseUrl + 'AccionActual/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAcciones(id: number, data: any): Observable<Acciones> {
    return this.http
      .put<Acciones>(
        environment.baseUrl + 'Acciones/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAccionesxMedicamento(id: number, data: any): Observable<AccionesxMedicamento> {
    return this.http
      .put<AccionesxMedicamento>(
        environment.baseUrl + 'Acciones/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAccionTomada(id: number, data: any): Observable<AccionTomada> {
    return this.http
      .put<AccionTomada>(
        environment.baseUrl + 'AccionTomada/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateActividadComplementaria(id: number, data: any): Observable<ActividadComplementaria> {
    return this.http
      .put<ActividadComplementaria>(
        environment.baseUrl + 'ActividadComplementaria/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAfiliacion(id: number, data: any): Observable<Afiliacion> {
    return this.http
      .put<Afiliacion>(
        environment.baseUrl + 'Afiliacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateRegimen(id: number, data: any): Observable<Regimen> {
    return this.http
      .put<Regimen>(
        environment.baseUrl + 'Regimen/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updatePaciente(id: number, data: any): Observable<Paciente> {
    return this.http
      .put<Paciente>(
        environment.baseUrl + 'Paciente/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateTipoIdentificacion(id: number, data: any): Observable<TipoIdentificacion> {
    return this.http
      .put<TipoIdentificacion>(
        environment.baseUrl + 'TiposIdentificacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateSexo(id: number, data: any): Observable<Sexo> {
    return this.http
      .put<Sexo>(
        environment.baseUrl + 'Sexo/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateUsuario(id: number, data: any): Observable<Usuario> {
    return this.http
      .put<Usuario>(
        environment.baseUrl + 'Usuario/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAplicacionSeguimiento(id: number, data: any): Observable<AplicacionSeguimiento> {
    return this.http
      .put<AplicacionSeguimiento>(
        environment.baseUrl + 'AplicacionSeguimiento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAplicacionSeguimientoVitales(id: number, data: any): Observable<AplicacionSeguimientoVitales> {
    return this.http
      .put<AplicacionSeguimientoVitales>(
        environment.baseUrl + 'AplicacionSeguimientoVitales/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateFarmacia(id: number, data: any): Observable<Farmacia> {
    return this.http
      .put<Farmacia>(
        environment.baseUrl + 'Farmacia/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateIps(id: number, data: any): Observable<IPS> {
    return this.http
      .put<IPS>(
        environment.baseUrl + 'Ips/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEscalaDolor(id: number, data: any): Observable<EscalaDolor> {
    return this.http
      .put<EscalaDolor>(
        environment.baseUrl + 'EscalaDolor/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateMaestraActividad(id: number, data: any): Observable<MaestraActividad> {
    return this.http
      .put<MaestraActividad>(
        environment.baseUrl + 'MaestraActividad/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateMaestraDatosClinicos(id: number, data: any): Observable<MaestraDatosClinicos> {
    return this.http
      .put<MaestraDatosClinicos>(
        environment.baseUrl + 'MaestraDatosClinicos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAccionActualById(id: number): Observable<AccionActual> {
    return this.http
      .delete<AccionActual>(
        environment.baseUrl + 'AccionActual/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAccionesById(id: number): Observable<Acciones> {
    return this.http
      .delete<Acciones>(
        environment.baseUrl + 'Acciones/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAccionesxMedicamentoById(id: number): Observable<AccionesxMedicamento> {
    return this.http
      .delete<AccionesxMedicamento>(
        environment.baseUrl + 'AccionesxMedicamento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAccionTomadaById(id: number): Observable<AccionTomada> {
    return this.http
      .delete<AccionTomada>(
        environment.baseUrl + 'AccionTomada/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteActividadComplementariaById(id: number): Observable<ActividadComplementaria> {
    return this.http
      .delete<ActividadComplementaria>(
        environment.baseUrl + 'ActividadComplementaria/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAfiliacionById(id: number): Observable<Afiliacion> {
    return this.http
      .delete<Afiliacion>(
        environment.baseUrl + 'Afiliacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteRegimenById(id: number): Observable<Regimen> {
    return this.http
      .delete<Regimen>(
        environment.baseUrl + 'Regimen/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePacienteById(id: number): Observable<Paciente> {
    return this.http
      .delete<Paciente>(
        environment.baseUrl + 'Paciente/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteTipoIdentificacionById(id: number): Observable<TipoIdentificacion> {
    return this.http
      .delete<TipoIdentificacion>(
        environment.baseUrl + 'TiposIdentificacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteSexoById(id: number): Observable<Sexo> {
    return this.http
      .delete<Sexo>(
        environment.baseUrl + 'Sexo/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteUsuarioById(id: number): Observable<Usuario> {
    return this.http
      .delete<Usuario>(
        environment.baseUrl + 'Usuario/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAplicacionSeguimientoById(id: number): Observable<AplicacionSeguimiento> {
    return this.http
      .delete<AplicacionSeguimiento>(
        environment.baseUrl + 'AplicacionSeguimiento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAplicacionSeguimientoVitalesById(id: number): Observable<AplicacionSeguimientoVitales> {
    return this.http
      .delete<AplicacionSeguimientoVitales>(
        environment.baseUrl + 'AplicacionSeguimientoVitales/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteFarmaciaById(id: number): Observable<Farmacia> {
    return this.http
      .delete<Farmacia>(
        environment.baseUrl + 'Farmacia/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteIpsById(id: number): Observable<IPS> {
    return this.http
      .delete<IPS>(
        environment.baseUrl + 'Ips/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEscalaDolorById(id: number): Observable<EscalaDolor> {
    return this.http
      .delete<EscalaDolor>(
        environment.baseUrl + 'EscalaDolor/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteMaestraActividadById(id: number): Observable<MaestraActividad> {
    return this.http
      .delete<MaestraActividad>(
        environment.baseUrl + 'MaestraActividad/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteMaestraDatosClinicosById(id: number): Observable<MaestraDatosClinicos> {
    return this.http
      .delete<MaestraDatosClinicos>(
        environment.baseUrl + 'MaestraDatosClinicos/' + id,
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
