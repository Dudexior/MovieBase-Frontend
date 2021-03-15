import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-image-wrapper',
  templateUrl: './image-wrapper.component.html',
  styleUrls: ['./image-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageWrapperComponent implements OnInit {

  @Input() imageDataURL?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
