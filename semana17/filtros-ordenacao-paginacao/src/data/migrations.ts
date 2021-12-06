import { connection } from "./connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTable = () => connection
   .raw(`
      CREATE TABLE aula49_exercicio(
         id INT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         type VARCHAR(255) NOT NULL
      );
`)
   .then(() => { console.log("Tabelas criada") })
   .catch(printError)

const insertUsers = () => connection
   .raw(`
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (1,'Soter','soter@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (2,'João','joao@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (3,'Paula','paula@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (4,'Amanda','amanda@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (5,'Darvas','darvas@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (6,'Severo','severo@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (7,'Caio','caio@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (8,'Chijo','chijo@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (9,'Lais','lais@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (10,'Bruno','bruno@labenu','Teacher');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (11,'Luciano','luciano@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (12,'Miau','miau@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (13,'Sekine','sekine@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (14,'Nathalia','nathalia@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (15,'Amanda','amandaop@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (16,'Rebeca','rebeca@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (17,'Jean','jean@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (18,'Vitória','vitoria@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (19,'Fernanda','fernanda@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (20,'Tainah','tainah@labenu','Operations');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (21,'Aline','aline@labenu','CX');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (22,'Nathalia','nathaliacx@labenu','CX');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (23,'Layla','layla@labenu','CX');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (24,'Jonathan','jonathan@labenu','CX');
   INSERT INTO aula49_exercicio (id,name,email,type) VALUES (25,'Maju','maju@labenu','CX');
   `)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTable()
   .then(insertUsers)
   .finally(closeConnection)