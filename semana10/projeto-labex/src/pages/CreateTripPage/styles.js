import styled from "styled-components";

export const CreateTripPageContainer = styled.div `
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    
`

export const CreateContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 470px;
    padding-bottom: 30px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 3px 3px 6px 1px rgb(49 175 180 / 50%);
`

export const FormContainer = styled.form `
    display: flex;
    flex-direction: column;
    width: 80%;

    input {
        margin-bottom: 10px;
        border-radius: 5px;
    }

    select {
        margin-bottom: 10px;
        border-radius: 5px;
    }

    button {
        margin-top: 15px;
        width: 60px;
        align-self: center;
    }
`