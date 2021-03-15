import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = {
      id: 1,
      image: null,
      title: 'Men in Black',
      description: 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.',
      duration: 30
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a element with class card', () => {
    expect(document.querySelector('.card')).toBeTruthy();
  });

  it('should have element with class info', () => {
    expect(document.querySelector('.card__info')).toBeTruthy();
  });
});
