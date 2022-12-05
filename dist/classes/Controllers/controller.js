"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../Errors/CustomError");
class BaseController {
    constructor() { }
    getOne = async (req, res, next) => {
        try {
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.default = BaseController;
