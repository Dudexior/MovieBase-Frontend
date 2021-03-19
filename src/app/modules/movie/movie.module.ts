import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ImageWrapperComponent } from './components/image-wrapper/image-wrapper.component';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { AddMovieDialogComponent } from './components/add-movie-dialog/add-movie-dialog.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { DisplayTimelineComponent } from './components/display-timeline/display-timeline.component';
import { TimelineElementComponent } from './components/display-timeline/timeline-element/timeline-element.component';
import { CoreModule } from 'src/app/shared/modules/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    MoviePageComponent,
    MovieCardComponent,
    ImageWrapperComponent,
    MovieDetailsPageComponent,
    MovieFormComponent,
    AddMovieDialogComponent,
    DeleteConfirmationDialogComponent,
    DisplayTimelineComponent,
    TimelineElementComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class MovieModule { }
