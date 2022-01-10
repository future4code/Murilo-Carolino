import knex from 'knex'
import { config } from 'dotenv'
import { User } from './model/User'

config()

export const isEven = (integer: number): any => { }

export const performPurchase = (user: User, value: number) => {

   if (user.balance >= value) {
      return {
         ...user,
         balance: user.balance - value
      }
   }

   return undefined
}

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306,
      multipleStatements: true
   },
});

