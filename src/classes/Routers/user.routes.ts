import { NextFunction, Request, Response, Router } from "express";
import type { RedisClient } from "src/@types/redis";
import { validatePermission } from "../../middlewares/verifyPermission";
import { RedisHelper } from "../../RedisHelper";
import BaseController from "../Controllers/controller";

const controller = new BaseController();
export class UserRoutes {
  public router: Router;
  private redisInstance: RedisClient;
  constructor(redisInstance?: RedisClient) {
    this.router = Router();
    this.redisInstance = redisInstance!;
    this.routerSetup();
  }

  private routerSetup() {
    this.router.get(
      "/all",
      RedisHelper.cachingMiddleware("allUser"),
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const data = "Thang Nguyen";
          await this.redisInstance.set("allUser", data);
          await this.redisInstance.expire("allUser", 10);
          setTimeout(() => {
            return res.status(200).send({ message: "Data from db", data });
          }, 1000);
          // return res.status(200).send({ message: "Data from db", data });
        } catch (error) {
          return next(error);
        }
      }
    );
  }
}
