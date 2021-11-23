# Aula 46 - Aprofundamento SQL

# Exercício 1

> **a.**
~~~SQL
ALTER TABLE Actor DROP COLUMN salary;
~~~
O comando DROP exclui da tabela a coluna mencionada no código, nesse caso salary.

> **b.**
~~~SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
~~~
O comando CHANGE permitir renomear o nome de uma coluna já criada e alterar o tipo dessa coluna. Nesse caso, alterou o nome da coluna gender para sex, e limitou a string para 6 caracteres.

> **c.**
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
~~~
Nesse comando, ao repetir o nome da coluna duas vezes você não renomeia a coluna, e por fim alterou o tipo da coluna para aceitar ate 255 caracteres.

> **d.**
~~~SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
~~~

# Exercício 2

> **a.**
~~~SQL
UPDATE Actor
SET 
	name = "Lilia Cabral",
    birth_date = "1957-07-13"
WHERE id = "003";
~~~

> **b.**
~~~SQL
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
~~~

> **c.**
~~~SQL
UPDATE Actor
SET 
	name = "Taís Araújo",
	salary = 800000,
    birth_date = "1978-11-25",
    gender = "female"
WHERE id = "005";
~~~

> **d.**
~~~SQL
UPDATE Actor
SET name = "Laura Cardoso"
WHERE id = "007";
~~~
Pois quando ele não encontra nada para atualizar no id 007, não quer dizer que seja um erro, ele apenas não tem o que atualizar e não aponta como erro.

# Exercício 3

> **a.**
~~~SQL
DELETE FROM Actor
WHERE name = "Lilia Cabral";
~~~

> **b.**
~~~SQL
DELETE FROM Actor
WHERE 
	gender = "male" AND
    salary = 1000000;
~~~

# Exercício 4

> **a.**
~~~SQL
SELECT MAX(salary) FROM Actor;
~~~

> **b.**
~~~SQL
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
~~~

> **c.**
~~~SQL
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
~~~

> **d.**
~~~SQL
SELECT SUM(salary) FROM Actor;
~~~

# Exercício 5

> **a.**
~~~SQL
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
~~~

Com o comando COUNT(*) pega todos os dados da tabela referente a gender, e os agrupa pelos genders adicionados na tabela, em grupos.

> **b.**
~~~SQL
SELECT id, name FROM Actor
ORDER BY name DESC
~~~

> **c.**
~~~SQL
SELECT * FROM Actor
ORDER BY salary;
~~~

> **d.**
~~~SQL
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
~~~

> **e.**
~~~SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
~~~

# Exercício 6

> **a.**
~~~SQL
ALTER TABLE Movie
ADD playing_limit_date DATE;
~~~

> **b.**
~~~SQL
ALTER TABLE Movie
CHANGE rating rating FLOAT;
~~~

> **c.**
~~~SQL
UPDATE Movie
SET playing_limit_date = current_date()
WHERE id = "003";

UPDATE Movie
SET playing_limit_date = "2003-05-11"
WHERE id = "004";
~~~

> **d.**
~~~SQL
DELETE FROM Movie
WHERE id = "001";

UPDATE Movie
SET synopsis = "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos. Apavorados, eles tentam lidar com a situação até encontrar uma solução para reverter o acontecimento bizarro. Mas à medida que vão enfrentando obstáculos, eles passam a aprender e a entender mais sobre o outro."
WHERE id = "001";
~~~

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Quando ele não encontra nada para atualizar no id 001, não quer dizer que seja um erro, ele apenas não tem o que atualizar e não aponta como erro.

# Exercício 7

> **a.**
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE rating > 7.5
~~~
3 filmes tem a nota mais que 7.5

> **b.**
~~~SQL
SELECT AVG(rating) FROM Movie;
~~~
A média das avaliações dos filmes é 9.3

> **c.**
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE playing_limit_date >= curdate();
~~~
1 Filme estão em cartaz.

> **d.**
~~~SQL
SELECT COUNT(*) FROM Movie
WHERE release_date > curdate();
~~~
0 Filmes irão lançar.

> **e.**
~~~SQL
SELECT MAX(rating) FROM Movie;
~~~
10 é a nota maior.

> **f.**
~~~SQL
SELECT MIN(rating) FROM Movie;
~~~
8 é a nota menor.

# Exercício 8

> **a.**
~~~SQL
SELECT * FROM Movie
ORDER BY title;
~~~

> **b.**
~~~SQL
SELECT * FROM Movie
ORDER BY title DESC
LIMIT 5;
~~~

> **c.**
~~~SQL
SELECT * FROM Movie
WHERE release_date < curdate()
ORDER BY release_date DESC
LIMIT 3;
~~~

> **d.**
~~~SQL
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
~~~