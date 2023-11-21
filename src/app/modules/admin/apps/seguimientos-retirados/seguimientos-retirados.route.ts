import { Routes } from "@angular/router";
import { SeguimientosRetiradosComponent } from "./seguimientos-retirados.component";

export default [
    {
        path     : '',
        component: SeguimientosRetiradosComponent,
        children : [
            {
                path     : '',
                component: SeguimientosRetiradosComponent,
            },
        ],
    },
] as Routes;