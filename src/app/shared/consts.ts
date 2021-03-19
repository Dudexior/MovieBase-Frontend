import { environment } from 'src/environments/environment';

export const BASE_URL = environment.backendURL;

export const MOVIES_CONTROLLER = BASE_URL + '/Movies';
export const MOVIES_CONTROLLER_ID = MOVIES_CONTROLLER + '/:ID';
export const MOVIES_CONTROLLER_ID_IMAGE = MOVIES_CONTROLLER_ID + '/Image';

export const DISPLAYS_CONTROLLER = BASE_URL + '/Displays';
export const DISPLAYS_CONTROLLER_ID = DISPLAYS_CONTROLLER + '/:ID';
export const DISPLAYS_CONTROLLER_ID_TOP = DISPLAYS_CONTROLLER_ID + '?top=:TOP';
