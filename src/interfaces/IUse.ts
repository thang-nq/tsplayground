export interface IBaseUser {
  name: string;
  type: string;

  getPermissions(): string;
}

export interface ISuperUser {
  getPrivateData(): Promise<string>;
}

type Admin = IBaseUser & SuperUser;

export class User implements IBaseUser {
  public type: string;
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.type = "BaseUser";
  }
  getPermissions(): string {
    return "User permissions";
  }
}

export class SuperUser extends User implements Admin {
  override type: string;
  constructor(name: string) {
    super(name);
    this.type = "SuperUser";
  }

  override getPermissions(): string {
    return "Super Permissions";
  }

  async getPrivateData(): Promise<string> {
    return "Private data";
  }
}

const user1 = new User("victor");
console.log(user1.getPermissions());

const admin = new SuperUser(user1.name);
console.log({
  username: admin.name,
  permissions: admin.getPermissions(),
});
