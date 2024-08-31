import app from "./app";
import { IP, PORT } from "./config";
import {makeDownloadList} from './initResourceDownloadList'
makeDownloadList("openingDL","android");
makeDownloadList("tutorialDL","android");
makeDownloadList("trainingDL","android");
makeDownloadList("v0282/stdDL","android");
makeDownloadList("openingDL","ios");
makeDownloadList("tutorialDL","ios");
makeDownloadList("trainingDL","ios");
makeDownloadList("v0282/stdDL","ios");

app.listen(PORT, () => {
  console.log(`Server started on http://${IP}:${PORT}`);
});
