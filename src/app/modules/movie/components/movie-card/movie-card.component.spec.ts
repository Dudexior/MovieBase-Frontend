import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [MaterialModule]
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
    component.showDesc = true;
    component.onTouchScreen = true;

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

  it('should have a element with info__hidden class', () => {
    expect(document.querySelector('.info__hidden')).toBeTruthy();
  });

  it('should have a button in hidden actions when on mobile device', () => {
    expect(document.querySelector('.hidden__actions')?.querySelector('button')).toBeTruthy();
  });
});
