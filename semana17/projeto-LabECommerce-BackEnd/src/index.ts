import app from "./app";
import { createUser } from "./endpoints/createUser";
import { getAllUsers } from "./endpoints/getAllUsers";

app.get("/users", getAllUsers)
app.post("/users", createUser)