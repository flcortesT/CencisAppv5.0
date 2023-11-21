import { Routes } from "@angular/router";
import { SeguimientosSuspendidosComponent } from "./seguimientos-suspendidos.component";

export default [
    {
        path     : '',
        component: SeguimientosSuspendidosComponent,
        children : [
            {
                path     : '',
                component: SeguimientosSuspendidosComponent,
            },
        ],
    },
] as Routes;