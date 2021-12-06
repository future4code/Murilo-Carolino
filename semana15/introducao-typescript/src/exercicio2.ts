// Exercício 2

// a) e b)
/*
A entrada para essa função é uma array de números sortidos, e a saída é um objeto declarado como estatistica, 
e que retorna esse objeto com as chaves maior, menor e média.
*/

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// c)
type amostra = {
    numeros: number[],

    obterEstatisticas: (numeros: number[]) => {
        maior: number,
        menor: number,
        media: number
    }
}

const amostraDeIdades: amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas
}

console.log(amostraDeIdades)