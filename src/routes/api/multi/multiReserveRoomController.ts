import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import { IP } from "../../../config";

export const roomReserveJoin = (req: Request, res: Response) => {
  const data = {
    rooms: {
      _id: 1,
      auto_flag: 0,
      created: 0,
      host_id: "123",
      hose_name: "name",
      is_locked: 0,
      kick: 0,
      member_count: 3,
      members: ["member1"],
      name: "test_name",
      phase: 0,
      quest_id: 0,
      quick_match: 0,
      reserve_members: [],
      restart: 0,
      room_id: 0,
      server_url:  '',
      tag: 0,
      type: 1
    }
  };
  encryptAndSend(data, res, req);
};
export const inviteList = (req: Request, res: Response) => {
  const data = {
    rooms: [
      {
        _id: 1,
        auto_flag: 0,
        created: 1725811175,
        host_id: "host_id",
        host_name: "host_name",
        is_locked: 0,
        kick: 0,
        member_count: 2,
        members: ["member1"],
        name: "name",
        phase: 0,
        quest_id: 3928722536,
        quick_match: 0,
        // reserve_members: ["test"],
        restart: 0,
        room_id: 1,
        server_url:  ``,
        tag: 0,
        type: 0
      },
      {
        _id: 2,
        auto_flag: 1,
        created: 268132675,
        host_id: "test_host_id",
        host_name: "test_host_name",
        is_locked: 0,
        kick: 0,
        member_count: 1,
        members: ["member1"],
        name: "test_name",
        phase: 1,
        quest_id: 2494860960,
        quick_match: 1,
        reserve_members: ["test"],
        restart: 0,
        room_id: 1,
        server_url: ``,
        tag: 1,
        type: 1
      }
    ]
  };
  encryptAndSend(data, res, req);
};