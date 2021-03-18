import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { debounce, debounceTime, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // tslint:disable-next-line:variable-name
  private _onTouchScreen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.checkIfTouchScreen());
  get onTouchScreen$(): Observable<boolean> {
    return this._onTouchScreen$.asObservable();
  }

  // tslint:disable-next-line:variable-name
  private _flipDisplayGraph$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(window.innerWidth < 920);
  get flipDisplayGraph$(): Observable<boolean> {
    return this._flipDisplayGraph$.asObservable();
  }

  constructor() {
    // subscribing to window resizes
    fromEvent(window, 'resize')
      .pipe(debounceTime(500))
      .subscribe(() => {
        this._onTouchScreen$.next(this.checkIfTouchScreen());
        this._flipDisplayGraph$.next(window.innerWidth < 920);
      });
  }

  private checkIfTouchScreen(): boolean {
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  }

}
