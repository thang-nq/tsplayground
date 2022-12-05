import type { createClient } from "@redis/client";
import redisCache from "src/RedisHelper";

type RedisClient = ReturnType<typeof createClient>;
