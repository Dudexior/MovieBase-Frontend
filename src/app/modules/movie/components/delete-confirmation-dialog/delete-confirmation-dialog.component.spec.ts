import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog.component';

describe('DeleteConfirmationDialogComponent', () => {
  let component: DeleteConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteConfirmationDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a warning text', () => {
    expect(document.querySelector('.warningText')).toBeTruthy();
  });

  it('should have 2 buttons', () => {
    expect(document.getElementsByTagName('button').length).toEqual(2);
  });
});
