"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperUser = exports.User = void 0;
class User {
    type;
    name;
    constructor(name) {
        this.name = name;
        this.type = "BaseUser";
    }
    getPermissions() {
        return "User permissions";
    }
}
exports.User = User;
class SuperUser extends User {
    type;
    constructor(name) {
        super(name);
        this.type = "SuperUser";
    }
    getPermissions() {
        return "Super Permissions";
    }
    async getPrivateData() {
        return "Private data";
    }
}
exports.SuperUser = SuperUser;
const user1 = new User("victor");
console.log(user1.getPermissions());
const admin = new SuperUser(user1.name);
console.log({
    username: admin.name,
    permissions: admin.getPermissions(),
});
