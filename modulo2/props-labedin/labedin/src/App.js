import React from 'react';
import styled from 'styled-components'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton2 from './components/ImagemButton/ImagemButton2';
import Habilidades from './components/Habilidades/Habilidades';

const TituloSecaoContainer = styled.div`
  color: black;
  text-align: center;
`
const BotaoSocial = styled.div`
  text-align: center;
`

function App() {
  return (
    <div>
      <TituloSecaoContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fldb3-1.fna.fbcdn.net/v/t1.6435-9/69318470_2293539760745195_1103911899080163328_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=XJ2qM12EP_kAX8cXquk&_nc_ht=scontent.fldb3-1.fna&oh=7575dce9f9c3d2989924145d47111d69&oe=61A9B769"
          nome="Igor Eiiji Avelar Matsuoka" 
          descricao="Oi, me chamo Igor Matsuoka e sou um aluno da Labenu. Estou em processo de transição de carreira e estou descobrindo minha paixão pela tecnologia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </TituloSecaoContainer>

      <TituloSecaoContainer>
        <h2>Habilidades</h2>
        <Habilidades
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqdH1MkgFZ4MXQxF15BCTsZ8mu7UV-_MFc21kApF2HKjW1jHwXYFVqDYEaWEm40MCrv90&usqp=CAU"
          nome="Igor Eiiji Avelar Matsuoka" 
          descricao1="Inglês avançado"
          descricao2="Boa comunicação"
          descricao3="Proatividade"
          descricao4="Disposição para aprender"
          descricao5="Consistência no dia-a-dia"
        />
        </TituloSecaoContainer>

      <TituloSecaoContainer>
          
          <CardPequeno
            imagem="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
            informacao="E-mail:"
            texto="igor.mtka@gmail.com"
          />

          <CardPequeno
            imagem="https://cdn.folhape.com.br/img/c/1200/900/dn_arquivo/2020/02/google-maps.jpg"
            informacao="Endereço:"
            texto="Rua Leonel de Oliveira Reis, 92 - Londrina-PR"
          />
      </TituloSecaoContainer>

      <TituloSecaoContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://vitturi.com.br/img/touch/image.png" 
          nome="Vitturi Construção" 
          descricao="Estágiario de engenharia civil/assistente de engenheiro civil" 
        />
        
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Estudante de desenvolvimento Web" 
        />
      </TituloSecaoContainer>

      <BotaoSocial>
        <h2>Minhas redes sociais</h2>
        <ImagemButton2 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
        />        

        <ImagemButton2 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
      </BotaoSocial>
    </div>
  );
}

export default App;
