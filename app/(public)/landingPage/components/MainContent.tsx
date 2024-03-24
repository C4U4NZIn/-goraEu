import 
{ 
  Button ,
  Section ,
  Title ,
  Text, 
  SignUpContainer ,
  CardsContainer , 
  Card , 
  ContainerImage ,
  DescriptionText
} from '../styled/styles';
import simulado from '../images/image 58simulados.svg'
import desempenho from '../images/image 57desemepenho.svg'
import salas from '../images/virtual 1sala_virtual.svg'
import circuloDeformado1 from '../images/Rectangle 365cadastro.svg'
import circuloDeformado2 from '../images/Rectangle 364Por que.svg'
import circuloDeformado3 from '../images/Rectangle 363inferiorDireita.svg'
import Image from "next/image";
import Link from "next/link";

export default function MainContent(){

return(
    <>
       <Section  $justify='around'>
            <Text>"A educação não é preparação para a vida, a educação é a própria vida."</Text>
            
            <SignUpContainer>

            <Image
            alt=''
            priority
            style={{position:'absolute' , height:'521px' , width:'531px'}}
            src={circuloDeformado1}
            />
            <Button style={{position:'absolute'  ,  top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width:'376px' , height:'109px'}}><Text style={{paddingLeft:'3rem'}}><Link href='/register' style={{textDecoration:'none' , color:' #006792'}}>Cadastre-se</Link></Text></Button>

            </SignUpContainer>

        </Section>
        <Section $flexDirection='column' $justify='around'>

         <Image
         src={circuloDeformado2}
         priority
         alt=''
         style={{
           position: 'absolute',
           top: '100px',
           left: '-6%',
           zIndex: -10,
           height: '80%',
          }}
          />
         <Image
        src={circuloDeformado3} 
        priority
        alt=''
        style={{
         position: 'absolute',
         right: '-65px',
         bottom: '-25%',
         zIndex: -10,
         height: '80%'

        }}        
        />

        <Title>Por que o Ágora?</Title>

        <CardsContainer>
          <Card>
          <ContainerImage>
           <Image alt='' src={simulado} style={{width:'70%'}}/>
          </ContainerImage>
          <DescriptionText>Simulados</DescriptionText>
          </Card>

          <Card>
          <ContainerImage>
           <Image alt='' src={desempenho} style={{width:'70%'}}/>
          </ContainerImage>
          <DescriptionText>Estatística de desempenho</DescriptionText>
          </Card>
 
          <Card>
          <ContainerImage>
          <Image alt='' src={salas} style={{width:'70%'}}/>
          </ContainerImage>
          <DescriptionText>Sala de aula Virtual</DescriptionText>
          </Card>
        </CardsContainer>

        </Section>
    </>
)



}