import express from "express";
import { AddressInfo } from "net";
import { getUser } from "./endpoints/getUser";
import { loginUser } from "./endpoints/login";
import { postUser } from "./endpoints/postUser";

export const app = express();

app.use(express.json());

export const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.post("/user/signup", postUser)
app.post("/user/login", loginUser)
app.get("/user/profile", getUser)