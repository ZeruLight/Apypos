import { Response,Request } from "express";
import { EncryptionService } from "./encryptionService";

const encryptionService = new EncryptionService();
// All time implementation should move to its own Service.... This is all WIP
// Get the current time
// Given epoch time
const epochTime = Date.now();
const TestepochTime = 1601285121; //Source https://web.archive.org/web/20200928092521/https://hunters.mh-xr.jp/special/top/check#expand

// Convert epoch time to a JavaScript Date object (UTC)
const dateTime = new Date(epochTime * 1000);

// Calculate the custom "one_day_time" of 3600 seconds (1 hour)
const one_day_time = 3600;

// Calculate the current time (now) in seconds since the start of this custom "day"
const totalSecondsToday = (dateTime.getUTCHours() * 3600) + (dateTime.getUTCMinutes() * 60) + dateTime.getUTCSeconds();

// Calculate "now_time" based on the custom "one_day_time"
// Assuming "now_time" is the number of seconds past within the current hour of the day
const now_time = totalSecondsToday % one_day_time;

// Calculate "relogin_time"
// This might be the time until the next occurrence of this custom "day"
const relogin_time = one_day_time - now_time;

// Output the values
console.log("one_day_time:", one_day_time);
console.log("now_time:", now_time);
console.log("relogin_time:", relogin_time);

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
    one_day_time:one_day_time,
    now_time:now_time,
    relogin_time:relogin_time}
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
