import { Routes } from "@angular/router";
import { PacientesNocontactadosComponent } from "./pacientes-nocontactados.component";

export default [
    {
        path     : '',
        component: PacientesNocontactadosComponent,
        children : [
            {
                path     : '',
                component: PacientesNocontactadosComponent,
            },
        ],
    },
] as Routes;