import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City, State, Country, Region } from '../Models/location.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
 
  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Consulta de registros de accion actual.
  getAllCountry(): Observable<Country> {
    return this.http
      .get<Country>(environment.baseUrl + 'Country')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getAllStateOrCountries(paisId: number, valorState: number) {
    return this.http
      .get<Country>(environment.baseUrl + 'Country')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getAllRegionByState(regionId: number, stateId: number, cityId: number) {
    return this.http
      .get<Country>(environment.baseUrl + 'Region')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  getCityByCountry(valorPais: any, valorCity: number, valorState: number) {
    return this.http
      .get<Country>(environment.baseUrl + 'Pais')
      .pipe(retry(1), catchError(this.errorHandl));
  }


  // Consulta de registros de accion actual.
  getAllState(): Observable<State> {
    return this.http
      .get<State>(environment.baseUrl + 'State')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllCity(): Observable<City> {
    return this.http
      .get<City>(environment.baseUrl + 'City')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de accion actual.
  getAllRegion(): Observable<Region> {
    return this.http
      .get<Region>(environment.baseUrl + 'Region')
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllCountryById(id: number): Observable<Country> {
    return this.http
      .get<Country>(environment.baseUrl + 'Country/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllStateById(id: number): Observable<State> {
    return this.http
      .get<State>(environment.baseUrl + 'State/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllCityById(id: number): Observable<City> {
    return this.http
      .get<City>(environment.baseUrl + 'City/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Consulta de registros de areas con parametros
  getAllRegionById(id: number): Observable<Region> {
    return this.http
      .get<Region>(environment.baseUrl + 'Region/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearCountry(data: any): Observable<Country> {
    return this.http
      .post<Country>(
        environment.baseUrl + 'Country',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearState(data: any): Observable<State> {
    return this.http
      .post<State>(
        environment.baseUrl + 'State',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearCity(data: any): Observable<City> {
    return this.http
      .post<City>(
        environment.baseUrl + 'City',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Creación de un nuevo registro en la tabla accion actual.
  crearRegion(data: any): Observable<Region> {
    return this.http
      .post<Region>(
        environment.baseUrl + 'Region',
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateCountry(id: number, data: any): Observable<Country> {
    return this.http
      .put<Country>(
        environment.baseUrl + 'Country/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateState(id: number, data: any): Observable<State> {
    return this.http
      .put<State>(
        environment.baseUrl + 'State/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateCity(id: number, data: any): Observable<City> {
    return this.http
      .put<City>(
        environment.baseUrl + 'City/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Edición de registros existentes.
  updateRegion(id: number, data: any): Observable<Region> {
    return this.http
      .put<Region>(
        environment.baseUrl + 'Region/' + id,
        JSON.stringify(data),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla City
  deleteCountryById(id: number): Observable<Country> {
    return this.http
      .delete<Country>(
        environment.baseUrl + 'Country/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla City
  deleteStateById(id: number): Observable<Country> {
    return this.http
      .delete<Country>(
        environment.baseUrl + 'State/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla City
  deleteCityById(id: number): Observable<Country> {
    return this.http
      .delete<Country>(
        environment.baseUrl + 'City/' + id,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // Eliminar registro de la tabla City
  deleteRegionById(id: number): Observable<Country> {
    return this.http
      .delete<Country>(
        environment.baseUrl + 'Region/' + id,
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
