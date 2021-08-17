// Exercícios de interpretação de código

/*
1.a)
console.log(filme.elenco[0]) = irá imprimir o nome do ator "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) = irá imprimir o ultimo nome da lista o nome da atriz "Virginia Cavendish"
console.log(filme.transmissoesHoje[2]) = irá imprimir o último item da lista "canal: "Globo", horario: "14h""

2.a)
console.log(cachorro) = irá imprimir o objeto cachorro com suas informações "{
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}"
console.log(gato) = irá imprimir o objeto gato com suas informações "{
	nome: "Juba", 
	idade: 3, 
	raca: "SRD"
}"
console.log(tartaruga) = irá imprimir o objeto tartaruga com suas informações "{
	nome: "Jubo", 
	idade: 3, 
	raca: "SRD"
}"

b) O comando "...nomeDoObjeto" cria uma cópia do objeto mencionado e também dessa forma se consegue adicionar ou alterar suas propriedades.

3.a)
console.log(minhaFuncao(pessoa, "backender")) = irá retornar o valor "false" para a chave "backender"
console.log(minhaFuncao(pessoa, "altura")) = irá retornar o valor "undefined".

b) No primeiro console se há o valor false pois foi acessado a propriedade backender dentro do objeto pessoa. Já no caso do segundo console
se há um problema, apresenta o valor undefined, pois não há essa chave dentro do objeto pessoa.

*/

// Exercícios de escrita de código

// Exercício 1.
//a)
const pessoa = {
    nome: "Murilo",
    apelidos: ["Muh", "Murilin", "Muri"]
}

function imprimeMensagem(objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

imprimeMensagem(pessoa)

//b)
const copiaDePessoa = {
    ...pessoa,
    apelidos: ["Terenciani", "Lilo", "Terê"]
}

imprimeMensagem(copiaDePessoa)

// Exercício 2.
//a)
const identidade1 = {
    nome: 'Murilo',
    idade: 30,
    profissao: 'Engenheiro Eletricista'
}

const identidade2 = {
    nome: 'João',
    idade: 25,
    profissao: 'Instrutor e Engenheiro de Software'
}

//b)
function array(objeto) {
    let nome = objeto.nome
    let caracteresNome = objeto.nome.length
    let idade = objeto.idade
    let profissao = objeto.profissao
    let caracteresProfissao = objeto.profissao.length
    let arrayDeDados = [nome, caracteresNome, idade, profissao, caracteresProfissao]
    console.log(arrayDeDados)
    return arrayDeDados
}

array(identidade1)
array(identidade2)

// Exercício 3.
//a)
const carrinho = []

//b)
const fruta1 = {
    nome: 'Manga',
    disponibilidade: true
}

const fruta2 = {
    nome: 'Melão',
    disponibilidade: true
}

const fruta3 = {
    nome: 'Kiwi',
    disponibilidade: true
}

//c)
function preencherCarrinho(objeto) {
    return carrinho.push(objeto)
}

preencherCarrinho(fruta1)
preencherCarrinho(fruta2)
preencherCarrinho(fruta3)

//d)
console.log(carrinho)

//=============================================================================================================================================//
//=============================================================================================================================================//
//=============================================================================================================================================//

// Desafios

//1.
function imprimeObjeto() {
    let nomeUser = prompt('Qual é o seu nome?')
    let idadeUser = Number(prompt('Qual é sua idade?'))
    let profissaoUser = prompt('Qual é sua profissão?')
    let objetoUser = {
        nome: nomeUser,
        idade: idadeUser,
        profissao: profissaoUser
    }
    console.log(objetoUser)
    console.log(typeof objetoUser)
}

imprimeObjeto()

//2.
const filme1 = {
    nome: 'Efeito Borboleta',
    lancamento: 2004
}

const filme2 = {
    nome: 'Clube de Luta',
    lancamento: 1999
}

function lancamentoFilmes(objeto1, objeto2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${objeto1.lancamento < objeto2.lancamento} `)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${objeto1.lancamento === objeto2.lancamento}`)
}

lancamentoFilmes(filme1, filme2)

//3.
function controleEstoque(fruta) {
    const dispFruta = {
        ...fruta,
        disponibilidade: !fruta.disponibilidade
    }
    
    return dispFruta
}


console.log(controleEstoque(fruta1))

