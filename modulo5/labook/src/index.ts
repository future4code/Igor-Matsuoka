import { app } from "./Data/app";
import UserController from "./Controller/User/UserController";
import PostController from "./Controller/Post/PostController";
import RelationController from "./Controller/Relations/RelationsController";

const userController = new UserController()
const postController = new PostController()
const relationController = new RelationController()

app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)

app.post("/post/create", postController.create)
app.get("/post/:id", postController.find)

app.post("/relations/create", relationController.create)
app.delete("/relations/:id", relationController.delete)