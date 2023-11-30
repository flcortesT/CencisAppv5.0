import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, RequiredValidator, UntypedFormBuilder, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatLuxonDateModule } from '@angular/material-luxon-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseCardComponent } from '@fuse/components/card';
import { FuseMasonryComponent } from '@fuse/components/masonry';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'app-registros',
    templateUrl: './registros.component.html',
    styleUrls: ['./registros.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatSlideToggleModule,
        TranslocoModule,
        MatButtonModule,
        FuseCardComponent,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule,
        MatDividerModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatLuxonDateModule,
        FuseMasonryComponent,
    ],
})
export class RegistrosComponent implements OnInit {
   
    verticalStepperForm: FormGroup;
    step1: FormGroup;
    step2: FormGroup;

    constructor(private _formBuilder: UntypedFormBuilder) {}

    ngOnInit(): void {
        this.verticalStepperForm = this._formBuilder.group({
            step1: this._formBuilder.group({
                pais: ['', Validators.required],
                departamento: [''],
                ciudad: [''],
                zona: [''],
                tipoidentificacion: [''],
                numeroidenticacion: [''],
                nombres: ['', Validators.required],
                telefono1: ['', Validators.required],
                telefono2: [''],
                email: [''],
            }),
            step2: this._formBuilder.group({
                medicamento: ['', Validators.required],
                asegurador: [''],
                fechaformula: [''],
                medicotratante: [''],
                enfermerazona: [''],
                diagnosticopaciente: [''],
                fechaprogramacion: [''],
                causalnoingreso: [''],
                puntosentrega: [''],
            }),
            step3: this._formBuilder.group({
                nombrereportante: [''],
                emailreportante: [''],
            }),
            step4: this._formBuilder.group({
                observaciones: [''],
            }),
        });
    }
}
