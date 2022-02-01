/*### Exercício do dia - Número Faltante

Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. Você sabe que, nesse array, está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Além disso, faça, ao menos, **dois testes automatizados** da sua função. */

export const numeroFaltante = (array: number[]): number => {

    const arraySumGauss = 5050
    let sum = 0

    for (let num of array) {
        sum = sum + num
    }

    return arraySumGauss - sum

}

export const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
    72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    96, 97, 98, 99, 100]

