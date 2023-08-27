import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import usersController from "./controllers/usersController";
import mysqlSequelize from "./database/db";
import cookieParser from "cookie-parser";


(async () => {
  try {
    await mysqlSequelize.sync();
  } catch (error) {
    console.error(`Error during synchronizing database: ${error}`)
  }
})();

export const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());


app.get("/healthcheck", async (_, res) => {
  try {
    await mysqlSequelize.authenticate();
    return res.status(200).json({
      database: "OK",
    });
  } catch (error) {
    return res.status(500).json({
      server: "OK",
      database: "DOWN",
    });
  }
});

app.post("/", (req, res) => {
  const { userId } = req.body;

  if (userId) {
    res.cookie("userId", userId);
    res.send('Cookie with userId is created.');
  }

  return res.status(500).json(`Session with userId not created. Missing userId.`);

});

app.get("/", (req, res) => {
  res.send("Hello :-)");
});

app.use("/users", usersController);
