import type { NextFunction, Request, Response } from "express";

export const cache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    return next(error);
  }
};
