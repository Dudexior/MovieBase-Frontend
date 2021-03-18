import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, Subscription } from 'rxjs';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

import { MovieDetailsPageComponent } from './movie-details-page.component';

describe('MovieDetailsPageComponent', () => {
  let component: MovieDetailsPageComponent;
  let fixture: ComponentFixture<MovieDetailsPageComponent>;
  const testSub = new Subscription();

  const fakeActivatedRoute = {
    snapshot: { id: '1' },
    params: of({ id: '1' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailsPageComponent],
      imports: [HttpClientTestingModule, MaterialModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsPageComponent);
    component = fixture.componentInstance;
    component.subscriptions.push(testSub);
    component.loading = false;
    component.movie = {
      id: 1,
      image: null,
      title: 'Men in Black',
      description: 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.',
      duration: 98
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have subscriptions array', () => {
    expect(component.subscriptions).toBeTruthy();
  });

  it('should unsubscribe when destroyed', () => {
    component.ngOnDestroy();
    expect(testSub.closed).toBeTruthy();
  });
});
