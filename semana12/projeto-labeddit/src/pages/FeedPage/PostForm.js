import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer } from "./styled"
import { createPost } from "../../services/posts";


function PostForm() {

    const [form, handleInputChange, clear] = useForm({
        title: "",
        body: ""
    })
    const [isLoading, setIsLoading] = useState(false)


    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"title"}
                    value={form.title}
                    onChange={handleInputChange}
                    label={"Título"}
                    fullWidth
                    margin={"normal"}
                    type={"text"}
                    required
                    autoFocus
                />
                <TextField 
                    name={"body"}
                    value={form.body}
                    onChange={handleInputChange}
                    label={"Descrição"}
                    fullWidth
                    margin={"normal"}
                    type={"text"}
                    required
                />
                <Button
                    variant={"contained"}
                    type={"submit"}
                    fullWidth
                >
                    {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Criar Post"}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default PostForm