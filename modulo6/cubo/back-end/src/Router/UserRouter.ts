import express from "express";
import UserController from "../Controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/submit", userController.submitUser)
userRouter.get("/", userController.showUsers)
userRouter.delete("/delete/:id", userController.deleteById)