import React from "react";
import { ScreenContainer, LogoImage } from "./styled"
import logo from "../../assets/logo1.png"
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

function SignUpPage({setRightButtonText}) {
    useUnprotectedPage()

    return (
        <ScreenContainer>
            <LogoImage src={logo} alt={"Imagem do logo do site"}/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </ScreenContainer>
    )
}

export default SignUpPage