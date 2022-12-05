export class Animal {
  #name: string;
  #action: string;
  constructor(name: string, action: string) {
    this.#name = name;
    this.#action = action;
  }

  get action() {
    return this.#action;
  }

  get name() {
    return this.#name;
  }

  public activate() {
    console.log(`The animal is now ${this.#action}`);
  }
}
