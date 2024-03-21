import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';
import styles from '../styled/image.module.css'
import logoAgoraFmm from '../images/WhatsApp Image 2024-03-11 at 20.05 1LogoAgoraFMM.svg'


const ViewLandingPage = styled.div`
min-height: 100vh;
width: 98.6vw;
display: flex;
flex-direction: column;


`
const ContainerTopLanding = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100vh;


`
const CenterContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
background-color: yellow;
`
const ContainerTitleButton = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
justify-content: space-around;
align-items: center;
background-color: #fff;
`
const ContainerTitleCards = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100vh;
background-color: blueviolet;
`
const Footer = styled.footer`
display: flex;
flex-direction: column;
width: 100%;
height: 75vh;
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
const LoginButton = styled.button`
height: 5rem;
width: 16rem;
border-radius: 8px;
background-color:rgba(205, 224, 89, 1);
align-items: center;
justify-content: center;
margin-left:1.5rem;

`
const ContainerButtonLogo = styled.div`
height: 25rem;
width: 17.5rem;
display: flex;
flex-direction: column;
gap: 6.25rem;
margin-left: 60.5625rem;
margin-top: 3.3125rem;

`

export default function LandingPage(){
    return(
      

    <>
     <ViewLandingPage>
 
    <ContainerTopLanding>

      <ContainerButtonLogo>

          <LoginButton>
          <Link 
          href='/SignUp'
          style={{textDecoration:'none'}}
          ><H1>Login</H1></Link></LoginButton>

        <Image
        alt=''
        src={logoAgoraFmm}
        priority
        className={styles.stylesImage}
        />
      </ContainerButtonLogo>
        
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