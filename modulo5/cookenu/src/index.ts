import { app } from "./app";
import { login } from "./Endpoints/login";
import { getUserProfile } from "./Endpoints/perfilUser";
import { signUp } from "./Endpoints/signUp";

app.post("/signup", signUp)
app.post("/login", login)

app.get("/user/profile", getUserProfile)