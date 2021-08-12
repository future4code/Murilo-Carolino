// Exercícios de interpretação de código //

/*
1)
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2) "SUBI NUM ÔNIBUS EM MIRROCOS" 27
*/

// Exercícios de escrita de código //

// Exercício 1

const nomeUsuario = prompt("Insira o seu nome:")
const emailUsuario = prompt("Insira o seu e-mail:")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)

// Exercício 2

const comidasPreferidas = ['Pizza', 'Macarrão', 'Massas', 'Churrasco', 'Chocolate']
//a.
console.log(comidasPreferidas)
//b.
console.log(`Essas são as minhas comidas preferidas: 
    ${comidasPreferidas[0]},
    ${comidasPreferidas[1]},
    ${comidasPreferidas[2]},
    ${comidasPreferidas[3]}, e
    ${comidasPreferidas[4]}`)

//c.
let comidaUsuario = prompt('Qual é a sua comida preferida?')
comidasPreferidas[1] = comidaUsuario
console.log(comidasPreferidas)

// Exercício 3

//a.
const listaDeTarefas = []

//b.
const tarefa1 = prompt('Cite uma tarefa que você realiza no dia:')
const tarefa2 = prompt('Cite uma outra tarefa que você realiza no dia:')
const tarefa3 = prompt('Cite mais uma tarefa que você realiza no dia:')

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

//c.
console.log(listaDeTarefas)

//d.
let escolhaIndice = Number(prompt(`Por favor, insira o índice de uma tarefa que você já realizou:
    0 - ${listaDeTarefas[0]}
    1 - ${listaDeTarefas[1]}
    2 - ${listaDeTarefas[2]}`))

//e.
listaDeTarefas.splice(escolhaIndice, 1)

//f.
console.log(listaDeTarefas)

//==========================================================================================================//
//==========================================================================================================//
//==========================================================================================================//

// Desafios

//1.
let frase = prompt('Insira uma frase qualquer:')
let array = frase.split(" ")
console.log(array)

//2.
let array2 = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let indice = array2.indexOf("Abacaxi")
console.log(`Índice da palavra Abacaxi: ${indice} 
Tamanho da array: ${array2.length}`)

