import { environment } from 'src/environments/environment';

export const BASE_URL = environment.backendURL;

export const MOVIES_CONTROLLER = BASE_URL + '/Movies';
export const MOVIES_CONTROLLER_ID = MOVIES_CONTROLLER + '/:ID';
