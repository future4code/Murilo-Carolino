# Aula 47 - Knex

# Exercício 1

> **a.**
Quando usamos o raw, ele nos devolve o resultado da query e outras informações do banco, do jeito que o mySQL devolve, e para conseguirmos acessar as informações que realmente nos interessa é atraves da primeira posição do array de resposta.

> **b.**
~~~Typescript
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
  `)

  return result[0]
}
~~~

> **c.**
~~~Typescript
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)

  const count = result[0][0].count
  return count
}
~~~

# Exercício 2

> **a.**
~~~Typescript
const updateActor = async (salary: number, id: string): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary
    })
    .where("id", id)
}
~~~

> **b.**
~~~Typescript
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}
~~~

> **c.**
~~~Typescript
const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({gender});

    return result[0].average
}
~~~

# Exercício 3

> **a.**
~~~Typescript
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})
~~~
> **b.**
~~~Typescript
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender
    const count = await countActors(gender as string)

    res.status(200).send({quantity: count})
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})
~~~

# Exercício 4

> **a.**
~~~Typescript
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
~~~

> **b.**
~~~Typescript
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteActor(id)

    res.status(200).send("Ator deletado com sucesso!")
  } catch (error:any) {
    res.status(400).send(error.message)
  }
})
~~~
