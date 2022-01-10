import { performPurchase } from "../src"
import { User } from "../src/model/User"

describe("index.ts", () => {

    test("Balance greater than value", () => {

        const user: User = {
            name: "Murilo",
            balance: 150
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Murilo",
            balance: 50
        })
    })

    test("Balance equal to the value", () => {

        const user: User = {
            name: "Murilo",
            balance: 150
        }

        const result = performPurchase(user, 150)

        expect(result).toEqual({
            name: "Murilo",
            balance: 0
        })
    })

    test("Balance less than value", () => {

        const user: User = {
            name: "Murilo",
            balance: 150
        }

        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })
})