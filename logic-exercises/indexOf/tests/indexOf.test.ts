import { indexOf } from "../src/indexOf"

describe("IndexOf", () => {

    test("Função retornando o index exato da string", () => {

        const result = indexOf("Murilo", "r")
        const index = 2

        expect(result).toEqual(index)
    })

    test("Função retornando a primeira vez que o caracter aparece na string", () => {

        const result = indexOf("Bananinha", "a")
        const index = 1

        expect(result).toEqual(index)
    })

    test("Função não encontra caracter na string", () => {

        const result = indexOf("Charmander", "i")
        const index = -1

        expect(result).toEqual(index)
    })

    test("Função chamada sem source", () => {
        expect.assertions(1)

        try {
            indexOf("", "a")
        } catch (error: any) {
            expect(error.message).toEqual("Precisa-se de uma palavra")
        }
    })

    test("Função chamada sem query", () => {
        expect.assertions(1)

        try {
            indexOf("Murilo", "")
        } catch (error: any) {
            expect(error.message).toEqual("Precisa-se de um caracter")
        }
    })
})