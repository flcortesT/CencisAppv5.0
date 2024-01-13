import { Routes } from "@angular/router";
import { SeguimientoAplicacionrealizadaComponent } from "./seguimiento-aplicacionrealizada.component";

export default [
    {
        path: '',
        component: SeguimientoAplicacionrealizadaComponent,
        children: [
            {
                path: '',
                component:
                    SeguimientoAplicacionrealizadaComponent,
            },
        ],
    },
] as Routes;
