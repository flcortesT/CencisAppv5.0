import { Routes } from "@angular/router";
import { PacientesReportadosComponent } from "./pacientes-reportados.component";

export default [
    {
        path     : '',
        component: PacientesReportadosComponent,
        children : [
            {
                path     : '',
                component: PacientesReportadosComponent,
            },
        ],
    },
] as Routes;