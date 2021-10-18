import React from "react";
import { useHistory } from "react-router";
import { HomeContainer, ButtonsContainer, Container } from "./styles"
import logo from "../../imgs/backlogo.png"

function HomePage() {

    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <HomeContainer>
            <Container>
                <img src={logo} />
                <h2>Embarque nessa aventura, para o infinito e mais além...</h2>
                <ButtonsContainer>
                    <button onClick={goToTripsPage}>
                        Acessar Viagens
                    </button>
                    <button onClick={goToLoginPage}>
                        Área de Admin
                    </button>
                </ButtonsContainer>
            </Container>
        </HomeContainer>
    )
}

export default HomePage