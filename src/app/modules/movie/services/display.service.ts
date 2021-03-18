import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DISPLAYS_CONTROLLER_ID_TOP } from 'src/app/shared/consts';
import { Display } from '../models/display';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  getDisplaysForMovie(movieId: number, top = 10): Observable<Display[]> {
    const url = DISPLAYS_CONTROLLER_ID_TOP.replace(/:ID/, movieId.toString()).replace(/:TOP/, top.toString());

    return this.http.get<Display[]>(url).pipe(take(1));
  }
}
