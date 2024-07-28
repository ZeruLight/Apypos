import { Response } from "express";
import { EncryptionService } from "./encryptionService";

const encryptionService = new EncryptionService();

export function encryptAndSend(data: object, res: Response) {
  
  const encryptedData = encryptionService.encrypt(JSON.stringify({...data, error_code:200,
    error_category:0,
    error_detail:"",
    app_ver_android:"09.03.06",
    app_ver:"09.03.06",
    res_ver:282,
    banner_ver:0,
    session_id:"",
    block_seq:0,
    one_day_time:0,
    now_time:Date.now(),
    relogin_time:0}));
  res
    .status(200)
    .header("Content-Type", "application/octet-stream")
    .send(encryptedData);
}

export function decryptAndParse(data: Buffer) {
  const decryptedData = encryptionService.decrypt(data);
  const parsedData = JSON.parse(decryptedData);
  return parsedData;
}
