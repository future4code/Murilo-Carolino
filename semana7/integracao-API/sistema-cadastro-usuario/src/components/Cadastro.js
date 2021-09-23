import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
    headers: {
        Authorization: "murilo-terenciani-maryam"
    }
}

const ContainerCadastro = styled.div `
    text-align: center;
    border: 1px solid black;
    width: 400px;
    height: 200px;
    margin: auto;
`
const ContainerDados = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        width: 60px;
        margin-top: 15px;
        margin-left: 150px;
    }
`

class Cadastro extends React.Component {
    state = {
        name: "",
        email: ""
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    createUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios
        .post(url, body, headers)
        .then((res) => {
            this.setState({
                name: ""
            })
            alert(`Usuário: ${body.name} criado com sucesso!`)
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    }

    render () {
        return (
            <div>
                <ContainerCadastro>
                    <h1>Cadastro de Usuário</h1>
                    <ContainerDados>
                        <label>
                            Nome: 
                            <input value={this.state.name} onChange={this.handleName}/>
                        </label>
                        <label>
                            E-mail: 
                            <input value={this.state.email} onChange={this.handleEmail}/>
                        </label>
                        <button onClick={this.createUser}>Enviar</button>
                    </ContainerDados>
                </ContainerCadastro>
                <button onClick={this.props.nextPage}>Ir para a lista de Usuários</button>
            </div>
        )
    }
}

export default Cadastro