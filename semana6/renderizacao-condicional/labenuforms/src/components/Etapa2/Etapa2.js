import React from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div `
text-align: center;
`

class Etapa2 extends React.Component {
    render () {
        return (
            <ContainerEtapa2>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <p>5. Qual o seu curso?</p>
                    <input/>
                    <p>6. Qual a unidade de ensino?</p>
                    <input/>
                </div>
            </ContainerEtapa2>
        )
    }
}


export default Etapa2;