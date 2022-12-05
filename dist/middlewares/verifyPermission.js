"use strict";
/// <reference path="baseValidator.ts"/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePermission = void 0;
const CustomError_1 = __importDefault(require("../classes/Errors/CustomError"));
const permission = {
    method: "GET",
    resources: "/api/user",
};
/**
 * Verify the permission from jwt
 * @param req
 * @param res
 * @param next
 * @returns next()
 */
const validatePermission = (req, res, next) => {
    try {
        /**
         * Request payload
         */
        const payload = {
            base: req.baseUrl,
            url: req.url,
            method: req.method,
            originalUrl: req.originalUrl,
        };
        if (!(permission.method === payload.method &&
            permission.resources === payload.base)) {
            next(new CustomError_1.default("INVALID_PERMISSION", 403, "You are not allowed to access this route"));
        }
        return next();
    }
    catch (error) {
        return next(error);
    }
};
exports.validatePermission = validatePermission;
