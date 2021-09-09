import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import MinhaFoto from './imgs/eu.jpg';
import Cetec from './imgs/cetec.png';
import Ecori from './imgs/ecori.png';
import Email from './imgs/email.png';
import Endereco from './imgs/endereco.png';
import Labenu from './imgs/labenu.jfif';
import Uninter from './imgs/uninter.jfif';
import Unilins from './imgs/unilins.jfif';
import styled from 'styled-components';


const Main = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const ContainerSecao = styled.div `
  width: 40vw;
  margin: 10px 0;

  h3 {
    text-align: center;
    margin-bottom: 20px;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`
const Universal = styled.div `
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`

function App() {
  return (
    <Universal>
      <Main>
        <ContainerSecao>
          <h2>Dados pessoais</h2>
          <CardGrande 
            imagem= {MinhaFoto} 
            nome="Murilo Terenciani Carolino" 
            descricao="Olá, eu sou o Murilo. Sou formado em engenharia elétrica e estou no final de minha pós-graduação em engenharia da computação. Recentemente decidi me tornar um Dev Full-Stack, assim iniciei o curso na Labenu no qual estou tendo todo o apoio para minha transição de carreira, aprendendo todos os dias e me capacitando para fazer o que amo pelo resto de minha vida. Sou um cara simples, que gosta de tecnologias, games, rock and roll e que curte viver uma vida pacata."
          />
          
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
        </ContainerSecao>
        <ContainerSecao>
          <CardPequeno 
            icone= {Email}
            tipo= "Email:"
            descricao= " murilo.terenciani@gmail.com"
          />
          <CardPequeno  
            icone= {Endereco}
            tipo= "Endereço:"
            descricao= "Rua dos Dev's, número 777, Lins - SP"
          />
        </ContainerSecao>

        <ContainerSecao>
          <h2>Experiências profissionais</h2>
          <CardGrande 
            imagem= {Ecori}
            nome="Ecori Energia Solar" 
            descricao="O departamento de suporte técnico é responsável por todo o feedback de respaldo ao cliente e pedidos de troca em garantia que os usuários precisam após a compra dos produtos, seja respondendo as dúvidas técnicas sobre os equipamentos, suporte remoto, diagnósticos e ajustes de sistema, comissionamento e dimensionamento de instalações com inversores de energia solar." 
          />
          
          <CardGrande 
            imagem= {Cetec}
            nome="CETECLins - Centro Tecnológico de Lins" 
            descricao="Estágio supervisionado na área de Iluminação Pública (CETEC / PROTEC), coleta de dados em campo, gestão da qualidade, utilização de SIG (Sistema de Informações Geográficas), controle de estoque e garantia de equipamentos." 
          />
        </ContainerSecao>

        <ContainerSecao>
          <h2>Formação Acadêmica</h2>
          <CardGrande 
            imagem= {Labenu}
            nome="Labenu" 
            descricao="Full-Stack Web Developer. Área de estudo: Engenharia de Software
            Período (ou ano previsto para a graduação) 2021 – 2022" 
          />
          <CardGrande 
            imagem= {Uninter}
            nome="Uninter - Universidade Internacional" 
            descricao="Pós-graduação Lato Sensu - Especialização. Área de estudo: Engenharia de Computação
            Período: 2021 – 2021" 
          />
          <CardGrande 
            imagem= {Unilins}
            nome="Unilins - Centro Universitário de Lins" 
            descricao="Bacharelado em Engenharia. Área de estudo: Engenharia Elétrica e Eletrônica
            Período: 2010 – 2015" 
          />
        </ContainerSecao>
        <ContainerSecao>
          <h2>Minhas redes sociais</h2>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook"
            link="https://www.facebook.com/Murilohim/" 
          />        
          <ImagemButton 
            imagem="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" 
            texto="Instagram" 
            link="https://www.instagram.com/murilohim/"
          />        
          <ImagemButton 
            imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            texto="GitHub" 
            link="https://github.com/Murilohim"
          />    
          <ImagemButton 
            imagem="https://img2.gratispng.com/20180403/klw/kisspng-linkedin-logo-social-media-business-professional-n-style-5ac33a87e27554.0089620115227439439276.jpg" 
            texto="Linkedin" 
            link="https://www.linkedin.com/in/muriloterenciani/"
          />    
        </ContainerSecao>
      </Main>
    </Universal>
  );
}

export default App;
