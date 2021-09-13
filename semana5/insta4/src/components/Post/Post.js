import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvarBranco from '../../img/salvar.svg'
import iconeSalvarPreto from '../../img/salvarblack.svg'
import iconeCompartilhar from '../../img/compartilhar.svg'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvado: false,
    compartilhar: false
  }

  onClickCurtida = () => {
    if (this.state.curtido === false){
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })} else {
        this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })}
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickSalvar = () => {
    this.setState ({
      salvado: !this.state.salvado
    })
  }

  onClickCompartilhar = () => {
    this.setState ({
      compartilhar: !this.state.compartilhar
    })
  }

  aoCompartilharInsta = () => {
    console.log("Post compartilhado no Instagram!")
  }
  aoCompartilharFace = () => {
    console.log("Post compartilhado no Facebook!")
  }
  aoCompartilharTwitter = () => {
    console.log("Post compartilhado no Twitter!")
  }

  render() {
    let iconeCurtida
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeSalvar
    if (this.state.salvado) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    let componenteCompartilhar 
    if (this.state.compartilhar) {
      componenteCompartilhar = 
      <SecaoCompartilhar 
        atSharedInsta={this.aoCompartilharInsta} 
        atSharedFace={this.aoCompartilharFace}
        atSharedTwitter={this.aoCompartilharTwitter}
        descricaoMudada = {this.aoCompartilharFace} 
      />
    }

    return (    
    <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />


        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
    )
  }
}

export default Post