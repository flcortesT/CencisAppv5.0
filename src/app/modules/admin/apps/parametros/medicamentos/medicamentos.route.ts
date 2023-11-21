import { Routes } from "@angular/router";
import { MedicamentosComponent } from "./medicamentos.component";

export default [
    {
        path     : '',
        component: MedicamentosComponent,
        children : [
            {
                path     : '',
                component: MedicamentosComponent,
            },
        ],
    },
] as Routes;