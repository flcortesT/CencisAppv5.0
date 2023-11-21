import { Routes } from "@angular/router";
import { ConsultapacientesComponent } from "./consultapacientes.component";

export default [
    {
        path     : '',
        component: ConsultapacientesComponent,
        children : [
            {
                path     : '',
                component: ConsultapacientesComponent,
            },
        ],
    },
] as Routes;