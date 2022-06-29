import styled from "styled-components";

export const ErrorPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 3rem;
        margin: 1rem;
    }

    button {
        padding: 0.8rem 3rem 0.8rem 2rem;
        color: whitesmoke;
        background-color: darkviolet;
        border: solid darkviolet 2px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin: 0.5rem;

        :hover {
            background-color: whitesmoke;
            color: darkviolet;
        }
    }
`