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
import { MaestraCaracteristicas,Acciones } from 'app/modules/Models/actividad.model';
import { ActividadesService } from 'app/modules/services/actividades.service';
import { CaracteristicasService } from 'app/modules/services/caracteristicas.service';

@Component({
    selector: 'app-maestracaracteristicas',
    templateUrl: './maestracaracteristicas.component.html',
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
    styleUrls: ['./maestracaracteristicas.component.scss'],
})
export class MaestracaracteristicasComponent implements OnInit {
    caracteristicasForm: FormGroup;

    detalleMaestraCaracteristicas: MaestraCaracteristicas[];
    selectMaestraCaracteristicas: any[];

    eventos: Acciones[];
    selectEventos: any[];

    constructor(
        public _formBuilder: FormBuilder,
        public _actividades: ActividadesService,
        public _caracteristicas: CaracteristicasService
    ) {}

    ngOnInit(): void {
        this.caracteristicasForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                DetalleCaracteristicas: ['', Validators.required],
                eventos: ['', Validators.required],
            }),
        });

        this.loadTablasMaestrasCaracteristicas();
        this.loadAcciones();
    }

    // LoadTablas Maestra Carcteristicas
    loadTablasMaestrasCaracteristicas(): void {
        this._caracteristicas.getAllMaestraCaracteristicas().subscribe({
            next: (response) => {
                this.detalleMaestraCaracteristicas = Object.keys(response).map(
                    (key) => response[key]
                );
                this.selectMaestraCaracteristicas = Object.values(
                    this.detalleMaestraCaracteristicas[1]
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

    /// load acciones
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
