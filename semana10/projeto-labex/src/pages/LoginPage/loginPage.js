import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants"

function LoginPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const goToAdminPage = () => {
        const body = {
            email: email,
            password: password
        }

        console.log(email, password)
        axios
        .post(`${url}/login`, body)
        .then((res) => {
            console.log("deu bom:", res.data)
            history.push("/admin/trips/list")
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log("deu ruim:", err.response.data.message)
        })
    }

    const goBack = () => {
        history.goBack()
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="email" value={email} placeholder="E-mail" onChange={handleEmail}/>
                <input type="password" value={password} placeholder="Senha" onChange={handlePassword}/>
            </form>
            <button onClick={goToAdminPage}>Sign in</button>
            <button onClick={goBack}>Voltar para Home</button>
        </div>
    )
}

export default LoginPage