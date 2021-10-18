import styled from "styled-components";

export const HeaderContainer = styled.div `
    display: flex;
    background-color: #31afb4;
    height: 70px;

    img {
        margin-left: 10px;
    }
`

export const ButtonsContainer = styled.div `
    align-self: center;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin: 0px 20px;

    button {
        border: none;
        border-radius: 5px;
        height: 30px;
    }

    button:hover {
        background-color: #27536b;
        color: whitesmoke;
    }

    button:nth-child(1) {
        margin-right: 20px;
    }
`
