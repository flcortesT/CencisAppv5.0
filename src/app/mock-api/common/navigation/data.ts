/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-document-check',
                link: '/dashboards/project',
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics',
            },
        ],
    },
    {
        id: 'perfiles',
        title: 'Tu Negocio',
        subtitle: 'Perfiles de negocio',
        type: 'group',
        icon: 'heroicons_outline:users',
        children: [
            {
                id: 'perfiles.perfil',
                title: 'Perfil',
                type: 'collapsable',
                icon: 'heroicons_outline:users',
                children: [
                    {
                        id: 'perfiles.perfil.perfil',
                        title: 'Perfil',
                        type: 'basic',
                        icon: 'heroicons_outline:user',
                        link: '/pages/authentication/sign-in/modern',
                    },
                    {
                        id: 'perfiles.perfil.calendario',
                        title: 'Calendario',
                        type: 'basic',
                        icon: 'heroicons_outline:calendar-days',
                        link: '/pages/authentication/sign-up/modern',
                    },
                    {
                        id: 'perfiles.perfil.producto',
                        title: 'Productos creados',
                        type: 'basic',
                        icon: 'heroicons_outline:document',
                        link: '/pages/authentication/sign-out/modern',
                    },
                    {
                        id: 'perfiles.perfil.suscripciones',
                        title: 'Suscripciones',
                        type: 'basic',
                        icon: 'heroicons_outline:envelope-open',
                        link: '/pages/authentication/forgot-password/modern',
                    },
                    {
                        id: 'perfiles.perfil.otros',
                        title: 'Otros creadores',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/pages/authentication/reset-password/modern',
                    },
                    {
                        id: 'perfiles.perfil.academia',
                        title: 'Academia',
                        type: 'basic',
                        icon: 'heroicons_outline:academic-cap',
                        link: '/pages/authentication/unlock-session/modern',
                    },
                ],
            },
        ],
    },
    {
        id: 'mkting',
        title: 'Tu Marketing',
        subtitle: 'Estaretegías de negocio',
        type: 'group',
        icon: 'heroicons_outline:inbox-stack',
        children: [
            {
                id: 'mkting.estrategia',
                title: 'Estratégias',
                type: 'collapsable',
                icon: 'heroicons_outline:inbox-stack',
                children: [
                    {
                        id: 'mkting.email',
                        title: 'Email marketing',
                        type: 'basic',
                        icon: 'heroicons_outline:envelope',
                        link: '/pages/authentication/sign-in/modern',
                    },
                    {
                        id: 'mkting.audiencia',
                        title: 'Audencia (BD)',
                        type: 'basic',
                        icon: 'heroicons_outline:pencil-square',
                        link: '/pages/authentication/sign-up/modern',
                    },
                    {
                        id: 'mkting.metricas',
                        title: 'Métricas y ventas',
                        type: 'basic',
                        icon: 'heroicons_outline:presentation-chart-bar',
                        link: '/pages/authentication/sign-out/modern',
                    },
                ],
            },
        ],
    },
    {
        id: 'compras',
        title: 'Tu Compras',
        subtitle: 'Compras efectuadas',
        type: 'group',
        icon: 'heroicons_outline:shopping-cart',
        children: [
            {
                id: 'compras.productos',
                title: 'Compras',
                type: 'collapsable',
                icon: 'heroicons_outline:shopping-cart',
                children: [
                    {
                        id: 'compras.productos',
                        title: 'Productos',
                        type: 'basic',
                        icon: 'heroicons_outline:shopping-bag',
                        link: '/pages/authentication/sign-in/modern',
                    },
                    {
                        id: 'compras.suscripciones',
                        title: 'Suscripciones',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/authentication/sign-up/modern',
                    },
                ],
            },
        ],
    },
    {
        id: 'ayuda',
        title: 'Ayuda',
        subtitle: 'Ayudas del sistema',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'ayudas',
                title: 'Ayuda',
                type: 'collapsable',
                icon: 'heroicons_outline:information-circle',
                children: [
                    {
                        id: 'ayuda.configuracion',
                        title: 'Configuraciones',
                        type: 'basic',
                        icon: 'heroicons_outline:cog-8-tooth',
                        link: '/pages/authentication/sign-in/modern',
                    },
                    {
                        id: 'ayuda.servicio',
                        title: 'Servicio al cliente',
                        type: 'basic',
                        icon: 'heroicons_outline:ticket',
                        link: '/pages/authentication/sign-up/modern',
                    },
                    {
                        id: 'ayuda.politicas',
                        title: 'Politicas',
                        type: 'basic',
                        icon: 'heroicons_outline:information-circle',
                        link: '/pages/authentication/sign-up/modern',
                    },
                ],
            },
        ],
    },
    {
        id: 'pages',
        title: 'Security',
        subtitle: 'Security, Authorization of TeraQ',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
                    {
                        id: 'pages.authentication.sign-in',
                        title: 'Sign in',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-open',
                        link: '/pages/authentication/sign-in/modern',
                    },
                    {
                        id: 'pages.authentication.sign-up',
                        title: 'Sign up',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/authentication/sign-up/modern',
                    },
                    {
                        id: 'pages.authentication.sign-out',
                        title: 'Sign out',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-closed',
                        link: '/pages/authentication/sign-out/modern',
                    },
                    {
                        id: 'pages.authentication.grant',
                        title: 'Grants',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-open',
                        link: '/pages/authentication/grants',
                    },
                    {
                        id: 'pages.authentication.sign-forgot',
                        title: 'Forgot password',
                        type: 'basic',
                        icon: 'heroicons_outline:key',
                        link: '/pages/authentication/forgot-password/modern',
                    },
                    {
                        id: 'pages.authentication.sign-reset',
                        title: 'Reset password',
                        type: 'basic',
                        icon: 'heroicons_outline:x-circle',
                        link: '/pages/authentication/reset-password/modern',
                    },
                    {
                        id: 'pages.authentication.sign-unlock',
                        title: 'Unlock session',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/unlock-session/modern',
                    },
                    {
                        id: 'pages.authentication.sign-confirm',
                        title: 'Lock Screen',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/confirmation-required/modern',
                    },
                    {
                        id: 'pages.profile',
                        title: 'Profile',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/profile',
                    },
                ],
            },
        ],
    },
    {
        id: 'divider-1',
        type: 'divider',
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboard',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/dashboards/project'
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics'
            }
        ]
    },
    {
        id: 'pages',
        title: 'Security',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
                    {
                        id: 'pages.authentication.sign-in',
                        title: 'Sign in',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-open',
                        link: '/pages/authentication/sign-in/modern'
                    },
                    {
                        id: 'pages.authentication.sign-up',
                        title: 'Sign up',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/authentication/sign-up/modern'
                    },
                    {
                        id: 'pages.authentication.sign-out',
                        title: 'Sign out',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-closed',
                        link: '/pages/authentication/sign-out/modern'
                    },
                    {
                        id: 'pages.authentication.sign-forgot',
                        title: 'Forgot password',
                        type: 'basic',
                        icon: 'heroicons_outline:key',
                        link: '/pages/authentication/forgot-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-reset',
                        title: 'Reset password',
                        type: 'basic',
                        icon: 'heroicons_outline:x-circle',
                        link: '/pages/authentication/reset-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-unlock',
                        title: 'Unlock session',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/unlock-session/modern'
                    },
                    {
                        id: 'pages.authentication.sign-confirm',
                        title: 'Lock Screen',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/confirmation-required/modern'
                    },
                    {
                        id: 'pages.profile',
                        title: 'Profile',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/profile'
                    }
                ]
            },
        ]
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboard',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/dashboards/project'
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics'
            }
        ]
    },
    {
        id: 'pages',
        title: 'Security',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
                    {
                        id: 'pages.authentication.sign-in',
                        title: 'Sign in',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-open',
                        link: '/pages/authentication/sign-in/modern'
                    },
                    {
                        id: 'pages.authentication.sign-up',
                        title: 'Sign up',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/authentication/sign-up/modern'
                    },
                    {
                        id: 'pages.authentication.sign-out',
                        title: 'Sign out',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-closed',
                        link: '/pages/authentication/sign-out/modern'
                    },
                    {
                        id: 'pages.authentication.sign-forgot',
                        title: 'Forgot password',
                        type: 'basic',
                        icon: 'heroicons_outline:key',
                        link: '/pages/authentication/forgot-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-reset',
                        title: 'Reset password',
                        type: 'basic',
                        icon: 'heroicons_outline:x-circle',
                        link: '/pages/authentication/reset-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-unlock',
                        title: 'Unlock session',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/unlock-session/modern'
                    },
                    {
                        id: 'pages.authentication.sign-confirm',
                        title: 'Lock Screen',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/confirmation-required/modern'
                    },
                    {
                        id: 'pages.profile',
                        title: 'Profile',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/profile'
                    }
                ]
            },
        ]
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboard',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id: 'dashboards.project',
                title: 'Project',
                type: 'basic',
                icon: 'heroicons_outline:clipboard-check',
                link: '/dashboards/project'
            },
            {
                id: 'dashboards.analytics',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboards/analytics'
            }
        ] 
    },  
    {
        id: 'pages',
        title: 'Security',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.authentication',
                title: 'Authentication',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
                    {
                        id: 'pages.authentication.sign-in',
                        title: 'Sign in',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-open',
                        link: '/pages/authentication/sign-in/modern'
                    },
                    {
                        id: 'pages.authentication.sign-up',
                        title: 'Sign up',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/authentication/sign-up/modern'
                    },
                    {
                        id: 'pages.authentication.sign-out',
                        title: 'Sign out',
                        type: 'basic',
                        icon: 'heroicons_outline:lock-closed',
                        link: '/pages/authentication/sign-out/modern'
                    },
                    {
                        id: 'pages.authentication.sign-forgot',
                        title: 'Forgot password',
                        type: 'basic',
                        icon: 'heroicons_outline:key',
                        link: '/pages/authentication/forgot-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-reset',
                        title: 'Reset password',
                        type: 'basic',
                        icon: 'heroicons_outline:x-circle',
                        link: '/pages/authentication/reset-password/modern'
                    },
                    {
                        id: 'pages.authentication.sign-unlock',
                        title: 'Unlock session',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/unlock-session/modern'
                    },
                    {
                        id: 'pages.authentication.sign-confirm',
                        title: 'Lock Screen',
                        type: 'basic',
                        icon: 'heroicons_outline:book-open',
                        link: '/pages/authentication/confirmation-required/modern'
                    },
                    {
                        id: 'pages.profile',
                        title: 'Profile',
                        type: 'basic',
                        icon: 'heroicons_outline:user-circle',
                        link: '/pages/profile'
                    }
                ]
            },
        ]
    }
];
