import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { AddMovieDialogComponent } from './add-movie-dialog.component';

describe('AddMovieDialogComponent', () => {
  let component: AddMovieDialogComponent;
  let fixture: ComponentFixture<AddMovieDialogComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMovieDialogComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, MaterialModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMovieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a movie form component', () => {
    expect(document.querySelector('app-movie-form')).toBeTruthy();
  });

  it('should have at least one button', () => {
    expect(document.getElementsByTagName('button').length).toBeGreaterThan(0);
  });

  it('should have a h1 header', () => {
    expect(document.getElementsByTagName('h1')).toBeTruthy();
  });
});
