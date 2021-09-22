import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
    headers: {
        Authorization: "murilo-terenciani-maryam"
    }
}

const ContainerList = styled.div `
    text-align: center;
    width: 500px;
    margin: auto;
`

const ContainerListUsers = styled.div `
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;
    justify-content: space-between;
`

class Lista extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers();
    }


    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
        .get(url, headers)
        .then((res) => {
            this.setState({
                users: res.data
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    deleteUser = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
        const params = {
            params: {
                id: this.state.users.id
            }
        }

        axios
        .delete(url, params, headers)
        .then((res) => {
            console.log("Deletei o id")
        })
        .catch((err) => {   
            console.log(err)
        })
    }

    render () {
        const usersComponents = this.state.users.map((user) => {
            return (
                <ContainerListUsers key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={this.deleteUser}>X</button>
                </ContainerListUsers>
            )
        })

        return (
            <ContainerList>
                <h1>Lista de usuários cadastrados:</h1>
                {usersComponents}
            </ContainerList>
        )
    }
}

export default Lista