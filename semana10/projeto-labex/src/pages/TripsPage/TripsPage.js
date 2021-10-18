import React from "react";
import { useHistory } from "react-router";
import useRequestData from "../../hooks/useRequestData";
import url from "../../constants/constants";
import { TripsPageContainer, TripCardContainer, ComponentsTripContainer } from "./styles"
import Header from "../../components/Header";


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
            <TripCardContainer key={trip.id}>
                <p><b>Nome:</b> {trip.name}</p>
                <p><b>Descrição:</b> {trip.description}</p>
                <p><b>Planeta:</b> {trip.planet}</p>
                <p><b>Duração em dias:</b> {trip.durationInDays}</p>
                <p><b>Data:</b> {trip.date}</p>
            </TripCardContainer>
        )
    })
    return (
        <div>
            <Header goToHomePage={goToHomePage} goBack={goToHomePage}/>
            <TripsPageContainer>
                <button onClick={goToApplicationPage}>
                    Inscrever-se
                </button>
                <h1>Lista de Viagens</h1>
                <ComponentsTripContainer>
                    {TripsComponents}
                </ComponentsTripContainer>
            </TripsPageContainer>
        </div>
    )
}

export default TripsPage