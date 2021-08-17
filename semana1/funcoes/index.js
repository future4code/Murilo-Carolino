// Exercícios de interpretação de código

/*
1.
a) Para a primeira impressão será o resultado de 2*5, ou seja 10, e no segundo console será de 10*5, resultando em 50.
b) Ao se retirar o console.log de ambas chamada da função não irá imprimir nada no console, apenas irá executar a
função e nada será impresso.

2.
a) A função pega o texto inserido pelo usuário, transforma-o todo em letras minúsculas e verifica se contém a palava "cenoura"
dentro do texto. Ao verificar se há a palavra mencionada, ela retorna true para o caso de existir a palavra "cenoura" ou o
conjunto de caracteres no texto e false para se não tiver.
b)
i. true
ii. true
iii. true
*/

// Exercícios de escrita de código

// Exercício 1
//a)
function semParametros() {
    console.log('Eu sou Murilo, tenho 30 anos, moro em Lins/SP e sou estudante.')
}

semParametros()

//b)
function comParametros(nome, idade, cidade, profissao) {
    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    console.log(frase)
    return frase
}

comParametros('Murilo', 30, 'Lins', 'Engenheiro Eletricista')

// Exercício 2
//a)
function soma2(num1, num2) {
    let soma = num1 + num2
    console.log(soma)
    return soma
}

soma2(7, 3)

//b)
function maiorOuIgual(numA, numB) {
    let teste = (numA >= numB)
    console.log(teste)
    return teste
}

maiorOuIgual(5, 8)

//c)
function parOuNao(num) {
    let conta = (num % 2)
    let resto = conta === 0
    console.log(resto)
    return resto
}

parOuNao(156)

//d)
function tamanhoDastringEMaiuscula(string) {
    let tamanho = string.length
    let maiuscula = string.toUpperCase()
    let resposta = console.log(`${tamanho}, ${maiuscula}`)
    return resposta
}

tamanhoDastringEMaiuscula('Eu estou gostando muito de aprender com a Labenu!')

// Exercício 3

function soma(primeiroNumero, segundoNumero) {
    let soma = (primeiroNumero+segundoNumero)
    console.log(`Soma: ${soma}`)
    return soma
}

function subtracao(primeiroNumero, segundoNumero) {
    let subtracao = (primeiroNumero-segundoNumero)
    console.log(`Diferença: ${subtracao}`)
    return subtracao
}

function multiplicacao(primeiroNumero, segundoNumero) {
    let multiplicacao = (primeiroNumero*segundoNumero)
    console.log(`Multiplicação: ${multiplicacao}`)
    return multiplicacao
}

function divisao(primeiroNumero, segundoNumero) {
    let divisao = (primeiroNumero/segundoNumero)
    console.log(`Divisão: ${divisao}`)
    return divisao
}

const primeiroNumero = Number(prompt('Insira o primeiro número:'))
const segundoNumero = Number(prompt('Insira o segundo número:'))

console.log(`Números inseridos: ${primeiroNumero} e ${segundoNumero}`)
soma(primeiroNumero, segundoNumero)
subtracao(primeiroNumero, segundoNumero) 
multiplicacao(primeiroNumero, segundoNumero) 
divisao(primeiroNumero, segundoNumero) 

//===================================================================================================================================//
//===================================================================================================================================//
//===================================================================================================================================//

// Desafios

// Exercício 1
//a)
const funcaoArrow = (variavel) => {
    console.log(variavel)
}

funcaoArrow("Murilo Terenciani Carolino")

//b)
const resultadoSoma = (number1, number2) => {
    let contaSoma = (number1+number2)
    funcaoArrow(contaSoma)
}

resultadoSoma(5, 2)

// Exercício 2
function pitagoras(catetoA, catetoB) {
    const hipotenusa = (((catetoA**2)+(catetoB**2))**(1/2))
    return hipotenusa
}

const valorHipotenusa = pitagoras(3, 4)
console.log(valorHipotenusa)