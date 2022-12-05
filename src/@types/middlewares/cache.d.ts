import type { NextFunction, Request, Response } from "express";
export declare const cache: (req: Request, res: Response, next: NextFunction) => Promise<void>;
