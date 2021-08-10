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

//==========================================================================================================================//
//==========================================================================================================================//
//==========================================================================================================================//

// Desafios

// Exercício 1

// kelvin = (grausFahrenheit - 32)*(5/9) + 273.15
// grausFahrenheit = (grausCelsius)*(9/5) + 32

const a = 77
const b = 80
const c = 30

//a
console.log((a - 32)*(5/9) + 273.15, 'K')
//b
console.log((b)*(9/5) + 32, "°F")
//c
console.log((c)*(9/5) + 32, "°F", ((c)*(9/5) + 32 - 32)*(5/9) + 273.15, 'K')
//d
let tempEscolhida = Number(prompt('Escolha uma temperatura em graus Celsius:'))
let resultEscolhidaF = ((tempEscolhida)*(9/5) + 32)
let resultEscolhidaK = (((tempEscolhida)*(9/5) + 32 - 32)*(5/9) + 273.15)

console.log('O valor de Celsius em Fahrenheit e Kelvin são:', resultEscolhidaF, "°F e", resultEscolhidaK, "K")

// Exercício 2

const valor = 0.05
const cliente = 280
//a
let custo = valor*cliente
console.log('O valor a ser pago por uma residência que consume 280 kWh é de R$', custo, "reais.")
//b
let desconto = 0.15
let descontoCusto = custo*desconto
let novoCusto = custo-descontoCusto

console.log('O valor a ser pago pela mesma residência com um desconto de 15% é de R$', novoCusto, "reais.")

// Exercício 3

// kg = lb/2.2046 
// kg = oz/35.274
// m = mi/0.00062137
// m = ft/3.2808
// L = gal/0.26417
// L = xic × 0,24

let lb = 20
let oz = 10.5
let mi = 100
let ft = 50
let gal = 103.56
let xic = 450

let lbToKg = lb/2.2046 
let ozToKg = oz/35.274 
let miToM = mi/0.00062137 
let ftToM = ft/3.2808
let galToL = gal/0.26417 
let xicToL = xic * 0.24

//Letra a, b, c, d, e, f
console.log('20lb equivalem a', lbToKg,'kg')
console.log('10.5oz equivalem a', ozToKg, 'kg') 
console.log('100mi equivalem a', miToM, 'm')
console.log('50ft equivalem a', ftToM, 'm')
console.log('103.56gal equivalem a', galToL, 'l')
console.log('450 xic equivalem a', xicToL,'l')

//Letra g
let userEscolhe = Number(prompt("Insira o valor da distância em ft(pés):"))
console.log(userEscolhe,'ft equivalem a', (userEscolhe/3.2808), 'm')
