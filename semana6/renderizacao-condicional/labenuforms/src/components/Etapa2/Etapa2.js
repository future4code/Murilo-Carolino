import React from "react";
import styled from "styled-components";
import PerguntaFechada from "./Perguntas/PerguntaFechada";

const ContainerEtapa2 = styled.div `
text-align: center;
`

class Etapa2 extends React.Component {
    render () {
        return (
            <ContainerEtapa2>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <PerguntaFechada pergunta={"5. Qual o seu curso?"}/>
                    <PerguntaFechada pergunta={"6. Qual a unidade de ensino?"}/>
                </div>
            </ContainerEtapa2>
        )
    }
}


export default Etapa2;