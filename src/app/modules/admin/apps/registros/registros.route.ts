import { Routes } from "@angular/router";
import { RegistrosComponent } from "./registros.component";

export default [
    {
        path     : '',
        component: RegistrosComponent,
        children : [
            {
                path     : '',
                component: RegistrosComponent,
            },
        ],
    },
] as Routes;