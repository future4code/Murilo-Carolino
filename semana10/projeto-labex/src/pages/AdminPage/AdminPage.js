import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header";
import { AdminPageContainer, NavContainer, PanelAdminContainer, DataContainer } from "./styles"
import DeleteIcon from "../../imgs/icondelete.png"

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
            <Header goToHomePage={goToHomePage} goBack={goToHomePage}/>
            <AdminPageContainer>
                <NavContainer>
                    <button onClick={goToCreateTripPage}>Criar Viagem</button>
                    <button onClick={goBack}>Logout</button>
                    <button onClick={goToHomePage}>Voltar para Home</button>
                </NavContainer>
                <PanelAdminContainer>
                    <h1>Seção Administrativa</h1>
                    {data.map((trip) => {
                        return (
                            <DataContainer key={trip.id}>
                                <p onClick={() => goToTripDetailsPage(trip.id)}>
                                    {trip.name}
                                </p>
                                <img src={DeleteIcon} onClick={() => deleteTrip(trip.id)}/>
                            </DataContainer>
                        ) 
                    })}
                </PanelAdminContainer>
            </AdminPageContainer>
        </div>
    )
}

export default AdminPage