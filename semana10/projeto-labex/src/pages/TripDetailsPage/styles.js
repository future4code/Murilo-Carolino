import styled from "styled-components";

export const TripDetailsPageContainer = styled.div `
    display: flex;
    flex-direction: column;
`

export const TripDetailsCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CandidatesContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    margin: 0 10px;
`

export const CandidateCard = styled.div `
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px rgb(49 175 180 / 40%);

    p {
        margin: 7px 0
    }
`

export const ApprovedCandidatesContainer = styled.div `
    display: flex;
    margin: 0 10px;
    margin-bottom: 20px;
`

export const ApprovedList = styled.li `
    margin-right: 5%;

    :hover {
        background-color: rgb(49 175 180 / 40%);
    }
`