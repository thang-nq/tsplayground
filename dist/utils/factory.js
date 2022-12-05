"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scale = void 0;
const Scale = (Base) => {
    return class Scaling extends Base {
        _scale = 1;
        setScale(scale) {
            this._scale = scale;
        }
        get scale() {
            return this._scale;
        }
    };
};
exports.Scale = Scale;
