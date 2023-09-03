import { Router } from 'express';
import * as maintenanceController from '../../controllers/maintenanceController';

const maintenanceRouter = Router();

maintenanceRouter.get('_env/schedule', maintenanceController.getMaintenanceEnvSchedule);
maintenanceRouter.post('/check', maintenanceController.checkMaintenance);
maintenanceRouter.post('/titleimage/get', maintenanceController.getTitleImage);


export default maintenanceRouter;
