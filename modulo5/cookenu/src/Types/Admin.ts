import { User } from "./User";

export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class Admin extends User {
    private role: USER_ROLES;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
    ) {
        super(id, name, email, password);
        this.role = role;
    }

    public getRole(){
        return this.role
    }

    static toAdminModel(data: any): Admin {
        return new Admin(data.id, data.name, data.email, data.password, data.role)
    }
}