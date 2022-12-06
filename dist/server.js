"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ErrorHandler_1 = require("./classes/Errors/ErrorHandler");
const routes_1 = require("./classes/Routers/routes");
require("./auth");
/**
 * The server class of the app
 */
class Server {
    instance;
    PORT;
    // public redisIntance: RedisClient;
    /**
     * Create new server with redis
     * @param port Port number
     */
    constructor(port) {
        this.PORT = port;
        // this.redisIntance = redis!;
        this.instance = (0, express_1.default)();
        this.middlerwares();
        this.routing();
        this.errorHandler();
    }
    /**
     * Start the server on the provided port
     */
    start() {
        this.instance.listen(this.PORT, () => {
            console.log(`Server is running on PORT ${this.PORT}`);
        });
    }
    middlerwares() {
        this.instance.use(express_1.default.json());
        this.instance.use(express_1.default.urlencoded({ extended: true }));
    }
    routing() {
        this.instance.use(new routes_1.MainRouter().router);
    }
    errorHandler() {
        this.instance.use(ErrorHandler_1.handleError);
    }
}
exports.default = Server;
