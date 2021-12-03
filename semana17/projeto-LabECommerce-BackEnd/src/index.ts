import app from "./app";
import { createProduct } from "./endpoints/createProduct";
import { createPurchase } from "./endpoints/createPurchase";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getPurchasesHistoryUser } from "./endpoints/getPurchasesHistoryUser";

app.get("/users", getAllUsers)
app.post("/users", createUser)

app.get("/products", getAllProducts)
app.post("/products", createProduct)

app.post("/purchases", createPurchase)


app.get("/users/:user_id/purchases", getPurchasesHistoryUser)