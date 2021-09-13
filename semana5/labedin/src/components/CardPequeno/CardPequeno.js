import React from "react";
import styled from "styled-components";

const ContainerCardPequeno = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 60px;

    img {
        width: 30px;
        margin-right: 10px;
    }

    p {
        margin-right: 5px;
    }
`

function CardPequeno (props) {
    return (
        <ContainerCardPequeno>
            <img src={props.icone}/>
            <p><b>{props.tipo} </b></p>
            <p> {props.descricao}</p>
        </ContainerCardPequeno>
    )
}

export default CardPequeno