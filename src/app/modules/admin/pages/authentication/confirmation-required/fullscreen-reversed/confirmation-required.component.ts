import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
    selector: 'confirmation-required-fullscreen-reversed',
    templateUrl: './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [RouterLink, TranslocoModule],
})
export class ConfirmationRequiredFullscreenReversedComponent {
    /**
     * Constructor
     */
    constructor() {}
}
