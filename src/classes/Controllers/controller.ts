import type { NextFunction, Request, Response } from "express";
import CustomError from "../Errors/CustomError";

export default class BaseController<T> {
  constructor() {}
  public getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      return next(error);
    }
  };
}
