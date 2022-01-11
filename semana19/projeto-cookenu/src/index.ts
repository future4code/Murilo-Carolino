import { Request, Response } from "express"
import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import getProfile from "./endpoints/getProfile"
import getRecipeById from "./endpoints/getRecipeById"
import getUserById from "./endpoints/getUserById"
import login from "./endpoints/login"
import signup from "./endpoints/signup"

app.get("/", (req: Request, res: Response) => {
    res.send("Testando... Deu tudo certo!")
    console.log("configurações funcionando")
})

app.post("/signup", signup)
app.post("/login", login)
app.post("/recipe", createRecipe)

app.get("/user/profile", getProfile)
app.get("/user/:id", getUserById)
app.get("/recipe/:id", getRecipeById)