import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { MOVIES_CONTROLLER, MOVIES_CONTROLLER_ID } from 'src/app/shared/consts';
import { map, take } from 'rxjs/operators';
import { MovieSimple } from '../models/movie-simple';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MovieResponse } from '../models/movie-response';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  getMovies(): Observable<Movie[]> {
    const url = MOVIES_CONTROLLER;

    return this.http.get<MovieResponse[]>(url).pipe(
      map(res => res.map(this.movieResponseMapper)),
      take(1)
    );
  }

  getSingleMovie(movieId: number): Observable<Movie> {
    const url = MOVIES_CONTROLLER_ID.replace(/:ID/, movieId.toString());

    return this.http.get<MovieResponse>(url).pipe(
      map(this.movieResponseMapper),
      take(1)
    );
  }

  patchMovie(movieId: number, editedMovie: MovieSimple): Observable<Movie> {
    const url = MOVIES_CONTROLLER_ID.replace(/:ID/, movieId.toString());

    return this.http.patch<MovieResponse>(url, editedMovie).pipe(
      map(this.movieResponseMapper),
      take(1)
    );
  }

  postMovie(newMovie: MovieSimple): Observable<Movie> {
    const url = MOVIES_CONTROLLER;

    return this.http.post<MovieResponse>(url, newMovie).pipe(
      map(this.movieResponseMapper),
      take(1)
    );
  }

  deleteMovie(movieId: number): Observable<Movie> {
    const url = MOVIES_CONTROLLER_ID.replace(/:ID/, movieId.toString());

    return this.http.delete<MovieResponse>(url).pipe(
      map(this.movieResponseMapper),
      take(1));
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

  private convertByteArray(byteArray: string): SafeUrl | null {
    if (byteArray == null || byteArray === '') {
      return null;
    }

    const response = `data:image/png;base64,${byteArray}`;
    return this.sanitizer.bypassSecurityTrustUrl(response);
  }

  private movieResponseMapper = (movie: MovieResponse) => {
    const response = movie as Movie;
    response.image = this.convertByteArray(movie.image);

    return response;
  }
}
