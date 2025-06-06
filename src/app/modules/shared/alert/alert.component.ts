import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, timer} from 'rxjs';
import {AlertService, Alert, AlertType} from '../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit, OnDestroy {
  public message: Alert | null = null;
  public alertClass = '';
  public isVisible = false;

  private alertSub?: Subscription;
  private timerSub?: Subscription;

  constructor(private readonly alertService: AlertService) {
  }

  ngOnInit(): void {
    this.alertSub = this.alertService.getAlert().subscribe((alert) => {
      if (!alert) {
        this.hideAlert();
        return;
      }
      this.message = alert;
      this.setClass(alert.type);
      this.showAlert();

      // Limpiar timer anterior si existe
      this.timerSub?.unsubscribe();

      const duration = alert.duration ?? 5000;
      this.timerSub = timer(duration).subscribe(() => this.hideAlert());
    });
  }

  private setClass(type: AlertType): void {
    const baseClass = 'alert';
    this.alertClass = `${baseClass} ${['success', 'error', 'warning', 'info'].includes(type) ? `alert-${type}` : ''}`.trim();
  }

  private showAlert(): void {
    this.isVisible = true;
  }

  hideAlert(): void {
    this.isVisible = false;
    setTimeout(() => {
      this.message = null;
      this.alertClass = '';
    }, 300);
  }

  close(): void {
    this.timerSub?.unsubscribe();
    this.hideAlert();
  }

  ngOnDestroy(): void {
    this.alertSub?.unsubscribe();
    this.timerSub?.unsubscribe();
  }
}
