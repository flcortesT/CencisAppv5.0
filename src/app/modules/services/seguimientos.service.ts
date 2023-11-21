import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { SeguimientoGestionSocial, SiNo, SoporteInscripcion, SoporteTratamiento } from '../Models/tablaMaestraSeguimientos.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguimientosService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllSeguimientoGetionSocial(): Observable<SeguimientoGestionSocial> {
    return this.http
      .get<SeguimientoGestionSocial>(environment.baseUrl + 'Ocupaciones/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllSiNo(): Observable<SiNo> {
    return this.http
      .get<SiNo>(environment.baseUrl + 'SiNo/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllSoporteInscripcion(): Observable<SoporteInscripcion> {
    return this.http
      .get<SoporteInscripcion>(environment.baseUrl + 'SoporteInscripcion/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllSoporteTratamiento(): Observable<SoporteTratamiento> {
    return this.http
      .get<SoporteTratamiento>(environment.baseUrl + 'SoporteTratamiento/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllSeguimientoGestionSocialById(id: number): Observable<SeguimientoGestionSocial> {
    return this.http
      .get<SeguimientoGestionSocial>(environment.baseUrl + 'SeguimientoGestionSocial/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllSiNoById(id: number): Observable<SiNo> {
    return this.http
      .get<SiNo>(environment.baseUrl + 'SiNo/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllSoporteInscripcionById(id: number): Observable<SoporteInscripcion> {
    return this.http
      .get<SoporteInscripcion>(environment.baseUrl + 'SoporteInscripcion/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllSoporteTratamientoById(id: number): Observable<SoporteTratamiento> {
    return this.http
      .get<SoporteTratamiento>(environment.baseUrl + 'SoporteTratamiento/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearSeguimientoGestionSocial(data: any): Observable<SeguimientoGestionSocial> {
    return this.http
      .post<SeguimientoGestionSocial>(
        environment.baseUrl + 'SeguimientoGestionSocial/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearSiNo(data: any): Observable<SiNo> {
    return this.http
      .post<SiNo>(
        environment.baseUrl + 'SiNo/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearSoporteInscripcion(data: any): Observable<SoporteInscripcion> {
    return this.http
      .post<SoporteInscripcion>(
        environment.baseUrl + 'SoporteInscripcion/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearSoporteTratamiento(data: any): Observable<SoporteTratamiento> {
    return this.http
      .post<SoporteInscripcion>(
        environment.baseUrl + 'SoporteTratamiento/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateSeguimientoGestionSocial(id: number, data: any): Observable<SeguimientoGestionSocial> {
    return this.http
      .put<SeguimientoGestionSocial>(
        environment.baseUrl + 'SeguimientoGestionSocial/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateSiNo(id: number, data: any): Observable<SiNo> {
    return this.http
      .put<SiNo>(
        environment.baseUrl + 'SiNo/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateSoporteInscripcion(id: number, data: any): Observable<SoporteInscripcion> {
    return this.http
      .put<SoporteInscripcion>(
        environment.baseUrl + 'SoporteInscripcion/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateSoporteTratamiento(id: number, data: any): Observable<SoporteTratamiento> {
    return this.http
      .put<SoporteTratamiento>(
        environment.baseUrl + 'SoporteTratamiento/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteSeguimientoGestionSocialById(id: number): Observable<SeguimientoGestionSocial> {
    return this.http
      .delete<SeguimientoGestionSocial>(
        environment.baseUrl + 'SeguimientoGestionSocial/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteSiNoById(id: number): Observable<SiNo> {
    return this.http
      .delete<SiNo>(
        environment.baseUrl + 'SiNo/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteSoporteInscripcionById(id: number): Observable<SoporteInscripcion> {
    return this.http
      .delete<SoporteInscripcion>(
        environment.baseUrl + 'SoporteInscripcion/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla ciudad
  deleteSoporteTratamientoById(id: number): Observable<SoporteTratamiento> {
    return this.http
      .delete<SoporteTratamiento>(
        environment.baseUrl + 'SoporteTratamiento/' + id,
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
