import { USER_ROLES } from "./userRoles"

export type user = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: USER_ROLES;
}