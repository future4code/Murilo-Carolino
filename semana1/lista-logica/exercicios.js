// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt('Qual é a altura do retângulo?'))
  let largura = Number(prompt('Qual é a largura do retângulo?'))
  let area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoDeNascimento = Number(prompt("Em que ano você nasceu?"))
  let idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso/(altura**2)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nomeUsuario = prompt('Qual é o seu nome?')
  let idadeUsuario = Number(prompt('Qual é a sua idade?'))
  let emailUsuario = prompt('Qual é o seu e-mail?')
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let primeiraCor = prompt('Cite sua cor favorita:')
  let segundaCor = prompt('Cite outra cor favorita:')
  let terceiraCor = prompt('Cite mais uma cor favorita:')
  let arrayCores = [primeiraCor, segundaCor, terceiraCor]
  console.log(arrayCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let saldoPositivo = custo/valorIngresso
  return saldoPositivo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let compare = string1.length === string2.length
  return compare
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let guarda = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = guarda
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let iguais = string1.toLowerCase() === string2.toLowerCase()
  return iguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual1 = prompt('Qual é o ano que estamos?')
  let nascimento = prompt('Em que ano você nasceu?')
  let carteiraEmissao = prompt('Data de emissão da carteira de identidade:')
  let idade = anoAtual1 - nascimento
  let diferencaAnos = anoAtual1 - carteiraEmissao
  
  // if (idade <= 20) {
  //   console.log(diferencaAnos >= 5)
  // }
  // if ((idade > 20 && idade <=50)) {
  //   console.log(diferencaAnos >= 10)
  // }
  // if (idade > 50) {
  //   console.log(diferencaAnos >= 15)
  // }

  const condicao1 = (idade <= 20 && diferencaAnos >= 5) 
  const condicao2 = ((idade > 20 && idade <=50) && diferencaAnos >= 10) 
  const condicao3 = (idade > 50 && diferencaAnos >= 15) 

  console.log(condicao1 || condicao2 || condicao3)



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}