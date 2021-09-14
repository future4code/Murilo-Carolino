import React from "react";
import styled from "styled-components";


const Form = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin: 15px 0px
    }
`

class PerguntaFechada extends React.Component {
    render () {
        return (
            <Form>
                <label>{this.props.pergunta}</label>
                <input/>
            </Form>
        )
    }
}


export default PerguntaFechada;