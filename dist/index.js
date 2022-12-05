"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
require("./RedisHelper");
const PORT = 3000;
// const redisClient = RedisHelper.getInstance();
// redisClient.connect().then(() => {
//   console.log(`Successfully connect to redis`);
// });
const server = new server_1.default(PORT);
server.start();
