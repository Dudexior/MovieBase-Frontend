import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineElementComponent } from './timeline-element.component';

describe('TimelineElementComponent', () => {
  let component: TimelineElementComponent;
  let fixture: ComponentFixture<TimelineElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineElementComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineElementComponent);
    component = fixture.componentInstance;
    component.index = 1;
    component.length = 1;
    component.display = {
      id: 555,
      movieId: 1,
      displayDate: new Date(),
      sourceTypeId: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a circle', () => {
    expect(document.getElementsByTagName('circle')).toBeTruthy();
  });

  it('should have a info div', () => {
    expect(document.querySelector('.elementWrapper__info')).toBeTruthy();
  });
});
