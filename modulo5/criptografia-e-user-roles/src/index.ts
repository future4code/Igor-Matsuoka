import { app } from "./app";
import { postUser } from "./endpoints/postUser";
import { loginUser } from "./endpoints/loginUser";
import { getUser } from "./endpoints/getUser";

//import { HashManager } from "./services/hashManager";

app.post("/user/signup", postUser)
app.post("/user/login", loginUser)
app.get("/user/profile", getUser) 

// const cypherText = new HashManager().createHash("acerola")
// console.log(cypherText)

// const passwordCorrect = new HashManager().compareHash("paulo1234", "$2a$12$bY0Xgr1slRMCNUgDYSZOlOAnImqGttJokvfrhVX9ArjZwUPPQDgLq")
// console.log("isTrue", passwordCorrect)
// const passwordCorrect = new HashManager().compareHash("acerola", "$2a$12$bY0Xgr1slRMCNUgDYSZOlOAnImqGttJokvfrhVX9ArjZwUPPQDgLq")
// console.log("isTrue", passwordCorrect)

