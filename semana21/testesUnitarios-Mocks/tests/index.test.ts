import { performAttack, performAttackInversion, validateCharacter } from "../src"
import { Character } from "../src/models/Character"

describe("validateCharacter test", () => {

    test("Should return false for empty name", () => {

        const character: Character = {
            name: "",
            life: 1500,
            strength: 200,
            defense: 500
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should return false for life zero", () => {

        const character: Character = {
            name: "Batman",
            life: 0,
            strength: 400,
            defense: 300
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should return false for strength zero", () => {

        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: 0,
            defense: 300
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should return false for defense zero", () => {

        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: 400,
            defense: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should return false for life or strenght or defense with negative value", () => {

        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: -200,
            defense: 300
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Should return true for all valid inputs", () => {

        const character: Character = {
            name: "Batman",
            life: 1500,
            strength: 400,
            defense: 300
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
})

describe("Mock train", () => {

    test("Showing jest.fn", () => {
        const mock = jest.fn(() => {
            const user = {
                    name: "Astrodev",
                    age: 29
            }
            return user
        })
    })

    test("Successful mock validateCharacter", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })

    test("Unsuccessful mock validateCharacter", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})

describe("performAttack test", () => {

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Batman",
            life: 1500,
            strength: 400,
            defense: 300
        }

        const defender: Character = {
            name: "Joker",
            life: 1500,
            strength: 300,
            defense: 200
        }

        performAttackInversion(attacker, defender, validatorMock)

        expect(defender.life).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Should return invalid character error", () => {

        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Batman",
            life: 1500,
            strength: 400,
            defense: 300
        }

        const defender: Character = {
            name: "",
            life: 1500,
            strength: 300,
            defense: 200
        }

        try {
            performAttackInversion(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toEqual("Invalid character!")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        } finally {
            expect.assertions(4)
        }
    })
})