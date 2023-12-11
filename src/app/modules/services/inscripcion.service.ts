import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { Inscripcion } from '../Models/tablaMaestraInscripcion.model';

@Injectable({
    providedIn: 'root',
})
export class InscripcionService {
    constructor(public http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        }),
    };

    // Consulta de registros de accion actual.
    getAllInscripciones(): Observable<Inscripcion> {
        return this.http
            .get<Inscripcion>(environment.baseUrl + 'Pais')
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Consulta de registros de areas con parametros
    getAllInscripcionesById(id: number): Observable<Inscripcion> {
        return this.http
            .get<Inscripcion>(environment.baseUrl + 'Inscripcion/' + id)
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Creación de un nuevo registro en la tabla accion actual.
    crearPais(data: any): Observable<Inscripcion> {
        return this.http
            .post<Inscripcion>(
                environment.baseUrl + 'Inscripcion',
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Edición de registros existentes.
    updateInscripcion(id: number, data: any): Observable<Inscripcion> {
        return this.http
            .put<Inscripcion>(
                environment.baseUrl + 'Inscripcion/' + id,
                JSON.stringify(data),
                this.httpOptions
            )
            .pipe(retry(1), catchError(this.errorHandl));
    }

    // Eliminar registro de la tabla ciudad
    deleteInscripcionById(id: number): Observable<Inscripcion> {
        return this.http
            .delete<Inscripcion>(
                environment.baseUrl + 'Inscripcion/' + id,
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
