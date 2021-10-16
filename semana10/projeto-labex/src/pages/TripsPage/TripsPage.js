import React from "react";
import { useHistory } from "react-router";
import useRequestData from "../../hooks/useRequestData";
import url from "../../constants/constants";


function TripsPage() {
    
    const tripsList = useRequestData(`${url}/trips`, [])

    const history = useHistory()

    const goToHomePage = () => {
        history.goBack()
    }

    const goToApplicationPage = () => {
        history.push("/trips/application")
    }

    const TripsComponents = tripsList.map((trip) => {
        return (
            <div key={trip.id}>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração em dias:</b> {trip.durationInDays}</p>
                <p><b>Data:</b> {trip.date}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Página de viagens</h1>
            <button onClick={goToHomePage}>
                Voltar para Home
            </button>
            <button onClick={goToApplicationPage}>
                Inscrever-se
            </button>
            <div>
                {TripsComponents}
            </div>
        </div>
    )
}

export default TripsPage