import {app} from "./app";
import { makeDownloadList } from "./services/initResourceDownloadList";
import mongoose from "mongoose";
import {
  IP,
  PORT,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_IP,
  DB_PORT,
} from "./config";

mongoose
  .connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}:${DB_PORT}`, {
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Connected to MongoDB...");

    const downloadCategories = [
      "openingDL",
      "tutorialDL",
      "trainingDL",
      "v0282/stdDL",
    ];
    const platforms = ["android", "ios"];

    try {
      platforms.forEach((platform) => {
        downloadCategories.forEach((category) => {
          makeDownloadList(category, platform);
        });
      });
    } catch (error) {
      console.error(
        "Failed to create FPK download lists. Please ensure the FPK files are located in './src/public/res/' and the server is properly configured.",
        error
      );
    }

    app.listen(PORT, () => {
      console.log(`Apypos Server started on http://${IP}:${PORT}`);
    });


  })
  .catch((err) =>
    console.error(
      "Coudn't Start Apypos Server: Couldn't connect to MongoDB....",
      err
    )
  );
