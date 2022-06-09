/* # Exercício do dia - indexOf

### Exercício do dia - **indexOf**

O objetivo desse challenge é te fazer pensar como um método que a gente usa bastante com strings: `.indexOf`. 
Escreva uma função que simule o seu comportamento (sem utilizar esse método na sua implementação), que receba 
uma string `source` e um caracter que se deseja encontrar nela `query` e devolva o index em que esse caracter 
aparece pela primeira vez. */

export const indexOf = (source: string, query: string): number => {

    if (source.length < 1) {
        throw new Error("Precisa-se de uma palavra")
    }

    if (!query) {
        throw new Error("Precisa-se de um caracter")
    }

    let index = 0
    const lowerSource = source.toLowerCase()
    const lowerQuery = query.toLowerCase()

    for (let i = 0;  i < lowerSource.length; i++) {
        if (lowerSource[i] === lowerQuery) {
            console.log(lowerSource[i])
            index = i
            break
        } else {
            index = -1
        }
    }

    return index
}

console.log(indexOf("Ana", "a"))