import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad, State, Country, Zonas } from '../Models/location.model';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class LocationService {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
    };

    // Consulta de registros de accion actual.
    getAllCountry(): Observable<Country> {
        return this.http
            .get<Country>(environment.baseUrl + 'Paises', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    getAllStateOrCountries(paisId: number, valorState: number) {
        return this.http
            .get<State>(environment.baseUrl + 'Departamento', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    getAllRegionByState(
        regionid: number,
        stateId: number,
        cityId: number
    ): Observable<Zonas> {
        return this.http
            .get<Zonas>(
                `${environment.baseUrl}Zonas/${stateId}/${cityId}`,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    getCityByCountry(valorPais: any, valorCity: number, valorState: number) {
        return this.http
            .get<Ciudad>(environment.baseUrl + 'Ciudad', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllState(): Observable<State> {
        return this.http
            .get<State>(environment.baseUrl + 'Departamento', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllCity(): Observable<Ciudad> {
        return this.http
            .get<Ciudad>(environment.baseUrl + 'Ciudad', this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de accion actual.
    getAllRegion(): Observable<Zonas> {
        return this.http
            .get<Zonas>((environment.baseUrl + 'Zonas'), this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCountryById(id: number): Observable<Country> {
        return this.http
            .get<Country>(
                environment.baseUrl + 'Paises/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllStateById(id: number): Observable<State> {
        return this.http
            .get<State>((environment.baseUrl + 'Departamento/' + id),this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllCityById(id: number): Observable<Ciudad> {
        return this.http
            .get<Ciudad>(environment.baseUrl + 'Ciudad/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllRegionById(id: number): Observable<Zonas> {
        return this.http
            .get<Zonas>((environment.baseUrl + 'Zonas/' + id),this.httpOptions)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCountry(data: any): Observable<Country> {
        return this.http
            .post<Country>(
                environment.baseUrl + 'Paises',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearState(data: any): Observable<State> {
        return this.http
            .post<State>(
                environment.baseUrl + 'Departamento',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearCity(data: any): Observable<Ciudad> {
        return this.http
            .post<Ciudad>(
                environment.baseUrl + 'Ciudad',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearRegion(data: any): Observable<Zonas> {
        return this.http
            .post<Zonas>(
                environment.baseUrl + 'Zonas',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCountry(id: number, data: any): Observable<Country> {
        return this.http
            .put<Country>(
                environment.baseUrl + 'Paises/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateState(id: number, data: any): Observable<State> {
        return this.http
            .put<State>(
                environment.baseUrl + 'Departamento/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateCity(id: number, data: any): Observable<Ciudad> {
        return this.http
            .put<Ciudad>(
                environment.baseUrl + 'Ciudad/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateRegion(id: number, data: any): Observable<Zonas> {
        return this.http
            .put<Zonas>(
                environment.baseUrl + 'Zonas/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla City
    deleteCountryById(id: number): Observable<Country> {
        return this.http
            .delete<Country>(
                environment.baseUrl + 'Paises/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla City
    deleteStateById(id: number): Observable<Country> {
        return this.http
            .delete<Country>(
                environment.baseUrl + 'Departamento/' + id,
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla City
    deleteCityById(id: number): Observable<Country> {
        return this.http
            .delete<Country>(
                environment.baseUrl + 'Ciudad/' + id,
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
