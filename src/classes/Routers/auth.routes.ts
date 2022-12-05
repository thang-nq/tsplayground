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
          return res.status(200).send();
        } catch (error) {
          return next(error);
        }
      }
    );
    this.router.get(
      "/",
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          let accessToken;
          const code = req.query["code"];
          console.log(code);
          await axios
            .get(`http://localhost:8080/auth/token?code=${code}`)
            .then((res) => {
              console.log(res.data);
              accessToken = res.data.accessToken;
            })
            .catch((err) => console.log(err));

          console.log(accessToken);
          const data = await axios
            .get("http://localhost:8080/user/info", {
              headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((res) => res.data);

          return res.status(200).send(data);
        } catch (error) {
          return next(error);
        }
      }
    );
  }
}
