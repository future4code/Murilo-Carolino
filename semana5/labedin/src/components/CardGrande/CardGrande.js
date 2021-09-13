import React from 'react';
import styled from 'styled-components';

const ContainerCardGrande = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImgCardGrande = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const NomeEstilizado = styled.h4 `
    margin-bottom: 15px;
`
const ContainerDentroCardGrande = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`


function CardGrande(props) {
    return (
        <ContainerCardGrande>
            <ImgCardGrande src={ props.imagem } />
            <ContainerDentroCardGrande>
                <NomeEstilizado>{ props.nome }</NomeEstilizado>
                <p>{ props.descricao }</p>
            </ContainerDentroCardGrande>
        </ContainerCardGrande>
    )
}

export default CardGrande;