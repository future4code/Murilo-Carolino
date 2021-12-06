import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
  }
})

const app = express()

app.use(express.json())
app.use(cors())

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
//   .then(result => {
//     console.log(result)
//   })
//   .catch(err => {
//     console.log(err)
// });

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001"))
// })()


// // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error: any) {
//     console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
  `)

  return result[0]
}

// (async () => {
//   console.log(await getActorByName(""))
// })()

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count
  return count
}

// (async () => {
//   console.log(await countActors("female"))
// })()

const updateActor = async (salary: number, id: string): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id)
}
const createActor = async (id: string, name: string, salary: number, birth_date: Date, gender: string): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: birth_date,
      gender: gender
    })
    .into("Actor")
}

// (async () => {
//   console.log(await updateActor(500000, "004"))
// })()

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}

// (async () => {
//   console.log(await deleteActor("004"))
// })()

const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({gender});

    return result[0].average
}

// (async () => {
//   console.log(await avgSalaryByGender("male"))
// })()

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActors(gender as string)

    res.status(200).send({quantity: count})
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.birth_date),
      req.body.gender
    )

    res.status(200).send("Usuário criado com sucesso!")
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

app.put("/actor", async (req: Request, res: Response) => {
  try {
    const id = req.body.id
    const salary = req.body.salary
    await updateActor(salary, id)

    res.status(200).send("Usuário atualizado.")
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteActor(id)

    res.status(200).send("Ator deletado com sucesso!")
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})