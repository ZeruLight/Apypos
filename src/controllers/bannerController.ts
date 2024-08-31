import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getDlList = (req: Request, res: Response) => {
  const data = {
    download_list:[
        //Andriod contains additional banner
        //arc_cmn/GUI/ex_tex/banner/*/*.arc
            // btop.fpk
            // home.fpk
            // norm.fpk
            // nyan.fpk
            // other.fpk
            // seev.fpk
            // ukyu.fpk
         //{hash:0x474bb7d6,path:"/eft.00.fpk",size:7343328},

         ///url called is /res/ios/banner/btop.fpk


       


    ]
  };
  encryptAndSend(data, res);
};
