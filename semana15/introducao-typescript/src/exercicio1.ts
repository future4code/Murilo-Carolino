// Exercício 1

// a)
let minhaString: string = "Sou uma string"
/* minhaString = 15
Ao tentar colocar uma várivel do tipo número o TS não aceita pois a linguagem de TypeScript tem como padrão uma tipagem
muito forte, ou seja, quando você declara que tão variável tem específico type, ele só ira aceitar atribuições de valores
daquele tipo.
*/

// b) meuNumero 
let meuNumero: number = 7
/* meuNumero: number | string = "Posso ser uma string" */

// c)
const person: { nome: string, idade: number, corFavorita: string} = {
    nome: "Murilo",
    idade: 30,
    corFavorita: "Laranja"
}

type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: cores
}
// d)
enum cores {
    VERMELHO = "Vermelho",
    LARANJA = 'Laranja',
    AMARELO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
}

// c)
const pessoa1: pessoa = {
    nome: "Leonarado",
    idade: 23,
    corFavorita: cores.VERDE
}

const pessoa2: pessoa = {
    nome: "Lucas",
    idade: 27,
    corFavorita: cores.ANIL
}

const pessoa3: pessoa = {
    nome: "Sarah",
    idade: 25,
    corFavorita: cores.VERDE
}

