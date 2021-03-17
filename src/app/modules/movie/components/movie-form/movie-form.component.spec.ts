import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { MovieFormComponent } from './movie-form.component';

describe('MovieFormComponent', () => {
  let component: MovieFormComponent;
  let fixture: ComponentFixture<MovieFormComponent>;
  const mockFormGroup = new FormGroup({});

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieFormComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFormComponent);
    component = fixture.componentInstance;
    component.movieForm = mockFormGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    expect(document.getElementsByTagName('form')).toBeTruthy();
  });
});
