import { NextFunction, Request, Response, Router } from "express";
import type { RedisClient } from "src/@types/redis";
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export class MainRouter {
  public router: Router;
  public redisInstance: RedisClient;
  constructor(redisInstance?: RedisClient) {
    this.router = Router();
    this.redisInstance = redisInstance!;
    this.routingSetup();
  }

  private routingSetup() {
    // this.router.use("/user", new UserRoutes(this.redisInstance).router);
    this.router.use("/dashboard", new AuthRoutes().router);
    this.router.get(
      "/_healthcheck_",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          return res.status(200).send("OK");
        } catch (error) {
          return next(error);
        }
      }
    );
  }
}
