// Exercícios de interpretação de código

/*
1- a. false
   b. false
   c. true
   d. boolean

2- Ao realizar a soma das duas variáveis declarada o programa entende que são duas strings, e acaba por apenas concatenar os
dois valores. Por exemplo se o valores fossem "10" e "5" o console irá imprimir '105'. 

3- Para se corrigir isso se há a necessidade de editar a linha de código na onde se pede a informação dos números para o usuário, 
acrescentando o código Number() a frente do prompt, para que se faça a transformação do valor obtido através do 
usuário(string ou texto) para o valor numérico.
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
Dessa forma ao se imprimir o console o resultado para o exemplo de "10 e 5" será 15.
*/

// Exercícios de escrita de código

// Exercício 1

let suaIdade = prompt('Qual é a sua idade?')
let idadeAmigx = prompt('Qual é a idade de seu melhor amigo(a)?')

console.log('Sua idade é maior do que a do seu melhor amigo?', suaIdade > idadeAmigx)

let diferencaIdade = suaIdade - idadeAmigx
console.log('A diferença de idade entre vocês é de', diferencaIdade, 'ano(s).')

// Exercício 2

let numeroPar = Number(prompt('Insira um número par:'))
let par = 2
let resto = numeroPar % par

console.log('O resto da divisão é', resto)

/*
c. Ao testar o programa com alguns números pares, o console imrpimirá sempre 0, ou seja, ao dividir um valor par por 2
se tem o valor de resto igual a 0.
d. Ao inserir um número ímpar, o console imprimirá que o resto é sempre igual a 1, ou seja, ao dividir um numéro ímpar
por 2, se tem resto 1. Caracterizando matematicamente que todo número par é múltiplo e divisível por 2, e que os números ímpares
não são divisíveis por 2.
*/

// Exercício 3

let idadeAnos = Number(prompt('Qual a sua idade?'))
const meses = 12
const dias = 365  // Desconsiderando anos bissextos.
const horas = 24
let idadesMeses = meses * idadeAnos
let idadeDias = idadeAnos * dias
let idadeHoras = horas * dias * idadeAnos


console.log('Sua idade é de', idadeAnos, 'anos')
console.log('Sua idade em meses é de', idadesMeses, 'meses.')
console.log('Sua idade em dias é de aproximadamente', idadeDias , 'dias.')
console.log('Sua idade em horas é de aproximadamente', idadeHoras , 'horas.')

// Exercício 4

let numero1 = Number(prompt('Escolha o primeiro número:'))
let numero2 = Number(prompt('Escolha o segundo número:'))

const teste1 = numero1 > numero2
const teste2 = numero1 === numero2
const teste3 = numero1 % numero2
const teste4 = numero2 % numero1

console.log('O primeiro numero é maior que segundo?', teste1)
console.log('O primeiro numero é igual ao segundo?', teste2)
console.log('O primeiro numero é divisível pelo segundo?', teste3 === 0)
console.log('O segundo numero é divisível pelo primeiro?', teste4 === 0)