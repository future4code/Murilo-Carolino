# Aula 55 - Introdução à Autenticação

### Exercício 1

_a._ Acredito apresentar uma forma melhor de segurança para a aplicação e também usuários, pois usando-se uma UUID para gerar um ID temos uma representção de id hexadecimal, no qual se têm a combinação de letra com números, tornando a autenticação mais segura e com chances quase que impossíveis de repetição.

_b._

```Typescript
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
```

### Exercício 2

_a._ O código faz a inserção dos dados de ID, email e password dentro da tabela "User", criando um novo usário, através de uma função chamada createUser, aonde se passa como argumentos esses dados e os insere na tabela.

_b._

```sql
CREATE TABLE IF NOT EXISTS aula55_User (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```
_c._ 
```Typescript
const functionCreateUser = async (id: string, email: string, password: string) => {
    await connection('aula55_User')
        .insert({
            id: id,
            email: email,
            password: password
        })
}
```

### Exercício 3

_a._ Representa uma chave que será usada como base para gerar o token do usuário. Se usa as string para que receba uma key nesse formato e possa completar as três entradas para gerar o token.

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