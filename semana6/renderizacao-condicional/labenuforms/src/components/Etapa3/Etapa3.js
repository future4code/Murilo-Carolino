import React from "react";
import styled from "styled-components";
import PerguntaFechada from "./Perguntas/PerguntaFechada";
import PerguntaOpcoes from "./Perguntas/PerguntaOpcoes";

const ContainerEtapa3 = styled.div `
text-align: center;
`

class Etapa3 extends React.Component {
    render () {
        return (
            <ContainerEtapa3>
                <h2>ETAPA 3 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <PerguntaFechada pergunta={"5. Por que você não terminou um curso de graduação?"}/>
                    <PerguntaOpcoes
                        pergunta={"6. Você fez algum curso complementar?"}
                        opcoes={[
                            "Nenhum",
                            "Curso técnico",
                            "Curso de inglês"
                        ]}
                    />
                </div>
            </ContainerEtapa3>
        )
    }
}


export default Etapa3;