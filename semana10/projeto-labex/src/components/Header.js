import React from "react";
import { HeaderContainer, ButtonsContainer } from "./styles"
import logo from "../imgs/logo.png"

function Header(props) {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo da LabeX"/>
            <ButtonsContainer>
                <button onClick={props.goToHomePage}>Home</button>
                <button onClick={props.goBack}>Voltar</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header