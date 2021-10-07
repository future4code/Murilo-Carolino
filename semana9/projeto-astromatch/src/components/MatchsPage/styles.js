import styled from "styled-components";

export const ContainerPage = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

export const ContainerMatches = styled.div `
    border: 1px solid black;
    width: 400px;
    height: 600px;
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

export const ContainerList = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px 20px 0px;
`

export const MatchesList = styled.ul `

`

export const PersonMatch = styled.li `
    display: flex;
    position: relative;
    height: 50px;
    padding: 10px;
    display: flex;
    list-style: none;
    width: 100%;
    cursor: pointer;
`

export const PersonImage = styled.img `
    height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`