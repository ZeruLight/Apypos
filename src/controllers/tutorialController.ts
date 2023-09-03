import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
//TODO: implement all structs
// tutorialFlags
// 110 = is characterCreate
// 210 = isFirstTimeDownload
// 310 = isFirstTimeQuest
// 1010 = isSecondTimeQuest
// 2010 = isTrainingDL
// 3010 = isStandardDL
// 4010 = isIslandQuestPlay
// 5010 = isIslandQuestEnd
// 0xFFFF = isTutorialEnd 

export const getTutorialFlag = (req: Request, res: Response) => {
  const data = {
    flags: [110,210,310],
  };
  encryptAndSend(data, res);
};
