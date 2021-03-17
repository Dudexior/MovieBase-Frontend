import { MovieSimple } from './movie-simple';

export interface Movie extends MovieSimple {
  id: number;
  // TODO change type after image function is ready
  image?: any;
}
