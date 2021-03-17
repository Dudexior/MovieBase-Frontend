import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { staggerScale } from 'src/app/shared/animations';
import { DeviceService } from 'src/app/shared/modules/services/device.service';
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

  constructor(private moviesService: MovieService, private deviceService: DeviceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.downloadMovies(),
      this.listenToTouchScreen()
    );
  }

  openAddingMovieDialog(): void {
    const dialogRef = this.dialog.open(AddMovieDialogComponent);

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
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

  private listenToTouchScreen(): Subscription {
    return this.deviceService.onTouchScreen$.subscribe(res => {
      this.onTouchScreen = res;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
