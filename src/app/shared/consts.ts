import { environment } from 'src/environments/environment';

export const BASE_URL = environment.backendURL;

export const GET_ALL_MOVIES = BASE_URL + '/Movies';
export const GET_SINGLE_MOVIE = GET_ALL_MOVIES + '/:ID';
