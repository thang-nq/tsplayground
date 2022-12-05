"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
require("axios");
class AuthRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routerSetup();
    }
    routerSetup() {
        this.router.post("/login", async (req, res, next) => {
            try {
                return res.status(200).send("OK");
            }
            catch (error) {
                return next(error);
            }
        });
        this.router.get("/", async (req, res, next) => {
            try {
                let accessToken;
                // const code = req.query["code"];
                // console.log(code);
                // await axios
                //   .get(`http://localhost:8080/auth/token?code=${code}`)
                //   .then((res) => {
                //     console.log(res.data);
                //     accessToken = res.data.accessToken;
                //   })
                //   .catch((err) => console.log(err));
                // console.log(accessToken);
                // const data = await axios
                //   .get("http://localhost:8080/user/info", {
                //     headers: { Authorization: `Bearer ${accessToken}` },
                //   })
                //   .then((res) => res.data);
                return res.status(200).send("OK");
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.AuthRoutes = AuthRoutes;
