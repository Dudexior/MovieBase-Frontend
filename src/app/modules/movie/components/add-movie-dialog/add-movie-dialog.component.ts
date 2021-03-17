import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  templateUrl: './add-movie-dialog.component.html'
})
export class AddMovieDialogComponent implements OnInit {

  form!: FormGroup;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.form = this.movieService.buildMovieForm();
  }

  add(): void {
    console.log(this.form.getRawValue());
  }

}
