import { Router } from "express";
import * as multiReserveRoomController from "./multiReserveRoomController"

const MultiReserveRoom = Router();

MultiReserveRoom.post("/room/reserve/join", multiReserveRoomController.roomReserveJoin);
MultiReserveRoom.post("/invite/list", multiReserveRoomController.inviteList);

export default MultiReserveRoom;
