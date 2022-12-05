"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError {
    name;
    status;
    messsage;
    additionalInfo;
    constructor(name, status = 500, message, additionalInfo = {}) {
        this.name = name;
        this.status = status;
        this.messsage = message;
        this.additionalInfo = additionalInfo;
    }
}
exports.default = CustomError;
