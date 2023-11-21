import { Routes } from "@angular/router";
import { ExportarreportesComponent } from "./exportarreportes.component";

export default [
    {
        path     : '',
        component: ExportarreportesComponent,
        children : [
            {
                path     : '',
                component: ExportarreportesComponent,
            },
        ],
    },
] as Routes;