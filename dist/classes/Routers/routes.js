"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainRouter = void 0;
const express_1 = require("express");
const auth_routes_1 = require("./auth.routes");
const user_routes_1 = require("./user.routes");
class MainRouter {
    router;
    redisInstance;
    constructor(redisInstance) {
        this.router = (0, express_1.Router)();
        this.redisInstance = redisInstance;
        this.routingSetup();
    }
    routingSetup() {
        this.router.use("/user", new user_routes_1.UserRoutes(this.redisInstance).router);
        this.router.use("/dashboard", new auth_routes_1.AuthRoutes().router);
    }
}
exports.MainRouter = MainRouter;
