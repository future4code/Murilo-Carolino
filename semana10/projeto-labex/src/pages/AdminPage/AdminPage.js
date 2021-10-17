import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage"

function AdminPage() {

    useProtectedPage()

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios
        .get(`${url}/trips`)
        .then((res) => {
            setData(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])
    
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        localStorage.removeItem('token')
        history.push("/login")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    const deleteTrip = (id) => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        axios
        .delete(`${url}/trips/${id}`, headers)
        .then((res) => {
            console.log(res)
            alert("Viagem deletada!")
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }
    
    return (
        <div>
            <h1>Página Administrativa</h1>
            <div>
                {data.map((trip) => {
                    return (
                        <div key={trip.id}>
                            <button onClick={() => goToTripDetailsPage(trip.id)}>
                                {trip.name}
                            </button>
                            <button onClick={() => deleteTrip(trip.id)}>X</button>
                        </div>
                    ) 
                })}
            </div> <br></br>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goBack}>Logout</button>
            <button onClick={goToHomePage}>Voltar para Home</button>
        </div>
    )
}

export default AdminPage