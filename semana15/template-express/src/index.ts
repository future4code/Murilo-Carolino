import express, { request, Request, Response } from "express"
import cors from "cors"
import { countries } from "./data"
import { country } from "./types"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor Ligado")
})

// Endpoint 1 - Buscar todos os países
app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map((country) => {
        return (
            {
                id: country.id,
                name: country.name
            }
        )
    })

    res
    .status(200)
    .send(result)
})

// Endpoint 3 -  Busca com filtros
app.get("/countries/search", async (req: Request, res: Response) => {
    try {
        let result: country[] = countries

        if (req.query.name) {
            result = result.filter((country) => {
                return country.name.includes(req.query.name as string)
            })
        } else if (req.query.capital) {
            result = result.filter((country) => {
                return country.capital.includes(req.query.capital as string)
            })
        } else if (req.query.continent) {
            result = result.filter((country) => {
                return country.continent.includes(req.query.continent as string)
            })
        } else {
            res.statusCode = 400
            throw new Error("Nenhum Parâmetro passado.")
        }

        res
        .status(200)
        .send(result)

    } catch (error: any) {
        if(res.statusCode === 200){
            res
            .status(500)
            .end()
        } else {
            res.send(error.message)
        }
    }

})

// Endpoint 2 - Buscar país por id
app.get("/countries/:id", (req: Request, res: Response) => {
    const id = req.params.id

    const result: country | undefined = countries.find((country) => {
        return country.id === Number(id)
    })

    if (result) {
        res
        .status(200)
        .send(result)
    } else {
        res
        .status(404)
        .send("País não encontrado!")
    }
})

// Endpoint 4 - Editar País (confused)
app.put("/countries/:id", (req: Request, res: Response) => {
    const id = req.params.id
    
    let result: country | undefined = countries.find((country) => {
        return country.id === Number(id)
    })

    if (result) {
        req.body.name = "Brazilzil"
        let editResult = {...result, name: req.body.name}
        res
        .status(200)
        .send(editResult)
    } else {
        res
        .status(404)
        .send("País não encontrado!")
    }
})

// Endpoint 5 - Deletar País 
app.delete("countries/:id", async (req: Request, res: Response) => {
    try {
        
        const token = req.headers.authorization
        if (!token) {
            res.statusCode = 401
            throw new Error()
        }

        const index = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })

        if (index === -1) {
            res.statusCode = 404
            throw new Error()
        }

        countries.splice(index, 1)

        res.status(204).end()

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).end()
        } else {
            res.end()
        }
    }
})