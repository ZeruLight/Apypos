import { Router } from "express";
import * as notImplemented from "../../controllers/notImplementedController";

const guildRouter = Router();

guildRouter.post("/user/get", notImplemented.blankResponseEncrypted);
guildRouter.post("/user/setup", notImplemented.blankResponseEncrypted);
guildRouter.post("/create", notImplemented.blankResponseEncrypted);
guildRouter.post("/bingo/get", notImplemented.blankResponseEncrypted);

export default guildRouter;
