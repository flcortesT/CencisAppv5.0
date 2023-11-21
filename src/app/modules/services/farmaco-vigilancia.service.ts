import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FarmacoVigilancia } from '../Models/tablasMaestrasFarma.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { SeguimientoGestionSocial } from '../Models/tablaMaestraSeguimientos.model';
import { Frecuencia } from '../Models/datosClinicos.model';

@Injectable({
  providedIn: 'root'
})
export class FarmacoVigilanciaService {

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllFarmacoVigilancia(): Observable<FarmacoVigilancia> {
    return this.http
      .get<FarmacoVigilancia>(environment.baseUrl + 'farmacovigilancia/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllFrecuencia(): Observable<Frecuencia> {
    return this.http
      .get<Frecuencia>(environment.baseUrl + 'Frecuencia/')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllFarmacoVigilanciaById(id: number): Observable<FarmacoVigilancia> {
    return this.http
      .get<FarmacoVigilancia>(environment.baseUrl + 'FarmacoVigilancia/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllFrecuenciaById(id: number): Observable<Frecuencia> {
    return this.http
      .get<Frecuencia>(environment.baseUrl + 'Frecuencia/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearFarmacoVigilancia(data: any): Observable<FarmacoVigilancia> {
    return this.http
      .post<FarmacoVigilancia>(
        environment.baseUrl + 'FarmacoVigilancia/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearFrecuencia(data: any): Observable<Frecuencia> {
    return this.http
      .post<Frecuencia>(
        environment.baseUrl + 'Frecuencia/',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateFarmacoVigilancia(id: number, data: any): Observable<FarmacoVigilancia> {
    return this.http
      .put<FarmacoVigilancia>(
        environment.baseUrl + 'FarmacoVigilancia/' + id,
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

  // Eliminar registro de la tabla ciudad
  deleteFarmacoVigilanciaById(id: number): Observable<FarmacoVigilancia> {
    return this.http
      .delete<FarmacoVigilancia>(
        environment.baseUrl + 'FarmacoVigilancia/' + id,
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
