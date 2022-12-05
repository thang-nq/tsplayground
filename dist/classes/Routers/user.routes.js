"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
require("../../middlewares/verifyPermission");
const RedisHelper_1 = require("../../RedisHelper");
const controller_1 = __importDefault(require("../Controllers/controller"));
const controller = new controller_1.default();
class UserRoutes {
    router;
    redisInstance;
    constructor(redisInstance) {
        this.router = (0, express_1.Router)();
        this.redisInstance = redisInstance;
        this.routerSetup();
    }
    routerSetup() {
        this.router.get("/all", RedisHelper_1.RedisHelper.cachingMiddleware("allUser"), async (req, res, next) => {
            try {
                const data = "Thang Nguyen";
                await this.redisInstance.set("allUser", data);
                await this.redisInstance.expire("allUser", 10);
                setTimeout(() => {
                    return res.status(200).send({ message: "Data from db", data });
                }, 1000);
                // return res.status(200).send({ message: "Data from db", data });
            }
            catch (error) {
                return next(error);
            }
        });
    }
}
exports.UserRoutes = UserRoutes;
