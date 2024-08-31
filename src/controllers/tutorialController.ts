import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
//TODO: implement all structs
// tutorialFlags
// 110 = is characterCreate
// 210 = isFirstTimeDownload
// 310 = isFirstTimeQuest //Jagi
// 1010 = isSecondTimeQuest  //Rathalos
// 2010 = isTrainingDL //weapon navi??
// 3010 = isStandardDL
// 4010 = isIslandQuestPlay
// 5010 = isIslandQuestEnd
// 0xFFFF = isTutorialEnd

//2505

// To fudge set login to 310 then every time this is called increment up 
//310 -> 1010 -> 2010

export const getTutorialFlag = (req: Request, res: Response) => {
  const data = {
    flags: [],
  };
  encryptAndSend(data, res);
};

export const TutorialFlagSet = (req: Request, res: Response) => {
  const data = {
    flags: req.body.flags,
  };
  encryptAndSend(data, res);
};
export const stepUP = (req: Request, res: Response) => {
  const data = {
    tutorial_step:2010, // Need a controller than memorises what was last
  };
  console.log(`TutorialStepUp: ${data.tutorial_step}`);

  encryptAndSend(data, res);
};
