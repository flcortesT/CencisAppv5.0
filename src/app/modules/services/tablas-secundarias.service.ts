import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoAccesoVehicular, TipoActividad, TipoConducta, TipoConfiguracionUsuario, TipoCorreo, TipoDas28, TipoDireccion, TipoDosis, TipoDosisxMedicamento, TipoHAQ, TipoIdentificacionxPais, TipoRango, TipoReporte, TipoTaller, TipoVisualizacion, TipoVivienda, UsoPrevioxMedicamento, ViaAdministracion, ViasReport, ZonasEnfermeras } from '../Models/tablaMaestraTablasSecundarias.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Zonas } from '../Models/location.model';

@Injectable({
    providedIn: 'root',
})
export class TablasSecundariasService {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
    };
    // Consulta de registros de accion actual.
    getAllTipoDireccion(): Observable<TipoDireccion> {
        return this.http
            .get<TipoDireccion>(environment.baseUrl + 'TipoDireccion/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipocConducta(): Observable<TipoConducta> {
        return this.http
            .get<TipoConducta>(environment.baseUrl + 'TipoConducta/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoConfiguracionUsuario(): Observable<TipoConfiguracionUsuario> {
        return this.http
            .get<TipoConfiguracionUsuario>(
                environment.baseUrl + 'TipoConfiguracionUsuario/'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoCorreo(): Observable<TipoCorreo> {
        return this.http
            .get<TipoCorreo>(environment.baseUrl + 'TipoCorreo/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipodas28(): Observable<TipoDas28> {
        return this.http
            .get<TipoDas28>(environment.baseUrl + 'TipoDas28/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoDosis(): Observable<TipoDosis> {
        return this.http
            .get<TipoDosis>(environment.baseUrl + 'TipoDosis/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoDosisxMedicamento(): Observable<TipoDosisxMedicamento> {
        return this.http
            .get<TipoDosisxMedicamento>(
                environment.baseUrl + 'TipoDosisxMedicamento/'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoHAQ(): Observable<TipoHAQ> {
        return this.http
            .get<TipoHAQ>(environment.baseUrl + 'TipoHAQ/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoIdentificacionxPais(): Observable<TipoIdentificacionxPais> {
        return this.http
            .get<TipoIdentificacionxPais>(
                environment.baseUrl + 'TipoIdentificacionxPais/'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoRango(): Observable<TipoRango> {
        return this.http
            .get<TipoRango>(environment.baseUrl + 'TipoRango/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoReporte(): Observable<TipoReporte> {
        return this.http
            .get<TipoReporte>(environment.baseUrl + 'TipoReporte/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoAccesoVehicular(): Observable<TipoAccesoVehicular> {
        return this.http
            .get<TipoAccesoVehicular>(
                environment.baseUrl + 'TipoAccesoVehicular/'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoTaller(): Observable<TipoTaller> {
        return this.http
            .get<TipoActividad>(environment.baseUrl + 'TipoActividad/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoVisualizacion(): Observable<TipoVisualizacion> {
        return this.http
            .get<TipoVisualizacion>(environment.baseUrl + 'TipoVisualizacion/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllTipoVivienda(): Observable<TipoVivienda> {
        return this.http
            .get<TipoVivienda>(environment.baseUrl + 'TipoVivienda/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllUsoPrevioxMedicamento(): Observable<UsoPrevioxMedicamento> {
        return this.http
            .get<UsoPrevioxMedicamento>(
                environment.baseUrl + 'UsoPrevioxMedicamento/'
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllViaAdministracion(): Observable<ViaAdministracion> {
        return this.http
            .get<ViaAdministracion>(environment.baseUrl + 'ViaAdministracion/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllViasReport(): Observable<ViasReport> {
        return this.http
            .get<ViasReport>(environment.baseUrl + 'ViaReport/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllZonasCiudad(): Observable<Zonas> {
        return this.http
            .get<Zonas>(environment.baseUrl + 'ZonasCiudad/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllZonasEnfermeras(): Observable<ZonasEnfermeras> {
        return this.http
            .get<ZonasEnfermeras>(environment.baseUrl + 'ZonasEnfermeras/')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoActividadById(id: number): Observable<TipoActividad> {
        return this.http
            .get<TipoActividad>(environment.baseUrl + 'TipoActividad/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoConductaById(id: number): Observable<TipoConducta> {
        return this.http
            .get<TipoConducta>(environment.baseUrl + 'TipoConducta/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoConfiguracionUsuarioById(
        id: number
    ): Observable<TipoConfiguracionUsuario> {
        return this.http
            .get<TipoConfiguracionUsuario>(environment.baseUrl + 'SiNo/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoCorreoById(id: number): Observable<TipoCorreo> {
        return this.http
            .get<TipoCorreo>(environment.baseUrl + 'TipoCorreo/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoDas28ById(id: number): Observable<TipoDas28> {
        return this.http
            .get<TipoDas28>(environment.baseUrl + 'TipoDas28/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoDireccionById(id: number): Observable<TipoDireccion> {
        return this.http
            .get<TipoDireccion>(environment.baseUrl + 'TipoDireccion/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoDosisById(id: number): Observable<TipoDosis> {
        return this.http
            .get<TipoDosis>(environment.baseUrl + 'TipoDosis/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoDosisxMedicamentoById(
        id: number
    ): Observable<TipoDosisxMedicamento> {
        return this.http
            .get<TipoDosisxMedicamento>(
                environment.baseUrl + 'TipoDosisxMedicamento/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoHAQById(id: number): Observable<TipoHAQ> {
        return this.http
            .get<TipoHAQ>(environment.baseUrl + 'TipoHAQ/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoIdentificacionxPaisById(
        id: number
    ): Observable<TipoIdentificacionxPais> {
        return this.http
            .get<TipoIdentificacionxPais>(
                environment.baseUrl + 'TipoIdentificacionxPais/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoRangoById(id: number): Observable<TipoRango> {
        return this.http
            .get<TipoRango>(environment.baseUrl + 'TipoRango/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoReporteById(id: number): Observable<TipoReporte> {
        return this.http
            .get<TipoReporte>(environment.baseUrl + 'TipoReporte/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoAccesoVehicularById(id: number): Observable<TipoAccesoVehicular> {
        return this.http
            .get<TipoAccesoVehicular>(
                environment.baseUrl + 'TipoAccesoVehicular/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoTallerById(id: number): Observable<TipoTaller> {
        return this.http
            .get<TipoTaller>(environment.baseUrl + 'TipoTaller/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoVisualizacionById(id: number): Observable<TipoVisualizacion> {
        return this.http
            .get<TipoVisualizacion>(
                environment.baseUrl + 'TipoVisualizacion/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllTipoViviendaById(id: number): Observable<TipoVivienda> {
        return this.http
            .get<TipoVivienda>(environment.baseUrl + 'TipoVivienda/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllUsoPrevioxMedicamentoById(
        id: number
    ): Observable<UsoPrevioxMedicamento> {
        return this.http
            .get<UsoPrevioxMedicamento>(
                environment.baseUrl + 'UsoPrevioxMedicamento/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllViaAdministracionById(id: number): Observable<ViaAdministracion> {
        return this.http
            .get<ViaAdministracion>(
                environment.baseUrl + 'ViaAdministracion/' + id
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllViasReportById(id: number): Observable<ViasReport> {
        return this.http
            .get<ViasReport>(environment.baseUrl + 'ViasReport/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllZonasCiudadById(id: number): Observable<Zonas> {
        return this.http
            .get<Zonas>(environment.baseUrl + 'ZonasCiudad/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllZonasEnfermerasById(id: number): Observable<ZonasEnfermeras> {
        return this.http
            .get<ZonasEnfermeras>(environment.baseUrl + 'ZonasEnfermeras/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoActividad(data: any): Observable<TipoActividad> {
        return this.http
            .post<TipoActividad>(
                environment.baseUrl + 'TipoActividad/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoConducta(data: any): Observable<TipoConducta> {
        return this.http
            .post<TipoConducta>(
                environment.baseUrl + 'TipoConducta/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoConfiguracionUsuario(
        data: any
    ): Observable<TipoConfiguracionUsuario> {
        return this.http
            .post<TipoConfiguracionUsuario>(
                environment.baseUrl + 'TipoConfiguracionUsuario/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoCorreo(data: any): Observable<TipoCorreo> {
        return this.http
            .post<TipoCorreo>(
                environment.baseUrl + 'TipoCorreo/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoDas28(data: any): Observable<TipoDas28> {
        return this.http
            .post<TipoDas28>(
                environment.baseUrl + 'TipoDas28/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoDireccion(data: any): Observable<TipoDireccion> {
        return this.http
            .post<TipoDireccion>(
                environment.baseUrl + 'TipoDireccion/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoDosis(data: any): Observable<TipoDosis> {
        return this.http
            .post<TipoDosis>(
                environment.baseUrl + 'TipoDosis/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoDosisxMedicamento(data: any): Observable<TipoDosisxMedicamento> {
        return this.http
            .post<TipoDosisxMedicamento>(
                environment.baseUrl + 'TipoDosisxMedicamento/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoHAQ(data: any): Observable<TipoHAQ> {
        return this.http
            .post<TipoHAQ>(
                environment.baseUrl + 'TipoHAQ/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoIdentificacionxPais(
        data: any
    ): Observable<TipoIdentificacionxPais> {
        return this.http
            .post<TipoIdentificacionxPais>(
                environment.baseUrl + 'TipoIdentifciacionxPais/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoRango(data: any): Observable<TipoRango> {
        return this.http
            .post<TipoRango>(
                environment.baseUrl + 'TipoRango/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoReporte(data: any): Observable<TipoReporte> {
        return this.http
            .post<TipoReporte>(
                environment.baseUrl + 'TipoReporte/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoAccesoVehicular(data: any): Observable<TipoAccesoVehicular> {
        return this.http
            .post<TipoAccesoVehicular>(
                environment.baseUrl + 'TipoAccesoVehicular/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoTaller(data: any): Observable<TipoTaller> {
        return this.http
            .post<TipoTaller>(
                environment.baseUrl + 'TipoTaller/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoVisualizacion(data: any): Observable<TipoVisualizacion> {
        return this.http
            .post<TipoVisualizacion>(
                environment.baseUrl + 'TipoVisualizacion/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearTipoVivienda(data: any): Observable<TipoVivienda> {
        return this.http
            .post<TipoVivienda>(
                environment.baseUrl + 'TipoVivienda/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearUsoPrevioxMedicamento(data: any): Observable<UsoPrevioxMedicamento> {
        return this.http
            .post<UsoPrevioxMedicamento>(
                environment.baseUrl + 'UsoPrevioxMedicamento/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearViaAdministracion(data: any): Observable<ViaAdministracion> {
        return this.http
            .post<ViaAdministracion>(
                environment.baseUrl + 'ViaAdministracion/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearViasReport(data: any): Observable<ViasReport> {
        return this.http
            .post<ViasReport>(
                environment.baseUrl + 'ViasReport/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearZonasCiudad(data: any): Observable<Zonas> {
        return this.http
            .post<Zonas>(
                environment.baseUrl + 'ZonasCiudad/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearZonasEnfermeras(data: any): Observable<ZonasEnfermeras> {
        return this.http
            .post<ZonasEnfermeras>(
                environment.baseUrl + 'ZonasEnfermeras/',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoActividad(id: number, data: any): Observable<TipoActividad> {
        return this.http
            .put<TipoActividad>(
                environment.baseUrl + 'TipoActividad/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoConducta(id: number, data: any): Observable<TipoConducta> {
        return this.http
            .put<TipoConducta>(
                environment.baseUrl + 'TipoConducta/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoConfiguracionUsuario(
        id: number,
        data: any
    ): Observable<TipoConfiguracionUsuario> {
        return this.http
            .put<TipoConfiguracionUsuario>(
                environment.baseUrl + 'TipoConfiguracionUsuario/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoCorreo(id: number, data: any): Observable<TipoCorreo> {
        return this.http
            .put<TipoCorreo>(
                environment.baseUrl + 'TipoCorreo/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoDas28(id: number, data: any): Observable<TipoDas28> {
        return this.http
            .put<TipoDas28>(
                environment.baseUrl + 'TipoDas28/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoDireccion(id: number, data: any): Observable<TipoDireccion> {
        return this.http
            .put<TipoDireccion>(
                environment.baseUrl + 'TipoDireccion/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoDosis(id: number, data: any): Observable<TipoDosis> {
        return this.http
            .put<TipoDosis>(
                environment.baseUrl + 'TipoDosis/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoDosisxMedicamento(
        id: number,
        data: any
    ): Observable<TipoDosisxMedicamento> {
        return this.http
            .put<TipoDosisxMedicamento>(
                environment.baseUrl + 'TipoDosisMedicamento/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoHAQ(id: number, data: any): Observable<TipoHAQ> {
        return this.http
            .put<TipoHAQ>(
                environment.baseUrl + 'TipoHAQ/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoIdentificacionxPais(
        id: number,
        data: any
    ): Observable<TipoIdentificacionxPais> {
        return this.http
            .put<TipoIdentificacionxPais>(
                environment.baseUrl + 'TipoIdentificacionxPais/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoRango(id: number, data: any): Observable<TipoRango> {
        return this.http
            .put<TipoRango>(
                environment.baseUrl + 'TipoRango/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoReporte(id: number, data: any): Observable<TipoReporte> {
        return this.http
            .put<TipoReporte>(
                environment.baseUrl + 'TipoReporte/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoAccesoVehicular(
        id: number,
        data: any
    ): Observable<TipoAccesoVehicular> {
        return this.http
            .put<TipoAccesoVehicular>(
                environment.baseUrl + 'TipoAccesoVehicular/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoTaller(id: number, data: any): Observable<TipoTaller> {
        return this.http
            .put<TipoTaller>(
                environment.baseUrl + 'TipoTaller/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoVisualizacion(
        id: number,
        data: any
    ): Observable<TipoVisualizacion> {
        return this.http
            .put<TipoVisualizacion>(
                environment.baseUrl + 'TipoVisualizacion/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateTipoVivienda(id: number, data: any): Observable<TipoVivienda> {
        return this.http
            .put<TipoVivienda>(
                environment.baseUrl + 'TipoVivienda/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateUsoPrevioxMedicamento(
        id: number,
        data: any
    ): Observable<UsoPrevioxMedicamento> {
        return this.http
            .put<UsoPrevioxMedicamento>(
                environment.baseUrl + 'UsoPrevioxMedicamento/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateViaAdministracion(
        id: number,
        data: any
    ): Observable<ViaAdministracion> {
        return this.http
            .put<ViaAdministracion>(
                environment.baseUrl + 'ViaAdministracion/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateViasReport(id: number, data: any): Observable<ViasReport> {
        return this.http
            .put<ViasReport>(
                environment.baseUrl + 'Viasreport/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateZonasCiudad(id: number, data: any): Observable<Zonas> {
        return this.http
            .put<Zonas>(
                environment.baseUrl + 'ZonasCiudad/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateZonasEnfermeras(id: number, data: any): Observable<ZonasEnfermeras> {
        return this.http
            .put<ZonasEnfermeras>(
                environment.baseUrl + 'ZonasEnfermeras/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoActividadById(id: number): Observable<TipoActividad> {
        return this.http
            .delete<TipoActividad>(
                environment.baseUrl + 'TipoActividad/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoConductaById(id: number): Observable<TipoConducta> {
        return this.http
            .delete<TipoConducta>(
                environment.baseUrl + 'TipoConducta/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoConfiguracionUsuarioById(
        id: number
    ): Observable<TipoConfiguracionUsuario> {
        return this.http
            .delete<TipoConfiguracionUsuario>(
                environment.baseUrl + 'TipoConfiguracionUsuario/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoCorreoById(id: number): Observable<TipoCorreo> {
        return this.http
            .delete<TipoCorreo>(
                environment.baseUrl + 'TipoCorreo/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoDas28ById(id: number): Observable<TipoDas28> {
        return this.http
            .delete<TipoDas28>(
                environment.baseUrl + 'TipoDas28/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoDireccionById(id: number): Observable<TipoDireccion> {
        return this.http
            .delete<TipoDireccion>(
                environment.baseUrl + 'TipoDireccion/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoDosisById(id: number): Observable<TipoDosis> {
        return this.http
            .delete<TipoDosis>(
                environment.baseUrl + 'TipoDosis/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoDosisxMedicamentoById(
        id: number
    ): Observable<TipoDosisxMedicamento> {
        return this.http
            .delete<TipoDosisxMedicamento>(
                environment.baseUrl + 'TipoDosisxMedicamento/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoHAQById(id: number): Observable<TipoHAQ> {
        return this.http
            .delete<TipoHAQ>(
                environment.baseUrl + 'TipoHAQ/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoIdentificacionxPaisById(
        id: number
    ): Observable<TipoIdentificacionxPais> {
        return this.http
            .delete<TipoIdentificacionxPais>(
                environment.baseUrl + 'TipoIdentificacionxPais/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoRangoById(id: number): Observable<TipoRango> {
        return this.http
            .delete<TipoRango>(
                environment.baseUrl + 'TipoRango/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoReporteById(id: number): Observable<TipoReporte> {
        return this.http
            .delete<TipoReporte>(
                environment.baseUrl + 'TipoReporte/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoAccesoVehicularById(id: number): Observable<TipoAccesoVehicular> {
        return this.http
            .delete<TipoAccesoVehicular>(
                environment.baseUrl + 'TipoAccesoVehicular/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoTallerById(id: number): Observable<TipoTaller> {
        return this.http
            .delete<TipoTaller>(
                environment.baseUrl + 'TipoTaller/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoVisualizacionById(id: number): Observable<TipoVisualizacion> {
        return this.http
            .delete<TipoVisualizacion>(
                environment.baseUrl + 'TipoVisualizacion/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteTipoViviendaById(id: number): Observable<TipoVivienda> {
        return this.http
            .delete<TipoVivienda>(
                environment.baseUrl + 'TipoVivienda/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteUsoPrevioxMedicamentoById(
        id: number
    ): Observable<UsoPrevioxMedicamento> {
        return this.http
            .delete<UsoPrevioxMedicamento>(
                environment.baseUrl + 'UsoPrevioxMedicamento/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteViaAdministracionById(id: number): Observable<ViaAdministracion> {
        return this.http
            .delete<ViaAdministracion>(
                environment.baseUrl + 'ViaAdministracion/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteViasReportById(id: number): Observable<ViasReport> {
        return this.http
            .delete<ViasReport>(
                environment.baseUrl + 'ViasReport/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteZonasCiudadById(id: number): Observable<Zonas> {
        return this.http
            .delete<Zonas>(
                environment.baseUrl + 'ZonasCiudad/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteZonasEnfermerasById(id: number): Observable<ZonasEnfermeras> {
        return this.http
            .delete<ZonasEnfermeras>(
                environment.baseUrl + 'ZonasEnfermeras/' + id,
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
