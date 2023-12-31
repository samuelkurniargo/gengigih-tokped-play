import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

import videoRouter from "./src/routes/videosRouter.js";
import productRouter from "./src/routes/productsRouter.js";
import commentRouter from "./src/routes/commentsRouter.js";

const app = express();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/videos", videoRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname , "../frontend/dist/index.html"), (err) => {
    res.status(500).send(err);
  });
});

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
