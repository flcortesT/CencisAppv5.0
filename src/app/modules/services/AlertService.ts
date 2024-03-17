import { Injectable } from '@angular/core';
import { FuseAlertService } from '@fuse/components/alert';

@Injectable({
    providedIn: 'root',
})
export class AlertService {
    constructor(private _fuseAlertService: FuseAlertService) {}

    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void {
        this._fuseAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void {
        this._fuseAlertService.show(name);
    }
}
