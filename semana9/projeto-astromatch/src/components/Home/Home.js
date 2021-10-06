import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerPage, ContainerProfile, Infos, Texto, Bio, HeaderApp, FooterApp, ContainerHome, ContainerProfileAndButtons } from './Styles'
import logo from '../../imgs/logo.png'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/person'

function Home() {
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

    const cardProfile = (
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
    )
    console.log(profile)
    return (
        <ContainerPage>
            <ContainerHome>
                <HeaderApp>
                    <img src={logo} alt="Logo do Aplicativo AstroMatch"/>
                    <button>Matches</button>
                </HeaderApp>
                <ContainerProfileAndButtons>
                    {cardProfile}
                    <FooterApp>
                        <button>Não Curtir</button>
                        <button>Curtir</button>
                    </FooterApp>
                </ContainerProfileAndButtons>
            </ContainerHome>
        </ContainerPage>
    )
}

export default Home