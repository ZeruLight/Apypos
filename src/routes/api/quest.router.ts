import { Router } from 'express';
import * as questController from '../../controllers/questController';

const questRouter = Router();

questRouter.post('/progress', questController.questProgress);

// FOREST
// might need to make this modular and reusable for each quest type
questRouter.post('/forest/progress', questController.questForestProgress);
questRouter.post('/forest/end', questController.questForestEnd);

export default questRouter;
