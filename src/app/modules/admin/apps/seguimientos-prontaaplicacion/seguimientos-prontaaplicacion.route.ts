import { Routes } from "@angular/router";
import { SeguimientosProntaaplicacionComponent } from "./seguimientos-prontaaplicacion.component";

export default [
    {
        path     : '',
        component: SeguimientosProntaaplicacionComponent,
        children : [
            {
                path     : '',
                component: SeguimientosProntaaplicacionComponent,
            },
        ],
    },
] as Routes;