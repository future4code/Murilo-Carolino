import express from "express";
import userController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/users/profile/:id", userController.getUserById)