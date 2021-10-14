import React from "react";
import { useHistory } from "react-router";

function CreateTripPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Formulário de criar Viagens</h1>
            <button onClick={goBack}>Voltar para Admin</button>
        </div>
    )
}

export default CreateTripPage