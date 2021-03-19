import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { staggerScale } from 'src/app/shared/animations';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { AddMovieDialogComponent } from '../add-movie-dialog/add-movie-dialog.component';

@Component({
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
  animations: [staggerScale]
})
export class MoviePageComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  movies: Movie[] = [];
  loading = false;
  onTouchScreen = false;

  constructor(private moviesService: MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.downloadMovies()
    );
  }

  openAddingMovieDialog(): void {
    const dialogRef = this.dialog.open(AddMovieDialogComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.subscriptions.push(this.downloadMovies());
      }
    });
  }

  private downloadMovies(): Subscription {
    this.loading = true;

    return this.moviesService.getMovies().subscribe(res => {
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
