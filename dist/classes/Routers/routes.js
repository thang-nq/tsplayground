"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./auth.routes");
require("./user.routes");
class MainRouter {
    router;
    redisInstance;
    constructor(redisInstance) {
        this.router = (0, express_1.Router)();
        this.redisInstance = redisInstance;
        this.routingSetup();
    }
    routingSetup() {
        // this.router.use("/user", new UserRoutes(this.redisInstance).router);
        this.router.use("/dashboard", new auth_routes_1.AuthRoutes().router);
        this.router.get("/_healthcheck_", async (req, res, next) => {
            try {
                return res.status(200).send("OK");
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.MainRouter = MainRouter;
