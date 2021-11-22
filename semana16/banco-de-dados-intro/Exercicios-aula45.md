# Aula 45 - Introdução Banco de Dados

# Exercício 1

~~~SQL
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
~~~

> **a.**

Type | Use For 
---- | ------ 
VARCHAR(n) | Para declarar strings de nó máximo "n" caracteres
DATE | Para declarar uma data no formato (YYYY--MM--DD)
PRIMARY KEY | Declara um indentificador uníco para cada item, obrigatório conter em todas tabelas.
NOT NULL | Não deixa inserir valor nulo para determinado campo.

> **b.**
O comando SHOW DATABASES exibe os bancos de dados que determinada conta contém, já o SHOW TABLES, exibe todas as tabelas presentes nesse banco de dados.

> **c.**
É usado para conferir a estrutura de uma tabela, no caso da tabela criada no exercício, apresenta seus campos com seus respectivos tipos, se pode ser nulo, e o campo que é a key principal da tabela.

# Exercício 2

~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001", 
	"Tony Ramos",
	400000,
	"1948-08-25", 
	"male"
);
~~~
> **a.**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002", 
	"Glória Pires",
	1200000,
	"1963-08-23", 
	"female"
);
~~~

> **b.**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"002", 
	"Fernanda Montenegro",
	400000,
	"1929-10-16", 
	"female"
);
~~~

> `Error Code: 1062`. Duplicate entry '002' for key 'PRIMARY'

Esse erro aparece quando tentamos inserir na tabela um dado duplicado, ou seja, quando já se tem o valor em uma das linhas que você esta tentando inserir. Como a key primary é unica, não se pode armazenar o mesmo valor para dois itens.

> **c.**
~~~SQL
INSERT INTO Actor (id, name, salary)
VALUES(
    "003", 
    "Fernanda Montenegro",
    300000,
    "1929-10-19", 
    "female"
);
~~~

> `Error Code: 1136.`> Column count doesn't match value count at row 1

Esse erro acontece pois foi declarado apenas três valores de coluna, e a resposta contém 5 valores, dessa forma, não há colunas preenchidas o suficiente para a linha.

**Correção:**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"003", 
	"Fernanda Montenegro",
	300000,
	"1929-10-19", 
	"female"
);
~~~

> **d.**
~~~SQL
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
    "004",
    400000,
    "1949-04-18", 
    "male"
);
~~~

> `Error Code: 1364.` Field 'name' doesn't have a default value

Esse erro reporta que o campo de nome não pode ter um valor nulo, precisa ser preenchido.

**Correção:**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"004",
	"Antônio Fagundes",
	400000,
	"1949-04-18", 
	"male"
);
~~~

> **e.**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    1979-03-26, 
    "female"
);
~~~

> ``Error Code: 1292.`` Incorrect date value: '1950' for column 'birth_date' at row 1

Esse erro é determinado pois o formato de resposta passado para o birth_date é inválido, deveria seguir com o pardão para string "YYYY-MM-DD".

**Correção:**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "005", 
    "Juliana Paes",
    719333.33,
    "1979-03-26", 
    "female"
);
~~~

> **f.**
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "006", 
    "Chay Suede",
    100000,
    "1992-06-30", 
    "male"
);
~~~
~~~SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
    "007", 
    "Bárbara Paz",
    200000,
    "1974-10-17", 
    "female"
);
~~~

# Exercício 3
~~~SQL
SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor 
WHERE gender = "male";
~~~

> **a**

~~~SQL
SELECT * from Actor
where gender = "female";
~~~

> **b.**
~~~SQL
SELECT salary from Actor
where name = "Tony Ramos";
~~~

> **c.**
~~~SQL
SELECT * from Actor
where gender = "invalid";
~~~

A pesquisa retorna sem nenhuma correspondência pois não existe esse dado na tabela, entretanto não contém erros ao executar, pois o valor passado "invalid" atende aos requisitos do valor.

> **d.**
~~~SQL
SELECT id, name, salary from Actor
where salary <= 500000;
~~~

> **e.**
~~~SQL
SELECT id, nome from Actor 
WHERE id = "002";
~~~

> ``Error Code: 1054.`` Unknown column 'nome' in 'field list'

Esse erro acontece, pois o elemento delcarado nome não existe nas chaves, o nome correto é name.

**Correção:**
~~~SQL
SELECT id, name from Actor 
WHERE id = "002";
~~~

# Exercício 4

~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
~~~

> **a.**
Nessa query estamos procurando por todos os atores que possuem a inicial do nome começada por A ou J, e em conjunto com isso que recebam um salário maior que 300000.

> **b.**
~~~SQL
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
~~~

> **c.**
~~~SQL
SELECT * FROM Actor
WHERE name LIKE "%G%";
~~~

> **d.**
~~~SQL
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND (salary between 350000 and 900000);
~~~

# Exercício 5

> **a.**
~~~SQL
create table Movie (
	id varchar(255) primary key,
    title varchar(255) not null unique,
    synopsis text not null,
    release_date date not null,
    rating int not null
)
~~~

Criação de tabela com o nome Movie, aonde se há 5 colunas, respectivamente id sendo um tipo string de até 255 caracteres e primary key unico, title também igual ao id quanto ao tipo e não podendo ser null e tambem sendo unico, synopsis do tipo text que suporta receber valores de strings maiores que o comum usado no varchar, release_date do tipo data e rating de números inteiros, todos nã podendo ser nulos.

> **b.** 
~~~SQL
insert into Movie(id, title, synopsis, release_date, rating)
values (
	"001",
	"Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);
~~~

> **c.**
~~~SQL
insert into Movie(id, title, synopsis, release_date, rating)
values (
	"002",
	"Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);
~~~

> **d.**
~~~SQL
insert into Movie(id, title, synopsis, release_date, rating)
values (
	"003",
	"Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);
~~~

> **e.**
~~~SQL
insert into Movie(id, title, synopsis, release_date, rating)
values (
	"004",
	"Carandiru: O Filme",
    "Médico sanitarista se oferece para realizar o trabalho de prevenção ao vírus HIV no Carandiru, maior presídio da América Latina, durante a década de 1990. Convivendo diariamente com a dura realidade dos detentos, ele presencia a violência agravada pela superlotação, a precariedade dos serviços prestados e a animalização dos presos. Paradoxalmente, ele conhece o sistema de organização interna e o lado frágil, romântico e sonhador dos homens cumprindo pena.",
    "2003-04-11",
    10
);
~~~

# Exercício 6

> **a.**
~~~SQL
select id, title, rating from Movie
where id = "004";
~~~

> **b.**
~~~SQL
select * from Movie
where title = "Doce de Mãe";
~~~

> **c.**
~~~SQL
select id, title, synopsis from Movie
where rating > 7;
~~~

### Exercício 7

> **a.**
~~~SQL
select * from Movie
where title like "%vida%";
~~~

> **b.**
~~~SQL
select * from Movie
where (title like "%dona%" or synopsis like "%dona%");
~~~

> **c.**
~~~SQL
select * from Movie
where release_date < "2021-11-22";
~~~

> **d.**
~~~SQL
select * from Movie
where (release_date < "2021-11-22") AND (title like %dona% or synopsis like "%dona%") AND (rating > 7);
~~~