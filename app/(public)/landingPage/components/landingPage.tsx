import Image from 'next/image';
import Link from 'next/link'
import styled from 'styled-components';
import styles from '../styled/image.module.css'
import logoAgoraFmm from '../images/WhatsApp Image 2024-03-11 at 20.05 1LogoAgoraFMM.svg'
import circuloDeformado1 from '../images/Rectangle 365cadastro.svg'
import { Height } from '@mui/icons-material';
import { height, width } from '@mui/system';
import Foguetao from '../images/WhatsApp Image 2024-03-11 at 20.18.13 (1).jpeg'
import { LoginButton } from '../styled/styles';


const ContainerSections = styled.div`
min-height: 100vh;
width: 98.6vw;
display: flex;
flex-direction: column;
`

{/** Posso colocar um mesmo component e só alterar via props alguns parametros */}
const Section = styled.section<{flexDirection?:'row'|'column' , justify?:'center'|'around'|'between'}>`
position: relative;
min-height: 100vh;
width: 100%;

display: flex;
flex-direction: ${({flexDirection = 'row'})=> flexDirection};
justify-content: ${({justify = 'center'})=> justify === 'center' ? justify:`space-${justify}`};
align-items: center;
`
const Footer = styled.footer`
width:100%;
height: 75vh;
background-color: #05175F;
`
export default function LandingPage(){
    return(
    <>

    <div style={{width:'98.4vw' , minHeight:'100vh' , display:'flex' , flexDirection:'column'}}>
        <Section justify='between' flexDirection='row' style={{ backgroundColor:'aquamarine' , display:'flex' }}>

    <LoginButton style={{position:'absolute' , top:'5%' , right:'5%'}}>Login</LoginButton>
      <Image
      alt=''
      src={Foguetao}
      priority
      style={{
        width:'60%',
        height:'100%',
        
      }}
      />
      <Image
      alt=''
      priority
      src={logoAgoraFmm}
      className={styles.stylesImage}
      />


        </Section>
        <div style={{width:'100%' , height:'100vh' , backgroundColor:'bisque'}}>

        </div>
        <div style={{width:'100%' , height:'100vh' , backgroundColor:'blue'}}>

        </div>
        <Footer>
         <h1> Terá um Footer aqui</h1>
        </Footer>
    </div>



    </>
    
    )
}