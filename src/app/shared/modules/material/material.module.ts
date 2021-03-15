import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
