import { Button, CircularProgress, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router";
import useForm from "../../hooks/useForm";
import { createComment } from "../../services/posts";
import { InputsContainer } from "./styled"

function CommentForm() {

    const [form, handleInputChange, clear] = useForm({
        body: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, params.id, setIsLoading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField 
                    name={"body"}
                    value={form.body}
                    onChange={handleInputChange}
                    label={"Comente sobre"}
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
                    {isLoading ? <CircularProgress size={24} color={"secondary"} thickness={4}/> : "Comentar"}
                </Button>
            </form>
        </InputsContainer>
    )
}

export default CommentForm