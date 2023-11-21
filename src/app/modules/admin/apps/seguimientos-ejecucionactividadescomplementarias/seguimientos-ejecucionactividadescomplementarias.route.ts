import { Routes } from "@angular/router";
import { SeguimientosEjecucionactividadescomplementariasComponent } from "./seguimientos-ejecucionactividadescomplementarias.component";

export default [
    {
        path     : '',
        component: SeguimientosEjecucionactividadescomplementariasComponent,
        children : [
            {
                path     : '',
                component: SeguimientosEjecucionactividadescomplementariasComponent,
            },
        ],
    },
] as Routes;