import React from "react";
import styled from "styled-components";


const ContainerEtapa1 = styled.div `
    text-align: center;
`


class Etapa1 extends React.Component {
    render () {
        return (
            <ContainerEtapa1>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <div>
                    <p>1. Qual é o seu nome?</p>
                    <input/>
                    <p>2. Qual a sua idade?</p>
                    <input/>
                    <p>3. Qual o seu email?</p>
                    <input/>
                    <p>4. Qual a sua escolaridade?</p>
                    <select id="ensino" name="ensino">
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </div>
            </ContainerEtapa1>
        )
    }
}


export default Etapa1;