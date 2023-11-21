import { Routes } from "@angular/router";
import { ActividadesComponent } from "./actividades.component";

export default [
    {
        path     : '',
        component: ActividadesComponent,
        children : [
            {
                path     : '',
                component: ActividadesComponent,
            },
        ],
    },
] as Routes;