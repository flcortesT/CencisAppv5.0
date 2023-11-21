import { Routes } from "@angular/router";
import { SeguimientosPacientesinscritosComponent } from "./seguimientos-pacientesinscritos.component";

export default [
    {
        path     : '',
        component: SeguimientosPacientesinscritosComponent,
        children : [
            {
                path     : '',
                component: SeguimientosPacientesinscritosComponent,
            },
        ],
    },
] as Routes;