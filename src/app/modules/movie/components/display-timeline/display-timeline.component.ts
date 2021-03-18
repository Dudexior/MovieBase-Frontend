import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { staggerScaleDisplayElements } from 'src/app/shared/animations';
import { Display } from '../../models/display';

@Component({
  selector: 'app-display-timeline',
  templateUrl: './display-timeline.component.html',
  styleUrls: ['./display-timeline.component.scss'],
  animations: [staggerScaleDisplayElements],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayTimelineComponent implements OnInit {

  @Input() displays: Display[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
