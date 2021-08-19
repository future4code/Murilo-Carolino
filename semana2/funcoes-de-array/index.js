// Exercícios de interpretação de código

/*
1. A impressão no console será apresentada de forma que passe por todos os items(no caso objetos) da array usuarios, colocando a posição de
índice que aquele objeto está na array, e por fim imprime tambem a array completa. 
Ex: { nome: "Amanda Rangel", apelido: "Mandi" } 0 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" },
{ nome: "Letícia Chijo", apelido: "Chijo" }]...

2. Irá imprimir no console a novaArrayB que resultará nos nomes de cada objeto de dentro da array usuários.
[ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

3. O console irá imprimir uma novaArrayC com todos os objetos da array usuarios que tiverem o apelido diferente de "chijo", então será
impresso: [{ nome: 'Amanda Rangel', apelido: 'Mandi' },{ nome: 'Laís Petra', apelido: 'Laura' }]

*/

// Exercícios de escrita de código

// Exercício 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const nomeDosDoguinhos = pets.map((item, index, array) => {
    return item.nome
})

console.log(nomeDosDoguinhos)

//b)
const apenasRacaSalsicha = pets.filter((item, index, array) => {
    return (item.raca === "Salsicha")
})

console.log(apenasRacaSalsicha)

//c)
const mensagemParaPoodle = pets.filter((item, index, array) => {
    const racaPoodle = item.raca === "Poodle"
    return racaPoodle
}).map((item, index, array) => {
    item = `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    return item
})

console.log(mensagemParaPoodle)

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomeDosProdutos = produtos.map((item, index, array) => {
    return item.nome
})

console.log(nomeDosProdutos)

//b)
const novaArray = produtos.map((item, index, array) => {
    const novaTabela = {nome: item.nome, preco: item.preco-(item.preco*5/100)}
    return novaTabela
})

console.log(novaArray)

//c)
const arrayBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})

console.log(arrayBebidas)

//d)
const apenasYpe = produtos.filter((item, index, array) => {
    const verificarYpe = item.nome.includes("Ypê")
    return verificarYpe
})

console.log(apenasYpe)

//e)
const fraseDeCompra = apenasYpe.map((item, index, array) => {
    const frase = `Compre ${item.nome} por ${item.preco}`
    return frase
})

console.log(fraseDeCompra)