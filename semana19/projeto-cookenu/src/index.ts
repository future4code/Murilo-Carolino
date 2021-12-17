import { Request, Response } from "express"
import app from "./app"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.get("/", (req: Request, res: Response) => {
    res.send("Testando... Deu tudo certo!")
    console.log("configurações funcionando")
})

app.post("/signup", signup)
app.post("/login", login)