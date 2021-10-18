import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants"
import useForm from "../../hooks/useForm";
import Header from "../../components/Header";
import { LoginPageContainer, LoginContainer, FormContainer } from "./styles"

function LoginPage() {
    
    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token !== null) {
            history.push('/admin/trips/list')
        }
    })
    
    const { form, handleInput } = useForm({ email: "", password: ""})

    const history = useHistory()

    const goToAdminPage = (event) => {
        event.preventDefault()
        const body = form

        axios
        .post(`${url}/login`, body)
        .then((res) => {
            console.log("deu bom:", res.data)
            history.push("/admin/trips/list")
            localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log("deu ruim:", err.response.data.message)
        })
    }

    const goToHome = () => {
        history.push("/")
    }


    return (
        <div>
            <Header goBack={goToHome} goToHomePage={goToHome}/>
            <LoginPageContainer>
            <LoginContainer>
            <h1>Login</h1>
            <FormContainer onSubmit={goToAdminPage}>
                <input type="email" name={"email"} value={form.email} placeholder="E-mail" onChange={handleInput}/>
                <input type="password" name={"password"} value={form.password} placeholder="Senha" onChange={handleInput}/>
                <button>Sign in</button>
            </FormContainer>
            </LoginContainer>
            </LoginPageContainer>
        </div>
    )
}

export default LoginPage