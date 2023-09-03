import { Router } from 'express';
import * as shopController from '../../controllers/shopController';

const shopRouter = Router();

shopRouter.post('/info', shopController.info);

export default shopRouter;
