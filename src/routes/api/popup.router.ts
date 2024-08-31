import { Router } from "express";
import * as popupController from "../../controllers/popupController";

const ticketRouter = Router();

ticketRouter.post("/record", popupController.record);

export default ticketRouter;
