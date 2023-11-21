import { SeguimientosInscripcionComponent } from "./seguimientos-inscripcion.component";
import { Routes } from "@angular/router";

export default [
    {
        path     : '',
        component: SeguimientosInscripcionComponent,
        children : [
            {
                path     : '',
                component: SeguimientosInscripcionComponent,
            },
        ],
    },
] as Routes;