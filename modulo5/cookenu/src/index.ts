import { app } from "./app";
import { login } from "./Endpoints/login";
import { getOwnProfile } from "./Endpoints/getOwnProfile";
import { signUp } from "./Endpoints/signUp";
import { getUserProfile } from "./Endpoints/getProfile";
import { createRecipe } from "./Endpoints/createRecipe";
import { getRecipe } from "./Endpoints/getRecipe";
import { followUser } from "./Endpoints/followUser";
import { unfollowUser } from "./Endpoints/UnfollowUser";
import { getUserFeed } from "./Endpoints/getUserFeed";
import { signupAdmin } from "./Endpoints/createAdmin";
import { changeRecipe } from "./Endpoints/editRecipe";
import { deleteRecipe } from "./Endpoints/deleteRecipe";
import { deleteAccount } from "./Endpoints/deleteAccount";
import { changePassword } from "./Endpoints/changePassword";


app.post("/signup", signUp)
app.post("/login", login)
app.post("/recipe", createRecipe)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
app.post("/admin", signupAdmin)

app.put("/recipe/:id/change", changeRecipe)
app.put("/user/change/password", changePassword)

app.delete("/recipe/:id/delete", deleteRecipe)
app.delete("/user/:id/delete", deleteAccount)

app.get("/user/profile", getOwnProfile)
app.get("/user/:id", getUserProfile)
app.get("/recipe/:id", getRecipe)
app.get("/users/feed", getUserFeed)
