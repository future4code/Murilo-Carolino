import styled from "styled-components";
import background from "../../imgs/backgroundlabex.gif"

export const HomeContainer = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
`

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;

    img {
        width: 100%;
    }

    h2 {
        color: #a2e4e8a8;
        text-shadow: 2px 2px 16px #000000;
    }
`

export const ButtonsContainer = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 5%;

    button {
        height: 35px;
        border-radius: 10px;
        border: none;
    }

    button:hover {
        background-color: #31afb4;
        color: whitesmoke;
    }
`