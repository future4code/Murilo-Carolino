import React, { useState, useEffect} from "react";
import { ContainerPage, ContainerMatches, HeaderApp, ContainerList, MatchesList, PersonImage, PersonMatch } from './styles'
import logo from '../../imgs/logo.png'
import axios from "axios";

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/murilo-terenciani-maryam/matches'

function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [matches])

    const getMatches = () => {
        axios
        .get(url)
        .then((res) => {
            setMatches(res.data.matches)
            console.log(res.data.matches)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const matchesList = matches.map((person) => {
        return (
            <MatchesList>
                <PersonMatch>
                    <PersonImage src={person.photo} alt={person.name}/>
                    <p>{person.name}</p>
                </PersonMatch>
            </MatchesList>
        )
    })

    return (
        <div>
            <ContainerPage>
                <ContainerMatches>
                    <HeaderApp>
                        <img src={logo} alt="Logo do Aplicativo AstroMatch"/>
                        <button onClick={props.backPage}>Home</button>
                    </HeaderApp>
                    <ContainerList>
                        {matchesList.length > 0 ? matchesList : 'Você ainda não tem nenhum match, tente mais alguns perfis!'}
                    </ContainerList>
                </ContainerMatches>
            </ContainerPage>
        </div>
    )
}

export default Matches