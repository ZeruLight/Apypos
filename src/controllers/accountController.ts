import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const registerAccount = (req: Request, res: Response) => {
  const version = {
    game_id: "game_id_on_reg",
    is_review: 1,
    login_id: "login_id_on_reg", // Will be used in request bodies going forward....
    stretch_effect_info: {
      exchange_present: 1,
      free_auto_add: 2,
      free_auto_infinity: 3,
      increase_add: 4,
      increase_inf: 5,
      mst_event_info_id: 5,
      time_info: {
        exchange_present: {
          end: 1,
          end_remain: 456,
          start: 0,
          start_remain: 789
        },
        free_auto_add: {
          end: 1,
          end_remain: 101,
          start: 0,
          start_remain: 112
        },
        free_auto_infinity: {
          end: 0,
          end_remain: 113,
          start: 1,
          start_remain: 114
        },
        increase_add: {
          end: 1,
          end_remain: 115,
          start: 0,
          start_remain: 116
        }
      }
    },
    tutorial_step: 110,
    user_id: "user_id_on_reg"
  };
  
  
  
  console.log(`TutorialStepUp: ${version.tutorial_step}`);

  encryptAndSend(version, res);
};

export const loginAccount = (req: Request, res: Response) => {
  const version = {
    game_id: "1",
    is_review: 1,
    login_id: "1",
    stretch_effect_info: {
      exchange_present: 0,
      free_auto_add: 0,
      free_auto_infinity: 0,
      increase_add: 0,
      increase_inf: 0,
      mst_event_info_id: 1,
    },
    time_info: {
      end: 0,
      end_remain: 0,
      start: 0,
      start_remain: 0,
    },
    free_auto_add: {
      end: 0,
      end_remain: 0,
      start: 0,
      start_remain: 0,
    },
    free_auto_infinity: {
      end: 0,
      end_remain: 0,
      start: 0,
      start_remain: 0,
    },
    increase_add: {
      end: 0,
      end_remain: 0,
      start: 0,
      start_remain: 0,
    },
    tutorial_step: 110,
    user_id: 1,
  };

  
  console.log(`TutorialStepUp: ${version.tutorial_step}`);

  encryptAndSend(version, res);
};
