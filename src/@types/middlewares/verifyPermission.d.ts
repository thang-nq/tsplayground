/// <reference path="baseValidator.d.ts" />
import type { NextFunction, Request, Response } from "express";
/**
 * Verify the permission from jwt
 * @param req
 * @param res
 * @param next
 * @returns next()
 */
export declare const validatePermission: (req: Request, res: Response, next: NextFunction) => void;
