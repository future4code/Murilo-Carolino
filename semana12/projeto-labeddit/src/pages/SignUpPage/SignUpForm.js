import React, { useState } from "react";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled"
import { signUp } from "../../services/users";
import { useHistory } from "react-router";


function SignUpForm({setRightButtonText}) {
    const history = useHistory()
    const [form, handleInputChange, clear] = useForm({
        username: "",
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"username"}
                    value={form.username}
                    onChange={handleInputChange}
                    label={"Nome de Usuário"}
                    fullWidth
                    margin={"normal"}
                    type={"text"}
                    required
                />
                <TextField 
                    name={"email"}
                    value={form.email}
                    onChange={handleInputChange}
                    label={"E-mail"}
                    fullWidth
                    margin={"normal"}
                    type={"email"}
                    required
                />
                <TextField 
                    name={"password"}
                    value={form.password}
                    onChange={handleInputChange}
                    label={"Senha"}
                    fullWidth
                    margin={"normal"}
                    type={"password"}
                    required
                />
                <Button
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Cadastrar"}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default SignUpForm