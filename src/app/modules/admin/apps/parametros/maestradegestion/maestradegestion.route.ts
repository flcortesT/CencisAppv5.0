import { Routes } from "@angular/router";
import { MaestradegestionComponent } from "./maestradegestion.component";

export default [
    {
        path     : '',
        component: MaestradegestionComponent,
        children : [
            {
                path     : '',
                component: MaestradegestionComponent,
            },
        ],
    },
] as Routes;