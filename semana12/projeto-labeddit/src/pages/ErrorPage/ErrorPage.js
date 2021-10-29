import { Typography } from "@material-ui/core";
import React from "react";
import error from "../../assets/error.png"
import { ErrorPageContainer, ErrorImage } from "./styled"

function ErrorPage() {
    return (
        <ErrorPageContainer>
            <ErrorImage src={error} />
            <Typography color={"inherit"} variant={"h5"} align={"center"}>Erro 404 - Página não encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage