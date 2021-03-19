import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }



  showSnackbar(text: string, error = false): void {
    const config: MatSnackBarConfig = new MatSnackBarConfig();

    if (error) {
      config.panelClass = ['snackbar--error'];
      config.duration = 50000;
    }

    this.snackBar.open(text, undefined, config);
  }
}
