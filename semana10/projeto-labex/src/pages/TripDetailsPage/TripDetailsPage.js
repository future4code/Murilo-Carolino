import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import url from "../../constants/constants"

function TripDetailsPage() {
    
    const params = useParams()
    const history = useHistory()
    const [tripDetails, setTripDetails] =  useState({})
    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios
        .get(`${url}/trip/${params.id}`, headers)
        .then((res) => {
            setTripDetails(res.data.trip)
            setCandidates(res.data.trip.candidates)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [ params.id, setTripDetails, setCandidates ])

    const goBack = () => {
        history.goBack()
    }


    const details = 
        <div>
            <p><b>Nome:</b> {tripDetails.name}</p>
            <p><b>Planeta:</b> {tripDetails.planet}</p>
            <p><b>Descrição:</b> {tripDetails.description}</p>
            <p><b>Data:</b> {tripDetails.date}</p>
            <p><b>Duração em dias:</b> {tripDetails.durationInDays}</p>
        </div>

    const pendingCandidates = candidates.map((candidate) => {
        return (
            <div key={candidate.id}>
                <p><b>Nome:</b> {candidate.name}</p>
                <p><b>Idade:</b> {candidate.age}</p>
                <p><b>País:</b> {candidate.country}</p>
                <p><b>Profissão:</b> {candidate.profession}</p>
                <p><b>Texto de candidatura:</b> {candidate.applicationText}</p>
                <div>
                    <button>
                        Aprovar
                    </button>
                    <button>
                        Reprovar
                    </button>
                </div>
            </div>
        )
    })
    console.log(tripDetails)
    
    return (
        <div>
            <h1>Detalhes da Viagem</h1>
            {details}
            <button onClick={goBack}>Voltar para Admin</button>
            <h2>Candidatos Pendentes</h2>
            {pendingCandidates}
        </div>
    )
}

export default TripDetailsPage