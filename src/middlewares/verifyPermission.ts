/// <reference path="baseValidator.ts"/>

import type { NextFunction, Request, Response } from "express";
import CustomError from "../classes/Errors/CustomError";

const permission = {
  method: "GET",
  resources: "/api/user",
};

/**
 * Verify the permission from jwt
 * @param req
 * @param res
 * @param next
 * @returns next()
 */
export const validatePermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    /**
     * Request payload
     */
    const payload = {
      base: req.baseUrl,
      url: req.url,
      method: req.method,
      originalUrl: req.originalUrl,
    };

    if (
      !(
        permission.method === payload.method &&
        permission.resources === payload.base
      )
    ) {
      next(
        new CustomError(
          "INVALID_PERMISSION",
          403,
          "You are not allowed to access this route"
        )
      );
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
