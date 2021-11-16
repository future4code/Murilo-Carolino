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
    border-radius: 7px;
    box-shadow: 1px 1px 6px silver;
    background-color: ghostwhite;
    overflow: auto;
`

export const HeaderApp = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 50px;
    border-bottom: 1px solid silver;
    padding: 0px 5px;

    img {
        height: 100%;
    }
`

export const ContainerList = styled.div `

`

export const MatchesList = styled.ul `
    transition: all 1s;

    :hover {
        transform: scale(1.01);
        background-image: linear-gradient(135deg, hsla(355, 32%, 59%, 0.8) 0%, hsla(292, 32%, 59%, 1) 50%, hsla(231, 32%, 59%, 1) 100%);
    }
`

export const PersonMatch = styled.li `
    display: flex;
    position: relative;
    height: 50px;
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

export const HomeImg = styled.img`
    transition: all 300ms;
    width: 45px;

    :hover {
        transform: scale(0.9);
    }

    :active {
        position: relative;
        top: 1px;
    }
`

export const NoMatches = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const BrokenHeart = styled.img `
    width: 50%;
`