import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { MoviePageComponent } from './movie-page.component';

describe('MoviePageComponent', () => {
  let component: MoviePageComponent;
  let fixture: ComponentFixture<MoviePageComponent>;
  const testSub = new Subscription();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviePageComponent],
      imports: [HttpClientModule],
      providers: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePageComponent);
    component = fixture.componentInstance;

    component.subscriptions.push(testSub);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a empty movies variable', () => {
    expect(component.movies.length === 0).toBeTruthy();
  });

  it('should have subscriptions array', () => {
    expect(component.subscriptions).toBeTruthy();
  });

  it('should unsubscribe when destroyed', () => {
    component.ngOnDestroy();
    expect(testSub.closed).toBeTruthy();
  });

  it('should have a fab button to add new movies', () => {
    expect(document.querySelector('.pageWrapper__addFab')).toBeTruthy();
  });
});
