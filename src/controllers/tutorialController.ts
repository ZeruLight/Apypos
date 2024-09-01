import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";
import User from "../model/user";
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

export const getTutorialFlag = async(req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  const data = {
    flags: doc.tutorial_flags,
  };
  encryptAndSend(data, res, req);
};

export const TutorialFlagSet = async(req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let newFlags = doc.tutorial_flags;
  req.body.flags.forEach((flag)=>{
    newFlags.push(flag)
  })

  let update = { tutorial_flags: newFlags };
  doc = await User.findOneAndUpdate(filter, update, {
    new: true
  });
  const data = {
    flags: doc.tutorial_flags,
  };


  encryptAndSend(data, res, req);
};


export const stepUP = async (req: Request, res: Response) => {
  const filter = { current_session: req.body.session_id };
  let doc = await User.findOne(filter);
  let update = { tutorial_step: 210 };
  switch (doc.tutorial_step) {
    case 210:
      update = { tutorial_step: 310 };
      break;
    case 310:
      update = { tutorial_step: 1010 };
      break;
    case 1010:
      update = { tutorial_step: 2010 };
      break;
  }


  doc = await User.findOneAndUpdate(filter, update, {
    new: true
  });

  const data = {
    tutorial_step: update.tutorial_step, // Need a controller than memorises what was last
  };
  console.log(`TutorialStepUp: ${data.tutorial_step}`);

  encryptAndSend(data, res, req);
};
