import { Response,Request } from "express";
import { EncryptionService } from "./encryptionService";
import { TimeService } from "../timeService";

const encryptionService = new EncryptionService();

const timeService = new TimeService();

export function encryptAndSend(data: object, res: Response,req: Request) {
  const responseData = {...data, error_code:200,
    error_category:0,
    error_detail:"",
    app_ver_android:"09.03.06",
    app_ver_ios:"09.03.06",
    app_ver:"09.03.06",
    res_ver:282, //controlls banner version url /download/android/v0282/stdDL/download.list Official Value: 282 
    banner_ver:111, //if set to 0 /api/banner/dllist/get is not called if you increment it to 1 it will be called then not called again untill incremented to 2 (Possible incremental update?) Official Value: 91
    session_id:req.body.session_id?req.body.session_id:"session_id",
    block_seq:0, //Possibly need to increment this for cycling encryption. (Client ignores if 0)
    one_day_time:timeService.getOneDayTime(),
    now_time:timeService.getNowTime(),
    relogin_time:timeService.getRelogTime()}
    console.log("Current Time Japan",timeService.getJapanTime())
  const encryptedData = encryptionService.encrypt(JSON.stringify(responseData));
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
