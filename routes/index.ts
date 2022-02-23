import { Router } from 'express';
import countries from './countries/countries';
import state from './state/state';
import region from './region/region';
const routes = Router();

routes.use('/', countries);
routes.use('/', state);
routes.use('/', region);

export default routes;
