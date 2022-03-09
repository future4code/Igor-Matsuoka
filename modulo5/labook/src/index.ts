import { app } from "./Data/app";
import UserController from "./Controller/User/UserController";
import PostController from "./Controller/Post/PostController";

const userController = new UserController()
const postController = new PostController()

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)

app.post("/post/create", postController.create)
app.get("/post/:id", postController.find)