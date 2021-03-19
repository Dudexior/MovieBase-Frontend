import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MOVIES_CONTROLLER_ID_IMAGE } from 'src/app/shared/consts';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  patchImage(movieId: number, image: File): Observable<Movie> {
    const url = MOVIES_CONTROLLER_ID_IMAGE.replace(/:ID/, movieId.toString());

    const body = new FormData();
    body.append('file', image);

    return this.http.patch<Movie>(url, body);
  }
}
