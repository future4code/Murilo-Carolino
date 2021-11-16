// Exercício 2
console.log("\x1b[35m","Exercício 2:")
const conta = (operacao, num1, num2) => {
        switch(operacao.toLowerCase()) {
            case "soma":
                console.log("\x1b[36m", "Resposta:", num1 + num2)
                break;
            case "sub":
                console.log("\x1b[36m", "Resposta:", num1 - num2)
                break;
            case "mult":
                console.log("\x1b[36m", "Resposta:", num1 * num2)
                break;
            case "div":
                console.log("\x1b[36m", "Resposta:", num1 / num2)
                break;
            default:
                console.log("\x1b[31m", "Erro na operação! Insira o tipo de operação: soma, dub, mult ou div.")
        }
}

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operacao && num1 && num2) {
    conta(operacao, num1, num2)
} else (
    console.log("\x1b[31m", "É preciso passar 3 parâmetros para realizar a operação!")
)
