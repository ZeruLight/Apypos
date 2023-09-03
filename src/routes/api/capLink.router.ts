import { Router } from 'express';
import * as capLinkController from '../../controllers/capLinkController';

const capLinkRouter = Router();

capLinkRouter.post('/push_register', capLinkController.pushRegister);

export default capLinkRouter;
