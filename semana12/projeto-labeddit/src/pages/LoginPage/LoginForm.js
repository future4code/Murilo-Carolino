import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled"
import { login } from "../../services/users"
import { useHistory } from "react-router";


function LoginForm({setRightButtonText}) {

    const [form, handleInputChange, clear] = useForm({
        email: "",
        password: ""
    })
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setRightButtonText)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
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
                    Fazer Login
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm