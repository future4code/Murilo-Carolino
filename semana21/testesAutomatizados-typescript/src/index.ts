import knex from 'knex'
import { config } from 'dotenv'
import { User } from './model/User'
import { Casino, LOCATION, NACIONALITY, Result, UserCasino } from './model/Casino'

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

export const verifyAge = (casino: Casino, users: UserCasino[]): Result => {

   const allowed: UserCasino[] = []
   const unallowed: UserCasino[] = []

   for (const user of users) {
      if (casino.location === LOCATION.BRAZIL) {
         if (user.age >= 18) {
            allowed.push(user)
         } else {
            unallowed.push(user)
         }
      } else if (casino.location === LOCATION.EUA) {
         if (user.age >= 21) {
            allowed.push(user)
         } else {
            unallowed.push(user)
         }
      }
   }

   return {
      brazilians: {
         allowed: allowed.filter((user) => {
            return user.nacionality === NACIONALITY.BRAZILIAN
         }).map((user) => {
            return user.name
         }),
         unallowed: unallowed.filter((user) => {
            return user.nacionality === NACIONALITY.BRAZILIAN
         }).map((user) => {
            return user.name
         })
      },
      americans: {
         allowed: allowed.filter((user) => {
            return user.nacionality === NACIONALITY.AMERICAN
         }).map((user) => {
            return user.name
         }),
         unallowed: unallowed.filter((user) => {
            return user.nacionality === NACIONALITY.AMERICAN
         }).map((user) => {
            return user.name
         })
      }
      
   }
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

