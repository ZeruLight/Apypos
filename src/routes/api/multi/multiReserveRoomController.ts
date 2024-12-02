import { Request, Response } from "express";
import { encryptAndSend } from "../../../services/crypto/encryptionHelpers";
import { IP } from "../../../config";
const server = "http://" + IP;

export const roomReserve = (req: Request, res: Response) => {
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
      phase: 1,
      quest_id: req.body.quest_id,
      quick_match: req.body.quick_match,
      reserve_members: req.body.reserve,
      restart: req.body.restart,
      room_id: 0,
      server_url: server,
      tag: 0,
      type: 1,
    },
  };
  encryptAndSend(data, res, req);
};
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
      phase: 1,
      quest_id: req.body.quest_id,
      quick_match: req.body.quick_match,
      reserve_members: req.body.reserve,
      restart: req.body.restart,
      room_id: 0,
      server_url: server,
      tag: 0,
      type: 1,
    },
  };
  encryptAndSend(data, res, req);
};

export const roomSearch = (req: Request, res: Response) => {
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
      phase: 1,
      quest_id: req.body.quest_id,
      quick_match: req.body.quick_match,
      reserve_members: req.body.reserve,
      restart: req.body.restart,
      room_id: 1,
      server_url: server,
      tag: 0,
      type: 1,
    },
  };
  encryptAndSend(data, res, req);
};


export const roomQuick = (req: Request, res: Response) => {
  const data = {
    rooms: {
      _id: 1,
      auto_flag: req.body.auto_flag,
      created: 0,
      host_id: "1",
      host_name: "name",
      is_locked: 0,
      kick: req.body.kick,
      member_count: 3,
      members: [],
      name: req.body.name,
      phase: 1,
      quest_id: req.body.quest_id,
      quick_match: req.body.quick_match,
      reserve_members: req.body.reserve,
      restart: req.body.restart,
      room_id: 1,
      server_url: server,
      tag: req.body.tag,
      type: 1,
    },
  };
  encryptAndSend(data, res, req);
};

export const roomCreate = (req: Request, res: Response) => {
  const data = {
    rooms: {
      _id: 1,
      auto_flag: req.body.auto_flag,
      created: 0,
      host_id: "1",
      host_name: "name",
      is_locked: 0,
      kick: req.body.kick,
      member_count: 3,
      members: [],
      name: req.body.name,
      phase: 1,
      quest_id: req.body.quest_id,
      quick_match: req.body.quick_match,
      reserve_members: req.body.reserve,
      restart: req.body.restart,
      room_id: 1,
      server_url: server,
      tag: req.body.tag,
      type: 1,
    },
  };
  encryptAndSend(data, res, req);
};
export const inviteList = (req: Request, res: Response) => {
  const data = {
    rooms: [
      {
        _id: 5,
        auto_flag: 5,
        created: Date.now(),
        host_id: "host_id",
        host_name: "Player 1",
        is_locked: 5,
        kick: 5,
        member_count: 1, //number of men
        members: ["Player 2"],
        name: "Quest Name 1",
        phase: 1,
        quest_id: req.body.quest_id,
        quick_match: req.body.quick_match,
        reserve_members: req.body.reserve,
        restart: req.body.restart,
        room_id: 5,
        server_url: server,
        tag: 5,
        type: 5,
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
        quest_id: req.body.quest_id,
        quick_match: req.body.quick_match,
        reserve_members: req.body.reserve,
        restart: req.body.restart,
        room_id: 1,
        server_url: server,
        tag: 1,
        type: 1,
      },
    ],
  };
  encryptAndSend(data, res, req);
};
