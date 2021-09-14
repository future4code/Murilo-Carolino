import React from "react";
import styled from "styled-components";
import PerguntaAberta from "./Perguntas/PerguntaAberta";
import PerguntaOpcoes from "./Perguntas/PerguntaOpcoes";


const ContainerEtapa1 = styled.div `
    text-align: center;
`


class Etapa1 extends React.Component {
    state = {
        ensino: true
    }
    
    render () {
        return (
            <ContainerEtapa1>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <div>
                    <PerguntaAberta pergunta={"1. Qual é o seu nome?"} />
                    <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                    <PerguntaAberta pergunta={"3. Qual o seu email?"} />
                    <PerguntaOpcoes 
                        pergunta={"4. Qual a sua escolaridade?"} 
                        opcoes={[
                            "Ensino médio incompleto",
                            "Ensino médio completo",
                            "Ensino superior incompleto",
                            "Ensino superior completo"
                        ]}
                    />
                </div>
            </ContainerEtapa1>
        )
    }
}


export default Etapa1;