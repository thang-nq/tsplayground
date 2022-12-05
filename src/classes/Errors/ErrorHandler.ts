import type { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";

export const handleError = (
  err: Error | CustomError | TypeError | UnauthorizedError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = err;

  if (err instanceof UnauthorizedError) {
    let newErr = new CustomError(err.name, err.statusCode, err.message);
    return res.status(newErr.status).send(newErr);
  }
  if (err instanceof Error) {
    let newError = new CustomError("Server error", 500, err.message);
    return res.status(500).send(newError);
  }

  return res.status((customError as CustomError).status).send(customError);
};
