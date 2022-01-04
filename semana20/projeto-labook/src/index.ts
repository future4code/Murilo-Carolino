import { Request, Response } from "express";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express")
})

const postController = new PostController()

app.get("/posts/:id", postController.getPostById)