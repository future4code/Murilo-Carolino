import React, { Component } from "react";
import styled from "styled-components";

const CompartilharContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`

const BotoesCompartilhar = styled.div `
    display: flex;
    justify-content: center;
    padding: 5px;
`
const DescricaoPost = styled.input `
    display: flex;
    justify-content: center;
`

export class SecaoCompartilhar extends Component {
    state = {
        descricao: ""
    }

    onChageDescricao = (event) => {
        this.setState ({
        descricao: event.target.value
        })
    }

    render () {
        return (
            <CompartilharContainer>
                <BotoesCompartilhar>
                    <button onClick={this.props.atSharedInsta}>Instagram</button>
                    <button onClick={this.props.atSharedFace}>Facebook</button>
                    <button onClick={this.props.atSharedTwitter}>Twitter</button>
                </BotoesCompartilhar>
                <DescricaoPost
                    placeholder="Escreva uma descrição"
                    value={this.state.descricao}
                    onChange={this.onChageDescricao}
                />
            </CompartilharContainer>
        )
    }
}