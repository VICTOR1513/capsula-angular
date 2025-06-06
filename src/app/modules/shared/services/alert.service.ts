import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

//Tipos de alertas
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface Alert {
    type: AlertType;
    text: string;
    title: string;
    duration?: number;
}

const DEFAULT_TITLES: Record<AlertType, string> = {
    success: '¡Éxito!',
    error: '¡Se ha presentado un error!',
    warning: '¡Atención!',
    info: 'Información',
};

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert | null>();
    private persistOnRouteChange = false;
    private timeoutId?: ReturnType<typeof setTimeout>;

    constructor(router: Router) {
        // Limpia alertas al cambiar ruta si no se deben mantener
        router.events.subscribe((event) => {
            if (event instanceof NavigationStart && !this.persistOnRouteChange) {
                this.clear();
            }
            this.persistOnRouteChange = false;
        });
    }

    getAlert(): Observable<Alert | null> {
        return this.subject.asObservable();
    }

    private showAlert(type: AlertType, text: string, duration?: number, persistOnRouteChange = false): void {
        this.persistOnRouteChange = persistOnRouteChange;

        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

            const ALERT: Alert = {
            type,
            text,
            title: DEFAULT_TITLES[type],
            duration: duration ? duration * 1000 : undefined,
        };

        this.subject.next(ALERT);

        if (duration && duration > 0) {
            this.timeoutId = setTimeout(() => this.clear(), duration * 1000);
        }
    }

    success(text: string, duration?: number, persistOnRouteChange = false): void {
        this.showAlert('success', text, duration, persistOnRouteChange);
    }

    error(text = 'Error.', duration?: number, persistOnRouteChange = false): void {
        this.showAlert('error', text, duration, persistOnRouteChange);
    }

    info(text: string, duration?: number, persistOnRouteChange = false): void {
        this.showAlert('info', text, duration, persistOnRouteChange);
    }

    warning(text: string, duration?: number, persistOnRouteChange = false): void {
        this.showAlert('warning', text, duration, persistOnRouteChange);
    }

    // Limpia la alerta actual
    clear(): void {
        if (this.timeoutId) clearTimeout(this.timeoutId);
        this.subject.next(null);
    }
}
