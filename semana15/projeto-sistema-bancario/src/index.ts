import express, { Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try {
        const {name, CPF, dateOfBirthdayAsString} = req.body

        const [day, month, year] = dateOfBirthdayAsString.split("/")

        const dateOfBirthday: Date = new Date(`${year}-${month}-${day}`)
        // Validar as entradas da requisição

        const ageInMilisseconds: number = Date.now() - dateOfBirthday.getTime()
        const age: number = ageInMilisseconds/1000/60/60/24/365

        if (age < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos para criar conta.")
        }
        

        // Consultar ou alterar a base de dados


        accounts.push({
            name: name,
            CPF: CPF,
            dateOfBirthday: dateOfBirthday,
            balance: 0,
            statement: []
        })

        // Validar os resultados da consulta
        // Enviar a resposta
        res.status(201).send("Conta criada com sucesso!")
    } catch (error: any) {
        console.log(error)
        res.send(error.message)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if(!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada no banco de dados.")
        }

        res.status(200).send(accounts)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor ligado, rodando na porta 3003!")
})