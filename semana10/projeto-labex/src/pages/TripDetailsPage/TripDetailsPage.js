import React from "react";
import { useHistory } from "react-router";

function TripDetailsPage() {
    
    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Detalhes da Viagem</h1>
            <button onClick={goBack}>Voltar para Admin</button>
        </div>
    )
}

export default TripDetailsPage