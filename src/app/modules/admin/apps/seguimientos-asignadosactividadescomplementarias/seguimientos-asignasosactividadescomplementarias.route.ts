import { Routes } from "@angular/router";
import { SeguimientosAsignadosactividadescomplementariasComponent } from "./seguimientos-asignadosactividadescomplementarias.component";

export default [
    {
        path     : '',
        component: SeguimientosAsignadosactividadescomplementariasComponent,
        children : [
            {
                path     : '',
                component: SeguimientosAsignadosactividadescomplementariasComponent,
            },
        ],
    },
] as Routes;