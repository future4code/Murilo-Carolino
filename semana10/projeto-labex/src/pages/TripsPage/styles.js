import styled from "styled-components";

export const TripsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        align-self: flex-end;
        margin-right: 10%;
        margin-top: 3%;
    }
`
export const ComponentsTripContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    width: 80%;
    margin-bottom: 10px;
`

export const TripCardContainer = styled.div `
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px rgb(49 175 180 / 40%);

    p {
        margin: 7px 0;
    }
`