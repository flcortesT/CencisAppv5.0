import { Routes } from "@angular/router";
import { SeguimientosPacientesformuladosComponent } from "./seguimientos-pacientesformulados.component";

export default [
    {
        path     : '',
        component: SeguimientosPacientesformuladosComponent,
        children : [
            {
                path     : '',
                component: SeguimientosPacientesformuladosComponent,
            },
        ],
    },
] as Routes;