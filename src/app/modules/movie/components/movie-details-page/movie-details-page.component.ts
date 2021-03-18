import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie';
import { MovieSimple } from '../../models/movie-simple';
import { MovieService } from '../../services/movie.service';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {

  movie!: Movie;
  movieForm!: FormGroup;
  loading = false;
  editMode = false;
  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.getDataFromUrl()
    );
  }

  editToggle(): void {
    this.editMode = !this.editMode;
  }

  revert(): void {
    this.movieForm.patchValue(this.movie);
    this.editToggle();
  }

  save(): void {
    const editedMovie = this.movieForm.getRawValue() as MovieSimple;

    this.subscriptions.push(
      this.patchMovie(editedMovie)
    );
  }

  openDeleteConfirmationDialog(): void {
    const dialogRed = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRed.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  private patchMovie(editedMovie: MovieSimple): Subscription {
    return this.movieService.patchMovie(this.movie.id, editedMovie).subscribe(mov => {
      this.movieDownloadedActions(mov);
    });
  }

  private getDataFromUrl(): Subscription {
    return this.route.params.subscribe(params => {
      if (params.id) {
        this.subscriptions.push(
          this.downloadMovie(+params.id)
        );
      } else {
        console.error('no id in address');
      }
    });
  }

  private downloadMovie(id: number): Subscription {
    this.loading = true;

    return this.movieService.getSingleMovie(id).subscribe(mov => {
      this.movieDownloadedActions(mov);
    }, () => {
      // error actions
      this.loading = false;
    });
  }

  private movieDownloadedActions(downloadedMovie: Movie): void {
    this.movie = downloadedMovie;
    this.movieForm = this.movieService.buildMovieForm(downloadedMovie);
    this.loading = false;
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
