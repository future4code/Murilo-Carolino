import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Address } from "../types";


export default async function createAddress(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body

        if ( !cep || !logradouro || !numero || !bairro || !cidade || !estado) {
            res.statusCode = 422
            throw "'cep', 'logradouro', 'numero', 'bairro', 'cidade' e 'estado' são obrigatórios"
        }

        const newAddress: Address = { cep, logradouro, numero, complemento, bairro, cidade, estado }

        await connection('aula51_addressUsers').insert(newAddress)

        res.status(201).send("Endereço criado!")

    } catch (error: any) {

        if (typeof error === "string") {

            res.send(error)
        } else {

            console.log(error.sqlMessage || error.message);
            res.status(500).send("Ops! Um erro inesperado ocorreu =/")
        }

    }
}