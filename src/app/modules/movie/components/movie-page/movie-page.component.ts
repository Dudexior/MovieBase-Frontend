import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  movies: Movie[] = [];
  loading = false;

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.downloadMovies()
    );
  }

  private downloadMovies(): Subscription {
    this.loading = true;

    return this.moviesService.downloadMovies().subscribe(res => {
      this.movies = res;
      this.loading = false;
    }, () => {
      // error actions
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
