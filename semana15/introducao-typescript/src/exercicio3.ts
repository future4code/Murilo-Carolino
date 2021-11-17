// Exercicio 3 

// a)
type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    },
    {
        autor: "Malfoy",
        texto: "Tinha que ser um Wesley!"
    }
]

// b)
/* As entradas dessa função são o posts, que é uma array de objetos contendo o post de cada pessoa e um autorInformado, que é 
uma string passada atraves de uma variável. */

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor(posts, "Malfoy"))