import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FuseCardComponent } from '@fuse/components/card';
import { TranslocoModule } from '@ngneat/transloco';
import { Acciones, MaestraActividad } from 'app/modules/Models/actividad.model';
import { ActividadesService } from 'app/modules/services/actividades.service';

@Component({
    selector: 'app-actividades',
    templateUrl: './actividades.component.html',
    styleUrls: ['./actividades.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        RouterOutlet,
        NgIf,
        RouterLink,
        FuseCardComponent,
        NgFor,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatTooltipModule,
        TranslocoModule,
        MatButtonModule,
        TranslocoModule,
        MatIconModule,
        MatSidenavModule,
    ],
})
export class ActividadesComponent implements OnInit {
    actividadForm: FormGroup;

    detalleActividad: MaestraActividad[];
    selectDetalleActividad: any[];

    eventos: Acciones[];
    selectEventos: any[];

    constructor(
        public _formBuilder: FormBuilder,
        public _actividades: ActividadesService
    ) {}

    ngOnInit(): void {
        this.actividadForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                detalleActividad: ['', Validators.required],
                eventos: ['', Validators.required],
            }),
        });

        this.loadTablasMaestras();
        this.loadAcciones();
    }

    loadTablasMaestras(): void {
        this._actividades.getAllMaestraActividad().subscribe({
            next: (response) => {
                this.detalleActividad = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectDetalleActividad = Object.values(
                    this.detalleActividad[1]
                );
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    'La petición para cargar tablas maestras se ha completado.'
                );
            },
        });
    }

    loadAcciones(): void {
        this._actividades.getAllAcciones().subscribe({
            next: (response) => {
                this.eventos = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectEventos = Object.values(this.eventos[1]);
            },
            error: (error) => {
                console.error(error);
            },
            complete: () => {
                console.log(
                    'La petición para cargar acciones se ha completado.'
                );
            },
        });
    }
}
