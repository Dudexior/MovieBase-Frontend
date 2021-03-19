import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { MovieSimple } from '../../models/movie-simple';
import { MovieService } from '../../services/movie.service';

@Component({
  templateUrl: './add-movie-dialog.component.html',
  styles: [
    `
    .button__overlaySpinner{
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
    }

    .button{
      position: relative;
    }
    `
  ]
})
export class AddMovieDialogComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  postSubscription: Subscription | undefined;

  constructor(private movieService: MovieService, public dialogRef: MatDialogRef<AddMovieDialogComponent>) { }

  ngOnInit(): void {
    this.form = this.movieService.buildMovieForm();
  }

  add(): void {
    this.loading = true;

    const movieToAdd = this.form.getRawValue() as MovieSimple;

    this.postSubscription = this.movieService.postMovie(movieToAdd).subscribe((res) => {
      this.loading = false;
      this.dialogRef.close(res);
    }, () => {
      // error actions
      this.dialogRef.close(false);
    });
  }

}
