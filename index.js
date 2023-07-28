import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

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

app.use("/videos", videoRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
