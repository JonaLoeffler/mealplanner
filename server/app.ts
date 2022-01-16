import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import * as recipes from "./controllers/recipes.controller";

dotenv.config();

const app = express();

app.set("port", process.env.SERVER_PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", recipes.index);

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});

export default app;
