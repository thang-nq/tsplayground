export interface IBaseUser {
    name: string;
    type: string;
    getPermissions(): string;
}
export interface ISuperUser {
    getPrivateData(): Promise<string>;
}
declare type Admin = IBaseUser & SuperUser;
export declare class User implements IBaseUser {
    type: string;
    name: string;
    constructor(name: string);
    getPermissions(): string;
}
export declare class SuperUser extends User implements Admin {
    type: string;
    constructor(name: string);
    getPermissions(): string;
    getPrivateData(): Promise<string>;
}
export {};
