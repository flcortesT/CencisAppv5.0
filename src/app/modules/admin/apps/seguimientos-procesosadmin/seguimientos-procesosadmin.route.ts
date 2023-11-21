import { Routes } from "@angular/router";
import { SeguimientosProcesosadminComponent } from "./seguimientos-procesosadmin.component";

export default [
    {
        path     : '',
        component: SeguimientosProcesosadminComponent,
        children : [
            {
                path     : '',
                component: SeguimientosProcesosadminComponent,
            },
        ],
    },
] as Routes;