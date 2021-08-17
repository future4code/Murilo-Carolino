// Exercícios de interpretação de código

/*
1.
a) Inicialmente se pede ao usuário que digite um número que passa a ser armazenado pela variável "respostaDoUsuario" e após se declara uma nova
variável chamada "numero" que transforma a string recebida anteriormente para num tipo "Number". Depois de receber a informação do usuário, 
se faz um teste condicional, verificando se o resto da divisão desse número por 2 é igual a 0. Imprimindo se for divisivel for zero "Passou
no teste." e caso o resto não seja igual a zero "Não passou no teste."

b) Para que o teste seja verdadeiro, a entrada do valor numérico precisa ser somente número pares.

c) E quando essa condiçional cair no else, são para os valores ímpares. Pois há um valor diferente de zero no resto da divisão.

2.
a) O código executa informações de preço para diversas frutas mencionadas na entrada do programa. Ou seja, lê-se a fruta inserida pelo usuário e
por fim usa-se o comando switch case para que sê atribua o valor de preço para a fruta mencionada.
b) Ao inserir o valor de fruta para Maçã, o código ira retornar no console o preço de R$ 2,25.
c) O valor da Pêra iria assumir o valor de R$ 5 pois, com o comando switch ele continua rodando o código até encontrar o ultimo break e finalizar
o processo, assumindo assim o ultimo valor atribuído antes do break erroneamente.

3.
a) A primeira linha do código esta pedindo para que o usuário digite um número, que será verificado posteriormente no programa.
b) Ao executar o código com o número 10, irá imprimir no console "Esse número passou no teste" e uma mensagem de erro informando que a variavel
"mensagem" não foi definida. Ao executar atribuindo o valor -10, não irá imprimir nada e apenas irá repetir o erro de que a variável "mensagem"
não foi definida.
c) Sim, como mencionado na resposta acima, irá apresentar erro de variável 'mensagem' não definida. Isso ocorre pois a declaração dessa variável
foi descrita dentro do condicional if e dessa forma ela faz parte do escopo filho, entretanto ao se chamar o console.log('mensagem') fora da
condicional o codigo quebra, pois ele não consegue ler uma variável que está presente apenas no escopo filho, e sim se fosse no escopo global.
Para ajustar isso, seria interessante colocar o comando console.log("mensagem") dentro da condicional if, juntamente com a declaração da 
variável "mensagem".

*/

// Exercícios de escrita de código

// Exercício 1.
//a)
const receberIdade = prompt('Qual é a sua idade?')

//b)
const idadeUsuario = Number(receberIdade)

//c)
if (idadeUsuario >= 18) {
    console.log('Você pode dirigir.')
} else {
    console.log('Você não pode dirigir.')
}

// Exercício 2.
const turnoAula = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()

if (turnoAula === "M") {
    console.log('Bom dia!')
} else if (turnoAula === "V") {
    console.log('Boa tarde!')
} else if (turnoAula === "N") {
    console.log('Boa noite!')
}

// Exercício 3
const turno = prompt('Qual o turno que você estuda? Responda: (M) para matutino, (V) para vespertino e (N) para noturno').toUpperCase()

let turnoSwitch
switch (turno) {
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa tarde!')
        break
    case 'N':
        console.log('Boa noite')
        break
    default:
        console.log('Você não inseriu a letra informada.')
        break
}  

// Exercício 4
const generoFilme = prompt('Qual é o gênero do filme?')
const precoIngresso = Number(prompt('Qual é o preço do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}

