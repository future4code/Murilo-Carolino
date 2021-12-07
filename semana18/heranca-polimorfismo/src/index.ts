import { Request, Response } from "express";
import app from "./app";
import { Client, Commerce, Customer, Place, Residence, User } from "./types";


app.get("/", (req: Request, res: Response) => {
    res.send("Deu tudo certo!")
})

// TODOS OS EXERCICIOS ESTÃO RESPONDIDOS NO ARQUIVO respostas.md e types.ts
// HERANÇA
//EXERCÍCIO 1
const newUser: User = new User(
    "001",
    "murilo@gmail.com",
    "Murilo",
    "0123456789"
)

console.log({id: newUser.getId(), email: newUser.getEmail(), name: newUser.getName()})

//EXERCÍCIO 2
const newCustomer: Customer = new Customer(
    "002",
    "sarah@gmail.com",
    "Sarah",
    "9876543210",
    "0001000200030004"
)

console.log({ 
    id: newCustomer.getId(), 
    email: newCustomer.getEmail(), 
    name: newCustomer.getName(), 
    purchaseTotal: newCustomer.purchaseTotal, 
    creditCard: newCustomer.getCreditCard() 
})

//EXERCÍCIO 3

console.log(newCustomer.introduceYourself())

//POLIMORFISMO

//EXERCÍCIO 1

const newClient: Client = {
    name: "Murilo",
    registrationNumber: 1,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}

console.log(newClient)

//EXERCÍCIO 2

// const newCep: Place = new Place(
//     "01201225"
// )

class Otherplace extends Place {
    constructor(cep: string) {
        super(cep)
    }
}

const newPlace: Otherplace = new Otherplace("1203212")

console.log(newPlace.getCep())

//EXERCÍCIO 3

const newResidence: Residence = new Residence(4, "12345678")

const newCommerce: Commerce = new Commerce(10, "34578562")

const newIndustry: Residence = new Residence(6, "98765420")

console.log({residenceCEP: newResidence.getCep(),commerceCEP: newCommerce.getCep(),industryCEP: newIndustry.getCep()})

//EXERCÍCIO 4
//Resolução no arquivo types.ts

//EXERCÍCIO 5
//Resolução no arquivo types.ts

//EXERCÍCIO 6
//Resolução no arquivo types.ts