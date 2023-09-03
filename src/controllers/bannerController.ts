import { Request, Response } from "express";
import { encryptAndSend } from "../services/crypto/encryptionHelpers";

export const getBannerDllist = (req: Request, res: Response) => {
  // This looks to be where the download list is executed (THIS IS SENDING THE WRONG JSON atm idc because it skipped update)
  // {"download_list": [
  //         {
  //         "hash": 0,
  //         "path": "download.list?",
  //         "size": 0
  //         }
  // ]}
  const data = {
    title_banner: {
      banner_id: "Banner123",
      timeLeft: 1234567890,
      type: "TypeA",
      url: "https://example.com/banner",
    },
    title_image: {
      mst_title_image_id: 987,
      mst_title_logo_id: 654,
    },
  };
  encryptAndSend(data, res);
};
