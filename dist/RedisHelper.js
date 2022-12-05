"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisHelper = void 0;
const redis_1 = require("redis");
class RedisHelper {
    static instance;
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = (0, redis_1.createClient)();
            this.instance.on("error", (err) => {
                console.log(`Redis client error`, err);
            });
            return this.instance;
        }
        return this.instance;
    }
    static cachingMiddleware = (param) => async (req, res, next) => {
        try {
            const data = await this.instance.get(param);
            if (data) {
                return res.status(200).send({
                    message: "Data from redis",
                    data,
                });
            }
            next();
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.RedisHelper = RedisHelper;
