import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Display } from '../../../models/display';
import { DisplaySource } from '../../../models/display-source.enum';

@Component({
  selector: 'app-timeline-element',
  templateUrl: './timeline-element.component.html',
  styleUrls: ['./timeline-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineElementComponent implements OnInit {

  @Input() display!: Display;
  @Input() index!: number;
  @Input() length!: number;

  // ref for using inside of HTML
  displaySource = DisplaySource;

  constructor() { }

  ngOnInit(): void {
  }

}
