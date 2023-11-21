import { Routes } from "@angular/router";
import { SeguimientosTitulacionComponent } from "./seguimientos-titulacion.component";

export default [
    {
        path     : '',
        component: SeguimientosTitulacionComponent,
        children : [
            {
                path     : '',
                component: SeguimientosTitulacionComponent,
            },
        ],
    },
] as Routes;