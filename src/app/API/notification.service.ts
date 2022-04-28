import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public snackbar: MatSnackBar, private zone: NgZone) { }

  success(message: string, duration?: number): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackBarSuccess'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = duration !== undefined ? duration : 3000;
    this.zone.run(() => {
      this.snackbar.open(message, 'X', config);
    });
  }

  warning(message: string, duration?: number): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackBarWarning'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    config.duration = duration !== undefined ? duration : 3000;
    this.zone.run(() => {
      this.snackbar.open(message, 'X', config);
    });
  }

  error(message: string, duration?: number): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackBarError'];
    config.verticalPosition = 'top';
    config.horizontalPosition = 'center';
    if (duration) {
      config.duration = duration;
    }
    this.zone.run(() => {
      this.snackbar.open(message, 'X', config);
    });
  }

  public handleError<T>(
    operation = 'operation',
    showMsg = true,
    result?: T
  ): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      if (showMsg === true && error.status !== 200) {
        this.error(`${operation} failed: ${error.message}`);
      }
      return of(result as T);
    };
  }

}
