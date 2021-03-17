import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ImageWrapperComponent } from './components/movie-card/image-wrapper/image-wrapper.component';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';


@NgModule({
  declarations: [MoviePageComponent, MovieCardComponent, ImageWrapperComponent, MovieDetailsPageComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class MovieModule { }
