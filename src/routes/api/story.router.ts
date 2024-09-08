import { Router } from "express";
import * as storyController from "../../controllers/storyController"
const storyRouter = Router();

storyRouter.post("/end", storyController.end);

export default storyRouter;
