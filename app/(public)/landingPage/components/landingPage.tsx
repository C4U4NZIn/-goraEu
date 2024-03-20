import Link from 'next/link'
import styled from 'styled-components';


const ViewLandingPage = styled.div`
height: 190.0625rem;
width: 100%;
display: flex;
flex-direction: column;
background-color: gray;

`
const ContainerTopLanding = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 25.51%;
background-color: aqua;

`
const CenterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 55.57%;
background-color: yellow;
`
const ContainerTitleButton = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 55%;
justify-content: space-evenly;
align-items: center;
background-color: burlywood;
`
const ContainerTitleCards = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 45%;
background-color: blueviolet;
`
const Footer = styled.footer`
display: flex;
flex-direction: column;
width: 100%;
height: 19.33%;
background-color: blue;
`


const H1 = styled.h1`
color: rgba(0, 97, 137, 1);
margin: 0;
padding: 0;
`
const Button = styled.button`
background-color:  rgba(205, 224, 89, 1);
align-items: center;
justify-content: center;
width: 23.5rem;
height: 6.8125rem;
border-radius: 8px;
`



export default function LandingPage(){
    return(
      

    <>
     <ViewLandingPage>
 
    <ContainerTopLanding>

        <H1>Landing Page Container Principal</H1>
    </ContainerTopLanding>
    <CenterContainer>
        <ContainerTitleButton>
    <H1>"A educação não é<br />preparação para a<br />vida,   a educação é a <br/> própria vida".</H1>

    <Button><Link href='/register' style={{
        textDecoration:'none'
    }}><H1>Cadastre-se</H1></Link></Button>

        </ContainerTitleButton>
        <ContainerTitleCards>
            <H1>
                Landing Page Container Por que
            </H1>
        </ContainerTitleCards>
    </CenterContainer>
    <Footer><H1>Footer</H1></Footer>
     </ViewLandingPage>
     </>
    
    )
}