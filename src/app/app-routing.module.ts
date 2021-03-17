import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsPageComponent } from './modules/movie/components/movie-details-page/movie-details-page.component';
import { MoviePageComponent } from './modules/movie/components/movie-page/movie-page.component';

const routes: Routes = [
  {
    path: '',
    component: MoviePageComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
