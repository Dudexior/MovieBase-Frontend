import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { slideHeight } from 'src/app/shared/animations';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  animations: [slideHeight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;
  @Input() onTouchScreen = false;

  // variable manipulated from HTML
  showDesc = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickAction(): void {
    if (!this.onTouchScreen) {
      // TODO router navigation
    }
  }
}
