import { Router } from "express";
import type { RedisClient } from "src/@types/redis";
export declare class MainRouter {
    router: Router;
    redisInstance: RedisClient;
    constructor(redisInstance?: RedisClient);
    private routingSetup;
}
