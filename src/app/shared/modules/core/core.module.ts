import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TextTruncatePipe } from '../../pipes/text-truncate.pipe';



@NgModule({
  declarations: [HeaderComponent, TextTruncatePipe],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    TextTruncatePipe
  ]
})
export class CoreModule { }
