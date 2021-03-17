import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { GET_ALL_MOVIES, GET_SINGLE_MOVIE } from 'src/app/shared/consts';
import { take } from 'rxjs/operators';
import { MovieSimple } from '../models/movie-simple';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  downloadMovies(): Observable<Movie[]> {
    const url = GET_ALL_MOVIES;

    return this.http.get<Movie[]>(url).pipe(take(1));
  }

  downloadSingleMovie(id: number): Observable<Movie> {
    const url = GET_SINGLE_MOVIE.replace(/:ID/, id.toString());

    return this.http.get<Movie>(url);
  }

  patchMovie(id: number, editedMovie: MovieSimple): Observable<Movie> {
    const url = GET_SINGLE_MOVIE.replace(/:ID/, id.toString());

    return this.http.patch<Movie>(url, editedMovie);
  }

  postMovie(newMovie: MovieSimple): Observable<Movie> {
    const url = GET_ALL_MOVIES;

    return this.http.post<Movie>(url, newMovie);
  }

  buildMovieForm(movieToPach?: Movie): FormGroup {
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
}
