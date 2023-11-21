import { Routes } from "@angular/router";
import { MaestracategoriasComponent } from "./maestracategorias.component";

export default [
    {
        path     : '',
        component: MaestracategoriasComponent,
        children : [
            {
                path     : '',
                component: MaestracategoriasComponent,
            },
        ],
    },
] as Routes;