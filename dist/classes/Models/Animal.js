"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    #name;
    #action;
    constructor(name, action) {
        this.#name = name;
        this.#action = action;
    }
    get action() {
        return this.#action;
    }
    get name() {
        return this.#name;
    }
    activate() {
        console.log(`The animal is now ${this.#action}`);
    }
}
exports.Animal = Animal;
