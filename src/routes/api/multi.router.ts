import { Router } from "express";
import * as multiReserveRoomController from "../../controllers/multiReserveRoomController"

const MultiReserveRoom = Router();

MultiReserveRoom.post("/room/reserve/join", multiReserveRoomController.roomReserveJoin);

export default MultiReserveRoom;
