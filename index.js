import express from "express";
import dotenv from "dotenv";

import userRoute from "./routes/userRoute.js";
import userLogRegRoute from "./routes/logRegRoute.js";
import { errHandler } from "./middleware/errHandler.js";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(
    "mongodb+srv://node_trying:samragi99@cluster0.yneg4vc.mongodb.net/dbconnect"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.send("Welcome to server");
});
app.use(express.json());
app.use(userRoute);
app.use(userLogRegRoute);

app.listen(port, () => {
  console.log(`Server is runnin on port http://localhost:${port}`);
});
