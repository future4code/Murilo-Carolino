import styled from "styled-components";

export const DonutContainer = styled.div`
    display: flex;
`

export const Legend = styled.div`

`

export const ItemLegend = styled.div`
    display: flex;
    align-items: center;

    div {
        width: 2rem;
        height: 2rem;
        background-color: ${p => p.color};
        margin: 0.5rem;
        border-radius: 10px;
    }

    p {
        color: ${p => p.color};
        font-size: 1rem;
        font-weight: 600;
    }
`