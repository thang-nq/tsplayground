"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const CustomError_1 = __importDefault(require("./CustomError"));
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const handleError = (err, req, res, next) => {
    let customError = err;
    if (err instanceof express_oauth2_jwt_bearer_1.UnauthorizedError) {
        let newErr = new CustomError_1.default(err.name, err.statusCode, err.message);
        return res.status(newErr.status).send(newErr);
    }
    if (err instanceof Error) {
        let newError = new CustomError_1.default("Server error", 500, err.message);
        return res.status(500).send(newError);
    }
    return res.status(customError.status).send(customError);
};
exports.handleError = handleError;
