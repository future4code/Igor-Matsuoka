import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUser } from "./endpoints/getUserByName";
import { getUsersByType } from "./endpoints/getUserByType";
import { sortUsers } from "./endpoints/sortUsers";
import { getLimitedUsers } from "./endpoints/getLimitedUsers";
import { getAll } from "./endpoints/getAll";

app.get("/users", getAllUsers)
app.get("/user", getUser)
app.get("/userstype", getUsersByType)
app.get("/userssort", sortUsers)
app.get("/userslimited", getLimitedUsers)
app.get("/allusers", getAll)