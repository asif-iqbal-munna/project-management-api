import app from "./app";
import mongoose from "mongoose";
import config from "./config/config";

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(`error: Not able to connect DB ${error}`);
  }
}

main().catch((err) => console.log(err));
