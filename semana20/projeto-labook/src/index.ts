import { Request, Response } from "express";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import { UserController } from "./controller/UserController";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})

const postController = new PostController()
const userController = new UserController()

app.post("/user", userController.signUp)
app.post("/user/login", userController.login)

app.get("/posts/:id", postController.getPostById)


