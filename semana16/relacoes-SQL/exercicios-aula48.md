# Aula 48 - Relações em SQL

# Exercício 1

> **a.**
Para criar relações entre tabelas, é preciso que seja relacionado ou referenciado uma tabela com a outra, dessa forma o Foreign Key indica que uma propriedade da tabela é referenciada a uma tabela estrangeira, ou seja, uma chave estrangeira. E assim a foreign key deve sempre se referencia a uma primary key de outra tabela.

> **b.**
~~~SQL
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
	movie_id VARCHAR(255),
	FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
~~~

~~~SQL
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"001",
    "Filme fantástico, que representa a família",
    9,
	"002"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"002",
    "Filme que reproduz fielmente ao livro.",
    8,
	"003"
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
	"003",
    "História que ficou maracada na sociedade brasileira, filme demonstra claramente tudo o que ocorreu na prisão",
    10,
	"004"
);
~~~

> **c.**

> `Error Code: 1452.` Cannot add or update a child row: a foreign key constraint fails (`maryam-murilo-terenciani`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Retorna um erro pois como a tabela Rating é referenciada com o ID da tabela dos filmes, ao adicionar um ID que não existe na tabela de movie não tem como prosseguir, pois como essa coluna esta entrelaçada com a tabela de filmes não há como adicionar uma vez que não existe esse ID na mesma.

> **d.**
~~~SQL
ALTER TABLE Movie DROP COLUMN rating;
~~~

# Exercício 2

> **a.**
Em relações N:M, os elementos de uma tabela se relacionam com vários outros elementos de uma outra tabela, nesse caso, varios atores podem estrelar vários filmes, e vários filmes podem ter em seu elenco diversos atores.

> **b.**
~~~SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "007"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "006"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "005"
);
~~~

> **c.**
> `Error Code: 1452.` Cannot add or update a child row: a foreign key constraint fails (`maryam-murilo-terenciani`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não é possível pois como novamente ocorre e foi mencionado acima, não ha como se referenciar um filme com o ID passado na tabela, pois não existe esse filme na tabela.

> **d.**
> `Error Code: 1451.` Cannot delete or update a parent row: a foreign key constraint fails (`maryam-murilo-terenciani`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O erro acontece pois como esse ator foi referenciado em outra tabela, para que eu possa deletá-lo, eu teria que excluir as referências do mesmo nessas tabelas, e depois enfim poder excluir da tabela padrão.

