import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieFormComponent implements OnChanges {

  @Input() movieForm!: FormGroup;
  @Input() editMode = false;

  ngOnChanges(): void {
    this.editMode ? this.movieForm.enable() : this.movieForm.disable();
  }
}
