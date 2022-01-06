import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    
    createPost = async (
        req: Request,
        res: Response
    ) => {
        try {

            const token = req.headers.authorization
            const { foto, descricao, tipo } = req.body
            
            if(!token) {
                res.statusCode = 422
                throw new Error("É necessária uma autorização a ser passada nos headers para criar um post.")
            }

            if (!foto || !descricao || !tipo) {
                res.statusCode = 422
                throw new Error("Os campos 'foto', 'descricao' e 'tipo' são obrigatórios.")
            }

            const newPost = await new PostBusiness().createPost(foto, descricao, tipo, token)

            res.status(201).send({message: "Post criado com sucesso!"})

        } catch (error: any) {
            console.log(error)
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.sqlMessage || error.message })
            }
        }
    }

    getPostById = async (
        req: Request,
        res: Response
    ) => {
        try {
            
            const token = req.headers.authorization
            const id = req.params.id

            if(!token) {
                res.statusCode = 422
                throw new Error("É necessária uma autorização a ser passada nos headers para acessar um post.")
            }

            const post = await new PostBusiness().getPostById(id)

            res.send(post)

        } catch (error: any) {
            console.log(error)
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.sqlMessage || error.message })
            }
        }
    }

}