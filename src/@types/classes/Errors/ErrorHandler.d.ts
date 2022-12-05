import type { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError";
import { UnauthorizedError } from "express-oauth2-jwt-bearer";
export declare const handleError: (err: Error | CustomError | TypeError | UnauthorizedError, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
