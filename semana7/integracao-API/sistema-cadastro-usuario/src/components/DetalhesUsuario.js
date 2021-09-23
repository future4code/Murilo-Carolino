import React from "react";
import styled from "styled-components";
import axios from "axios";

const ContainerUsuario = styled.div `
    text-align: center;

    button {
        margin-right: 45px;
    }
`

const ContainerInfos = styled.div `
    display: flex;
    justify-content: space-around;
    width: 550px;
    align-items: center;

    button {
    
    }
`


const ContainerDados = styled.div `
    display: flex;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    width: 600px;
    margin: auto;
    justify-content: space-around;
    
`

class DetalhesUsuario extends React.Component {
    userInfo = (dados) => {
        if (dados) {
            return (
            <ContainerInfos>
                <p>Nome: {dados.name}</p>
                <p>E-mail: {dados.email}</p>
                <button onClick={() => this.deleteUser(dados)}>Deletar</button>
            </ContainerInfos>)
        } else {
            return "Dados e usuário apagados."
        }
    }

    deleteUser = (dados) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${dados.id}`
        const headers = {
            headers: {
                Authorization: "murilo-terenciani-maryam"
            }
        }

        if (window.confirm("Tem certeza de que deseja deletar?")) {
            axios
            .delete(url, headers)
            .then((res) => {
                alert(`O usuário ${dados.name} foi deletado.`)
                dados = {}
                this.render()
                
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
        } else {
            alert('Usuário não deletado.')
        }
    }

    editUser = (dados) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${dados.id}`
        const headers = {
            headers: {
                Authorization: "murilo-terenciani-maryam"
            }
        }
        const body = {
            name: prompt("Digite seu novo nome:"),
            email: prompt("Digite seu novo email:")
        }

        axios
        .put(url, body, headers)
        .then((res) => {
            alert(`Os dados foram alterados para: Nome: ${body.name}, Email: ${body.email}`)
        })
        .catch((err) => {
            console.log(err.response.data.message)
        })
    }

    render () {
        const dados = this.props.userDados


        return (
            <ContainerUsuario>
                <h1>Detalhes do usuário:</h1>
                <ContainerDados>
                    {this.userInfo(dados)}
                    <button onClick={() => this.editUser(dados)}>Editar</button>
                </ContainerDados>
                <button onClick={this.props.listUsers}>Voltar para a lista de Usuários</button>
            </ContainerUsuario>
        )
    }
}

export default DetalhesUsuario