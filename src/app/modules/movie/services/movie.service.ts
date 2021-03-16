import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { GET_ALL_MOVIES } from 'src/app/shared/consts';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  downloadMovies(): Observable<Movie[]> {
    const url = GET_ALL_MOVIES;

    return this.http.get<Movie[]>(url).pipe(take(1));
  }
}
