import { Router } from "express";
import type { RedisClient } from "src/@types/redis";
export declare class UserRoutes {
    router: Router;
    private redisInstance;
    constructor(redisInstance?: RedisClient);
    private routerSetup;
}
