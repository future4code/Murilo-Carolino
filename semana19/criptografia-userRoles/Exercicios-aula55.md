# Aula 56 - Criptografia e User Roles

### Exercício 1

_a._ Round são o valor de cost do Hash, ou seja, o valor corresponde ao tempo de execução para gerar um salt, quanto menor esse número mais rápido sua resposta, quanto maior mais lento, o uso desse valor recomendável é de meio termo entre esse tempo de resposta, já o salt gera uma hash aleatória com 22 caracteres baseado no tempo do cost. O valor recomendável para cost é de 12, porque é um tempo hábil para se ter a resposta da função, sem qu eo usuário tenha que esperar muito e um tempo bem compátivel com segurança.

_b. e c._

```Typescript
class HashManager {

    createHash = (plainText: string): string => {

        const cost: number = 12
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText, salt)

        return cypherText
    }

    compareHash = (plainText: string, cypherText: string): boolean => {
        return compareSync(plainText, cypherText)
    }
}
```

### Exercício 2

_a._ Precisa realizar primeiro o cadastro, pois a partir da criptografia da senha do usuário no banco de dados, conseguimos usar a função de comparar a senha que o usuário digitou com a senha criptografada no banco, usando a lib bcryptjs.

_b. e c._ Exercícios resolvidos no código, arquivo login.ts e createUser.ts

_d._ Não, pois esse endpoint não depende da criptografia da senha, apenas depende do token gerado ao usuário logar-se. Com a login realizado o headers authorization necessita do parâmetro de token para funcionar o endpoint.

### Exercício 3

_a._ 
```SQL
ALTER TABLE
    aula56_User 
ADD 
    COLUMN role ENUM("normal", "admin") NOT NULL DEFAULT "normal";
```

_b._ 

```Typescript
class Authenticator {

    generateToken = (payload: authenticationData) => {
        const token = sign(
            {payload},
            process.env.JWT_KEY,
            {expiresIn: '10min'}
        )

        return token
    }
}

interface authenticationData {
   id: string
}
```

### Exercício 4

Resolvido na pasta endpoints, arquivo createUser.ts

### Exercício 5

_a._ 
```Typescript
const functionGetUserByEmail = async (email: string): Promise<any> => {
    const result = await connection('aula55_User')
        .select('*')
        .where('email', email)

    return result
}
```
### Exercício 6

Resolvido na pasta endpoints, arquivo login.ts

### Exercício 7

_a._ Permite que a tipagem seja qualquer tipo de variável, pois podemos receber qualquee tipo de valor para a variável que estamos retornando.

_b._
```Typescript
getTokenData = (token: string) => {
    try {
        const tokenData = verify(
            token,
            process.env.JWT_KEY
        ) as any

        return {
            id: tokenData.id
        }
    } catch (error) {
        console.log(error)
        return null
    }
}
```

### Exercício 8

_a._ 
```Typescript
const functionGetUserById = async (id: string): Promise<any> => {
    const result = await connection('aula55_User')
        .select('*')
        .where('id', id)

    return result[0]
}
```

_b._ 

Resolvido na pasta endpoints, arquivo getLoggedUser.ts