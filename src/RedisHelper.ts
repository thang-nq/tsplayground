import type { NextFunction, Request, Response } from "express";
import { createClient, RedisClientType } from "redis";

export class RedisHelper {
  private static instance: RedisClientType;
  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = createClient();
      this.instance.on("error", (err) => {
        console.log(`Redis client error`, err);
      });

      return this.instance;
    }

    return this.instance;
  }

  public static cachingMiddleware =
    (param: string) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await this.instance.get(param);
        if (data) {
          return res.status(200).send({
            message: "Data from redis",
            data,
          });
        }
        next();
      } catch (error) {
        return next(error);
      }
    };
}
