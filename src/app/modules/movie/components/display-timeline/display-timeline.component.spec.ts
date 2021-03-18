import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimelineComponent } from './display-timeline.component';

describe('DisplayTimelineComponent', () => {
  let component: DisplayTimelineComponent;
  let fixture: ComponentFixture<DisplayTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayTimelineComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a line element', () => {
    expect(document.getElementsByTagName('line')).toBeTruthy();
  });
});
