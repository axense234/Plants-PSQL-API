import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

type ErrObjType = {
  msg: string;
  code: number | string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  const errorObject: ErrObjType = {
    msg: err.msg || err.message || "Something went very wrong.",
    code: err.code || err.errCode || 500,
  };

  if (err.code === "23505") {
    errorObject.code = StatusCodes.BAD_REQUEST;
    errorObject.msg =
      "Please enter unique details for the plant's scientific name and it's id.";
  }

  if (err.code === "22001") {
    errorObject.code = StatusCodes.BAD_REQUEST;
    errorObject.msg = "Please enter appropiate values(string length).";
  }

  if (err.code === "42601" || err.code === "42703") {
    errorObject.code = StatusCodes.BAD_REQUEST;
    errorObject.msg =
      "Please enter appropiate properties for the plant. Check the Plant schema for more information.";
  }

  if (err.code === "22P02") {
    errorObject.code = StatusCodes.BAD_REQUEST;
    errorObject.msg =
      "Please enter a valid plant id. If this error is not referring to a plant id, please check that you have entered correct values.";
  }

  return res.status((errorObject.code as number) || 500).json({
    msg: errorObject.msg,
    code: errorObject.code,
  });
};

export default errorHandlerMiddleware;
