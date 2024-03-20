import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
<<<<<<< HEAD
    // Redirect empty path to '/sign-in' login.
=======
    
>>>>>>> e97a5e411d1ffcdbfa5cb0fdc4772fca040fa09a
    { path: '', pathMatch: 'full', redirectTo: 'dashboards/project' },

    {
        path: 'signed-in-redirect',
        pathMatch: 'full',
        redirectTo: 'dashboards/project',
    },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'confirmation-required',
                loadChildren: () =>
                    import(
                        'app/modules/auth/confirmation-required/confirmation-required.routes'
                    ),
            },
            {
                path: 'forgot-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/forgot-password/forgot-password.routes'
                    ),
            },
            {
                path: 'reset-password',
                loadChildren: () =>
                    import(
                        'app/modules/auth/reset-password/reset-password.routes'
                    ),
            },
            {
                path: 'sign-in',
                loadChildren: () =>
                    import('app/modules/auth/sign-in/sign-in.routes'),
            },
            {
                path: 'sign-up',
                loadChildren: () =>
                    import('app/modules/auth/sign-up/sign-up.routes'),
            },
            {
                path: 'grants',
                loadChildren: ()=> import('app/modules/admin/pages/authentication/grants/grants.routes')
            }
        ],
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'sign-out',
                loadChildren: () =>
                    import('app/modules/auth/sign-out/sign-out.routes'),
            },
            {
                path: 'unlock-session',
                loadChildren: () =>
                    import(
                        'app/modules/auth/unlock-session/unlock-session.routes'
                    ),
            },
        ],
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty',
        },
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('app/modules/landing/home/home.routes'),
            },
        ],
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver,
        },
        children: [
            // Dashboards
            {
                path: 'dashboards',
                children: [
                    {
                        path: 'project',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/project/project.routes'
                            ),
                    },
                    {
                        path: 'analytics',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/dashboards/analytics/analytics.routes'
                            ),
                    },
                ],
            },

            // Apps
            {
                path: 'apps',
                children: [
                    {
                        path: 'registros',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/registros/registros.route'
                            ),
                    },
                    {
                        path: 'pacientesreportados',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/pacientes-reportados/pacientes-reportados.route'
                            ),
                    },
                    {
                        path: 'pacientesnocontactados',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/pacientes-nocontactados/pacientes-nocontactados.route'
                            ),
                    },
                    {
                        path: 'eninscripcion',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-inscripcion/seguimientos-inscripcion.route'
                            ),
                    },
                    {
                        path: 'pacientesinscritos',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-pacientesinscritos/seguimientos-pacientesinscritos.route'
                            ),
                    },
                    {
                        path: 'pacientesformulados',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-pacientesformulados/seguimientos-pacientesformulados.route'
                            ),
                    },
                    {
                        path: 'titulacion',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-titulacion/seguimientos-titulacion.route'
                            ),
                    },
                    {
                        path: 'suspendidos',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-suspendidos/seguimientos-suspendidos.route'
                            ),
                    },
                    {
                        path: 'retirados',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-retirados/seguimientos-retirados.route'
                            ),
                    },
                    {
                        path: 'aplicacionrealizada',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimiento-aplicacionrealizada/seguimiento-aplicacionrealizada.route'
                            ),
                    },
                    {
                        path: 'prontaaplicacion',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-prontaaplicacion/seguimientos-prontaaplicacion.route'
                            ),
                    },
                    {
                        path: 'asignandoactividades',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-asignadosactividadescomplementarias/seguimientos-asignasosactividadescomplementarias.route'
                            ),
                    },
                    {
                        path: 'ejecucionesactividades',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-ejecucionactividadescomplementarias/seguimientos-ejecucionactividadescomplementarias.route'
                            ),
                    },
                    {
                        path: 'procesosadmin',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/seguimientos-procesosadmin/seguimientos-procesosadmin.route'
                            ),
                    },
                    {
                        path: 'file-manager',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/file-manager/file-manager.routes'
                            ),
                    },
                    {
                        path: 'help-center',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/help-center/help-center.routes'
                            ),
                    },
                    {
                        path: 'academy',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/academy/academy.routes'
                            ),
                    },
                    {
                        path: 'chat',
                        loadChildren: () =>
                            import('app/modules/admin/apps/chat/chat.routes'),
                    },
                ],
            },

            {
                path: 'parametros',
                children: [
                    {
                        path: 'actividades',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/actividades/actividades.routes'
                            ),
                    },
                    {
                        path: 'caracteristicas',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/maestracaracteristicas/maestracaracteristicas.routes'
                            ),
                    },
                    {
                        path: 'gestionejecucion',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/maestradegestion/maestradegestion.route'
                            ),
                    },
                    {
                        path: 'maestradatosclinicos',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/datosclinicos/datosclinicos.route'
                            ),
                    },
                    {
                        path: 'localizacion',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/localizacion/localizacion.route'
                            ),
                    },
                    {
                        path: 'categorias',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/maestracategorias/maestracategorias.route'
                            ),
                    },
                    {
                        path: 'medicamentos',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/medicamentos/medicamentos.route'
                            ),
                    },
                    {
                        path: 'farmacovigilancia',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/farmacovigilancia/farmacovigilancia.route'
                            ),
                    },
                    {
                        path: 'frecuencia',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/parametros/frecuencia/frecuencia.route'
                            ),
                    },
                ],
            },

            {
                path: 'reportes',
                children: [
                    {
                        path: 'exportarreportes',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/exportarreportes/exportarreportes.route'
                            ),
                    },
                    {
                        path: 'exportar',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/exportar/exportar.route'
                            ),
                    },
                    {
                        path: 'consultapacientes',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/apps/consultapacientes/consultapacientes.route'
                            ),
                    },
                ],
            },
            // Pages
            {
                path: 'pages',
                children: [

                    // Authentication
                    {
                        path: 'authentication',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/authentication/authentication.routes'
                            ),
                    },

                    // Error
                    {
                        path: 'error',
                        children: [
                            {
                                path: '404',
                                loadChildren: () =>
                                    import(
                                        'app/modules/admin/pages/error/error-404/error-404.routes'
                                    ),
                            },
                            {
                                path: '500',
                                loadChildren: () =>
                                    import(
                                        'app/modules/admin/pages/error/error-500/error-500.routes'
                                    ),
                            },
                        ],
                    },

                    // Maintenance
                    {
                        path: 'maintenance',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/maintenance/maintenance.routes'
                            ),
                    },

                    // Profile
                    {
                        path: 'profile',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/profile/profile.routes'
                            ),
                    },

                    // Settings
                    {
                        path: 'settings',
                        loadChildren: () =>
                            import(
                                'app/modules/admin/pages/settings/settings.routes'
                            ),
                    },
                ],
            },

            // 404 & Catch all
            {
                path: '404-not-found',
                pathMatch: 'full',
                loadChildren: () =>
                    import(
                        'app/modules/admin/pages/error/error-404/error-404.routes'
                    ),
            },
            { path: '**', redirectTo: '404-not-found' },
        ],
    },
];
