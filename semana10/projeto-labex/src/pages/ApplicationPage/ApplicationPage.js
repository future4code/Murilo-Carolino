import React from "react";
import { useHistory } from "react-router";

function ApplicationPage() {

    const history = useHistory()

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Formulário de Inscrição</h1>
            <button onClick={goBack}>
                Voltar para Lista
            </button>
        </div>
    )
}

export default ApplicationPage