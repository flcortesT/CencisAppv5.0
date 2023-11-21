import { Routes } from "@angular/router";
import { MaestracaracteristicasComponent } from "./maestracaracteristicas.component";

export default [
    {
        path     : '',
        component: MaestracaracteristicasComponent,
        children : [
            {
                path     : '',
                component: MaestracaracteristicasComponent,
            },
        ],
    },
] as Routes;