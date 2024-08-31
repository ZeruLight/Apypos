import { Response } from "express";
import { EncryptionService } from "./encryptionService";

const encryptionService = new EncryptionService();
// All time implementation should move to its own Service.... This is all WIP
// Get the current time
const currentTime = new Date();

// Compute seconds since midnight (now_time)
const midnight = new Date(currentTime);
midnight.setHours(0, 0, 0, 0); // Set the time to midnight
const now_time = Math.floor((Number(currentTime) - Number(midnight)) / 1000);

// Define relogin_time (e.g., 10:34:38 AM)
// This is just an example; you can modify the relogin hour, minute, and second.
const reloginHour = 10;
const reloginMinute = 34;
const reloginSecond = 38;
const relogin_time = reloginHour * 3600 + reloginMinute * 60 + reloginSecond;

// Define one_day_time (e.g., 1 hour)
const one_day_time = 1 * 3600; // 1 hour in seconds
export function encryptAndSend(data: object, res: Response) {
  
  const encryptedData = encryptionService.encrypt(JSON.stringify({...data, error_code:200,
    error_category:0,
    error_detail:"",
    app_ver_android:"09.03.06",
    app_ver_ios:"09.03.06",
    app_ver:"09.03.06",
    res_ver:282, //controlls banner version url /download/android/v0282/stdDL/download.list Official Value: 282 
    banner_ver:111, //if set to 0 /api/banner/dllist/get is not called if you increment it to 1 it will be called then not called again untill incremented to 2 (Possible incremental update?) Official Value: 91
    session_id:"session",
    block_seq:0, //Possibly need to increment this for cycling encryption. (Client ignores if 0)
    one_day_time:one_day_time,
    now_time:now_time,
    relogin_time:relogin_time}));
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
