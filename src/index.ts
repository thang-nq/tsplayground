import Server from "./server";
import { RedisHelper } from "./RedisHelper";

const PORT = 3000;
// const redisClient = RedisHelper.getInstance();
// redisClient.connect().then(() => {
//   console.log(`Successfully connect to redis`);
// });
const server = new Server(PORT);

server.start();
