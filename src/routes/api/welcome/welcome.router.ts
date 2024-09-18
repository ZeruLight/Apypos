import { Router } from "express";
import * as welcomeController from "./welcomeController";

const welcomeRouter = Router();

welcomeRouter.post("/safety/flag/get", welcomeController.getSafetyFlag);

export default welcomeRouter;
