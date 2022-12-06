import { Router, Response, Request, NextFunction } from "express";
import axios from "axios";

export class AuthRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routerSetup();
  }
  private routerSetup() {
    this.router.post(
      "/login",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          return res.status(200).send("OK");
        } catch (error) {
          return next(error);
        }
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          return res.render("index");
        } catch (error) {
          return next(error);
        }
      }
    );
  }
}
