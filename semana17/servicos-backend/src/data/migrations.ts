import { getAddressInfo } from "../services/getAddressInfo"
import { connection } from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS aula51_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         nickname VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         address VARCHAR(255) NOT NULL
      );
      
      CREATE TABLE IF NOT EXISTS aula51_addressUsers (
         cep VARCHAR(255) NOT NULL,
         logradouro VARCHAR(255) NOT NULL,
         numero INT NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("aula51_users")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertAddress = async () => {
   const newAddress = await getAddressInfo("16403073", 10, "Residência")
   await connection("aula51_addressUsers")
   .insert(newAddress)
   .then(() => { console.log("Endereço Criado")})
   .catch(printError)
}

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)

   insertAddress()