import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ocupaciones, OpcionMenu, OpcionesGenericas, OpcionesMenuUsuario, PaisesxUsuario, Parentesco, PerfilUsuario, PeriocidadEntrega, PeriodoConvulsiones, PresentacionMedicamentoxMedicamento, ProcesoInstaurado, ProcesosAdministrativos, ProcesosInstaurados, RangosTiempo, Reemplazos, Referente, RegimenxPais, Reinicios, ReporteUsuario, Reportes } from '../Models/tablaMaestraOcupaciones.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcupacionesService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllOcupaciones(): Observable<Ocupaciones> {
    return this.http
      .get<Ocupaciones>(environment.baseUrl + 'Ocupaciones/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllOpcionesGenericas(): Observable<OpcionesGenericas> {
    return this.http
      .get<OpcionesGenericas>(environment.baseUrl + 'OpcionesGenericas/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllOpcionesMenuUsuario(): Observable<OpcionesMenuUsuario> {
    return this.http
      .get<OpcionesMenuUsuario>(environment.baseUrl + 'OpcionesMenuUsuario/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllOpcionMenu(): Observable<OpcionMenu> {
    return this.http
      .get<OpcionMenu>(environment.baseUrl + 'OpcionMenu/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPaisesxUsuario(): Observable<PaisesxUsuario> {
    return this.http
      .get<PaisesxUsuario>(environment.baseUrl + 'PaisesxUsuario/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllParentesco(): Observable<Parentesco> {
    return this.http
      .get<Parentesco>(environment.baseUrl + 'Parentesco/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPerfilUsuario(): Observable<PerfilUsuario> {
    return this.http
      .get<PerfilUsuario>(environment.baseUrl + 'PerfilUsuario/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPeriodoConvulsiones(): Observable<PeriodoConvulsiones> {
    return this.http
      .get<PeriodoConvulsiones>(environment.baseUrl + 'PeriodoConvulsiones/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPresentacionMedicamentoxMedicamento(): Observable<PresentacionMedicamentoxMedicamento> {
    return this.http
      .get<PresentacionMedicamentoxMedicamento>(environment.baseUrl + 'PresentacionMedicamentoxMedicamento/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllProcesoInstaurado(): Observable<ProcesoInstaurado> {
    return this.http
      .get<ProcesoInstaurado>(environment.baseUrl + 'ProcesoInstaurado/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllPeriocidadEntrega(): Observable<PeriocidadEntrega> {
    return this.http
      .get<PeriocidadEntrega>(environment.baseUrl + 'PeriocidadEntrega/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllProcesosAdministrativos(): Observable<ProcesosAdministrativos> {
    return this.http
      .get<ProcesosAdministrativos>(environment.baseUrl + 'ProcesosAdministrativos/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllProcesosInstaurados(): Observable<ProcesosInstaurados> {
    return this.http
      .get<ProcesosInstaurados>(environment.baseUrl + 'ProcesosInstaurados/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllRangosTiempo(): Observable<RangosTiempo> {
    return this.http
      .get<RangosTiempo>(environment.baseUrl + 'RangosTiempo/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllReemplazos(): Observable<Reemplazos> {
    return this.http
      .get<Reemplazos>(environment.baseUrl + 'Reemplazos/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllReferente(): Observable<Referente> {
    return this.http
      .get<Referente>(environment.baseUrl + 'Referente/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllRegimenxPais(): Observable<RegimenxPais> {
    return this.http
      .get<RegimenxPais>(environment.baseUrl + 'RegimenxPais/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllReinicios(): Observable<Reinicios> {
    return this.http
      .get<Reinicios>(environment.baseUrl + 'Reinicios/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllReportes(): Observable<Reportes> {
    return this.http
      .get<Reportes>(environment.baseUrl + 'Reportes/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllReporteUsuario(): Observable<ReporteUsuario> {
    return this.http
      .get<ReporteUsuario>(environment.baseUrl + 'ReporteUsuario/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllOcupacionesById(id: number): Observable<Ocupaciones> {
    return this.http
      .get<Ocupaciones>(environment.baseUrl + 'Ocupaciones/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllOpcionesGenericasById(id: number): Observable<OpcionesGenericas> {
    return this.http
      .get<OpcionesGenericas>(environment.baseUrl + 'OpcionesGenericas/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllOpcionesMenuUsuarioById(id: number): Observable<OpcionesMenuUsuario> {
    return this.http
      .get<OpcionesMenuUsuario>(environment.baseUrl + 'OpcionesMenuUsuario/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllOpcionMenuById(id: number): Observable<OpcionMenu> {
    return this.http
      .get<OpcionMenu>(environment.baseUrl + 'OpcionMenu/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPaisesxUsuarioById(id: number): Observable<PaisesxUsuario> {
    return this.http
      .get<PaisesxUsuario>(environment.baseUrl + 'PaisesxUsuario/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllParentescoById(id: number): Observable<Parentesco> {
    return this.http
      .get<Parentesco>(environment.baseUrl + 'Parentesco/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPerfilUsuarioById(id: number): Observable<PerfilUsuario> {
    return this.http
      .get<PerfilUsuario>(environment.baseUrl + 'PerfilUsuario/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPeriodoConvulsionesById(id: number): Observable<PeriodoConvulsiones> {
    return this.http
      .get<PeriodoConvulsiones>(environment.baseUrl + 'PeriodoConvulsiones/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPresentacionMedicamentoxMedicamentoById(id: number): Observable<PresentacionMedicamentoxMedicamento> {
    return this.http
      .get<PresentacionMedicamentoxMedicamento>(environment.baseUrl + 'PresentacionMedicamentoxMedicamento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllProcesoInstauradoById(id: number): Observable<ProcesoInstaurado> {
    return this.http
      .get<ProcesoInstaurado>(environment.baseUrl + 'ProcesoInstaurado/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllPeriocidadEntregaById(id: number): Observable<PeriocidadEntrega> {
    return this.http
      .get<PeriocidadEntrega>(environment.baseUrl + 'PeriocidadEntrega/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllProcesosAdministrativosById(id: number): Observable<ProcesosAdministrativos> {
    return this.http
      .get<ProcesosAdministrativos>(environment.baseUrl + 'ProcesosAdministrativos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllProcesosInstauradosById(id: number): Observable<ProcesosInstaurados> {
    return this.http
      .get<ProcesosInstaurados>(environment.baseUrl + 'ProcesosInstaurados/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllRangosTiempoById(id: number): Observable<RangosTiempo> {
    return this.http
      .get<RangosTiempo>(environment.baseUrl + 'RangosTiempo/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllReemplazosById(id: number): Observable<Reemplazos> {
    return this.http
      .get<Reemplazos>(environment.baseUrl + 'Reemplazos/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllReferenteById(id: number): Observable<Referente> {
    return this.http
      .get<Referente>(environment.baseUrl + 'Referente/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllRegimenxPaisById(id: number): Observable<RegimenxPais> {
    return this.http
      .get<RegimenxPais>(environment.baseUrl + 'RegimenxPais/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllReiniciosById(id: number): Observable<Reinicios> {
    return this.http
      .get<Reinicios>(environment.baseUrl + 'Reinicios/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllReportesById(id: number): Observable<Reportes> {
    return this.http
      .get<Reportes>(environment.baseUrl + 'Reportes/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllReporteUSuarioById(id: number): Observable<ReporteUsuario> {
    return this.http
      .get<ReporteUsuario>(environment.baseUrl + 'ReporteUsuario/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearOcupaciones(data: any): Observable<Ocupaciones> {
    return this.http
      .post<Ocupaciones>(
        environment.baseUrl + 'Ocupaciones/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearOpcionesGenericas(data: any): Observable<OpcionesGenericas> {
    return this.http
      .post<OpcionesGenericas>(
        environment.baseUrl + 'OpcionesGenericas/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearOpcionesMenuUsuario(data: any): Observable<OpcionesMenuUsuario> {
    return this.http
      .post<OpcionesMenuUsuario>(
        environment.baseUrl + 'OpcionesMenuUsuario/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearOpcionMenu(data: any): Observable<OpcionMenu> {
    return this.http
      .post<OpcionMenu>(
        environment.baseUrl + 'OpcionMenu',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearPaisesxUsuario(data: any): Observable<PaisesxUsuario> {
    return this.http
      .post<PaisesxUsuario>(
        environment.baseUrl + 'PaisesxUsuario/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearParentesco(data: any): Observable<Parentesco> {
    return this.http
      .post<Parentesco>(
        environment.baseUrl + 'Parentesco/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearPerfilUsuario(data: any): Observable<PerfilUsuario> {
    return this.http
      .post<PerfilUsuario>(
        environment.baseUrl + 'PerfilUsuario/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearPeriodoConvulsiones(data: any): Observable<PeriodoConvulsiones> {
    return this.http
      .post<PeriodoConvulsiones>(
        environment.baseUrl + 'PeriodoConvulsiones/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearPresentacionMedicamentoxMedicamento(data: any): Observable<PresentacionMedicamentoxMedicamento> {
    return this.http
      .post<PresentacionMedicamentoxMedicamento>(
        environment.baseUrl + 'PresentacionMedicamentoxMedicamento/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearProcesoInstaurado(data: any): Observable<ProcesoInstaurado> {
    return this.http
      .post<ProcesoInstaurado>(
        environment.baseUrl + 'ProcesoInstaurado/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearProcesosAdministrativos(data: any): Observable<ProcesosAdministrativos> {
    return this.http
      .post<ProcesosAdministrativos>(
        environment.baseUrl + 'ProcesosAdministrativos/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearProcesosInstaurados(data: any): Observable<ProcesosInstaurados> {
    return this.http
      .post<ProcesosInstaurados>(
        environment.baseUrl + 'ProcesosInstaurados/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearRangosTiempo(data: any): Observable<RangosTiempo> {
    return this.http
      .post<RangosTiempo>(
        environment.baseUrl + 'RangosTiempo/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearReemplazos(data: any): Observable<Reemplazos> {
    return this.http
      .post<Reemplazos>(
        environment.baseUrl + 'Reemplazos/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearReferente(data: any): Observable<Referente> {
    return this.http
      .post<Referente>(
        environment.baseUrl + 'Referente/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearRegimenxPais(data: any): Observable<RegimenxPais> {
    return this.http
      .post<RegimenxPais>(
        environment.baseUrl + 'RegimenxPais/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearReinicios(data: any): Observable<Reinicios> {
    return this.http
      .post<Reinicios>(
        environment.baseUrl + 'Reinicios/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearReportes(data: any): Observable<Reportes> {
    return this.http
      .post<Reportes>(
        environment.baseUrl + 'Reportes/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearReporteUsuario(data: any): Observable<ReporteUsuario> {
    return this.http
      .post<ReporteUsuario>(
        environment.baseUrl + 'ReporteUsuario/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateOcupaciones(id: number, data: any): Observable<Ocupaciones> {
    return this.http
      .put<Ocupaciones>(
        environment.baseUrl + 'Ocupaciones/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateOpcionesGenericas(id: number, data: any): Observable<OpcionesGenericas> {
    return this.http
      .put<OpcionesGenericas>(
        environment.baseUrl + 'OpcionesGenericas/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateOpcionesMenuUsuario(id: number, data: any): Observable<OpcionesMenuUsuario> {
    return this.http
      .put<OpcionesMenuUsuario>(
        environment.baseUrl + 'OpcionesMenuUsuario/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateOpcionMenu(id: number, data: any): Observable<OpcionMenu> {
    return this.http
      .put<OpcionMenu>(
        environment.baseUrl + 'OpcionMenu/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updatePresentacionMedicamentoxMedicamento(id: number, data: any): Observable<PresentacionMedicamentoxMedicamento> {
    return this.http
      .put<PresentacionMedicamentoxMedicamento>(
        environment.baseUrl + 'PresentacionMedicamentoxMedicamento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateProcesoInstaurado(id: number, data: any): Observable<ProcesoInstaurado> {
    return this.http
      .put<ProcesoInstaurado>(
        environment.baseUrl + 'ProcesoInstaurado/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updatePeriocidadEntrega(id: number, data: any): Observable<PeriocidadEntrega> {
    return this.http
      .put<PeriocidadEntrega>(
        environment.baseUrl + 'PeriocidadEntrega/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateProcesosAdministrativos(id: number, data: any): Observable<ProcesosAdministrativos> {
    return this.http
      .put<ProcesosAdministrativos>(
        environment.baseUrl + 'ProcesosAdministrativos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateProcesosInstaurados(id: number, data: any): Observable<ProcesosInstaurados> {
    return this.http
      .put<ProcesosInstaurados>(
        environment.baseUrl + 'ProcesosInstaurados/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateRangoTiempo(id: number, data: any): Observable<RangosTiempo> {
    return this.http
      .put<RangosTiempo>(
        environment.baseUrl + 'RangosTiempo/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateReemplazos(id: number, data: any): Observable<Reemplazos> {
    return this.http
      .put<Reemplazos>(
        environment.baseUrl + 'Reemplazos/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateReferente(id: number, data: any): Observable<Referente> {
    return this.http
      .put<Referente>(
        environment.baseUrl + 'Referente/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateRegimenxPais(id: number, data: any): Observable<RegimenxPais> {
    return this.http
      .put<RegimenxPais>(
        environment.baseUrl + 'RegimenxPais/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateReinicios(id: number, data: any): Observable<Reinicios> {
    return this.http
      .put<Reinicios>(
        environment.baseUrl + 'Reinicios/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateReportes(id: number, data: any): Observable<Reportes> {
    return this.http
      .put<Reportes>(
        environment.baseUrl + 'Reportes/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateReporteUsuario(id: number, data: any): Observable<ReporteUsuario> {
    return this.http
      .put<ReporteUsuario>(
        environment.baseUrl + 'ReporteUSuario/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteOcupacionesById(id: number): Observable<Ocupaciones> {
    return this.http
      .delete<Ocupaciones>(
        environment.baseUrl + 'Ocupaciones/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteOpcionesGenericasById(id: number): Observable<OpcionesGenericas> {
    return this.http
      .delete<OpcionesGenericas>(
        environment.baseUrl + 'OpcionesGenericas/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteOpcionesMenuUsuarioById(id: number): Observable<OpcionesMenuUsuario> {
    return this.http
      .delete<OpcionesMenuUsuario>(
        environment.baseUrl + 'OpcionesMenuUsuario/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteOpcionMenuById(id: number): Observable<OpcionMenu> {
    return this.http
      .delete<OpcionMenu>(
        environment.baseUrl + 'OpcionMenu/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePaisesxUsuarioById(id: number): Observable<PaisesxUsuario> {
    return this.http
      .delete<PaisesxUsuario>(
        environment.baseUrl + 'PaisesxUsuario/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteParentescoById(id: number): Observable<Parentesco> {
    return this.http
      .delete<Parentesco>(
        environment.baseUrl + 'Parentesco/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePerfilUsuarioById(id: number): Observable<PerfilUsuario> {
    return this.http
      .delete<PerfilUsuario>(
        environment.baseUrl + 'PerfilUsuario/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePeriodoConvulsionesById(id: number): Observable<PeriodoConvulsiones> {
    return this.http
      .delete<PeriodoConvulsiones>(
        environment.baseUrl + 'PeridodoConvulsiones/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePresentacionMedicamentoxMedicamentoById(id: number): Observable<PresentacionMedicamentoxMedicamento> {
    return this.http
      .delete<PresentacionMedicamentoxMedicamento>(
        environment.baseUrl + 'PresentacionMedicamentoxMedicamento/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteProcesoInstauradoById(id: number): Observable<ProcesoInstaurado> {
    return this.http
      .delete<ProcesoInstaurado>(
        environment.baseUrl + 'ProcesoInstaurado/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deletePeriocidadEntregaById(id: number): Observable<PeriocidadEntrega> {
    return this.http
      .delete<PeriocidadEntrega>(
        environment.baseUrl + 'PeriocidadEntrega/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteProcesosAdministrativosById(id: number): Observable<ProcesosAdministrativos> {
    return this.http
      .delete<ProcesosAdministrativos>(
        environment.baseUrl + 'ProcesosAdministrativos/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteProcesosInstauradosById(id: number): Observable<ProcesosInstaurados> {
    return this.http
      .delete<ProcesosInstaurados>(
        environment.baseUrl + 'ProcesosInstaurados/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteRangosTiempoById(id: number): Observable<RangosTiempo> {
    return this.http
      .delete<RangosTiempo>(
        environment.baseUrl + 'RangosTiempo/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteReemplazosById(id: number): Observable<Reemplazos> {
    return this.http
      .delete<Reemplazos>(
        environment.baseUrl + 'Reemplazos/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteReferenteById(id: number): Observable<Referente> {
    return this.http
      .delete<Referente>(
        environment.baseUrl + 'Referente/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteRegimenxPaisById(id: number): Observable<RegimenxPais> {
    return this.http
      .delete<RegimenxPais>(
        environment.baseUrl + 'RegimenxPais/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteReiniciosById(id: number): Observable<Reinicios> {
    return this.http
      .delete<Reinicios>(
        environment.baseUrl + 'Reinicios/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteReportesById(id: number): Observable<Reportes> {
    return this.http
      .delete<Reportes>(
        environment.baseUrl + 'Reportes/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteReporteUsuarioById(id: number): Observable<ReporteUsuario> {
    return this.http
      .delete<ReporteUsuario>(
        environment.baseUrl + 'ReporteUsuario/' + id,
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

