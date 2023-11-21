/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.project',
                title: 'Project',
                type : 'basic',
                icon : 'heroicons_outline:clipboard-document-check',
                link : '/dashboards/project',
            },
            {
                id   : 'dashboards.analytics',
                title: 'Analytics',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/dashboards/analytics',
            },
        ],
    },
    {
        id: 'apps',
        title: 'Cencis - Administración',
        subtitle: 'Administrador ppal TeraQ',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'apps.inscription',
                title: 'Inscripción',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard',
                children: [
                    {
                        id: 'apps.registro',
                        title: 'Registro -Ingreso',
                        type: 'basic',
                        link: '/apps/registros'
                    },
                    {
                        id: 'apps.pacientesReportados',
                        title: 'Pacientes Reportados',
                        type: 'basic',
                        link: '/apps/pacientesreportados'
                    },
                    {
                        id: 'apps.noContactados',
                        title: 'No Contactados',
                        type: 'basic',
                        link: '/apps/pacientesnocontactados'
                    },
                ]
            },
            {
                id   : 'apps.file-manager',
                title: 'File Manager',
                type : 'basic',
                icon : 'heroicons_outline:cloud',
                link : '/apps/file-manager',
            },
            {
                id: 'apps.seguimiento',
                title: 'Seguimiento pacientes',
                type: 'collapsable',
                icon: 'feather:activity',
                children: [
                    {
                        id: 'apps.eninscripcion',
                        title: 'En Inscripción',
                        type: 'basic',
                        link: '/apps/eninscripcion'
                    },
                    {
                        id: 'apps.inscritos',
                        title: 'Inscritos',
                        type: 'basic',
                        link: '/apps/pacientesinscritos'
                    },
                    {
                        id: 'apps.formulados',
                        title: 'Formulados',
                        type: 'basic',
                        link: '/apps/pacientesformulados'
                    },
                    {
                        id: 'apps.titulacion',
                        title: 'Titulación',
                        type: 'basic',
                        link: '/apps/titulacion'
                    },
                    {
                        id: 'apps.suspendidos',
                        title: 'Suspendidos',
                        type: 'basic',
                        link: '/apps/suspendidos'
                    },
                    {
                        id: 'apps.retirados',
                        title: 'Retirados',
                        type: 'basic',
                        link: '/apps/retirados'
                    },
                    {
                        id: 'apps.prontaaplicacion',
                        title: 'Con pronta aplicación',
                        type: 'basic',
                        link: '/apps/prontaaplicacion'
                    },
                    {
                        id: 'apps.asignadosac',
                        title: 'Asignados Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/asignandoactividades'
                    },
                    {
                        id: 'apps.ejecucionac',
                        title: 'Ejecución Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/ejecucionesactividades'
                    },
                    {
                        id: 'apps.procesosadmin',
                        title: 'Procesos administrativos',
                        type: 'basic',
                        link: '/apps/procesosadmin'
                    },
                ]
            },
            {
                id: 'apps.parameters',
                title: 'Parameters',
                type: 'collapsable',
                icon: 'heroicons_outline:adjustments-vertical',
                children: [
                    {
                        id: 'apps.actividad',
                        title: 'Actividades',
                        type: 'collapsable',
                        icon: 'heroicons_outline:academic-cap',
                        children: [
                            {
                                id: 'apps.adminActividad',
                                title: 'Admin de actividades',
                                type: 'basic',
                                link: '/parametros/actividades'
                            },
                            
                        ]
                    }, 
                    {
                        id: 'apps.caracteristicas',
                        title: 'Características',
                        type: 'collapsable',
                        icon: 'heroicons_outline:users',
                        children: [
                            {
                                id: 'apps.vivienda',
                                title: 'Caracteristicas Generales',
                                type: 'basic',
                                link: '/parametros/caracteristicas'
                            },
                        ]
                    },
                    {
                        id: 'apps.datosclinicos',
                        title: 'Datos clínicos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:beaker',
                        children: [
                            {
                                id: 'apps.dosis',
                                title: 'Tablas relacionadas',
                                type: 'basic',
                                link: '/parametros/maestradatosclinicos'
                            }
                        ]
                    },
                    {
                        id: 'apps.ejecuciones',
                        title: 'Ejecuciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:tag',
                        children: [
                            {
                                id: 'apps.gestionadmin',
                                title: 'Gestión admin',
                                type: 'basic',
                                link: '/parametros/gestionejecucion'
                            }, 
                        ]
                    },
                    {
                        id: 'apps.localizacion',
                        title: 'localización',
                        type: 'collapsable',
                        icon: 'heroicons_outline:globe-alt',
                        children: [
                            {
                                id: 'apps.paises',
                                title: 'Paises',
                                type: 'basic',
                                link: '/parametros/localizacion'
                            },
                        ]
                    },
                    {
                        id: 'apps.categoria',
                        title: 'Categorías',
                        type: 'collapsable',
                        icon: 'heroicons_outline:briefcase',
                        children: [
                            {
                                id: 'apps.desenlace',
                                title: 'Desenlace',
                                type: 'basic',
                                link: '/parametros/categorias'
                            },
                        ]
                    },
                    {
                        id: 'apps.farmacovigilancia',
                        title: 'Farmacovigilancia',
                        type: 'collapsable',
                        icon: 'heroicons_outline:inbox',
                        children: [
                            {
                                id: 'apps.farmacovigilancia',
                                title: 'Farmacovigilancia',
                                type: 'basic',
                                link: '/parametros/farmacovigilancia'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/parametros/frecuencia'
                            },
                        ]
                    },
                    {
                        id: 'apps.medicamentos',
                        title: 'Medicamentos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cloud',
                        children: [
                            {
                                id: 'apps.Medicamentos',
                                title: 'Medicamentos',
                                type: 'basic',
                                link: '/parametros/medicamentos'
                            },
                        ]
                    },
                ]
            },
            {
                id: 'apps.reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'heroicons_outline:printer',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.reports',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/reportes/exportarreportes',
                        exactMatch: true
                    },
                    {
                        id: 'apps.reports.export',
                        title: 'Exportar',
                        type: 'basic',
                        link: '/reportes/exportar',
                        exactMatch: true
                    },
                   
                ]
            },
            {
                id: 'apps.consultas',
                title: 'Consultas',
                type: 'collapsable',
                icon: 'feather:book-open',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.consulta.pacientes',
                        title: 'Pacientes',
                        type: 'basic',
                        link: '/reportes/consultapacientes',
                        exactMatch: true
                    },
                ]
            },
            {
                id: 'apps.help-center',
                title: 'Help Center',
                type: 'collapsable',
                icon: 'heroicons_outline:information-circle',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.help-center.home',
                        title: 'Home',
                        type: 'basic',
                        link: '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id: 'apps.help-center.faqs',
                        title: 'FAQs',
                        type: 'basic',
                        link: '/apps/help-center/faqs'
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Guides',
                        type: 'basic',
                        link: '/apps/help-center/guides'
                    },
                    {
                        id: 'apps.help-center.support',
                        title: 'Support',
                        type: 'basic',
                        link: '/apps/help-center/support'
                    },
                    {
                        id: 'apps.academy',
                        title: 'Academy',
                        type: 'basic',
                        icon: 'heroicons_outline:academic-cap',
                        link: '/apps/academy'
                    },
                    {
                        id: 'apps.chat',
                        title: 'Chat',
                        type: 'basic',
                        icon: 'heroicons_outline:chat-alt',
                        link: '/apps/chat'
                    },
                    {
                        id: 'pages.activities',
                        title: 'Activities',
                        type: 'basic',
                        icon: 'heroicons_outline:menu-alt-2',
                        link: '/pages/activities'
                    },
                ]
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
                        icon: 'heroicons_outline:login',
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
                        icon: 'heroicons_outline:logout',
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

            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings'
            }
        ]
    },
    {
        id  : 'divider-1',
        type: 'divider'
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
        id: 'apps',
        title: 'Cencis - Admin',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [
            {
                id: 'apps.inscription',
                title: 'Inscripción',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard',
                children: [
                    {
                        id: 'apps.registro',
                        title: 'Registro -Ingreso',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.pacientesReportados',
                        title: 'Pacientes Reportados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.noContactados',
                        title: 'No Contactados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.seguimiento',
                title: 'Seguimiento pacientes',
                type: 'collapsable',
                icon: 'feather:activity',
                children: [
                    {
                        id: 'apps.eninscripcion',
                        title: 'En Inscripción',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.inscritos',
                        title: 'Inscritos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.formulados',
                        title: 'Formulados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.titulacion',
                        title: 'Titulación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.suspendidos',
                        title: 'Suspendidos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.retirados',
                        title: 'Retirados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.prontaaplicacion',
                        title: 'Con pronta aplicación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.asignadosac',
                        title: 'Asignados Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.ejecucionac',
                        title: 'Ejecución Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.procesosadmin',
                        title: 'Procesos administrativos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.parameters',
                title: 'Parameters',
                type: 'collapsable',
                icon: 'heroicons_outline:adjustments-vertical',
                children: [
                    {
                        id: 'apps.actividad',
                        title: 'Actividades',
                        type: 'collapsable',
                        icon: 'heroicons_outline:academic-cap',
                        children: [
                            {
                                id: 'apps.axmedicamento',
                                title: 'Acciones x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acomplementaria',
                                title: 'Actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.farmacias',
                                title: 'Farmacias',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ips',
                                title: 'IPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EPS',
                                title: 'EPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Laboratorios',
                                title: 'Laboratorios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.esquemaAplicacion',
                                title: 'Esquema aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.datosclinicos',
                        title: 'Datos clínicos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:beaker',
                        children: [
                            {
                                id: 'apps.dosis',
                                title: 'Dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticos',
                                title: 'Diagnosticos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoPrevio',
                                title: 'Uso Previo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoConvulsiones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TratamientoAntiespastico',
                                title: 'Tratamiento antiespástico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.caracteristicas',
                        title: 'Características',
                        type: 'collapsable',
                        icon: 'heroicons_outline:users',
                        children: [
                            {
                                id: 'apps.vivienda',
                                title: 'Caracteristicas Vivienda',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.causalidad',
                                title: 'Causalidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.CausalInterrupcionSueno',
                                title: 'Causal Interrupción Sueño',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.causalNoIngresos',
                                title: 'Causal no ingresos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.cie',
                                title: 'CIE',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ciemedicamento',
                                title: 'CIE medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.comorbilidad',
                                title: 'Comorbilidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.configuracionusuarioGeneral',
                                title: 'Configuración usuario gral',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioDistrito',
                                title: 'Configuración usuario distrito',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioZonas',
                                title: 'Configuración usuario zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Consentimientos',
                                title: 'Consentimientos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Perfiles',
                                title: 'Perfiles',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TipoConfiguracion',
                                title: 'Tipo configuración',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ejecuciones',
                        title: 'Ejecuciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:tag',
                        children: [
                            {
                                id: 'apps.gestionadmin',
                                title: 'Gestión admin',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Actividad complementaria asignado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.estadoActividad',
                                title: 'Estado actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.prioridad',
                                title: 'Prioridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionGnerica',
                                title: 'Gestión genérica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionapoyo',
                                title: 'Gestión apoyo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestioncapacitacion',
                                title: 'Gestión capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionclinica',
                                title: 'Gestión clínica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gruposanguineo',
                                title: 'Grupo sanguineo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.nivelescolaridad',
                                title: 'Nivel escolaridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ocupacion',
                                title: 'Ocupación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acompanante',
                                title: 'Acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.parantescoacompanante',
                                title: 'parentesco acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipozonavivienda',
                                title: 'Tipo zona vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoaccesovivienda',
                                title: 'Tipo acceso vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Enfermedades',
                                title: 'Enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.Escaladolor',
                                title: 'Escala dolor',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.temaseducacion',
                                title: 'Temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Esquemasaplicacion',
                                title: 'Esquemas aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.entidadesmedicamento',
                                title: 'Entidades medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Especialidadesxmed',
                                title: 'Especialidades x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.SeguimientoEventosadversos',
                                title: 'Seguimiento eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Eventorelacionado',
                                title: 'Evento relacionado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaCaracteristicasVivienda',
                                title: 'Gestion clinica caracteristicas vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaEnfermedades',
                                title: 'Gestion clinica enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionEventosAdversos',
                                title: 'Gestion clinica eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionTemasEducacion',
                                title: 'Gestion clinica temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ejecucionclinicavalidaciones',
                                title: 'Gestion clinica validaciones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                        ]
                    },
                    {
                        id: 'apps.localizacion',
                        title: 'localización',
                        type: 'collapsable',
                        icon: 'heroicons_outline:globe-alt',
                        children: [
                            {
                                id: 'apps.paises',
                                title: 'Paises',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.departamentos',
                                title: 'Departamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ciudades',
                                title: 'Ciudades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.region',
                                title: 'Regiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Zonas',
                                title: 'Zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Distritos',
                                title: 'Distritos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.categoria',
                        title: 'Categorías',
                        type: 'collapsable',
                        icon: 'heroicons_outline:briefcase',
                        children: [
                            {
                                id: 'apps.desenlace',
                                title: 'Desenlace',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.detalleproducto',
                                title: 'Detalle producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.producto',
                                title: 'Producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticoxmedicamento',
                                title: 'Diagnostico medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimension',
                                title: 'Dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensiones',
                                title: 'Dimensiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionesreportes',
                                title: 'Dimensiones reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionxtipodimension',
                                title: 'Dimensión x tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodimension',
                                title: 'Tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.gestion',
                        title: 'Gestión',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cog',
                        children: [
                            {
                                id: 'apps.actividadcomplementariaapoyo',
                                title: 'Actividad complementaria apoyo',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.actividadcomplementariaapoyoad',
                                title: 'Actividad complementaria apoyo AD',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariaasignados',
                                title: 'Actividad complementaria asignados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionactividadcomplementaria',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariacapacitacion',
                                title: 'Actividad complementaria capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariataller',
                                title: 'Actividad complementaria taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariatarea',
                                title: 'Actividad complementaria tarea',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariavisita',
                                title: 'Actividad complementaria visita',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionreportes',
                                title: 'Gestión reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionsocial',
                                title: 'Gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ocupaciones',
                        title: 'Ocupaciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:user-group',
                        children: [
                            {
                                id: 'apps.ocupaciones',
                                title: 'Ocupaciones',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.opcionesGenericas',
                                title: 'Opciones genèricas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoconvulciones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.procesosInstaurados',
                                title: 'Procesos instaurados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodocidadEntrega',
                                title: 'Periodocidad entrega',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosadmin',
                                title: 'Procesos administrativos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosAdjudicados',
                                title: 'Procesos Adjudicados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.rangostiempo',
                                title: 'Rangos tiempo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reemplazos',
                                title: 'Reemplazos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Referente',
                                title: 'Referente',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reinicios',
                                title: 'Reinicios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.soportegral',
                        title: 'Soporte gral',
                        type: 'collapsable',
                        icon: 'heroicons_outline:check',
                        children: [
                            {
                                id: 'apps.seguimientogestionsocial',
                                title: 'Seguimiento gestión social',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.sino',
                                title: 'Si/No',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sopoteTratamiento',
                                title: 'Soporte tratamiento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.regimen',
                                title: 'Régimen',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoId',
                                title: 'Tipo de Identificación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sexo',
                                title: 'Sexo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadio',
                                title: 'Estadios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoactual',
                                title: 'Estado actual',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoxmedicamento',
                                title: 'Estado x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estado',
                                title: 'Estados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estatus',
                                title: 'Estatus',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadofinal',
                                title: 'Estado final',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoestadio',
                                title: 'Estado estadio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadogestionsocial',
                                title: 'Estado gestion social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoInscripcion',
                                title: 'Estado Inscripción',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrte',
                                title: 'Estado Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrteFV',
                                title: 'Estado reporte farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoseguimientoFV',
                                title: 'Estado seguimiento farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoautorizacion',
                                title: 'Estado Autorización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.tablassecundarias',
                        title: 'Tablas secundarias',
                        type: 'collapsable',
                        icon: 'heroicons_outline:device-tablet',
                        children: [
                            {
                                id: 'apps.tipoActividad',
                                title: 'Tipo actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConducta',
                                title: 'Tipo conducta',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConfiguracionUsuario',
                                title: 'Tipo configuración usuario',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipocorreo',
                                title: 'Tipo correo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodas28',
                                title: 'Tipo Das28',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodireccion',
                                title: 'Tipo dirección',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosis',
                                title: 'Tipo dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosisxmedicamento',
                                title: 'Tipo dosis x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipohaq',
                                title: 'Tipo HAQ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoidentificacionxpais',
                                title: 'Tipo identificación x país',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporango',
                                title: 'Tipo rango',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporeportes',
                                title: 'Tipo reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipotaller',
                                title: 'Tipo taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovisualizacion',
                                title: 'Tipo visualización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovivienda',
                                title: 'Tipo Vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoprevioxmedicamento',
                                title: 'Uso previo x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.viaadmin',
                                title: 'Vía administrativa',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.viasReport',
                                title: 'Vías Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ZonasCiudad',
                                title: 'Zonas Ciudad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.zonasEnfermeras',
                                title: 'Zonas Enfermeras',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.farmacovigilancia',
                        title: 'Farmacovigilancia',
                        type: 'collapsable',
                        icon: 'heroicons_outline:inbox',
                        children: [
                            {
                                id: 'apps.farmacovigilancia',
                                title: 'Farmacovigilancia',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.medicamentos',
                        title: 'Medicamentos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cloud',
                        children: [
                            {
                                id: 'apps.Medicamentos',
                                title: 'Medicamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantes',
                                title: 'Medicamentos concomitantes',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantesxmedicamento',
                                title: 'Medicamentos concomitantes x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosprevios',
                                title: 'Medicamentos previos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentospreviosxmedicamento',
                                title: 'Medicamentos previos x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosusuarios',
                                title: 'Medicamentos usuarios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosxmedicos',
                                title: 'Medicamentos x médicos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medico',
                                title: 'Médico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.especialidades',
                                title: 'Especialidades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoenvio',
                                title: 'Motivo envios gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoretiro',
                                title: 'Motivo retiro',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.presentacion.medicamento',
                                title: 'Presentación medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivosuspension',
                                title: 'Motivo suspendido',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.movimientoenvio',
                                title: 'Movimiento envio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                ]
            },
            {
                id: 'apps.reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'heroicons_outline:printer',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.reports',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.reports.export',
                        title: 'Exportar',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },

                ]
            },
            {
                id: 'apps.consultas',
                title: 'Consultas',
                type: 'collapsable',
                icon: 'feather:book-open',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.consulta.pacientes',
                        title: 'Pacientes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.consulta.reportes',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/executives'
                    },
                ]
            },

            {
                id: 'apps.help-center',
                title: 'Help Center',
                type: 'collapsable',
                icon: 'heroicons_outline:information-circle',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.help-center.home',
                        title: 'Home',
                        type: 'basic',
                        link: '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id: 'apps.help-center.faqs',
                        title: 'FAQs',
                        type: 'basic',
                        link: '/apps/help-center/faqs'
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Guides',
                        type: 'basic',
                        link: '/apps/help-center/guides'
                    },
                    {
                        id: 'apps.help-center.support',
                        title: 'Support',
                        type: 'basic',
                        link: '/apps/help-center/support'
                    },
                    {
                        id: 'apps.academy',
                        title: 'Academy',
                        type: 'basic',
                        icon: 'heroicons_outline:academic-cap',
                        link: '/apps/academy'
                    },
                    {
                        id: 'apps.chat',
                        title: 'Chat',
                        type: 'basic',
                        icon: 'heroicons_outline:chat-alt',
                        link: '/apps/chat'
                    },
                    {
                        id: 'apps.contacts',
                        title: 'Contact Leads',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/apps/contacts'
                    },
                    {
                        id: 'pages.activities',
                        title: 'Activities',
                        type: 'basic',
                        icon: 'heroicons_outline:menu-alt-2',
                        link: '/pages/activities'
                    },
                    {
                        id: 'pages.pricing',
                        title: 'Pricing',
                        type: 'basic',
                        icon: 'heroicons_outline:cash',
                        link: '/pages/pricing/modern'
                    },
                ]
            },
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
                        icon: 'heroicons_outline:login',
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
                        icon: 'heroicons_outline:logout',
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

            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings'
            }
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
        id: 'apps',
        title: 'Cencis - Admin',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [
            {
                id: 'apps.inscription',
                title: 'Inscripción',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard',
                children: [
                    {
                        id: 'apps.registro',
                        title: 'Registro -Ingreso',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.pacientesReportados',
                        title: 'Pacientes Reportados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.noContactados',
                        title: 'No Contactados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.seguimiento',
                title: 'Seguimiento pacientes',
                type: 'collapsable',
                icon: 'feather:activity',
                children: [
                    {
                        id: 'apps.eninscripcion',
                        title: 'En Inscripción',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.inscritos',
                        title: 'Inscritos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.formulados',
                        title: 'Formulados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.titulacion',
                        title: 'Titulación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.suspendidos',
                        title: 'Suspendidos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.retirados',
                        title: 'Retirados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.prontaaplicacion',
                        title: 'Con pronta aplicación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.asignadosac',
                        title: 'Asignados Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.ejecucionac',
                        title: 'Ejecución Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.procesosadmin',
                        title: 'Procesos administrativos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.parameters',
                title: 'Parameters',
                type: 'collapsable',
                icon: 'heroicons_outline:adjustments-vertical',
                children: [
                    {
                        id: 'apps.actividad',
                        title: 'Actividades',
                        type: 'collapsable',
                        icon: 'heroicons_outline:academic-cap',
                        children: [
                            {
                                id: 'apps.axmedicamento',
                                title: 'Acciones x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acomplementaria',
                                title: 'Actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.farmacias',
                                title: 'Farmacias',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ips',
                                title: 'IPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EPS',
                                title: 'EPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Laboratorios',
                                title: 'Laboratorios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.esquemaAplicacion',
                                title: 'Esquema aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.datosclinicos',
                        title: 'Datos clínicos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:beaker',
                        children: [
                            {
                                id: 'apps.dosis',
                                title: 'Dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticos',
                                title: 'Diagnosticos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoPrevio',
                                title: 'Uso Previo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoConvulsiones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TratamientoAntiespastico',
                                title: 'Tratamiento antiespástico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.caracteristicas',
                        title: 'Características',
                        type: 'collapsable',
                        icon: 'heroicons_outline:users',
                        children: [
                            {
                                id: 'apps.vivienda',
                                title: 'Caracteristicas Vivienda',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.causalidad',
                                title: 'Causalidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.CausalInterrupcionSueno',
                                title: 'Causal Interrupción Sueño',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.causalNoIngresos',
                                title: 'Causal no ingresos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.cie',
                                title: 'CIE',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ciemedicamento',
                                title: 'CIE medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.comorbilidad',
                                title: 'Comorbilidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.configuracionusuarioGeneral',
                                title: 'Configuración usuario gral',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioDistrito',
                                title: 'Configuración usuario distrito',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioZonas',
                                title: 'Configuración usuario zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Consentimientos',
                                title: 'Consentimientos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Perfiles',
                                title: 'Perfiles',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TipoConfiguracion',
                                title: 'Tipo configuración',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ejecuciones',
                        title: 'Ejecuciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:tag',
                        children: [
                            {
                                id: 'apps.gestionadmin',
                                title: 'Gestión admin',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Actividad complementaria asignado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.estadoActividad',
                                title: 'Estado actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.prioridad',
                                title: 'Prioridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionGnerica',
                                title: 'Gestión genérica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionapoyo',
                                title: 'Gestión apoyo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestioncapacitacion',
                                title: 'Gestión capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionclinica',
                                title: 'Gestión clínica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gruposanguineo',
                                title: 'Grupo sanguineo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.nivelescolaridad',
                                title: 'Nivel escolaridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ocupacion',
                                title: 'Ocupación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acompanante',
                                title: 'Acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.parantescoacompanante',
                                title: 'parentesco acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipozonavivienda',
                                title: 'Tipo zona vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoaccesovivienda',
                                title: 'Tipo acceso vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Enfermedades',
                                title: 'Enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.Escaladolor',
                                title: 'Escala dolor',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.temaseducacion',
                                title: 'Temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Esquemasaplicacion',
                                title: 'Esquemas aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.entidadesmedicamento',
                                title: 'Entidades medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Especialidadesxmed',
                                title: 'Especialidades x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.SeguimientoEventosadversos',
                                title: 'Seguimiento eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Eventorelacionado',
                                title: 'Evento relacionado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaCaracteristicasVivienda',
                                title: 'Gestion clinica caracteristicas vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaEnfermedades',
                                title: 'Gestion clinica enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionEventosAdversos',
                                title: 'Gestion clinica eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionTemasEducacion',
                                title: 'Gestion clinica temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ejecucionclinicavalidaciones',
                                title: 'Gestion clinica validaciones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                        ]
                    },
                    {
                        id: 'apps.localizacion',
                        title: 'localización',
                        type: 'collapsable',
                        icon: 'heroicons_outline:globe-alt',
                        children: [
                            {
                                id: 'apps.paises',
                                title: 'Paises',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.departamentos',
                                title: 'Departamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ciudades',
                                title: 'Ciudades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.region',
                                title: 'Regiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Zonas',
                                title: 'Zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Distritos',
                                title: 'Distritos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.categoria',
                        title: 'Categorías',
                        type: 'collapsable',
                        icon: 'heroicons_outline:briefcase',
                        children: [
                            {
                                id: 'apps.desenlace',
                                title: 'Desenlace',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.detalleproducto',
                                title: 'Detalle producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.producto',
                                title: 'Producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticoxmedicamento',
                                title: 'Diagnostico medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimension',
                                title: 'Dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensiones',
                                title: 'Dimensiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionesreportes',
                                title: 'Dimensiones reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionxtipodimension',
                                title: 'Dimensión x tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodimension',
                                title: 'Tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.gestion',
                        title: 'Gestión',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cog',
                        children: [
                            {
                                id: 'apps.actividadcomplementariaapoyo',
                                title: 'Actividad complementaria apoyo',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.actividadcomplementariaapoyoad',
                                title: 'Actividad complementaria apoyo AD',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariaasignados',
                                title: 'Actividad complementaria asignados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionactividadcomplementaria',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariacapacitacion',
                                title: 'Actividad complementaria capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariataller',
                                title: 'Actividad complementaria taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariatarea',
                                title: 'Actividad complementaria tarea',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariavisita',
                                title: 'Actividad complementaria visita',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionreportes',
                                title: 'Gestión reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionsocial',
                                title: 'Gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ocupaciones',
                        title: 'Ocupaciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:user-group',
                        children: [
                            {
                                id: 'apps.ocupaciones',
                                title: 'Ocupaciones',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.opcionesGenericas',
                                title: 'Opciones genèricas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoconvulciones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.procesosInstaurados',
                                title: 'Procesos instaurados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodocidadEntrega',
                                title: 'Periodocidad entrega',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosadmin',
                                title: 'Procesos administrativos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosAdjudicados',
                                title: 'Procesos Adjudicados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.rangostiempo',
                                title: 'Rangos tiempo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reemplazos',
                                title: 'Reemplazos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Referente',
                                title: 'Referente',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reinicios',
                                title: 'Reinicios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.soportegral',
                        title: 'Soporte gral',
                        type: 'collapsable',
                        icon: 'heroicons_outline:check',
                        children: [
                            {
                                id: 'apps.seguimientogestionsocial',
                                title: 'Seguimiento gestión social',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.sino',
                                title: 'Si/No',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sopoteTratamiento',
                                title: 'Soporte tratamiento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.regimen',
                                title: 'Régimen',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoId',
                                title: 'Tipo de Identificación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sexo',
                                title: 'Sexo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadio',
                                title: 'Estadios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoactual',
                                title: 'Estado actual',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoxmedicamento',
                                title: 'Estado x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estado',
                                title: 'Estados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estatus',
                                title: 'Estatus',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadofinal',
                                title: 'Estado final',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoestadio',
                                title: 'Estado estadio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadogestionsocial',
                                title: 'Estado gestion social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoInscripcion',
                                title: 'Estado Inscripción',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrte',
                                title: 'Estado Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrteFV',
                                title: 'Estado reporte farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoseguimientoFV',
                                title: 'Estado seguimiento farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoautorizacion',
                                title: 'Estado Autorización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.tablassecundarias',
                        title: 'Tablas secundarias',
                        type: 'collapsable',
                        icon: 'heroicons_outline:device-tablet',
                        children: [
                            {
                                id: 'apps.tipoActividad',
                                title: 'Tipo actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConducta',
                                title: 'Tipo conducta',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConfiguracionUsuario',
                                title: 'Tipo configuración usuario',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipocorreo',
                                title: 'Tipo correo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodas28',
                                title: 'Tipo Das28',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodireccion',
                                title: 'Tipo dirección',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosis',
                                title: 'Tipo dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosisxmedicamento',
                                title: 'Tipo dosis x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipohaq',
                                title: 'Tipo HAQ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoidentificacionxpais',
                                title: 'Tipo identificación x país',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporango',
                                title: 'Tipo rango',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporeportes',
                                title: 'Tipo reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipotaller',
                                title: 'Tipo taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovisualizacion',
                                title: 'Tipo visualización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovivienda',
                                title: 'Tipo Vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoprevioxmedicamento',
                                title: 'Uso previo x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.viaadmin',
                                title: 'Vía administrativa',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.viasReport',
                                title: 'Vías Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ZonasCiudad',
                                title: 'Zonas Ciudad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.zonasEnfermeras',
                                title: 'Zonas Enfermeras',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.farmacovigilancia',
                        title: 'Farmacovigilancia',
                        type: 'collapsable',
                        icon: 'heroicons_outline:inbox',
                        children: [
                            {
                                id: 'apps.farmacovigilancia',
                                title: 'Farmacovigilancia',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.medicamentos',
                        title: 'Medicamentos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cloud',
                        children: [
                            {
                                id: 'apps.Medicamentos',
                                title: 'Medicamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantes',
                                title: 'Medicamentos concomitantes',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantesxmedicamento',
                                title: 'Medicamentos concomitantes x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosprevios',
                                title: 'Medicamentos previos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentospreviosxmedicamento',
                                title: 'Medicamentos previos x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosusuarios',
                                title: 'Medicamentos usuarios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosxmedicos',
                                title: 'Medicamentos x médicos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medico',
                                title: 'Médico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.especialidades',
                                title: 'Especialidades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoenvio',
                                title: 'Motivo envios gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoretiro',
                                title: 'Motivo retiro',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.presentacion.medicamento',
                                title: 'Presentación medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivosuspension',
                                title: 'Motivo suspendido',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.movimientoenvio',
                                title: 'Movimiento envio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                ]
            },
            {
                id: 'apps.reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'heroicons_outline:printer',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.reports',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.reports.export',
                        title: 'Exportar',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },

                ]
            },
            {
                id: 'apps.consultas',
                title: 'Consultas',
                type: 'collapsable',
                icon: 'feather:book-open',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.consulta.pacientes',
                        title: 'Pacientes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.consulta.reportes',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/executives'
                    },
                ]
            },

            {
                id: 'apps.help-center',
                title: 'Help Center',
                type: 'collapsable',
                icon: 'heroicons_outline:information-circle',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.help-center.home',
                        title: 'Home',
                        type: 'basic',
                        link: '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id: 'apps.help-center.faqs',
                        title: 'FAQs',
                        type: 'basic',
                        link: '/apps/help-center/faqs'
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Guides',
                        type: 'basic',
                        link: '/apps/help-center/guides'
                    },
                    {
                        id: 'apps.help-center.support',
                        title: 'Support',
                        type: 'basic',
                        link: '/apps/help-center/support'
                    },
                    {
                        id: 'apps.academy',
                        title: 'Academy',
                        type: 'basic',
                        icon: 'heroicons_outline:academic-cap',
                        link: '/apps/academy'
                    },
                    {
                        id: 'apps.chat',
                        title: 'Chat',
                        type: 'basic',
                        icon: 'heroicons_outline:chat-alt',
                        link: '/apps/chat'
                    },
                    {
                        id: 'apps.contacts',
                        title: 'Contact Leads',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/apps/contacts'
                    },
                    {
                        id: 'pages.activities',
                        title: 'Activities',
                        type: 'basic',
                        icon: 'heroicons_outline:menu-alt-2',
                        link: '/pages/activities'
                    },
                    {
                        id: 'pages.pricing',
                        title: 'Pricing',
                        type: 'basic',
                        icon: 'heroicons_outline:cash',
                        link: '/pages/pricing/modern'
                    },
                ]
            },
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
                        icon: 'heroicons_outline:login',
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
                        icon: 'heroicons_outline:logout',
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

            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings'
            }
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
        id      : 'apps',
        title: 'Cencis - Admin',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [
            {
                id: 'apps.inscription',
                title: 'Inscripción',
                type: 'collapsable',
                icon: 'heroicons_outline:clipboard',
                children: [
                    {
                        id: 'apps.registro',
                        title: 'Registro -Ingreso',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.pacientesReportados',
                        title: 'Pacientes Reportados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.noContactados',
                        title: 'No Contactados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.seguimiento',
                title: 'Seguimiento pacientes',
                type: 'collapsable',
                icon: 'feather:activity',
                children: [
                    {
                        id: 'apps.eninscripcion',
                        title: 'En Inscripción',
                        type: 'basic',
                        link: '/apps/bank'
                    },
                    {
                        id: 'apps.inscritos',
                        title: 'Inscritos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.formulados',
                        title: 'Formulados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.titulacion',
                        title: 'Titulación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.suspendidos',
                        title: 'Suspendidos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.retirados',
                        title: 'Retirados',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.prontaaplicacion',
                        title: 'Con pronta aplicación',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.asignadosac',
                        title: 'Asignados Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.ejecucionac',
                        title: 'Ejecución Actividades Complementarias',
                        type: 'basic',
                        link: '/apps/company'
                    },
                    {
                        id: 'apps.procesosadmin',
                        title: 'Procesos administrativos',
                        type: 'basic',
                        link: '/apps/company'
                    },
                ]
            },
            {
                id: 'apps.parameters',
                title: 'Parameters',
                type: 'collapsable',
                icon: 'heroicons_outline:adjustments-vertical',
                children: [
                    {
                        id: 'apps.actividad',
                        title: 'Actividades',
                        type: 'collapsable',
                        icon: 'heroicons_outline:academic-cap',
                        children: [
                            {
                                id: 'apps.axmedicamento',
                                title: 'Acciones x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acomplementaria',
                                title: 'Actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.farmacias',
                                title: 'Farmacias',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ips',
                                title: 'IPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EPS',
                                title: 'EPS',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Laboratorios',
                                title: 'Laboratorios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.esquemaAplicacion',
                                title: 'Esquema aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.datosclinicos',
                        title: 'Datos clínicos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:beaker',
                        children: [
                            {
                                id: 'apps.dosis',
                                title: 'Dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticos',
                                title: 'Diagnosticos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoPrevio',
                                title: 'Uso Previo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoConvulsiones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TratamientoAntiespastico',
                                title: 'Tratamiento antiespástico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.caracteristicas',
                        title: 'Características',
                        type: 'collapsable',
                        icon: 'heroicons_outline:users',
                        children: [
                            {
                                id: 'apps.vivienda',
                                title: 'Caracteristicas Vivienda',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.causalidad',
                                title: 'Causalidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.CausalInterrupcionSueno',
                                title: 'Causal Interrupción Sueño',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.causalNoIngresos',
                                title: 'Causal no ingresos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.cie',
                                title: 'CIE',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ciemedicamento',
                                title: 'CIE medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.comorbilidad',
                                title: 'Comorbilidad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.configuracionusuarioGeneral',
                                title: 'Configuración usuario gral',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioDistrito',
                                title: 'Configuración usuario distrito',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ConfiguracionUsuarioZonas',
                                title: 'Configuración usuario zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Consentimientos',
                                title: 'Consentimientos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Perfiles',
                                title: 'Perfiles',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.TipoConfiguracion',
                                title: 'Tipo configuración',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ejecuciones',
                        title: 'Ejecuciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:tag',
                        children: [
                            {
                                id: 'apps.gestionadmin',
                                title: 'Gestión admin',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionac',
                                title: 'Actividad complementaria asignado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.estadoActividad',
                                title: 'Estado actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.prioridad',
                                title: 'Prioridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionGnerica',
                                title: 'Gestión genérica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionapoyo',
                                title: 'Gestión apoyo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestioncapacitacion',
                                title: 'Gestión capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionclinica',
                                title: 'Gestión clínica',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gruposanguineo',
                                title: 'Grupo sanguineo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.nivelescolaridad',
                                title: 'Nivel escolaridad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ocupacion',
                                title: 'Ocupación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.acompanante',
                                title: 'Acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.parantescoacompanante',
                                title: 'parentesco acompañante',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipozonavivienda',
                                title: 'Tipo zona vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoaccesovivienda',
                                title: 'Tipo acceso vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Enfermedades',
                                title: 'Enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.Escaladolor',
                                title: 'Escala dolor',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.temaseducacion',
                                title: 'Temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Esquemasaplicacion',
                                title: 'Esquemas aplicación',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.entidadesmedicamento',
                                title: 'Entidades medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Especialidadesxmed',
                                title: 'Especialidades x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.SeguimientoEventosadversos',
                                title: 'Seguimiento eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Eventorelacionado',
                                title: 'Evento relacionado',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaCaracteristicasVivienda',
                                title: 'Gestion clinica caracteristicas vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionACClinicaEnfermedades',
                                title: 'Gestion clinica enfermedades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionGestionEventosAdversos',
                                title: 'Gestion clinica eventos adversos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EjecucionTemasEducacion',
                                title: 'Gestion clinica temas educación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ejecucionclinicavalidaciones',
                                title: 'Gestion clinica validaciones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                        ]
                    },
                    {
                        id: 'apps.localizacion',
                        title: 'localización',
                        type: 'collapsable',
                        icon: 'heroicons_outline:globe-alt',
                        children: [
                            {
                                id: 'apps.paises',
                                title: 'Paises',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.departamentos',
                                title: 'Departamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Ciudades',
                                title: 'Ciudades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.region',
                                title: 'Regiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Zonas',
                                title: 'Zonas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Distritos',
                                title: 'Distritos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.categoria',
                        title: 'Categorías',
                        type: 'collapsable',
                        icon: 'heroicons_outline:briefcase',
                        children: [
                            {
                                id: 'apps.desenlace',
                                title: 'Desenlace',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.detalleproducto',
                                title: 'Detalle producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.producto',
                                title: 'Producto',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.diagnosticoxmedicamento',
                                title: 'Diagnostico medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimension',
                                title: 'Dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensiones',
                                title: 'Dimensiones',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionesreportes',
                                title: 'Dimensiones reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.dimensionxtipodimension',
                                title: 'Dimensión x tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodimension',
                                title: 'Tipo dimensión',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.gestion',
                        title: 'Gestión',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cog',
                        children: [
                            {
                                id: 'apps.actividadcomplementariaapoyo',
                                title: 'Actividad complementaria apoyo',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.actividadcomplementariaapoyoad',
                                title: 'Actividad complementaria apoyo AD',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariaasignados',
                                title: 'Actividad complementaria asignados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionactividadcomplementaria',
                                title: 'Gestión actividad complementaria',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariacapacitacion',
                                title: 'Actividad complementaria capacitación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariataller',
                                title: 'Actividad complementaria taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariatarea',
                                title: 'Actividad complementaria tarea',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.actividadcomplementariavisita',
                                title: 'Actividad complementaria visita',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionreportes',
                                title: 'Gestión reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.gestionsocial',
                                title: 'Gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.ocupaciones',
                        title: 'Ocupaciones',
                        type: 'collapsable',
                        icon: 'heroicons_outline:user-group',
                        children: [
                            {
                                id: 'apps.ocupaciones',
                                title: 'Ocupaciones',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.opcionesGenericas',
                                title: 'Opciones genèricas',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodoconvulciones',
                                title: 'Periodo convulsiones',
                                type: 'basic',
                                link: '/apps/company'
                            },

                            {
                                id: 'apps.procesosInstaurados',
                                title: 'Procesos instaurados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.periodocidadEntrega',
                                title: 'Periodocidad entrega',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosadmin',
                                title: 'Procesos administrativos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.procesosAdjudicados',
                                title: 'Procesos Adjudicados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.rangostiempo',
                                title: 'Rangos tiempo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reemplazos',
                                title: 'Reemplazos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Referente',
                                title: 'Referente',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.reinicios',
                                title: 'Reinicios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.soportegral',
                        title: 'Soporte gral',
                        type: 'collapsable',
                        icon: 'heroicons_outline:check',
                        children: [
                            {
                                id: 'apps.seguimientogestionsocial',
                                title: 'Seguimiento gestión social',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.sino',
                                title: 'Si/No',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sopoteTratamiento',
                                title: 'Soporte tratamiento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.regimen',
                                title: 'Régimen',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoId',
                                title: 'Tipo de Identificación',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.sexo',
                                title: 'Sexo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadio',
                                title: 'Estadios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoactual',
                                title: 'Estado actual',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoxmedicamento',
                                title: 'Estado x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estado',
                                title: 'Estados',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estatus',
                                title: 'Estatus',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadofinal',
                                title: 'Estado final',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoestadio',
                                title: 'Estado estadio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadogestionsocial',
                                title: 'Estado gestion social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoInscripcion',
                                title: 'Estado Inscripción',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrte',
                                title: 'Estado Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoRepòrteFV',
                                title: 'Estado reporte farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.EstadoseguimientoFV',
                                title: 'Estado seguimiento farmacovigilancia ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.Estadoautorizacion',
                                title: 'Estado Autorización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.tablassecundarias',
                        title: 'Tablas secundarias',
                        type: 'collapsable',
                        icon: 'heroicons_outline:device-tablet',
                        children: [
                            {
                                id: 'apps.tipoActividad',
                                title: 'Tipo actividad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConducta',
                                title: 'Tipo conducta',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoConfiguracionUsuario',
                                title: 'Tipo configuración usuario',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipocorreo',
                                title: 'Tipo correo',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodas28',
                                title: 'Tipo Das28',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodireccion',
                                title: 'Tipo dirección',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosis',
                                title: 'Tipo dosis',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipodosisxmedicamento',
                                title: 'Tipo dosis x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipohaq',
                                title: 'Tipo HAQ',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipoidentificacionxpais',
                                title: 'Tipo identificación x país',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporango',
                                title: 'Tipo rango',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tiporeportes',
                                title: 'Tipo reportes',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipotaller',
                                title: 'Tipo taller',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovisualizacion',
                                title: 'Tipo visualización',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.tipovivienda',
                                title: 'Tipo Vivienda',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.usoprevioxmedicamento',
                                title: 'Uso previo x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.viaadmin',
                                title: 'Vía administrativa',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.viasReport',
                                title: 'Vías Reporte',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.ZonasCiudad',
                                title: 'Zonas Ciudad',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.zonasEnfermeras',
                                title: 'Zonas Enfermeras',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.farmacovigilancia',
                        title: 'Farmacovigilancia',
                        type: 'collapsable',
                        icon: 'heroicons_outline:inbox',
                        children: [
                            {
                                id: 'apps.farmacovigilancia',
                                title: 'Farmacovigilancia',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.frecuencia',
                                title: 'Frecuencia',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                    {
                        id: 'apps.medicamentos',
                        title: 'Medicamentos',
                        type: 'collapsable',
                        icon: 'heroicons_outline:cloud',
                        children: [
                            {
                                id: 'apps.Medicamentos',
                                title: 'Medicamentos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantes',
                                title: 'Medicamentos concomitantes',
                                type: 'basic',
                                link: '/apps/bank'
                            },
                            {
                                id: 'apps.MedicamentosConcomitantesxmedicamento',
                                title: 'Medicamentos concomitantes x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosprevios',
                                title: 'Medicamentos previos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentospreviosxmedicamento',
                                title: 'Medicamentos previos x medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosusuarios',
                                title: 'Medicamentos usuarios',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medicamentosxmedicos',
                                title: 'Medicamentos x médicos',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.medico',
                                title: 'Médico',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.especialidades',
                                title: 'Especialidades',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoenvio',
                                title: 'Motivo envios gestión social',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivoretiro',
                                title: 'Motivo retiro',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.presentacion.medicamento',
                                title: 'Presentación medicamento',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.motivosuspension',
                                title: 'Motivo suspendido',
                                type: 'basic',
                                link: '/apps/company'
                            },
                            {
                                id: 'apps.movimientoenvio',
                                title: 'Movimiento envio',
                                type: 'basic',
                                link: '/apps/company'
                            },
                        ]
                    },
                ]
            },
            {
                id: 'apps.reports',
                title: 'Reports',
                type: 'collapsable',
                icon: 'heroicons_outline:printer',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.reports',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.reports.export',
                        title: 'Exportar',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },

                ]
            },
            {
                id: 'apps.consultas',
                title: 'Consultas',
                type: 'collapsable',
                icon: 'feather:book-open',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.consulta.pacientes',
                        title: 'Pacientes',
                        type: 'basic',
                        link: '/apps/branches',
                        exactMatch: true
                    },
                    {
                        id: 'apps.consulta.reportes',
                        title: 'Reportes',
                        type: 'basic',
                        link: '/apps/executives'
                    },
                ]
            },

            {
                id: 'apps.help-center',
                title: 'Help Center',
                type: 'collapsable',
                icon: 'heroicons_outline:information-circle',
                link: '/apps/help-center',
                children: [
                    {
                        id: 'apps.help-center.home',
                        title: 'Home',
                        type: 'basic',
                        link: '/apps/help-center',
                        exactMatch: true
                    },
                    {
                        id: 'apps.help-center.faqs',
                        title: 'FAQs',
                        type: 'basic',
                        link: '/apps/help-center/faqs'
                    },
                    {
                        id: 'apps.help-center.guides',
                        title: 'Guides',
                        type: 'basic',
                        link: '/apps/help-center/guides'
                    },
                    {
                        id: 'apps.help-center.support',
                        title: 'Support',
                        type: 'basic',
                        link: '/apps/help-center/support'
                    },
                    {
                        id: 'apps.academy',
                        title: 'Academy',
                        type: 'basic',
                        icon: 'heroicons_outline:academic-cap',
                        link: '/apps/academy'
                    },
                    {
                        id: 'apps.chat',
                        title: 'Chat',
                        type: 'basic',
                        icon: 'heroicons_outline:chat-alt',
                        link: '/apps/chat'
                    },
                    {
                        id: 'apps.contacts',
                        title: 'Contact Leads',
                        type: 'basic',
                        icon: 'heroicons_outline:user-group',
                        link: '/apps/contacts'
                    },
                    {
                        id: 'pages.activities',
                        title: 'Activities',
                        type: 'basic',
                        icon: 'heroicons_outline:menu-alt-2',
                        link: '/pages/activities'
                    },
                    {
                        id: 'pages.pricing',
                        title: 'Pricing',
                        type: 'basic',
                        icon: 'heroicons_outline:cash',
                        link: '/pages/pricing/modern'
                    },
                ]
            },
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
                        icon: 'heroicons_outline:login',
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
                        icon: 'heroicons_outline:logout',
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

            {
                id: 'pages.settings',
                title: 'Settings',
                type: 'basic',
                icon: 'heroicons_outline:cog',
                link: '/pages/settings'
            }
        ]
    }
];
