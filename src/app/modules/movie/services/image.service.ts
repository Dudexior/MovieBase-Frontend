import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MOVIES_CONTROLLER_ID_IMAGE } from 'src/app/shared/consts';
import { Movie } from '../models/movie';
import { MovieResponse } from '../models/movie-response';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  patchImage(movieId: number, image: File): Observable<Movie> {
    const url = MOVIES_CONTROLLER_ID_IMAGE.replace(/:ID/, movieId.toString());

    const body = new FormData();
    body.append('file', image);

    return this.http.patch<MovieResponse>(url, body).pipe(
      map(this.movieResponseImageMapper),
      take(1)
    );
  }

  private convertByteArray(byteArray: string): SafeUrl | null {
    if (byteArray == null || byteArray === '') {
      return null;
    }

    const response = `data:image/png;base64,${byteArray}`;
    return this.sanitizer.bypassSecurityTrustUrl(response);
  }

  movieResponseImageMapper = (movie: MovieResponse) => {
    console.log(movie);
    const response = movie as Movie;
    response.image = this.convertByteArray(movie.image);

    return response;
  }
}
