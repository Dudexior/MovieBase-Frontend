import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';

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

  constructor(private route: ActivatedRoute, private movieService: MovieService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.getDataFromUrl()
    );
  }

  editToggle(): void {
    this.editMode = !this.editMode;
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

    return this.movieService.downloadSingleMovie(id).subscribe(mov => {
      this.movie = mov;
      this.movieForm = this.buildMovieForm(mov);
      this.loading = false;
    }, () => {
      // error actions
      this.loading = false;
    });
  }

  private buildMovieForm(movieToPach?: Movie): FormGroup {
    const form = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      duration: [null, Validators.required]
    });

    if (movieToPach) {
      form.patchValue(movieToPach);
    }

    return form;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

}
