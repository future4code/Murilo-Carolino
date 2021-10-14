import React from "react";
import { useHistory } from "react-router";

function TripsPage() {

    const history = useHistory()

    const goToHomePage = () => {
        history.goBack()
    }

    const goToApplicationPage = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <h1>Página de viagens</h1>
            <button onClick={goToHomePage}>
                Voltar para Home
            </button>
            <button onClick={goToApplicationPage}>
                Inscrever-se
            </button>
        </div>
    )
}

export default TripsPage