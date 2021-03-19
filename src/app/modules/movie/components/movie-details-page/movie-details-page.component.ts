import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideHeight } from 'src/app/shared/animations';
import { SnackbarService } from 'src/app/shared/modules/services/snackbar.service';
import { Display } from '../../models/display';
import { Movie } from '../../models/movie';
import { MovieSimple } from '../../models/movie-simple';
import { DisplayService } from '../../services/display.service';
import { ImageService } from '../../services/image.service';
import { MovieService } from '../../services/movie.service';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss'],
  animations: [slideHeight]
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {

  movie!: Movie;
  movieForm!: FormGroup;
  displays!: Display[];
  loading = false;
  editMode = false;
  subscriptions: Subscription[] = [];

  selectedFile: File | undefined | null;

  constructor(private route: ActivatedRoute, private movieService: MovieService, private imageService: ImageService,
              public dialog: MatDialog, private router: Router, private displayService: DisplayService,
              private snackbarService: SnackbarService) { }

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

    if (this.selectedFile) {
      this.subscriptions.push(
        this.patchImage(this.selectedFile)
      );
    }
  }

  onFileSelect(event: Event): void {
    // tslint:disable-next-line:no-non-null-assertion
    const castedEvent = event.target as HTMLInputElement;
    this.selectedFile = castedEvent.files?.item(0);
  }

  openDeleteConfirmationDialog(): void {
    const dialogRed = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRed.afterClosed().subscribe(confirmation => {
      if (confirmation) {
        this.subscriptions.push(
          this.deleteMovie(this.movie.id)
        );
      }
    });
  }

  private patchMovie(editedMovie: MovieSimple): Subscription {
    return this.movieService.patchMovie(this.movie.id, editedMovie).subscribe(mov => {
      if (!this.selectedFile) {
        this.movieDownloadedActions(mov);
      }
    });
  }

  private patchImage(image: File): Subscription {
    return this.imageService.patchImage(this.movie.id, image).subscribe(res => {
      this.movieDownloadedActions(res);
      this.selectedFile = null;
    });
  }

  private getDataFromUrl(): Subscription {
    return this.route.params.subscribe(params => {
      if (params.id) {
        this.subscriptions.push(
          this.downloadMovie(+params.id),
          this.downloadDisplays(+params.id)
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
      this.doesNotExistActions();
      this.loading = false;
    });
  }

  private deleteMovie(id: number): Subscription {
    this.loading = true;

    return this.movieService.deleteMovie(id).subscribe(() => {
      this.loading = false;
      this.router.navigate(['']);
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

  private downloadDisplays(movieId: number): Subscription {
    return this.displayService.getDisplaysForMovie(movieId).subscribe(res => {
      this.displays = res;
    });
  }

  private doesNotExistActions(): void {
    this.snackbarService.showSnackbar(`Movie does not exist`, true);
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
