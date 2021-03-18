import { DisplaySource } from './display-source.enum';

export interface Display {
  id: number;
  movieId: number;
  displayDate: Date;
  sourceTypeId: DisplaySource;
}
