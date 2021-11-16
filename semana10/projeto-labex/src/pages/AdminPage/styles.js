import styled from "styled-components";

export const AdminPageContainer = styled.div `
    min-height: 90vh;
    display: flex;
`

export const NavContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    border-right: 1px solid;

    button {
        width: 70%;
        margin-bottom: 10px;
        height: 5%;
    }
`

export const PanelAdminContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;

    h1 {
        margin-bottom: 5%;
    }
`

export const DataContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    padding: 0 20px;
    margin-bottom: 20px;
    height: 7%;
    box-shadow: 3px 3px 6px 1px rgb(49 175 180 / 50%);
    border-radius: 10px;

    :hover {
        background-color: #31afb4;
        color: whitesmoke;
    }

    p {
        width: 100%;
        height: 100%;
        margin: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    img {
        height: 100%;
        cursor: crosshair;
        transition: 500ms all;
    }

    img:hover {
        transform: scale(1.1);
    }
`