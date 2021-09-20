import React from "react";
import styled from "styled-components";

const FormSelect = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    select {
        margin: 15px 0px
    }

`

class PerguntaOpcoes extends React.Component {
    render () {
        return (
            <div>
                <FormSelect>
                    {this.props.pergunta}
                    <select id="ensino" name="ensino">
                        <option>{this.props.opcoes[0]}</option>
                        <option>{this.props.opcoes[1]}</option>
                        <option>{this.props.opcoes[2]}</option>
                        <option>{this.props.opcoes[3]}</option>
                    </select>
                </FormSelect>
            </div>
        )
    }
}

export default PerguntaOpcoes