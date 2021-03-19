import { SafeUrl } from '@angular/platform-browser';
import { MovieSimple } from './movie-simple';

export interface Movie extends MovieSimple {
  id: number;
  image: SafeUrl | null;
}
