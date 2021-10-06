import styled from "styled-components";

export const ContainerPage = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const ContainerHome = styled.div `
    border: 1px solid black;
    width: 400px;
    height: 600px;
`
export const ContainerProfileAndButtons = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px;
`

export const ContainerProfile = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    height: 460px;

    img {
        height: 100%;
    }
`
export const Infos = styled.div `
    display: flex;

    p:nth-child(2) {
        margin-left: 5px;
    }

`
export const Texto = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    padding: 10px;
    color: white;
`

export const Bio = styled.p `
    margin-top: 0px;
`

export const HeaderApp = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 50px;
    border-bottom: 1px solid silver;

    img {
        height: 100%;
    }
`

export const FooterApp = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15px;
`