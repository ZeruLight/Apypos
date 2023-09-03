import { Router } from 'express';
import * as maintenanceEnvController from '../controllers/maintenanceEnvController';

const maintenanceEnvRouter = Router();

maintenanceEnvRouter.get('/schedule', maintenanceEnvController.getMaintenanceEnvSchedule);


export default maintenanceEnvRouter;
