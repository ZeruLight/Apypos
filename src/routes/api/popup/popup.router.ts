import { Router } from "express";
import * as popupController from "./popupController";

const ticketRouter = Router();

ticketRouter.post("/record", popupController.record);

export default ticketRouter;
