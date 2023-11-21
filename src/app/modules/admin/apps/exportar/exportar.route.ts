import { Routes } from "@angular/router";
import { ExportarComponent } from "./exportar.component";

export default [
    {
        path     : '',
        component: ExportarComponent,
        children : [
            {
                path     : '',
                component: ExportarComponent,
            },
        ],
    },
] as Routes;