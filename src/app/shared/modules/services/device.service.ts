import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounce, debounceTime, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // tslint:disable-next-line:variable-name
  private _onTouchScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get onTouchScreen$(): Observable<boolean> {
    return this._onTouchScreen$.asObservable();
  }

  constructor() {
    // subscribing to window resizes
    fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe(() => this._onTouchScreen$.next(this.checkIfTouchScreen()));
  }

  private checkIfTouchScreen(): boolean {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  }
}
