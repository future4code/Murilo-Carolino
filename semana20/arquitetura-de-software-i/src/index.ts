import { app } from "./app"
import { UserController } from "./controllers/UserController"

app.post('/user/signup', new UserController().signupController)
app.post('/user/login', new UserController().loginController)

app.get('/user/all', new UserController().getAllUsersController)
app.delete('/user/:id', new UserController().deleteUserController)
