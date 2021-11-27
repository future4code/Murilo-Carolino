import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});

const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("TodoListUser")
    .insert({
        name: name,
        nickname: nickname,
        email: email
    })
}

app.post("/users", async (req: Request, res: Response) => {
    try {
        const {name, nickname, email} = req.body
        
        if(!name || !nickname || !email) {
            res.statusCode = 406
            throw new Error("Digite todos os campos solicitados.")
        }
        

        await createUser(name, nickname, email)
        
        res.status(200).send("Usuário criado com sucesso!")

    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})