import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'confirmation-required-classic',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [RouterLink, TranslocoModule],
})
export class ConfirmationRequiredClassicComponent {
    /**
     * Constructor
     */
    constructor() {}
}
