import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
