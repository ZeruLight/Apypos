import app from "./app";
import { makeDownloadList } from './initResourceDownloadList'
import mongoose from 'mongoose'
import { IP, PORT, DB_USER, DB_NAME, DB_PASSWORD, DB_IP, DB_PORT } from "./config";
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}:${DB_PORT}`, { dbName: DB_NAME }).then(() => {
  console.log('Connected to MongoDB...')

  try {
    makeDownloadList("openingDL", "android");
    makeDownloadList("tutorialDL", "android");
    makeDownloadList("trainingDL", "android");
    makeDownloadList("v0282/stdDL", "android");
    makeDownloadList("openingDL", "ios");
    makeDownloadList("tutorialDL", "ios");
    makeDownloadList("trainingDL", "ios");
    makeDownloadList("v0282/stdDL", "ios");

  } catch (error) {
    console.error("Coudn't Start Apypos Server: Couldn't create fpk download lists. Did you make sure to populate ./src/public/res/ with your fpk files ?",error)
  }


  app.listen(PORT, () => {
    console.log(`Apypos Server started on http://${IP}:${PORT}`);
  });



}).catch((err) => console.error("Coudn't Start Apypos Server: Couldn't connect to MongoDB....", err));




