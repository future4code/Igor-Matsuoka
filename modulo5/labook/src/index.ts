import { app } from "./app";
import UserBusiness from "./Business/UserBusiness";
import UserController from "./Controller/UserController";
import UserData from "./Data/UserData";
import { HashManager } from "./Services/hashManager";
import { Authenticator } from "./Utilities/authenticator";
import { IdGenerator } from "./Utilities/idGenerator";

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

app.post("/user/signup", userController.signup)