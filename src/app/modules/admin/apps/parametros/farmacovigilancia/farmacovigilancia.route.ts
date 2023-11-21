import { Routes } from "@angular/router";
import { FarmacovigilanciaComponent } from "./farmacovigilancia.component";

export default [
    {
        path     : '',
        component: FarmacovigilanciaComponent,
        children : [
            {
                path     : '',
                component: FarmacovigilanciaComponent,
            },
        ],
    },
] as Routes;