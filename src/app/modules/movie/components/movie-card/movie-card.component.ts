import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { slideHeight } from 'src/app/shared/animations';
import { DeviceService } from 'src/app/shared/modules/services/device.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [slideHeight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit, OnDestroy {

  @Input() movie!: Movie;

  onTouchScreen = false;
  touchScreenSubscription: Subscription | undefined;

  // variable manipulated from HTML
  showDesc = false;

  constructor(private router: Router, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.touchScreenSubscription = this.listenToTouchScreen();
  }

  clickAction(): void {
    if (!this.onTouchScreen) {
      this.router.navigate(['/movie', this.movie.id]);
    }
  }

  private listenToTouchScreen(): Subscription {
    return this.deviceService.onTouchScreen$.subscribe(res => {
      this.onTouchScreen = res;
    });
  }

  ngOnDestroy(): void {
    if (this.touchScreenSubscription) {
      this.touchScreenSubscription.unsubscribe();
    }
  }
}
