import type { NextFunction, Request, Response } from "express";
export default class BaseController<T> {
    constructor();
    getOne: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
