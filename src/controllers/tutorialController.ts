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
    flags: [110,210,310,1010,2010,3010,4010,5010,0xFFF],
  };
  encryptAndSend(data, res);
};
export const stepUP = (req: Request, res: Response) => {
  const data = {
    tutorial_step: 210, 
  };
  encryptAndSend(data, res);
};