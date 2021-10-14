import React from "react";
import { useHistory } from "react-router";


function HomePage() {

    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <h1>Página Inicial</h1>
            <button onClick={goToTripsPage}>
                Acessar Viagens
            </button>
            <button onClick={goToLoginPage}>
                Área de Admin
            </button>
        </div>
    )
}

export default HomePage