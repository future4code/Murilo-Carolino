import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import url from "../../constants/constants"
import useProtectedPage from "../../hooks/useProtectedPage";

function TripDetailsPage() {

    useProtectedPage()
    
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
    }, [ candidates, tripDetails.approved ])

    const goBack = () => {
        history.goBack()
    }

    const decideCandidate = (id, choice) =>{ 
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        const body = {
            approve: choice
        }

        axios
        .put(`${url}/trips/${tripDetails.id}/candidates/${id}/decide`, body, headers)
        .then((res) => {
            console.log(res)
            if (choice === true) {
                alert("Candidato aprovado!")
            } else {
                alert("O candidato foi reprovado")
            }
        })
        .catch((err) => {
            console.log(err)
        })
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
                    <button onClick={() => decideCandidate(candidate.id, true)}>
                        Aprovar
                    </button>
                    <button onClick={() => decideCandidate(candidate.id, false)}>
                        Reprovar
                    </button>
                </div>
            </div>
        )
    })
    
    const approveds = tripDetails.approved && tripDetails.approved.map((candidate) => {
        return (
            <li key={candidate.id}>{candidate.name}</li>
        )
    })

    
    return (
        <div>
            <h1>Detalhes da Viagem</h1>
                {details}
            <button onClick={goBack}>Voltar para Admin</button>
            <h2>Candidatos Pendentes</h2>
                {candidates.length === 0 ? "Não há candidatos para essa viagem" : pendingCandidates}
            <h2>Candidatos Aprovados</h2>
                {approveds && approveds.length > 0 ? approveds : "Não há candidatos aprovados"}
        </div>
    )
}

export default TripDetailsPage