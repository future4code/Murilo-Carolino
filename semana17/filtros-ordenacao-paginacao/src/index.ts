import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getTypesUsers } from "./endpoints/getTypesUsers"
import { getOrderByNameAndTypeAndEmail } from "./endpoints/getOrderByNameAndTypeAndEmail"
import { get5UsersForPage } from "./endpoints/get5UsersForPage"
import { getUsersFinal } from "./endpoints/getUsersFinal"

export const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", getAllUsers)
app.get("/users/infos", getOrderByNameAndTypeAndEmail)
app.get("/users/page" , get5UsersForPage)
app.get("/users/complete", getUsersFinal)
app.get("/users/:type", getTypesUsers)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})