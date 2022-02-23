import { app } from "./app";
import { login } from "./Endpoints/login";
import { getOwnProfile } from "./Endpoints/getOwnProfile";
import { signUp } from "./Endpoints/signUp";
import { getUserProfile } from "./Endpoints/getProfile";

app.post("/signup", signUp)
app.post("/login", login)

app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getUserProfile)