// Express,Dotenv,ConnectDB
import express, { Request, Response } from "express";

// Errors
require("express-async-errors");

import * as dotenv from "dotenv";
import { connectDB } from "./db/connect";

// Routers and Middleware
import plantsRouter from "./routers/plants";
import notFoundMiddleware from "./middleware/notFound";
import errorHandlerMiddleware from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Express Middleware
app.use(express.json());
app.use(express.raw());

app.use("/", [plantsRouter]);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Yo" });
});

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
