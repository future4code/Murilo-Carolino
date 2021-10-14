import React from "react";
import { useHistory } from "react-router";

function AdminPage() {
    
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.goBack()
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            <h1>Página Administrativa</h1>
            <div>
                <button onClick={goToTripDetailsPage}>
                    Trip 1
                </button>
                <button onClick={goToTripDetailsPage}>
                    Trip 2
                </button>
            </div> <br></br>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goBack}>Logout</button>
            <button onClick={goToHomePage}>Voltar para Home</button>
        </div>
    )
}

export default AdminPage