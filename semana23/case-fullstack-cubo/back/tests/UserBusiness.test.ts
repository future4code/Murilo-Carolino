import { UserBusiness } from "../src/business/UserBusiness"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new UserDatabaseMock() as any
)

describe("Create User", () => {

    test("Empty Name Test", async () => {
        expect.assertions(1)
        try {
            
            await userBusinessMock.createUser({
                name: "",
                lastName: "Terenciani",
                participation: 20
            })

        } catch (error: any) {
            expect(error.message).toEqual("Invalid input to create user")
        }
    })

    test("Empty lastName Test", async () => {
        expect.assertions(1)
        try {
            
            await userBusinessMock.createUser({
                name: "Murilo",
                lastName: "",
                participation: 30
            })

        } catch (error: any) {
            expect(error.message).toEqual("Invalid input to create user")
        }
    })
    
    test("Empty participation Test", async () => {
        expect.assertions(1)
        try {
            
            await userBusinessMock.createUser({
                name: "Murilo",
                lastName: "Terenciani",
                participation: 0
            })

        } catch (error: any) {
            expect(error.message).toEqual("Invalid input to create user")
        }
    })
    
    test("User created successfully Test", async () => {
        expect.assertions(1)
        try {
            
            await userBusinessMock.createUser({
                name: "Usuário",
                lastName: "Primeiro",
                participation: 20
            })

            expect("").toEqual("")
        } catch (error: any) {
            console.log(error)
        }
    })
})

describe("Get All Users", () => {

    test("Get All Users successfully Test", async () => {
        expect.assertions(1)
        try {
            
            const allUsers = await userBusinessMock.getAllUsers()

            expect(allUsers).toEqual([
                {
                    id: "id_mock",
                    name: "Usuário",
                    lastName: "Primeiro",
                    participation: 20
                },
                {
                    id: "id_mock2",
                    name: "Usuário",
                    lastName: "Segundo",
                    participation: 50
                }
            ])
        } catch (error: any) {
            console.log(error)
        }
    })
})