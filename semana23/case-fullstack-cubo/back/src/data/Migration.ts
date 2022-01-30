import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {

    async createTable() {

        await this.getConnection()
        .raw(`
            create table CUBO_USERS_MIGRATION (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                participation FLOAT NOT NULL
            );
        `)

        console.log("Tabela CUBO_USERS_MIGRATION criada com sucesso!")
        BaseDatabase.destroyConnection()
    }
}


const createTable = new Migrations()

createTable.createTable()