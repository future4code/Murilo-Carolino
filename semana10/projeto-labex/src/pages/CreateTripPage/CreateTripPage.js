import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants";
import useForm from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header";
import { CreateTripPageContainer, CreateContainer, FormContainer } from "./styles"


function CreateTripPage() {

    useProtectedPage()
    const history = useHistory()
    const { form, handleInput, cleanInputs } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const goBack = () => {
        history.goBack()
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const createTrip = (event) => {
        event.preventDefault()
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        const body = form

        axios
        .post(`${url}/trips`, body, headers)
        .then((res) => {
            console.log(res)
            alert("Sua viagem foi criada!")
            cleanInputs()
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    return (
        <div>
            <Header goToHomePage={goToHomePage} goBack={goBack}/>
            <CreateTripPageContainer>
                <CreateContainer>
                <h1>Formulário de criar Viagens</h1>
                <FormContainer onSubmit={createTrip}>
                    <input type="text" name={"name"} value={form.name} placeholder="Título da viagem" onChange={handleInput}/>
                    <select name={"planet"} defaultValue={""} onChange={handleInput}>
                        <option value={""} disabled>Escolha um Planeta</option>
                        <option value={"Mercúrio"}>Mercúrio</option>
                        <option value={"Vênus"}>Vênus</option>
                        <option value={"Terra"}>Terra</option>
                        <option value={"Marte"}>Marte</option>
                        <option value={"Júpiter"}>Júpiter</option>
                        <option value={"Saturno"}>Saturno</option>
                        <option value={"Urano"}>Urano</option>
                        <option value={"Netuno"}>Netuno</option>
                        <option value={"Plutão"}>Plutão</option>
                    </select>
                    <input type="date" name={"date"} value={form.date} placeholder="Data" onChange={handleInput}/>
                    <input type="text" name={"description"} value={form.description} placeholder="Descrição da viagem" onChange={handleInput}/>
                    <input type="number" name={"durationInDays"} value={form.durationInDays} placeholder="Duração em dias" onChange={handleInput}/>
                    <button>Criar</button>
                </FormContainer>
                </CreateContainer>
            </CreateTripPageContainer>
        </div>
    )
}

export default CreateTripPage