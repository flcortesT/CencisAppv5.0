import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';

@Component({
    selector       : 'languages',
    templateUrl    : './languages.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'languages',
    standalone     : true,
    imports        : [MatButtonModule, MatMenuModule, NgTemplateOutlet, NgFor],
})
export class LanguagesComponent implements OnInit, OnDestroy
{
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService,
        private _translocoService: TranslocoService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) =>
        {
            // Get the active lang
            this.activeLang = activeLang;

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            'en': 'us',
            'tr': 'tr',
            'es': 'co',
            'br': 'br',
            'pa': 'pa',
            'cl': 'cl',
            'pe': 'pe',
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void
    {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void
    {
        // For the demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can do a full swap and change the entire
        // navigation data.
        //
        // You can import the data from a file or request it from your backend,
        // it's up to you.

        // Get the component -> navigation data -> item
        const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>('mainNavigation');

        // Return if the navigation component does not exist
        if ( !navComponent )
        {
            return null;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;

        // Get the Project dashboard item and update its title
        const projectDashboardItem = this._fuseNavigationService.getItem('dashboards.project', navigation);
        if ( projectDashboardItem )
        {
            this._translocoService.selectTranslate('Project').pipe(take(1))
                .subscribe((translation) =>
                {
                    // Set the title
                    projectDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        const analyticsDashboardItem = this._fuseNavigationService.getItem('dashboards.analytics', navigation);
        if ( analyticsDashboardItem )
        {
            this._translocoService.selectTranslate('Analytics').pipe(take(1))
                .subscribe((translation) =>
                {
                    // Set the title
                    analyticsDashboardItem.title = translation;

                    // Refresh the navigation component
                    navComponent.refresh();
                });
        }
        const appsAttentionItem = this._fuseNavigationService.getItem('apps.inscription', navigation);
        if (appsAttentionItem) {
            this._translocoService.selectTranslate('Attention-Header').pipe(take(1)).subscribe((translation) => { // Set the title
                appsAttentionItem.title = translation;
                appsAttentionItem.subtitle = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const registroItem = this._fuseNavigationService.getItem('apps.registro', navigation);
        if (registroItem) {
            this._translocoService.selectTranslate('Attention-Registro').pipe(take(1)).subscribe((translation) => { // Set the title
                registroItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const fileManagerItem = this._fuseNavigationService.getItem('apps.file-manager', navigation);
        if (fileManagerItem) {
            this._translocoService.selectTranslate('File-Manager').pipe(take(1)).subscribe((translation) => { // Set the title
                fileManagerItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const pacienteReportadoItem = this._fuseNavigationService.getItem('apps.pacientesReportados', navigation);
        if (pacienteReportadoItem) {
            this._translocoService.selectTranslate('Attention-Reportados').pipe(take(1)).subscribe((translation) => { // Set the title
                pacienteReportadoItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const NoContactadosItem = this._fuseNavigationService.getItem('apps.noContactados', navigation);
        if (NoContactadosItem) {
            this._translocoService.selectTranslate('Attention-NoContactados').pipe(take(1)).subscribe((translation) => { // Set the title
                NoContactadosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const appsItem = this._fuseNavigationService.getItem('apps', navigation);
        if (appsItem) {
            this._translocoService.selectTranslate('Apps-TeraQ').pipe(take(1)).subscribe((translation) => { // Set the title
                appsItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoItem = this._fuseNavigationService.getItem('apps.seguimiento', navigation);
        if (seguimientoItem) {
            this._translocoService.selectTranslate('Seguimiento').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoItem.title = translation;
                seguimientoItem.subtitle = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoEnInscripcionItem = this._fuseNavigationService.getItem('apps.enseguimiento', navigation);
        if (seguimientoEnInscripcionItem) {
            this._translocoService.selectTranslate('Seguimiento-EnSeguimiento').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoEnInscripcionItem.title = translation;
                seguimientoEnInscripcionItem.subtitle = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoInscritosItem = this._fuseNavigationService.getItem('apps.inscritos', navigation);
        if (seguimientoInscritosItem) {
            this._translocoService.selectTranslate('Seguimiento-Inscritos').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoInscritosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoFormuladosItem = this._fuseNavigationService.getItem('apps.formulados', navigation);
        if (seguimientoFormuladosItem) {
            this._translocoService.selectTranslate('Seguimiento-Formulados').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoFormuladosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoTitulacionItem = this._fuseNavigationService.getItem('apps.titulacion', navigation);
        if (seguimientoTitulacionItem) {
            this._translocoService.selectTranslate('Seguimiento-Titulacion').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoTitulacionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoSuspendidosItem = this._fuseNavigationService.getItem('apps.suspendidos', navigation);
        if (seguimientoSuspendidosItem) {
            this._translocoService.selectTranslate('Seguimiento-Suspendidos').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoSuspendidosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoRetiradosItem = this._fuseNavigationService.getItem('apps.retirados', navigation);
        if (seguimientoRetiradosItem) {
            this._translocoService.selectTranslate('Seguimiento-Retirados').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoRetiradosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoProntaAplicacionItem = this._fuseNavigationService.getItem('apps.prontaaplicacion', navigation);
        if (seguimientoProntaAplicacionItem) {
            this._translocoService.selectTranslate('Seguimiento-ProntaAplicacion').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoProntaAplicacionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoAsignadosItem = this._fuseNavigationService.getItem('apps.asignadosac', navigation);
        if (seguimientoAsignadosItem) {
            this._translocoService.selectTranslate('Seguimiento-Asignacion').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoAsignadosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoEjecucionItem = this._fuseNavigationService.getItem('apps.ejecucionac', navigation);
        if (seguimientoEjecucionItem) {
            this._translocoService.selectTranslate('Seguimiento-Ejecucion').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoEjecucionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const seguimientoProcesosAdminItem = this._fuseNavigationService.getItem('apps.procesosadmin', navigation);
        if (seguimientoProcesosAdminItem) {
            this._translocoService.selectTranslate('Seguimiento-ProcesosAdmin').pipe(take(1)).subscribe((translation) => { // Set the title
                seguimientoProcesosAdminItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }
        

        const parametersItem = this._fuseNavigationService.getItem('apps.parameters', navigation);
        if (parametersItem) {
            this._translocoService.selectTranslate('Parameters').pipe(take(1)).subscribe((translation) => { // Set the title
                parametersItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const companyItem = this._fuseNavigationService.getItem('apps.actividad', navigation);
        if (companyItem) {
            this._translocoService.selectTranslate('Parameters-Actividad').pipe(take(1)).subscribe((translation) => { // Set the title
                companyItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const datosclinicosItem = this._fuseNavigationService.getItem('apps.datosclinicos', navigation);
        if (datosclinicosItem) {
            this._translocoService.selectTranslate('Parameters-DatosClinicos').pipe(take(1)).subscribe((translation) => { // Set the title
                datosclinicosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const collectorItem = this._fuseNavigationService.getItem('apps.caracteristicas', navigation);
        if (collectorItem) {
            this._translocoService.selectTranslate('Parameters-Caracteristicas').pipe(take(1)).subscribe((translation) => { // Set the title
                collectorItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const modulesOneItem = this._fuseNavigationService.getItem('apps.ejecuciones', navigation);
        if (modulesOneItem) {
            this._translocoService.selectTranslate('Parameters-Ejecuciones').pipe(take(1)).subscribe((translation) => { // Set the title
                modulesOneItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }


        const bankItem = this._fuseNavigationService.getItem('apps.localizacion', navigation);
        if (bankItem) {
            this._translocoService.selectTranslate('Parameters-Localizacion').pipe(take(1)).subscribe((translation) => { // Set the title
                bankItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const moduleItem = this._fuseNavigationService.getItem('apps.categoria', navigation);
        if (moduleItem) {
            this._translocoService.selectTranslate('Parameters-Categorias').pipe(take(1)).subscribe((translation) => { // Set the title
                moduleItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const ActivosItem = this._fuseNavigationService.getItem('apps.adminActividad', navigation);
        if (ActivosItem) {
            this._translocoService.selectTranslate('Parameters-Actividad').pipe(take(1)).subscribe((translation) => { // Set the title
                ActivosItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const buttonsItem = this._fuseNavigationService.getItem('apps.gestion', navigation);
        if (buttonsItem) {
            this._translocoService.selectTranslate('Parameters-Gestion').pipe(take(1)).subscribe((translation) => { // Set the title
                buttonsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const officeItem = this._fuseNavigationService.getItem('apps.ocupaciones', navigation);
        if (officeItem) {
            this._translocoService.selectTranslate('Parameters-Ocupaciones').pipe(take(1)).subscribe((translation) => { // Set the title
                officeItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const servicesItem = this._fuseNavigationService.getItem('apps.soportegral', navigation);
        if (servicesItem) {
            this._translocoService.selectTranslate('Parameters-SoporteGral').pipe(take(1)).subscribe((translation) => { // Set the title
                servicesItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const locationItem = this._fuseNavigationService.getItem('apps.parameters.location', navigation);
        if (locationItem) {
            this._translocoService.selectTranslate('Parameters-Location').pipe(take(1)).subscribe((translation) => { // Set the title
                locationItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const divisionsItem = this._fuseNavigationService.getItem('apps.tablassecundarias', navigation);
        if (divisionsItem) {
            this._translocoService.selectTranslate('Parameters-TablasSecundarias').pipe(take(1)).subscribe((translation) => { // Set the title
                divisionsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const positionsItem = this._fuseNavigationService.getItem('apps.farmacovigilancia', navigation);
        if (positionsItem) {
            this._translocoService.selectTranslate('Parameters-Farmacovigilancia').pipe(take(1)).subscribe((translation) => { // Set the title
                positionsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const statusItem = this._fuseNavigationService.getItem('apps.medicamentos', navigation);
        if (statusItem) {
            this._translocoService.selectTranslate('Parameters-Medicamentos').pipe(take(1)).subscribe((translation) => { // Set the title
                statusItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const preferencesItem = this._fuseNavigationService.getItem('apps.parameters.Preference', navigation);
        if (preferencesItem) {
            this._translocoService.selectTranslate('Parameters-Preferences').pipe(take(1)).subscribe((translation) => { // Set the title
                preferencesItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const areaxPositionItem = this._fuseNavigationService.getItem('apps.parameters.AreaxPosicion', navigation);
        if (areaxPositionItem) {
            this._translocoService.selectTranslate('Parameters-Area_Position').pipe(take(1)).subscribe((translation) => { // Set the title
                areaxPositionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const counterItem = this._fuseNavigationService.getItem('apps.parameters.counters', navigation);
        if (counterItem) {
            this._translocoService.selectTranslate('Parameters-Counters').pipe(take(1)).subscribe((translation) => { // Set the title
                counterItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const cleanItem = this._fuseNavigationService.getItem('apps.parameters.clean', navigation);
        if (cleanItem) {
            this._translocoService.selectTranslate('Parameters-Clean').pipe(take(1)).subscribe((translation) => { // Set the title
                cleanItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const reportsItem = this._fuseNavigationService.getItem('apps.reports', navigation);
        if (reportsItem) {
            this._translocoService.selectTranslate('Apps-Reports').pipe(take(1)).subscribe((translation) => {
                // Set the title
                reportsItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const branchesItem = this._fuseNavigationService.getItem('apps.reports.branches', navigation);
        if (branchesItem) {
            this._translocoService.selectTranslate('Apps-Branches').pipe(take(1)).subscribe((translation) => {
                // Set the title
                branchesItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const executivesItem = this._fuseNavigationService.getItem('apps.reports.executives', navigation);
        if (executivesItem) {
            this._translocoService.selectTranslate('Apps-Executives').pipe(take(1)).subscribe((translation) => {
                // Set the title
                executivesItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const supervisorItem = this._fuseNavigationService.getItem('apps.reports.supervisors', navigation);
        if (supervisorItem) {
            this._translocoService.selectTranslate('Apps-Supervisors').pipe(take(1)).subscribe((translation) => {
                // Set the title
                supervisorItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const averageItem = this._fuseNavigationService.getItem('apps.reports.average', navigation);
        if (averageItem) {
            this._translocoService.selectTranslate('Apps-AverageTimes').pipe(take(1)).subscribe((translation) => {
                // Set the title
                averageItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const turnsItem = this._fuseNavigationService.getItem('apps.reports.turns', navigation);
        if (turnsItem) {
            this._translocoService.selectTranslate('Apps-TurnAttended').pipe(take(1)).subscribe((translation) => {
                // Set the title
                turnsItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const monitoringItem = this._fuseNavigationService.getItem('apps.reports.monitoring', navigation);
        if (monitoringItem) {
            this._translocoService.selectTranslate('Apps-OfficeMonitoring').pipe(take(1)).subscribe((translation) => {
                // Set the title
                monitoringItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const accumulateItem = this._fuseNavigationService.getItem('apps.reports.accumulated', navigation);
        if (accumulateItem) {
            this._translocoService.selectTranslate('Apps-AccumulatedTimes').pipe(take(1)).subscribe((translation) => {
                // Set the title
                accumulateItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const generalItem = this._fuseNavigationService.getItem('apps.reports.general', navigation);
        if (generalItem) {
            this._translocoService.selectTranslate('Apps-GeneralReports').pipe(take(1)).subscribe((translation) => {
                // Set the title
                generalItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskItem = this._fuseNavigationService.getItem('apps.help-center', navigation);
        if (helpdeskItem) {
            this._translocoService.selectTranslate('Apps-HelpCenter').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskHomeItem = this._fuseNavigationService.getItem('apps.help-center.home', navigation);
        if (helpdeskHomeItem) {
            this._translocoService.selectTranslate('Apps-Home').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskHomeItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskFQItem = this._fuseNavigationService.getItem('apps.help-center.faqs', navigation);
        if (helpdeskFQItem) {
            this._translocoService.selectTranslate('Apps-FAQs').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskFQItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskGuidesItem = this._fuseNavigationService.getItem('apps.help-center.guides', navigation);
        if (helpdeskGuidesItem) {
            this._translocoService.selectTranslate('Apps-Guides').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskGuidesItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskSupportItem = this._fuseNavigationService.getItem('apps.help-center.support', navigation);
        if (helpdeskSupportItem) {
            this._translocoService.selectTranslate('Apps-Support').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskSupportItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskAcademyItem = this._fuseNavigationService.getItem('apps.academy', navigation);
        if (helpdeskAcademyItem) {
            this._translocoService.selectTranslate('Apps-Academy').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskAcademyItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskChatItem = this._fuseNavigationService.getItem('apps.chat', navigation);
        if (helpdeskChatItem) {
            this._translocoService.selectTranslate('Apps-Chat').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskChatItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskLeadsItem = this._fuseNavigationService.getItem('apps.contacts', navigation);
        if (helpdeskLeadsItem) {
            this._translocoService.selectTranslate('Apps-Contact-leads').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskLeadsItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskActivitiesItem = this._fuseNavigationService.getItem('pages.activities', navigation);
        if (helpdeskActivitiesItem) {
            this._translocoService.selectTranslate('Pages-Activity').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskActivitiesItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const helpdeskPricesItem = this._fuseNavigationService.getItem('pages.pricing', navigation);
        if (helpdeskPricesItem) {
            this._translocoService.selectTranslate('Pages-Price').pipe(take(1)).subscribe((translation) => { // Set the title
                helpdeskPricesItem.title = translation;

                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const pagesItem = this._fuseNavigationService.getItem('pages', navigation);
        if (pagesItem) {
            this._translocoService.selectTranslate('Pages-Security').pipe(take(1)).subscribe((translation) => { // Set the title
                pagesItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationItem = this._fuseNavigationService.getItem('pages.authentication', navigation);
        if (authenticationItem) {
            this._translocoService.selectTranslate('Pages-Authentication').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationSignInItem = this._fuseNavigationService.getItem('pages.authentication.sign-in', navigation);
        if (authenticationSignInItem) {
            this._translocoService.selectTranslate('Pages-Authentication-SignIn').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationSignInItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationSignUpItem = this._fuseNavigationService.getItem('pages.authentication.sign-up', navigation);
        if (authenticationSignUpItem) {
            this._translocoService.selectTranslate('Pages-Authentication-SignUp').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationSignUpItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

         const authenticationGrantItem = this._fuseNavigationService.getItem(
             'pages.authentication.grant',
             navigation
         );
         if (authenticationGrantItem) {
             this._translocoService
                 .selectTranslate('Pages-Authentication-Grant')
                 .pipe(take(1))
                 .subscribe((translation) => {
                     // Set the title
                     authenticationGrantItem.title = translation;
                     // Refresh the navigation component
                     navComponent.refresh();
                 });
         }


        const authenticationSignOutItem = this._fuseNavigationService.getItem('pages.authentication.sign-out', navigation);
        if (authenticationSignOutItem) {
            this._translocoService.selectTranslate('Pages-Authentication-SignOut').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationSignOutItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationForgotItem = this._fuseNavigationService.getItem('pages.authentication.sign-forgot', navigation);
        if (authenticationForgotItem) {
            this._translocoService.selectTranslate('Pages-Authentication-ForgotPassword').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationForgotItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationResetItem = this._fuseNavigationService.getItem('pages.authentication.sign-reset', navigation);
        if (authenticationResetItem) {
            this._translocoService.selectTranslate('Pages-Authentication-ResetPassword').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationResetItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationUnlockItem = this._fuseNavigationService.getItem('pages.authentication.sign-unlock', navigation);
        if (authenticationUnlockItem) {
            this._translocoService.selectTranslate('Pages-Authentication-Unlock').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationUnlockItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationlockScreenItem = this._fuseNavigationService.getItem('pages.authentication.sign-confirm', navigation);
        if (authenticationlockScreenItem) {
            this._translocoService.selectTranslate('Pages-Authentication-LockScreen').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationlockScreenItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const authenticationProfileItem = this._fuseNavigationService.getItem('pages.profile', navigation);
        if (authenticationProfileItem) {
            this._translocoService.selectTranslate('Pages-Authentication-Profile').pipe(take(1)).subscribe((translation) => { // Set the title
                authenticationProfileItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }


        const configurationItem = this._fuseNavigationService.getItem('pages.settings', navigation);
        if (configurationItem) {
            this._translocoService.selectTranslate('Pages-Authentication-Settings').pipe(take(1)).subscribe((translation) => { // Set the title
                configurationItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteAdminItem = this._fuseNavigationService.getItem('apps.adminteraq', navigation);
        if (deleteAdminItem) {
            this._translocoService.selectTranslate('Delete-Header').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteAdminItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteCompanyItem = this._fuseNavigationService.getItem('apps.admin.deleteCompany', navigation);
        if (deleteCompanyItem) {
            this._translocoService.selectTranslate('Delete-Company').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteCompanyItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteButtonsItem = this._fuseNavigationService.getItem('apps.admin.deleteButtons', navigation);
        if (deleteButtonsItem) {
            this._translocoService.selectTranslate('Delete-Buttons').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteButtonsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteOfficeItem = this._fuseNavigationService.getItem('apps.admin.deleteOffice', navigation);
        if (deleteOfficeItem) {
            this._translocoService.selectTranslate('Delete-Office').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteOfficeItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteServicesItem = this._fuseNavigationService.getItem('apps.admin.deleteService', navigation);
        if (deleteServicesItem) {
            this._translocoService.selectTranslate('Delete-Service').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteServicesItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteLocationItem = this._fuseNavigationService.getItem('apps.admin.deleteLocations', navigation);
        if (deleteLocationItem) {
            this._translocoService.selectTranslate('Delete-Location').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteLocationItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteDivisionItem = this._fuseNavigationService.getItem('apps.admin.deleteDivisions', navigation);
        if (deleteDivisionItem) {
            this._translocoService.selectTranslate('Delete-Divisions').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteDivisionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deletePositionItem = this._fuseNavigationService.getItem('apps.admin.deletePositions', navigation);
        if (deletePositionItem) {
            this._translocoService.selectTranslate('Delete-Positions').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deletePositionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteStatusItem = this._fuseNavigationService.getItem('apps.admin.deleteStatus', navigation);
        if (deleteStatusItem) {
            this._translocoService.selectTranslate('Delete-Status').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteStatusItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deletePreferenceItem = this._fuseNavigationService.getItem('apps.admin.deletePreference', navigation);
        if (deletePreferenceItem) {
            this._translocoService.selectTranslate('Delete-Preference').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deletePreferenceItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const deleteAreaPositioneItem = this._fuseNavigationService.getItem('apps.admin.deleteAreaxPosition', navigation);
        if (deleteAreaPositioneItem) {
            this._translocoService.selectTranslate('Delete-AreaPosition').pipe(take(1)).subscribe((translation) => {
                // Set the title
                deleteAreaPositioneItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateAdminItem = this._fuseNavigationService.getItem('apps.adminteraqupd', navigation);
        if (updateAdminItem) {
            this._translocoService.selectTranslate('Update-Header').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateAdminItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateCompanyItem = this._fuseNavigationService.getItem('apps.admin.updateCompany', navigation);
        if (updateCompanyItem) {
            this._translocoService.selectTranslate('Update-Company').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateCompanyItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateButtonsItem = this._fuseNavigationService.getItem('apps.admin.updateButtons', navigation);
        if (updateButtonsItem) {
            this._translocoService.selectTranslate('Update-Buttons').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateButtonsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateOfficeItem = this._fuseNavigationService.getItem('apps.admin.updateOffice', navigation);
        if (updateOfficeItem) {
            this._translocoService.selectTranslate('Update-Office').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateOfficeItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateServiceItem = this._fuseNavigationService.getItem('apps.admin.updateService', navigation);
        if (updateServiceItem) {
            this._translocoService.selectTranslate('Update-Service').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateServiceItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateLocationItem = this._fuseNavigationService.getItem('apps.admin.updateLocation', navigation);
        if (updateLocationItem) {
            this._translocoService.selectTranslate('Update-Location').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateLocationItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateDivisionsItem = this._fuseNavigationService.getItem('apps.admin.updateDivisions', navigation);
        if (updateDivisionsItem) {
            this._translocoService.selectTranslate('Update-Divisions').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateDivisionsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updatePositionsItem = this._fuseNavigationService.getItem('apps.admin.updatePositions', navigation);
        if (updatePositionsItem) {
            this._translocoService.selectTranslate('Update-Positions').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updatePositionsItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateStatusItem = this._fuseNavigationService.getItem('apps.admin.updateStatus', navigation);
        if (updateStatusItem) {
            this._translocoService.selectTranslate('Update-Status').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateStatusItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updatePreferenceItem = this._fuseNavigationService.getItem('apps.admin.updatePreference', navigation);
        if (updatePreferenceItem) {
            this._translocoService.selectTranslate('Update-Preference').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updatePreferenceItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }

        const updateAreaPositionItem = this._fuseNavigationService.getItem('apps.admin.updateAreaxPosition', navigation);
        if (updateAreaPositionItem) {
            this._translocoService.selectTranslate('Update-AreaPosition').pipe(take(1)).subscribe((translation) => {
                // Set the title
                updateAreaPositionItem.title = translation;
                // Refresh the navigation component
                navComponent.refresh();
            });
        }
    }
}
