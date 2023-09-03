import { Router } from 'express';
import * as questController from '../../controllers/questController';

const questRouter = Router();

questRouter.post('/progress', questController.questProgress);

// FOREST
// might need to make this modular and reusable for each quest type
questRouter.post('/forest/progress', questController.questForestProgress);
questRouter.post('/forest/end', questController.questForestEnd);
questRouter.post('/island/map/all', questController.islandMapAll);
questRouter.post('/event/list/all', questController.eventListAll);
questRouter.post('/event/ticket/free', questController.eventTicketFree);
questRouter.post('/eternal/all', questController.eternalAll);

export default questRouter;
