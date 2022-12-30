import { ErrorRequestHandler } from "express";

const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res) => {
  return res.status(500).json({ msg: "IDK MAN", err });
};

export default errorHandlerMiddleware;
