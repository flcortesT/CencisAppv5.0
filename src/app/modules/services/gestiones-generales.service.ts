import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acompanante, EPS, EjecucionGestionACApoyo, EjecucionGestionACCapacitacion, EjecucionGestionACClinica, EjecucionGestionACClinicaCaracteristicasVivienda, EjecucionGestionACClinicaEnfermedades, EjecucionGestionACClinicaEventosAdversos, EjecucionGestionACClinicaTemasEducacion, EjecucionGestionACClinicaValidaciones, EjecucionGestionAC_GestionAdministrativa, EjecucionGestionAC_GestionGenerica, Enfermedades, EntidadesMedicamento, EscalaDolor, EspecialidadesxMedicamento, EsquemasAplicacion, Estadio, EstadoActividad, EstadoActual, EstadoAutorizacion, EstadoFinal, EstadoGestionSocial, EstadoInscripcion, EstadoReporte, EstadoReportes, EstadoReportesFV, EstadoSeguimientoFV, Estados, EstadoxEstadio, EstadoxMedicamento, Estatus, EventoAdversoSeguimiento, EventoRelacionado, GestionACAsignados, GestionACGestion, GestionActividadComplementaria, GrupoSanguineo, NivelEscolaridad, Ocupacion, ParentescoAcompanante, Prioridad, TemasEducacion, TipoAccesoVivienda, TipoZonaVivienda, TiposAdversos } from '../Models/ejecuciones.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Especialidades } from '../Models/datosClinicos.model';
import { MaestraGestion } from '../Models/tablaMaestraGestion.model';

@Injectable({
  providedIn: 'root'
})
export class GestionesGeneralesService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllEjecucionGestionAC_GestionAdministrativa(): Observable<EjecucionGestionAC_GestionAdministrativa> {
    return this.http
      .get<EjecucionGestionAC_GestionAdministrativa>(environment.baseUrl + 'EjecucionGestionAC_GestionAdministrativa')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllGestionACAsignados(): Observable<GestionACAsignados> {
    return this.http
      .get<GestionACAsignados>(environment.baseUrl + 'GestionACAsignados')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getAllMaestraGestion(): Observable<MaestraGestion> {
    return this.http
      .get<MaestraGestion>(environment.baseUrl + 'MaestraGestion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllGestionActividadComplementaria(): Observable<GestionActividadComplementaria> {
    return this.http
      .get<GestionActividadComplementaria>(environment.baseUrl + 'GestionActividadComplementaria')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoActividad(): Observable<EstadoActividad> {
    return this.http
      .get<EstadoActividad>(environment.baseUrl + 'EstadoActividad')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPrioridad(): Observable<Prioridad> {
    return this.http
      .get<Prioridad>(environment.baseUrl + 'Prioriad')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionAC_GestionGenerica(): Observable<EjecucionGestionAC_GestionGenerica> {
    return this.http
      .get<EjecucionGestionAC_GestionGenerica>(environment.baseUrl + 'EjecucionGestionAC_GestionGenerica')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACApoyo(): Observable<EjecucionGestionACApoyo> {
    return this.http
      .get<EjecucionGestionACApoyo>(environment.baseUrl + 'EjecucionGestionACApoyo')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACCapacitacion(): Observable<EjecucionGestionACCapacitacion> {
    return this.http
      .get<EjecucionGestionACCapacitacion>(environment.baseUrl + 'EjecucionGestionACCapacitacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinica(): Observable<EjecucionGestionACClinica> {
    return this.http
      .get<EjecucionGestionACClinica>(environment.baseUrl + 'EjecucionGestionACClinica')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllGrupoSanguineo(): Observable<GrupoSanguineo> {
    return this.http
      .get<GrupoSanguineo>(environment.baseUrl + 'GrupoSanguineo')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllGrupoACGestion(): Observable<GestionACGestion> {
    return this.http
      .get<GrupoSanguineo>(environment.baseUrl + 'GrupoSanguineo')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllNivelEscolaridad(): Observable<NivelEscolaridad> {
    return this.http
      .get<NivelEscolaridad>(environment.baseUrl + 'NivelEscolaridad')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllOcupacion(): Observable<Ocupacion> {
    return this.http
      .get<Ocupacion>(environment.baseUrl + 'Ocupacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllAcompanante(): Observable<Acompanante> {
    return this.http
      .get<Acompanante>(environment.baseUrl + 'Acompanante')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllParentescoAcompanante(): Observable<ParentescoAcompanante> {
    return this.http
      .get<ParentescoAcompanante>(environment.baseUrl + 'ParentescoAcompanante')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllTipoZonaVivienda(): Observable<TipoZonaVivienda> {
    return this.http
      .get<TipoZonaVivienda>(environment.baseUrl + 'TipoZonaVivienda')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllTipoAccesoVivienda(): Observable<TipoAccesoVivienda> {
    return this.http
      .get<TipoAccesoVivienda>(environment.baseUrl + 'TipoAccesoVivienda')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinicaCaracteristicasVivienda(): Observable<EjecucionGestionACClinicaCaracteristicasVivienda> {
    return this.http
      .get<EjecucionGestionACClinicaCaracteristicasVivienda>(environment.baseUrl + 'EjecucionGestionACClinicaCaracteristicasVivienda')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinicaEnfermedades(): Observable<EjecucionGestionACClinicaEnfermedades> {
    return this.http
      .get<EjecucionGestionACClinicaEnfermedades>(environment.baseUrl + 'EjecucionGestionACClinicaEnfermedades')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEnfermedades(): Observable<Enfermedades> {
    return this.http
      .get<Enfermedades>(environment.baseUrl + 'Enfermedades')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinicaEventosAdversos(): Observable<EjecucionGestionACClinicaEventosAdversos> {
    return this.http
      .get<EjecucionGestionACClinicaEventosAdversos>(environment.baseUrl + 'EjecucionGestionACClinicaEventosAdversos')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllTiposAdversos(): Observable<TiposAdversos> {
    return this.http
      .get<TiposAdversos>(environment.baseUrl + 'TiposAdversos')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinicaTemasEducacion(): Observable<EjecucionGestionACClinicaTemasEducacion> {
    return this.http
      .get<EjecucionGestionACClinicaTemasEducacion>(environment.baseUrl + 'EjecucionGestionACClinicaTemasEducacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllTemasEducacion(): Observable<TiposAdversos> {
    return this.http
      .get<TiposAdversos>(environment.baseUrl + 'TiposAdversos')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEjecucionGestionACClinicaValidaciones(): Observable<EjecucionGestionACClinicaValidaciones> {
    return this.http
      .get<EjecucionGestionACClinicaValidaciones>(environment.baseUrl + 'EjecucionGestionACClinicaValidaciones')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEntidadesMedicamento(): Observable<EntidadesMedicamento> {
    return this.http
      .get<EntidadesMedicamento>(environment.baseUrl + 'EntidadesMedicamento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEps(): Observable<EPS> {
    return this.http
      .get<EPS>(environment.baseUrl + 'EPS')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEscalaDolor(): Observable<EscalaDolor> {
    return this.http
      .get<EscalaDolor>(environment.baseUrl + 'EscalaDolor')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEspecialidades(): Observable<Especialidades> {
    return this.http
      .get<Especialidades>(environment.baseUrl + 'Especialidades')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEspecialidadesxMedicamento(): Observable<EspecialidadesxMedicamento> {
    return this.http
      .get<EspecialidadesxMedicamento>(environment.baseUrl + 'EspecialidadesxMedicamento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEsquemasAplicacion(): Observable<EsquemasAplicacion> {
    return this.http
      .get<EsquemasAplicacion>(environment.baseUrl + 'EsquemasAplicacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadio(): Observable<Estadio> {
    return this.http
      .get<Estadio>(environment.baseUrl + 'Estadio')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoActual(): Observable<EstadoActual> {
    return this.http
      .get<EstadoActual>(environment.baseUrl + 'EstadoActual')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstados(): Observable<Estados> {
    return this.http
      .get<Estados>(environment.baseUrl + 'Estados')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoAutorizacion(): Observable<EstadoAutorizacion> {
    return this.http
      .get<EstadoAutorizacion>(environment.baseUrl + 'EstadoAutorizacion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoFinal(): Observable<EstadoFinal> {
    return this.http
      .get<EstadoFinal>(environment.baseUrl + 'EstadoFinal')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoGestionSocial(): Observable<EstadoGestionSocial> {
    return this.http
      .get<EstadoGestionSocial>(environment.baseUrl + 'EstadoGestionSocial')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoInscripcion(): Observable<EstadoInscripcion> {
    return this.http
      .get<EstadoInscripcion>(environment.baseUrl + 'EstadoInscripcion')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoReporte(): Observable<EstadoReporte> {
    return this.http
      .get<EstadoReporte>(environment.baseUrl + 'EstadoReporte')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoReportes(): Observable<EstadoReportes> {
    return this.http
      .get<EstadoReportes>(environment.baseUrl + 'EstadoReportes')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoReporteFV(): Observable<EstadoReportesFV> {
    return this.http
      .get<EstadoReportesFV>(environment.baseUrl + 'EstadoReporteFV')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoxEstadio(): Observable<EstadoxEstadio> {
    return this.http
      .get<EstadoxEstadio>(environment.baseUrl + 'EstadoxEstadio')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstadoxMedicamento(): Observable<EstadoxMedicamento> {
    return this.http
      .get<EstadoxMedicamento>(environment.baseUrl + 'EstadoxMedicamento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEstatus(): Observable<Estatus> {
    return this.http
      .get<Estatus>(environment.baseUrl + 'Estatus')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEventoAdversoSeguimiento(): Observable<EventoAdversoSeguimiento> {
    return this.http
      .get<EventoAdversoSeguimiento>(environment.baseUrl + 'EventoAdversoSeguimiento')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllEventoRelacionado(): Observable<EventoRelacionado> {
    return this.http
      .get<EventoRelacionado>(environment.baseUrl + 'EventoRelacionado')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllEjecucionGestionAC_GestionAdministrativaById(id: number): Observable<EjecucionGestionAC_GestionAdministrativa> {
    return this.http
      .get<EjecucionGestionAC_GestionAdministrativa>(environment.baseUrl + 'EjecucionGestionAC_GestionAdministrativa/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllGestionACAsignadosById(id: number): Observable<GestionACAsignados> {
    return this.http
      .get<GestionACAsignados>(environment.baseUrl + 'GestionACAsignados/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllGestionActividadComplementariaById(id: number): Observable<GestionActividadComplementaria> {
    return this.http
      .get<GestionActividadComplementaria>(environment.baseUrl + 'GestionActividadComplementaria/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllEstadoActividadById(id: number): Observable<EstadoActividad> {
    return this.http
      .get<EstadoActividad>(environment.baseUrl + 'EstadoActividad/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPrioridadById(id: number): Observable<Prioridad> {
    return this.http
      .get<Prioridad>(environment.baseUrl + 'Prioridad/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllMaestraGestionById(id: number): Observable<MaestraGestion> {
    return this.http
      .get<MaestraGestion>(environment.baseUrl + 'MaestraGestion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  // Consulta de registros de areas con parametros
  getAllEjecucionGestionAC_GestionGenericaById(id: number): Observable<EjecucionGestionAC_GestionGenerica> {
    return this.http
      .get<EjecucionGestionAC_GestionGenerica>(environment.baseUrl + 'EjecucionGestionAC_GestionGenerica/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACApoyoById(id: number): Observable<EjecucionGestionACApoyo> {
    return this.http
      .get<EjecucionGestionACApoyo>(environment.baseUrl + 'EjecucionGestionACApoyo/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACCapacitacionById(id: number): Observable<EjecucionGestionACCapacitacion> {
    return this.http
      .get<EjecucionGestionACCapacitacion>(environment.baseUrl + 'EjecucionGestionACCapacitacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaById(id: number): Observable<EjecucionGestionACClinica> {
    return this.http
      .get<EjecucionGestionACClinica>(environment.baseUrl + 'EjecucionGestionACClinica/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getGrupoSanguineoById(id: number): Observable<GrupoSanguineo> {
    return this.http
      .get<GrupoSanguineo>(environment.baseUrl + 'GrupoSanguineo/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getGestionACGestionById(id: number): Observable<GestionACGestion> {
    return this.http
      .get<GestionACGestion>(environment.baseUrl + 'GestionACGestion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getNivelEscolaridadById(id: number): Observable<NivelEscolaridad> {
    return this.http
      .get<NivelEscolaridad>(environment.baseUrl + 'NivelEscolaridad/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getOcupacionById(id: number): Observable<Ocupacion> {
    return this.http
      .get<Ocupacion>(environment.baseUrl + 'Ocupacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAcompananteById(id: number): Observable<Acompanante> {
    return this.http
      .get<Acompanante>(environment.baseUrl + 'Acompanante/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getParentescoAcompananteById(id: number): Observable<ParentescoAcompanante> {
    return this.http
      .get<ParentescoAcompanante>(environment.baseUrl + 'ParentescoAcompanante/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getTipoZonaViviendaById(id: number): Observable<TipoZonaVivienda> {
    return this.http
      .get<TipoZonaVivienda>(environment.baseUrl + 'TipoZonaVivienda/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getTipoAccesoViviendaById(id: number): Observable<TipoAccesoVivienda> {
    return this.http
      .get<TipoAccesoVivienda>(environment.baseUrl + 'TipoAccesoVivienda/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaCaracteristicasViviendaById(id: number): Observable<EjecucionGestionACClinicaCaracteristicasVivienda> {
    return this.http
      .get<EjecucionGestionACClinicaCaracteristicasVivienda>(environment.baseUrl + 'EjecucionGestionACClinicaCaracteristicasVivienda/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaEnfermedadesById(id: number): Observable<EjecucionGestionACClinicaEnfermedades> {
    return this.http
      .get<EjecucionGestionACClinicaEnfermedades>(environment.baseUrl + 'TipoAccesoVivienda/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }
  
  // Consulta de registros de areas con parametros
  getEnfermedadesById(id: number): Observable<Enfermedades> {
    return this.http
      .get<Enfermedades>(environment.baseUrl + 'Enfermedades/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaEventosAdversosById(id: number): Observable<EjecucionGestionACClinicaEventosAdversos> {
    return this.http
      .get<EjecucionGestionACClinicaEventosAdversos>(environment.baseUrl + 'EjecucionGestionACClinicaEventosAdversos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getTiposAdversosById(id: number): Observable<TiposAdversos> {
    return this.http
      .get<TiposAdversos>(environment.baseUrl + 'TiposAdversos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaTemasEducacionById(id: number): Observable<Enfermedades> {
    return this.http
      .get<Enfermedades>(environment.baseUrl + 'Enfermedades/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getTemasEducacionById(id: number): Observable<TemasEducacion> {
    return this.http
      .get<TemasEducacion>(environment.baseUrl + 'TemasEducacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEjecucionGestionACClinicaValidacionesById(id: number): Observable<EjecucionGestionACClinicaValidaciones> {
    return this.http
      .get<EjecucionGestionACClinicaValidaciones>(environment.baseUrl + 'EjecucionGestionACClinicaValidaciones/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEpsById(id: number): Observable<EPS> {
    return this.http
      .get<EPS>(environment.baseUrl + 'EPS/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEscalaDolorById(id: number): Observable<EscalaDolor> {
    return this.http
      .get<EscalaDolor>(environment.baseUrl + 'EscalaDolor/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEspecialidadesById(id: number): Observable<Especialidades> {
    return this.http
      .get<Especialidades>(environment.baseUrl + 'Especialidades/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEntidadesMedicamentoById(id: number): Observable<EntidadesMedicamento> {
    return this.http
      .get<EntidadesMedicamento>(environment.baseUrl + 'EntidadesMedicamento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEspecialidadesxMedicamentoById(id: number): Observable<EspecialidadesxMedicamento> {
    return this.http
      .get<EspecialidadesxMedicamento>(environment.baseUrl + 'EspecialidadesxMedicamento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEsquemasAplicacionById(id: number): Observable<EsquemasAplicacion> {
    return this.http
      .get<EsquemasAplicacion>(environment.baseUrl + 'EsquemasAplicacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadioById(id: number): Observable<Estadio> {
    return this.http
      .get<Estadio>(environment.baseUrl + 'Estadio/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoActualById(id: number): Observable<EstadoActual> {
    return this.http
      .get<EstadoActual>(environment.baseUrl + 'EstadoActual/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadosById(id: number): Observable<Estados> {
    return this.http
      .get<Estados>(environment.baseUrl + 'Estados/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoAutorizacionById(id: number): Observable<EstadoAutorizacion> {
    return this.http
      .get<EstadoAutorizacion>(environment.baseUrl + 'EstadoAutorizacion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoFinalById(id: number): Observable<EstadoFinal> {
    return this.http
      .get<EstadoFinal>(environment.baseUrl + 'EstadoFinal/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoGestionSocialById(id: number): Observable<EstadoGestionSocial> {
    return this.http
      .get<EstadoGestionSocial>(environment.baseUrl + 'EstadoGestionSocial/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoInscripcionById(id: number): Observable<EstadoInscripcion> {
    return this.http
      .get<EstadoInscripcion>(environment.baseUrl + 'EstadoInscripcion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoReporteById(id: number): Observable<EstadoReporte> {
    return this.http
      .get<EstadoReporte>(environment.baseUrl + 'EstadoReporte/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoReportesById(id: number): Observable<EstadoReportes> {
    return this.http
      .get<EstadoReportes>(environment.baseUrl + 'EstadoReportes/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoReporteFVById(id: number): Observable<EstadoReportesFV> {
    return this.http
      .get<EstadoReportesFV>(environment.baseUrl + 'EstadoReporteFV/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoSeguimientoFVById(id: number): Observable<EstadoInscripcion> {
    return this.http
      .get<EstadoInscripcion>(environment.baseUrl + 'EstadoInscripcion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoxEstadioById(id: number): Observable<EstadoxEstadio> {
    return this.http
      .get<EstadoxEstadio>(environment.baseUrl + 'EstadoxEstadio/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstadoxMedicamentoById(id: number): Observable<EstadoxMedicamento> {
    return this.http
      .get<EstadoxMedicamento>(environment.baseUrl + 'EstadoxMedicamento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEstatusById(id: number): Observable<Estatus> {
    return this.http
      .get<Estatus>(environment.baseUrl + 'Estatus/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEventoAdversoSeguimientoById(id: number): Observable<EventoAdversoSeguimiento> {
    return this.http
      .get<EventoAdversoSeguimiento>(environment.baseUrl + 'EventoAdversoSeguimiento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getEventoRelacionadoById(id: number): Observable<EventoRelacionado> {
    return this.http
      .get<EventoRelacionado>(environment.baseUrl + 'EventoRelacionado/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionAC_GestionAdministrativa(data: any): Observable<EjecucionGestionAC_GestionAdministrativa> {
    return this.http
      .post<EjecucionGestionAC_GestionAdministrativa>(
        environment.baseUrl + 'EjecucionGestionAC_GestionAdministrativa',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearGestionACAsignados(data: any): Observable<GestionACAsignados> {
    return this.http
      .post<GestionACAsignados>(
        environment.baseUrl + 'GestionACAsignados',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearGestionActividadComplementaria(data: any): Observable<GestionActividadComplementaria> {
    return this.http
      .post<GestionActividadComplementaria>(
        environment.baseUrl + 'GestionActividadComplementaria',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoActividad(data: any): Observable<EstadoActividad> {
    return this.http
      .post<EstadoActividad>(
        environment.baseUrl + 'EstadoActividad',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearMaestraGestion(data: any): Observable<MaestraGestion> {
    return this.http
      .post<MaestraGestion>(
        environment.baseUrl + 'MaestraGestion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearPrioridad(data: any): Observable<Prioridad> {
    return this.http
      .post<Prioridad>(
        environment.baseUrl + 'Prioridad',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionAC_GestionGenerica(data: any): Observable<EjecucionGestionAC_GestionGenerica> {
    return this.http
      .post<EjecucionGestionAC_GestionGenerica>(
        environment.baseUrl + 'EjecucionGestionAC_GestionGenerica',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACApoyo(data: any): Observable<EjecucionGestionACApoyo> {
    return this.http
      .post<EjecucionGestionACApoyo>(
        environment.baseUrl + 'EjecucionGestionACApoyo',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACCapacitacion(data: any): Observable<EjecucionGestionACCapacitacion> {
    return this.http
      .post<EjecucionGestionACCapacitacion>(
        environment.baseUrl + 'EjecucionGestionACCapacitacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinica(data: any): Observable<EjecucionGestionACClinica> {
    return this.http
      .post<EjecucionGestionACClinica>(
        environment.baseUrl + 'EjecucionGestionACClinica',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearGrupoSanguineo(data: any): Observable<GrupoSanguineo> {
    return this.http
      .post<GrupoSanguineo>(
        environment.baseUrl + 'GrupoSanguineo',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearGestionACGestion(data: any): Observable<GestionACGestion> {
    return this.http
      .post<GestionACGestion>(
        environment.baseUrl + 'GestionACGestion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearNivelEscolaridad(data: any): Observable<NivelEscolaridad> {
    return this.http
      .post<NivelEscolaridad>(
        environment.baseUrl + 'NivelEscolaridad',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearOcupacion(data: any): Observable<Ocupacion> {
    return this.http
      .post<Ocupacion>(
        environment.baseUrl + 'Ocupacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearAcompanante(data: any): Observable<Acompanante> {
    return this.http
      .post<Acompanante>(
        environment.baseUrl + 'Acompanante',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearParentescoAcompanante(data: any): Observable<ParentescoAcompanante> {
    return this.http
      .post<ParentescoAcompanante>(
        environment.baseUrl + 'ParentescoAcompanante',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearTipoZonaVivienda(data: any): Observable<TipoZonaVivienda> {
    return this.http
      .post<TipoZonaVivienda>(
        environment.baseUrl + 'Acompanante',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearTipoAccesoVivienda(data: any): Observable<TipoAccesoVivienda> {
    return this.http
      .post<TipoAccesoVivienda>(
        environment.baseUrl + 'TipoAccesoVivienda',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinicaCaracteristicasVivienda(data: any): Observable<EjecucionGestionACClinicaCaracteristicasVivienda> {
    return this.http
      .post<EjecucionGestionACClinicaCaracteristicasVivienda>(
        environment.baseUrl + 'EjecucionGestionACClinicaCaracteristicasVivienda',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinicaEnfermedades(data: any): Observable<EjecucionGestionACClinicaEnfermedades> {
    return this.http
      .post<EjecucionGestionACClinicaEnfermedades>(
        environment.baseUrl + 'TipoAccesoVivienda',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEnfermedades(data: any): Observable<Enfermedades> {
    return this.http
      .post<Enfermedades>(
        environment.baseUrl + 'Enfermedades',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinicaEventosAdversos(data: any): Observable<EjecucionGestionACClinicaEventosAdversos> {
    return this.http
      .post<EjecucionGestionACClinicaEventosAdversos>(
        environment.baseUrl + 'EjecucionGestionACClinicaEventosAdversos',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearTiposAdversos(data: any): Observable<TiposAdversos> {
    return this.http
      .post<TiposAdversos>(
        environment.baseUrl + 'TiposAdversos',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinicaTemasEducacion(data: any): Observable<EjecucionGestionACClinicaTemasEducacion> {
    return this.http
      .post<EjecucionGestionACClinicaTemasEducacion>(
        environment.baseUrl + 'EjecucionGestionACClinicaTemasEducacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearTemasEducacion(data: any): Observable<TemasEducacion> {
    return this.http
      .post<TemasEducacion>(
        environment.baseUrl + 'TemasEducacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEjecucionGestionACClinicaValidaciones(data: any): Observable<EjecucionGestionACClinicaValidaciones> {
    return this.http
      .post<EjecucionGestionACClinicaValidaciones>(
        environment.baseUrl + 'EjecucionGestionACClinicaValidaciones',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEntidadesMedicamento(data: any): Observable<EntidadesMedicamento> {
    return this.http
      .post<EntidadesMedicamento>(
        environment.baseUrl + 'EntidadesMedicamento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEps(data: any): Observable<EPS> {
    return this.http
      .post<EPS>(
        environment.baseUrl + 'EPS',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEscalaDolor(data: any): Observable<EscalaDolor> {
    return this.http
      .post<EscalaDolor>(
        environment.baseUrl + 'EscalaDolor',
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
  crearEspecialidadesxMedicamento(data: any): Observable<EspecialidadesxMedicamento> {
    return this.http
      .post<EspecialidadesxMedicamento>(
        environment.baseUrl + 'EspecialidadesxMedicamento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEsquemasAplicacion(data: any): Observable<EsquemasAplicacion> {
    return this.http
      .post<EsquemasAplicacion>(
        environment.baseUrl + 'EsquemasAplicacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadio(data: any): Observable<Estadio> {
    return this.http
      .post<Estadio>(
        environment.baseUrl + 'Estadio',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoActual(data: any): Observable<EstadoActual> {
    return this.http
      .post<EstadoActual>(
        environment.baseUrl + 'EstadoActual',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstados(data: any): Observable<Estados> {
    return this.http
      .post<Estados>(
        environment.baseUrl + 'Estados',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoAutorizacion(data: any): Observable<EstadoAutorizacion> {
    return this.http
      .post<EstadoAutorizacion>(
        environment.baseUrl + 'EstadoAutorizacion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoFinal(data: any): Observable<EstadoFinal> {
    return this.http
      .post<EstadoFinal>(
        environment.baseUrl + 'EstadoFinal',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoGestionSocial(data: any): Observable<EstadoGestionSocial> {
    return this.http
      .post<EstadoGestionSocial>(
        environment.baseUrl + 'EstadogestionSocial',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoInscripcion(data: any): Observable<EstadoInscripcion> {
    return this.http
      .post<EstadoInscripcion>(
        environment.baseUrl + 'EstadoInscripcion',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoReporte(data: any): Observable<EstadoReporte> {
    return this.http
      .post<EstadoReporte>(
        environment.baseUrl + 'Estadoreporte',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoReportes(data: any): Observable<EstadoReportes> {
    return this.http
      .post<EstadoReportes>(
        environment.baseUrl + 'Estadoreportes',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }


  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoReporteFV(data: any): Observable<EstadoReportesFV> {
    return this.http
      .post<EstadoReportesFV>(
        environment.baseUrl + 'EstadoreporteFV',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoSeguimientoFV(data: any): Observable<EstadoSeguimientoFV> {
    return this.http
      .post<EstadoSeguimientoFV>(
        environment.baseUrl + 'EstadoSeguimientoFV',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoxEstadio(data: any): Observable<EstadoxEstadio> {
    return this.http
      .post<EstadoxEstadio>(
        environment.baseUrl + 'EstadoxEstadio',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstadoxMedicamento(data: any): Observable<EstadoxMedicamento> {
    return this.http
      .post<EstadoxMedicamento>(
        environment.baseUrl + 'EstadoxMedicamento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEstatus(data: any): Observable<Estatus> {
    return this.http
      .post<Estatus>(
        environment.baseUrl + 'Estatus',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEventoAdversoSeguimiento(data: any): Observable<EventoAdversoSeguimiento> {
    return this.http
      .post<EventoAdversoSeguimiento>(
        environment.baseUrl + 'EventoAdversoSeguimiento',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearEventoRelacionado(data: any): Observable<EventoRelacionado> {
    return this.http
      .post<EventoRelacionado>(
        environment.baseUrl + 'EventoRelacionado',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionAC_GestionAdministrativa(id: number, data: any): Observable<EjecucionGestionAC_GestionAdministrativa> {
    return this.http
      .put<EjecucionGestionAC_GestionAdministrativa>(
        environment.baseUrl + 'EjecucionGestionAC_GestionAdministrativa/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateGestionACAsignados(id: number, data: any): Observable<GestionACAsignados> {
    return this.http
      .put<GestionACAsignados>(
        environment.baseUrl + 'GestionACAsignados/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

   // Edición de registros existentes.
   updateMaestraGestion(id: number, data: any): Observable<MaestraGestion> {
    return this.http
      .put<MaestraGestion>(
        environment.baseUrl + 'MaestraGestion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateGestionActividadComplementaria(id: number, data: any): Observable<GestionActividadComplementaria> {
    return this.http
      .put<GestionActividadComplementaria>(
        environment.baseUrl + 'GestionActividadComplementaria/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoActividad(id: number, data: any): Observable<EstadoActividad> {
    return this.http
      .put<EstadoActividad>(
        environment.baseUrl + 'EstadoActividad/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updatePrioridad(id: number, data: any): Observable<Prioridad> {
    return this.http
      .put<Prioridad>(
        environment.baseUrl + 'Prioridad/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionAC_GestionGenerica(id: number, data: any): Observable<EjecucionGestionAC_GestionGenerica> {
    return this.http
      .put<EjecucionGestionAC_GestionGenerica>(
        environment.baseUrl + 'EjecucionGestionAC_gestionGenerica/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionApoyo(id: number, data: any): Observable<EjecucionGestionACApoyo> {
    return this.http
      .put<EjecucionGestionACApoyo>(
        environment.baseUrl + 'EjecucionGestionACApoyo/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACCapacitacion(id: number, data: any): Observable<EjecucionGestionACCapacitacion> {
    return this.http
      .put<EjecucionGestionACCapacitacion>(
        environment.baseUrl + 'EjecucionGestionACCapacitacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACClinica(id: number, data: any): Observable<EjecucionGestionACClinica> {
    return this.http
      .put<EjecucionGestionACClinica>(
        environment.baseUrl + 'EjecucionGestionACClinica/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateGrupoSanguineo(id: number, data: any): Observable<GrupoSanguineo> {
    return this.http
      .put<GrupoSanguineo>(
        environment.baseUrl + 'GrupoSanguineo/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateGestionACGestion(id: number, data: any): Observable<GestionACGestion> {
    return this.http
      .put<GestionACGestion>(
        environment.baseUrl + 'GestionACGestion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateNivelEscolaridad(id: number, data: any): Observable<NivelEscolaridad> {
    return this.http
      .put<NivelEscolaridad>(
        environment.baseUrl + 'NivelEscolaridad/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateOcupacion(id: number, data: any): Observable<Ocupacion> {
    return this.http
      .put<Ocupacion>(
        environment.baseUrl + 'Ocupacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateAcompanante(id: number, data: any): Observable<Acompanante> {
    return this.http
      .put<Acompanante>(
        environment.baseUrl + 'Acompanante/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateParentescoAcompanante(id: number, data: any): Observable<ParentescoAcompanante> {
    return this.http
      .put<ParentescoAcompanante>(
        environment.baseUrl + 'ParentescoAcompanante/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateTipoZonaVivienda(id: number, data: any): Observable<TipoZonaVivienda> {
    return this.http
      .put<TipoZonaVivienda>(
        environment.baseUrl + 'TipoZonaVivienda/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateTipoAccesoVivienda(id: number, data: any): Observable<TipoZonaVivienda> {
    return this.http
      .put<TipoZonaVivienda>(
        environment.baseUrl + 'TipoAccesoVivienda/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACClinicaCaracteristicasVivienda(id: number, data: any): Observable<EjecucionGestionACClinicaCaracteristicasVivienda> {
    return this.http
      .put<EjecucionGestionACClinicaCaracteristicasVivienda>(
        environment.baseUrl + 'EjecucionGestionACClinicaCaracteristicasVivienda/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionClinicaEnfermedades(id: number, data: any): Observable<EjecucionGestionACClinicaEnfermedades> {
    return this.http
      .put<EjecucionGestionACClinicaEnfermedades>(
        environment.baseUrl + 'EjecucionGestionACClinicaEnfermedades/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEnfermedades(id: number, data: any): Observable<Enfermedades> {
    return this.http
      .put<Enfermedades>(
        environment.baseUrl + 'Enfermedades/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACClinicaEventosAdversos(id: number, data: any): Observable<EjecucionGestionACClinicaEventosAdversos> {
    return this.http
      .put<EjecucionGestionACClinicaEventosAdversos>(
        environment.baseUrl + 'EjecucionGestionACClinicaEventosAdversos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateTiposdversos(id: number, data: any): Observable<TiposAdversos> {
    return this.http
      .put<TiposAdversos>(
        environment.baseUrl + 'TiposAdversos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACClinicaTemasEducacion(id: number, data: any): Observable<EjecucionGestionACClinicaTemasEducacion> {
    return this.http
      .put<EjecucionGestionACClinicaTemasEducacion>(
        environment.baseUrl + 'EjecucionGestionACClinicaTemaseducacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateTemasEducacion(id: number, data: any): Observable<TemasEducacion> {
    return this.http
      .put<TemasEducacion>(
        environment.baseUrl + 'TemasEducacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEjecucionGestionACClinicaValidaciones(id: number, data: any): Observable<EjecucionGestionACClinicaValidaciones> {
    return this.http
      .put<EjecucionGestionACClinicaValidaciones>(
        environment.baseUrl + 'EjecucionGestionACClinicaValidaciones/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEntidadesMedicamento(id: number, data: any): Observable<EntidadesMedicamento> {
    return this.http
      .put<EntidadesMedicamento>(
        environment.baseUrl + 'EntidadesMedicamento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEps(id: number, data: any): Observable<EPS> {
    return this.http
      .put<EPS>(
        environment.baseUrl + 'EPS/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEscalaDolor(id: number, data: any): Observable<EscalaDolor> {
    return this.http
      .put<EscalaDolor>(
        environment.baseUrl + 'EEscalaDolor/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEspecialides(id: number, data: any): Observable<Especialidades> {
    return this.http
      .put<Especialidades>(
        environment.baseUrl + 'Especialidades/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEspecialidesxMedicamento(id: number, data: any): Observable<EspecialidadesxMedicamento> {
    return this.http
      .put<EspecialidadesxMedicamento>(
        environment.baseUrl + 'EspecialidadesxMedicamento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEsquemasAplicacion(id: number, data: any): Observable<EsquemasAplicacion> {
    return this.http
      .put<EsquemasAplicacion>(
        environment.baseUrl + 'EsquemasAplicacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadio(id: number, data: any): Observable<Estadio> {
    return this.http
      .put<Estadio>(
        environment.baseUrl + 'Estadios/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoActual(id: number, data: any): Observable<EstadoActual> {
    return this.http
      .put<EstadoActual>(
        environment.baseUrl + 'EstadoActual/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstado(id: number, data: any): Observable<Estados> {
    return this.http
      .put<Estados>(
        environment.baseUrl + 'Estados/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoAutorizacion(id: number, data: any): Observable<EstadoAutorizacion> {
    return this.http
      .put<EstadoAutorizacion>(
        environment.baseUrl + 'EstadoAutorizacion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoFinal(id: number, data: any): Observable<EstadoFinal> {
    return this.http
      .put<EstadoFinal>(
        environment.baseUrl + 'EstadoFinal/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoGestionSocial(id: number, data: any): Observable<EstadoGestionSocial> {
    return this.http
      .put<EstadoGestionSocial>(
        environment.baseUrl + 'EstadoGestionSocial/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoInscripcion(id: number, data: any): Observable<EstadoInscripcion> {
    return this.http
      .put<EstadoInscripcion>(
        environment.baseUrl + 'EstadoInscripcion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoReporte(id: number, data: any): Observable<EstadoReporte> {
    return this.http
      .put<EstadoReporte>(
        environment.baseUrl + 'EstadoReporte/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoReportes(id: number, data: any): Observable<EstadoReportes> {
    return this.http
      .put<EstadoReportes>(
        environment.baseUrl + 'EstadoReportes/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoReportesFV(id: number, data: any): Observable<EstadoReportesFV> {
    return this.http
      .put<EstadoReportesFV>(
        environment.baseUrl + 'EstadoReportesFV/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoSeguimientoFV(id: number, data: any): Observable<EstadoSeguimientoFV> {
    return this.http
      .put<EstadoSeguimientoFV>(
        environment.baseUrl + 'EstadoSeguimientoFV/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoxEstadio(id: number, data: any): Observable<EstadoxEstadio> {
    return this.http
      .put<EstadoxEstadio>(
        environment.baseUrl + 'EstadoxEstadio/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstadoxMedicamento(id: number, data: any): Observable<EstadoxMedicamento> {
    return this.http
      .put<EstadoxMedicamento>(
        environment.baseUrl + 'EstadoxMedicamento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEstatus(id: number, data: any): Observable<Estatus> {
    return this.http
      .put<Estatus>(
        environment.baseUrl + 'Estatus/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEventoAdversoSeguimiento(id: number, data: any): Observable<EventoAdversoSeguimiento> {
    return this.http
      .put<EventoAdversoSeguimiento>(
        environment.baseUrl + 'EventoAdversoSeguimiento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateEventoRelacionado(id: number, data: any): Observable<EventoAdversoSeguimiento> {
    return this.http
      .put<EventoAdversoSeguimiento>(
        environment.baseUrl + 'EventoAdversoSeguimiento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }


  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionAC_GestionAdministrativaById(id: number): Observable<EjecucionGestionAC_GestionAdministrativa> {
    return this.http
      .delete<EjecucionGestionAC_GestionAdministrativa>(
        environment.baseUrl + 'EjecucionGestionAC_GestionAdministrativa/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteGestionACAsinadosById(id: number): Observable<GestionACAsignados> {
    return this.http
      .delete<GestionACAsignados>(
        environment.baseUrl + 'GestionACAsignados/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteGestionActividadComplementariaById(id: number): Observable<GestionActividadComplementaria> {
    return this.http
      .delete<GestionActividadComplementaria>(
        environment.baseUrl + 'GestionActividadComplementaria/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoActividadById(id: number): Observable<EstadoActividad> {
    return this.http
      .delete<EstadoActividad>(
        environment.baseUrl + 'EstadoActividad/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

   // Eliminar registro de la tabla ciudad
   deleteMaestraGestionById(id: number): Observable<MaestraGestion> {
    return this.http
      .delete<MaestraGestion>(
        environment.baseUrl + 'MaestraGestion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePrioridadById(id: number): Observable<Prioridad> {
    return this.http
      .delete<Prioridad>(
        environment.baseUrl + 'Prioridad/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionAC_GestionGenericaById(id: number): Observable<EjecucionGestionAC_GestionGenerica> {
    return this.http
      .delete<EjecucionGestionAC_GestionGenerica>(
        environment.baseUrl + 'EjecucionGestionAC_GestionGenerica/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACApoyoById(id: number): Observable<EjecucionGestionACApoyo> {
    return this.http
      .delete<EjecucionGestionACApoyo>(
        environment.baseUrl + 'EjecucionGestionACApoyo/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACCapacitacionById(id: number): Observable<EjecucionGestionACCapacitacion> {
    return this.http
      .delete<EjecucionGestionACCapacitacion>(
        environment.baseUrl + 'EjecucionGestionACCapacitacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaById(id: number): Observable<EjecucionGestionACClinica> {
    return this.http
      .delete<EjecucionGestionACClinica>(
        environment.baseUrl + 'EjecucionGestionACClinica/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteGrupoSanguineoById(id: number): Observable<GrupoSanguineo> {
    return this.http
      .delete<GrupoSanguineo>(
        environment.baseUrl + 'GrupoSanguineo/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteGestionACGestionById(id: number): Observable<GestionACGestion> {
    return this.http
      .delete<GestionACGestion>(
        environment.baseUrl + 'GestionACGestion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteNivelEscolaridadById(id: number): Observable<NivelEscolaridad> {
    return this.http
      .delete<NivelEscolaridad>(
        environment.baseUrl + 'NivelEscolaridad/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteOcupacionById(id: number): Observable<Ocupacion> {
    return this.http
      .delete<Ocupacion>(
        environment.baseUrl + 'Ocupacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteAcompananteById(id: number): Observable<Acompanante> {
    return this.http
      .delete<Acompanante>(
        environment.baseUrl + 'Acompanante/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteParentescoAcompananteById(id: number): Observable<ParentescoAcompanante> {
    return this.http
      .delete<ParentescoAcompanante>(
        environment.baseUrl + 'ParentescoAcompanante/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteTipoZonaViviendaById(id: number): Observable<TipoZonaVivienda> {
    return this.http
      .delete<TipoZonaVivienda>(
        environment.baseUrl + 'TipoZonaVivienda/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteTipoAccesoViviendaById(id: number): Observable<TipoAccesoVivienda> {
    return this.http
      .delete<TipoAccesoVivienda>(
        environment.baseUrl + 'TipoAccesoVivienda/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaCaracteristicasViviendaById(id: number): Observable<EjecucionGestionACClinicaCaracteristicasVivienda> {
    return this.http
      .delete<EjecucionGestionACClinicaCaracteristicasVivienda>(
        environment.baseUrl + 'EjecucionGestionACClinicaCarcteristicasVivienda/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaEnfermedadesById(id: number): Observable<EjecucionGestionACClinicaEnfermedades> {
    return this.http
      .delete<EjecucionGestionACClinicaEnfermedades>(
        environment.baseUrl + 'TipoAccesoVivienda/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEnfermedadesById(id: number): Observable<Enfermedades> {
    return this.http
      .delete<Enfermedades>(
        environment.baseUrl + 'Enfermedades/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaEventosAdversosById(id: number): Observable<EjecucionGestionACClinicaEventosAdversos> {
    return this.http
      .delete<EjecucionGestionACClinicaEventosAdversos>(
        environment.baseUrl + 'EjecucionGestionACClinicaEventosAdversos/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteTiposAdversosById(id: number): Observable<TiposAdversos> {
    return this.http
      .delete<TiposAdversos>(
        environment.baseUrl + 'TiposAdversos/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaTemasEducacionById(id: number): Observable<EjecucionGestionACClinicaTemasEducacion> {
    return this.http
      .delete<EjecucionGestionACClinicaTemasEducacion>(
        environment.baseUrl + 'TiposAdversos/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteTemasEducacionById(id: number): Observable<TemasEducacion> {
    return this.http
      .delete<TemasEducacion>(
        environment.baseUrl + 'TemasEducacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEjecucionGestionACClinicaValidacionesById(id: number): Observable<EjecucionGestionACClinicaValidaciones> {
    return this.http
      .delete<EjecucionGestionACClinicaTemasEducacion>(
        environment.baseUrl + 'EjecucionGestionACClinicaTemasEducacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEntidadesMedicamentoById(id: number): Observable<EntidadesMedicamento> {
    return this.http
      .delete<EntidadesMedicamento>(
        environment.baseUrl + 'EntidadesMedicamento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEpsById(id: number): Observable<EPS> {
    return this.http
      .delete<EPS>(
        environment.baseUrl + 'EPS/' + id,
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
  deleteEspecialidadesById(id: number): Observable<Especialidades> {
    return this.http
      .delete<Especialidades>(
        environment.baseUrl + 'Especialidades/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEspecialidadesxMedicamentoById(id: number): Observable<EspecialidadesxMedicamento> {
    return this.http
      .delete<EspecialidadesxMedicamento>(
        environment.baseUrl + 'EspecialidadesxMedicamento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEsquemasAplicacionById(id: number): Observable<EsquemasAplicacion> {
    return this.http
      .delete<EsquemasAplicacion>(
        environment.baseUrl + 'EsquemasAplicacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadioById(id: number): Observable<Estadio> {
    return this.http
      .delete<Estadio>(
        environment.baseUrl + 'Estadio/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoActualById(id: number): Observable<EstadoActual> {
    return this.http
      .delete<EstadoActual>(
        environment.baseUrl + 'EstadoActual/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoAutorizacionById(id: number): Observable<EstadoAutorizacion> {
    return this.http
      .delete<EstadoAutorizacion>(
        environment.baseUrl + 'EstadoAutorizacion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoFinalById(id: number): Observable<EstadoFinal> {
    return this.http
      .delete<EstadoFinal>(
        environment.baseUrl + 'EstadoFinal/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoGestionSocialById(id: number): Observable<EstadoGestionSocial> {
    return this.http
      .delete<EstadoGestionSocial>(
        environment.baseUrl + 'EstadoGestionSocial/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoInscripcionById(id: number): Observable<EstadoInscripcion> {
    return this.http
      .delete<EstadoInscripcion>(
        environment.baseUrl + 'EstadoInscripcion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoReporteById(id: number): Observable<EstadoReporte> {
    return this.http
      .delete<EstadoReporte>(
        environment.baseUrl + 'EstadoReporte/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoReportesById(id: number): Observable<EstadoReportes> {
    return this.http
      .delete<EstadoReportes>(
        environment.baseUrl + 'Estadoreportes/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstadoxMedicamentoById(id: number): Observable<EstadoxMedicamento> {
    return this.http
      .delete<EstadoxMedicamento>(
        environment.baseUrl + 'EstadoxMedicamento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEstatusById(id: number): Observable<Estatus> {
    return this.http
      .delete<Estatus>(
        environment.baseUrl + 'Estatus/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEventoAdversoSeguimientoById(id: number): Observable<EventoAdversoSeguimiento> {
    return this.http
      .delete<EventoAdversoSeguimiento>(
        environment.baseUrl + 'EventoAdversoSeguimiento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteEventoRelacionadoById(id: number): Observable<EventoRelacionado> {
    return this.http
      .delete<EventoRelacionado>(
        environment.baseUrl + 'EventoRelacionado/' + id,
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
