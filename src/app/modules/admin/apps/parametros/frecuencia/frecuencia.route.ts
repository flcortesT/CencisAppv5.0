import { Routes } from "@angular/router";
import { FrecuenciaComponent } from "./frecuencia.component";

export default [
    {
        path     : '',
        component: FrecuenciaComponent,
        children : [
            {
                path     : '',
                component: FrecuenciaComponent,
            },
        ],
    },
] as Routes;