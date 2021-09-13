import React from "react";
import styled from "styled-components";

const ContainerEtapa3 = styled.div `
text-align: center;
`

class Etapa3 extends React.Component {
    render () {
        return (
            <ContainerEtapa3>
                <h2>ETAPA 3 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input/>
                    <p>6. Você fez algum curso complementar?</p>
                    <select id="curso" name="curso">
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                </div>
            </ContainerEtapa3>
        )
    }
}


export default Etapa3;