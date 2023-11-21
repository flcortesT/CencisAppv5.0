import { Routes } from "@angular/router";
import { LocalizacionComponent } from "./localizacion.component";

export default [
    {
        path     : '',
        component: LocalizacionComponent,
        children : [
            {
                path     : '',
                component: LocalizacionComponent,
            },
        ],
    },
] as Routes;