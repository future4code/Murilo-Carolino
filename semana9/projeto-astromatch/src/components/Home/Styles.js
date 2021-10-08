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
    border-radius: 7px;
    box-shadow: 1px 1px 6px silver;
    background-color: ghostwhite;
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
    box-shadow: 0px 0px 4px 0px #848484;
    border-radius: 7px;

    img {
        height: 100%;
        border-radius: 7px;
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
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    width: -webkit-fill-available;
    border-radius: 7px;
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
    padding: 0px 5px;

    img {
        height: 100%;
        border-radius: 7px;
    }
`

export const FooterApp = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
`

export const ButtonLike = styled.button`
    box-shadow: inset 0px 1px 0px 0px #3cc21b;
	background: linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
	background-color: #44c767;
	border-radius: 42px;
	border: 3px solid #18ab29;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 16px;
	font-weight: bold;
	padding: 10px 14px;
	text-decoration: none;
	text-shadow: 0px 1px 1px #2f6627;

    :hover {
        background: linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
        background-color: #5cbf2a;
    }   

    :active {
        position: relative;
        top: 1px;
    }
`

export const ButtonDislike = styled.button`
	box-shadow: inset 0px 1px 0px 0px #8a2a21;
	background: linear-gradient(to bottom, #c62d1f 5%, #f24437 100%);
	background-color: #c62d1f;
	border-radius: 42px;
	border: 3px solid #d02718;
	display: inline-block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 18px;
	font-weight: bold;
	padding: 10px 15px;
	text-decoration: none;
	text-shadow: 0px 1px 1px #810e05;

    :hover {
        background: linear-gradient(to bottom, #f24437 5%, #c62d1f 100%);
        background-color: #f24437;
    }
    :active {
        position: relative;
        top: 1px;
    }

`

export const MatchingImg = styled.img`
    transition: all 300ms;

    :hover {
        transform: scale(0.9);
    }
    :active {
        position: relative;
        top: 1px;
    }
`