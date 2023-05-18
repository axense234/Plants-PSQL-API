// Express,Dotenv,ConnectDB
import express, { Request, Response } from "express";

// Errors
require("express-async-errors");

import * as dotenv from "dotenv";
import swgUIExpress from "swagger-ui-express"
import { connectDB } from "./db/connect";

// Routers and Middleware
import plantsRouter from "./routers/plants";
import notFoundMiddleware from "./middleware/notFound";
import errorHandlerMiddleware from "./middleware/errorHandler";
import swaggerDocs from "./utils/swagger";

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
app.use("/api/1.0.0/docs",swgUIExpress.serve,swgUIExpress.setup(swaggerDocs))
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
