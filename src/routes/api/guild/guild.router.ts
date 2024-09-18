import { Router } from "express";
import * as notImplemented from "../notImplementedController";

const guildRouter = Router();

guildRouter.post("/user/get", notImplemented.blankResponseEncrypted);
guildRouter.post("/user/setup", notImplemented.blankResponseEncrypted);
guildRouter.post("/create", notImplemented.blankResponseEncrypted);
guildRouter.post("/bingo/get", notImplemented.blankResponseEncrypted);
guildRouter.post("/search/result", notImplemented.blankResponseEncrypted);
guildRouter.post("/user/mail/list", notImplemented.blankResponseEncrypted);
guildRouter.post("/search/ID", notImplemented.blankResponseEncrypted);
guildRouter.post("/apply", notImplemented.blankResponseEncrypted);
guildRouter.post("/search", notImplemented.blankResponseEncrypted);


export default guildRouter;
