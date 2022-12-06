import type { Application } from "express";
import Express from "express";
import { handleError } from "./classes/Errors/ErrorHandler";
import { MainRouter } from "./classes/Routers/routes";
import { checkJwt, checkScopes, login } from "./auth";
import type { createClient } from "@redis/client";
import type { RedisClient } from "./@types/redis";
import expressLayouts from "express-ejs-layouts";
import path from "path";
/**
 * The server class of the app
 */
export default class Server {
  public instance: Application;
  public PORT: number;
  // public redisIntance: RedisClient;
  /**
   * Create new server with redis
   * @param port Port number
   */
  constructor(port: number) {
    this.PORT = port;
    // this.redisIntance = redis!;
    this.instance = Express();
    this.middlerwares();
    this.routing();
    this.errorHandler();
  }

  /**
   * Start the server on the provided port
   */
  public start(): void {
    this.instance.listen(this.PORT, () => {
      console.log(`Server is running on PORT ${this.PORT}`);
    });
  }

  public middlerwares(): void {
    this.instance.use(Express.json());
    this.instance.use(Express.urlencoded({ extended: true }));
    // this.instance.use(expressLayouts);
    this.instance.set("views", path.join(__dirname, "./public/views"));
    this.instance.set("view engine", "ejs");
  }

  public routing(): void {
    this.instance.use(new MainRouter().router);
  }

  public errorHandler(): void {
    this.instance.use(handleError);
  }
}
