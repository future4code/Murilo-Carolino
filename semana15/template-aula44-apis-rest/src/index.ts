import express, { Request, Response } from 'express'
import cors from 'cors'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// Exercício 1
/*
a) O método http que será usado para pegar todos os usuários, será o GET.
b) A entidade a ser manipulada será "/users"
*/

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400
  try {
    
    const result: User[] = users.map((user) => {
      return user
    })

    res.status(200).send(result)

  } catch (error) {
    res.status(errorCode).send("Falha na requisição")
  }
})

// Exercício 2

app.get("/users/search", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    
    const type: string = req.query.type as string
    const result: User[] = users.filter((user) => {
      return user.type === type.toUpperCase()
    })
    
    if (result.length === 0) {
      errorCode = 404
      throw new Error("Tipo de usuário não encontrado.")
    }

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

/*
a) Fazendo a comparação com a array de users, para cada query parametro digitado, usando a função filter no banco de dados,
e comparando com o valor da chave type de cad ausuário.

b) Como estou fazendo um filtro para determinada palavra de parâmetro, ao ser um parâmetro que não existe na chave type dos users,
o filtro retorna um array vazio, dessa forma trato a situação para um array vazio, usando length === 0 .
*/

// Exercício 3

app.get("/users/profile", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    
    const name: string = req.query.name as string
    const result: User | undefined = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase()
    })
    
    if (!result) {
      errorCode = 404
      throw new Error("Nome de usuário não encontrado.")
    }

    res.status(200).send(result)

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

/*
a) Query parameters

b) Feito no exercício.
*/

// Exercício 4
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400

  try {
    
    const {id, name, email, type, age} = req.body

    if (!id || !name || !email || !type || !age) {
      errorCode = 422
      throw new Error("Confira se preencheu todos os campos")
    }

    const newUser: User = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age
    }

    users.push(newUser)

    res.status(201).send({message: "Usuário criado com sucesso!"})

  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
})

/*
a) Não mudou nada, consegui adicionar um novo usuário tanto com o método post quanto com o put.

b) O put serve para atualizar recursos que já estejam no banco, caso não houver ele adicionar um novo. Em contra partida o post, 
somente adiciona um novo recurso.
*/
