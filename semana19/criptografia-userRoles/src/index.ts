import app from "./app"
import editUser from './endpoints/getLoggedUser'
import createUser from './endpoints/createUser'
import { Request, Response } from "express"
import { v4 } from "uuid"
import login from "./endpoints/login"
import getLoggedUser from "./endpoints/getLoggedUser"

app.get("/", (req: Request, res: Response) => {
    res.send("Testando... Deu tudo certo!")
    console.log("configurações funcionando")
})

app.post('/users/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getLoggedUser)
