import { Routes } from "@angular/router";
import { DatosclinicosComponent } from "./datosclinicos.component";

export default [
    {
        path     : '',
        component: DatosclinicosComponent,
        children : [
            {
                path     : '',
                component: DatosclinicosComponent,
            },
        ],
    },
] as Routes;