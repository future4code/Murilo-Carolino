import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/coordinator"
import { ScreenContainer, LogoImage, SignUpContainer } from "./styled"
import logo from "../../assets/logo1.png"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

function LoginPage({setRightButtonText}) {
    useUnprotectedPage()

    const history = useHistory()

    return (
        <ScreenContainer>
            <LogoImage src={logo} alt={"Imagem do logo do site"}/>
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                >
                    Não possui conta? Cadastre-se agora!
                </Button>
            </SignUpContainer>
        </ScreenContainer>
    )
}

export default LoginPage