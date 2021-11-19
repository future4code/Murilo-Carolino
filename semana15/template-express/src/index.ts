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
    let errorCode: number = 400
    
    try {
        const countryIndex: number = countries.findIndex((country) => {
            return country.id === Number(id)
        })

        if (countryIndex === -1) {
            errorCode = 404
            throw new Error()
        }

        if (!req.body.name && !req.body.capital) {
            throw new Error("Parâmetro inválido.")
        }

        if (req.body.name) {
            countries[countryIndex].name = req.body.name
        }
        if (req.body.capital) {
            countries[countryIndex].capital = req.body.capital
        }

        res
        .status(200)
        .send("Atualização com sucesso de país.")

    } catch (error: any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 5 - Deletar País 
app.delete("countries/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        
        const authorization = req.headers.authorization
        if (!authorization || authorization.length < 10) {
            errorCode = 401
            throw new Error("Não autorizado.")
        }

        const index: number = countries.findIndex((country) => {
            return country.id === Number(req.params.id)
        })

        if (index === -1) {
            errorCode = 404
            throw new Error()
        }

        countries.splice(index, 1)

        res.status(200).send("País deletado com sucesso.")

    } catch (error: any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})

// Endpoint 6 - Criando País
app.post("/countries", (req: Request, res: Response) => {
    let errorCode = 401

    try {
        const authorization: string = req.headers.authorization as string
        if (!authorization || authorization.length < 10) {
            errorCode = 401
            throw new Error("Não autorizado.")
        }

        if (!req.body.name && !req.body.capital && !req.body.continent) {
            throw new Error("Parâmetros inválidos.")
        }

        const countryName : number = countries.findIndex((country) => {
            return country.name === req.body.name
        })

        if (countryName !== -1) {
            errorCode = 409
            throw new Error("País já existente")
        }

        const newCountry: country = {
            id: Date.now(),
            name: req.body.name,
            capital: req.body.capital,
            continent: req.body.continent
        }

        countries.push(newCountry)

        res.status(200).send({ message: "Sucesso!", country: newCountry})

    } catch (error: any) {
        console.log(error)
        res.status(errorCode).send(error.message)
    }
})