import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MoviePageComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
  ]
})
export class MovieModule { }
