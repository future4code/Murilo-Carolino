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

// Tabela de usuários
const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("TodoListUser")
        .insert({
            name: name,
            nickname: nickname,
            email: email
        })
}

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.statusCode = 406
            throw new Error("Digite todos os campos solicitados.")
        }


        await createUser(name, nickname, email)

        res.status(200).send("Usuário criado com sucesso!")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const getActorById = async (id: number): Promise<any> => {
    const result = await connection("TodoListUser")
        .select("id", "nickname")
        .where("id", id)

    return result
}

// (async () => {
//     console.log(await getActorById(8))
// })()


app.get("/user/:id", async (req: Request, res:Response) => {
    try {
        const id: any = req.params.id

        const user = await getActorById(id)
        if (user.length === 0) {
            res.statusCode = 404
            throw new Error("Usuário não encontado.")
        }

        res.status(200).send(user)
    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
    }
})

const editUser = async (id: number, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
    .update({
        name: name,
        nickname: nickname
    })
    .where("id", id)
}

app.put("/user/edit/:id", async (req: Request, res:Response) => {
    try {
        const id: any = req.params.id
        const {name, nickname} = req.body
        if (!name || !nickname) {
            res.statusCode = 422
            throw new Error("Todos os dados precisam ser preenchidos.")
        }

        await editUser(id, name, nickname)
        res.status(200).send("Usuário atualizado!")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

// Tabela de tarefas

const createTask = async (title: string, description: string, limit_date: Date, creator_user_id: number): Promise<any> => {
    await connection("TodoListTask")
        .insert({
            title: title,
            description: description,
            limit_date: limit_date,
            creator_user_id: creator_user_id
        })
}

app.post("/task", async (req: Request, res: Response) => {
    try {
        const {title, description, limit_date, creator_user_id} = req.body

        const [day, month, year] = limit_date.split("/")
        const limitDate: Date = new Date(`${year}-${month}-${day}`)

        if (!title || !description || !limit_date || !creator_user_id) {
            res.statusCode = 422
            throw new Error("Todos os dados precisam ser preenchidos.")
        }

        await createTask(title, description, limitDate, creator_user_id)

        res.status(200).send("Tarefa criada com sucesso!")
    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
    }
})

const getTaskById = async (id: number): Promise<any> => {
    const result = await connection("TodoListUser")
        .innerJoin("TodoListTask", "TodoListUser.id", "TodoListTask.creator_user_id") 
        .select("TodoListTask.id", "title", "description", "status", "limit_date", "creator_user_id", "nickname")
        .where("TodoListTask.id", id)

    return result
}

app.get("/task/:id", async (req: Request, res: Response) => {
    try {
        const id: any = req.params.id


        const task = await getTaskById(id)

        let formatedDate = task[0].limit_date
        let realDate = ((formatedDate.getDate() )) + "/" + ((formatedDate.getMonth() + 1)) + "/" + formatedDate.getFullYear(); 
        
        const formatedTask = {...task[0], limit_date: realDate}

        if (task.length === 0) {
            res.statusCode = 404
            throw new Error("Tarefa não encontada.")
        }

        res.status(200).send(formatedTask)
    } catch (error:any) {
        res.status(res.statusCode).send(error.message)
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