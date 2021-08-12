// Exercícios de interpretação de código

/* 
1. Ao se declarar as duas variáveis com "let" conseguimos posteriormente mudar o valor atribuído inicialmente para essa variável.
Então inicialmente foi-se adotado a=10 e b=10, ao se imprimir no console apenas a variável b, se terá o resultado igual a 10, entretanto,
após mudar a variável b para 5, se imprimirá 5. O console imprimirá 10 5.

2. Inicialmente se adotou para as variáveis a=10 e b=20, ao declara a variável c, foi se adotado que c=a, ou seja c=10. Alterou-se o
valor de b para c, ou seja, agora b=10. E por último a foi alterado para receber b, então dessa forma, a=10. Logo o console imprimirá
10 10 10.

3. O programa recebe do usuário através da variável "p" o quanto de horas ele trabalha por dia, logo em seguida através da variável
"t" quanto ele recebe por dia, ao final do programa se exibe através de uma mensagem o quanto que o usuário recebe por hora trabalhada,
através da divisão dos valores recebidos para a variável p, e por t. Os melhores nomes sugeridos para as variáveis "p" e "t" seriam 
respectivamente "horasTrabalhoDia" e "salarioDia".
*/

// Exercícios de escrita de código

// Ecercício 1
let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

// Os tipos de variáveis foram descritas como "undefinied" pois ao declara-las não foi atribuído nenhum valor.

nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

// Após atribuir valores as variáveis iniciais se tem como registro dois tipos de "string", ou texto.

console.log("Olá", nome,"você tem", idade, "anos.")

// Exercício 2
const perguntaUm = "Você tomou café da manha?"
const perguntaDois = "Você já almoçou?"
const perguntaTres = "Você gostaria de fazer um lanche?"
let respostaUm = "Sim"
let respostaDois = "Não"
let respostaTres = "Sim"

console.log(perguntaUm, respostaUm)
console.log(perguntaDois, respostaDois)
console.log(perguntaTres, respostaTres)

//Exercício 3
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c
c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10