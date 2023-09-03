import { Request, Response } from 'express';
import { encryptAndSend } from '../services/crypto/encryptionHelpers';

export const registerAccount = (req: Request, res: Response) => {
    const version = {
        game_id: "1",
        is_review: 0,
        login_id: "1",
        stretch_effect_info: {
            exchange_present: 0,
            free_auto_add: 0,
            free_auto_infinity: 0,
            increase_add: 0,
            increase_inf: 0,
            mst_event_info_id: 0
        },
        time_info: {
            end: 0,
            end_remain: 2,
            start: 0,
            start_remain: 2
        },
        free_auto_add: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        free_auto_infinity: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        increase_add: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        tutorial_step: 110, // alows you to change state of tutorialWorkspace
        user_id: 1
    };

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
            mst_event_info_id: 0
        },
        time_info: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        free_auto_add: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        free_auto_infinity: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        increase_add: {
            end: 0,
            end_remain: 0,
            start: 0,
            start_remain: 0
        },
        tutorial_step: 0,
        user_id: 1
    };

    encryptAndSend(version, res);
};
