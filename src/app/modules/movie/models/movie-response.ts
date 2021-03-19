import { Movie } from './movie';

export interface MovieResponse extends Omit<Movie, 'image'> {
  image: string;
}
