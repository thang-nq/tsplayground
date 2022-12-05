"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
class AuthRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routerSetup();
    }
    routerSetup() {
        this.router.post("/login", async (req, res, next) => {
            try {
                return res.status(200).send();
            }
            catch (error) {
                return next(error);
            }
        });
        this.router.get("/", async (req, res, next) => {
            try {
                let accessToken;
                const code = req.query["code"];
                console.log(code);
                await axios_1.default
                    .get(`http://localhost:8080/auth/token?code=${code}`)
                    .then((res) => {
                    console.log(res.data);
                    accessToken = res.data.accessToken;
                })
                    .catch((err) => console.log(err));
                console.log(accessToken);
                const data = await axios_1.default
                    .get("http://localhost:8080/user/info", {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                    .then((res) => res.data);
                return res.status(200).send(data);
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.AuthRoutes = AuthRoutes;
