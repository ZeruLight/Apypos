import app from "./app";
import { PORT } from "./config";
import {makeDownloadList} from './initResourceDownloadList'

makeDownloadList("openingDL");
makeDownloadList("tutorialDL");
makeDownloadList("trainingDL");
makeDownloadList("v0282/stdDL");


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
