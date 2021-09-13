import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div `
text-align: center;
`

class Final extends React.Component {
    render () {
        return (
            <ContainerFinal>
                <h2>O FORMULÁRIO ACABOU</h2>
                <p>Muito obrigado por participar! Entraremos em contato!</p>
            </ContainerFinal>
        )
    }
}


export default Final;