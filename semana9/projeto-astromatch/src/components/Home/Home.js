import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPage, ContainerProfile, Infos, Texto, Bio, HeaderApp, FooterApp, 
        ContainerHome, ContainerProfileAndButtons, ButtonLike, ButtonDislike, MatchingImg } from './styles'
import logo from '../../imgs/logo.png'
import matching from '../../imgs/matching.png'


const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/person'
const url1 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/choose-person'


function Home(props) {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfileToChoose()
    }, [])


    const getProfileToChoose = () => {
        axios
        .get(url)
        .then((res) => {
            setProfile(res.data.profile)
        })
        .catch((err) => {
            alert(err)
        })
    }

    const choosePerson = (boolean) => {
        const headers = {
            headers: 
                { 
                    "Content-Type": "application/json" 
                }
        }

        const body = 
            {
                "id": profile.id,
                "choice": boolean
            }
        
        axios
        .post(url1, body, headers)
        .then((res) => {
            console.log(res)
            getProfileToChoose()
        })
        .catch((err) => {
            alert(err)
        })

        
    }

    return (
        <ContainerPage>
            <ContainerHome>
                <HeaderApp>
                    <img src={logo} alt="Logo do Aplicativo AstroMatch"/>
                    <MatchingImg src={matching} onClick={props.nextPage}></MatchingImg>
                </HeaderApp>
                    {profile ? 
                    <ContainerProfileAndButtons>
                        <ContainerProfile>
                            <img src={profile.photo} alt={profile.name}/>
                            <Texto>
                                <Infos>
                                    <p><b>{profile.name}, </b></p>
                                    <p>{profile.age}</p>
                                </Infos>
                                <Bio>{profile.bio}</Bio>
                            </Texto>
                        </ContainerProfile>
                        <FooterApp>
                            <ButtonDislike onClick={() => choosePerson(false)}>X</ButtonDislike>
                            <ButtonLike onClick={() => choosePerson(true)}>✔</ButtonLike>
                        </FooterApp> 
                    </ContainerProfileAndButtons> : 
                    <ContainerProfileAndButtons>
                        <p>Não existe mais perfis! Vá para a seção de Matches, para ver quem te curtiu também!</p>
                        <p>Se preferir você também pode resetar o app, para ter novas chances:</p>
                        <button onClick={props.resetar}>Resetar</button>
                    </ContainerProfileAndButtons> }
            </ContainerHome>
        </ContainerPage>
    )
}

export default Home