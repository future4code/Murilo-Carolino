import { Button, TextField } from "@material-ui/core";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled"


function LoginForm() {

    const [form, handleInputChange, clear] = useForm({
        email: "",
        password: ""
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
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