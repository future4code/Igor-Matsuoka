import { app } from "./Data/app";
import { userRouter } from "./Router/UserRouter";

app.use("/user", userRouter); 