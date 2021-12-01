import dotenv from 'dotenv'
import app from "./app"
import createAddress from './endpoints/createAddress'
import createUser from './endpoints/createUser'
import { mailTransporter } from './services/mailTransporter'

dotenv.config()

app.post('/users/signup', createUser)
app.post('users/address/signup', createAddress)

mailTransporter.sendMail({
    from: "<dev.murilo.test@gmail.com>",
    to: "yuzo.dev.practice@gmail.com",
    subject: "Aula 51 - Serviços no BackEnd",
    text: "Através da função mailTransporter aonde foi usado a lib de nodemailer, configurando meu transporter.",
    html: `<p>Aprendendo a utilizar a lib nodemailer para enviar emails através de code.</p>`
}).then(console.log) 