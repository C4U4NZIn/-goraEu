"use client";
import styles from '../../dashboardMain/salas/css/salas.module.css'
import AvatarTemplate from '../../usuario/avatar';
import { convertBufferToImage } from '@/default';
import Image from 'next/image';
import natalia from '../../dashboardMain/salas/images/image 25Natália.svg'
import {
   Text ,
   Message ,
   ContainerStyledProfile,
   ContainerImage,
   ContainerImageText,
   ContainerImgTextPlanet,
   ContainerText
}  from '../../components/global/styled/profile'


const ContainerProfile = ({
  profName ,
  coordenadorName,
  username,
  imgAvatar,
  imgPlanet,
  namePlanet,
  role,
  avatarUsername,
  bgColor

}:{
    username?:string;
    message?:string;
    imgAvatar?:string;
    imgPlanet?:string;
    namePlanet?:string;
    role?:string;
    avatarUsername?:string;
    bgColor?:string;
    profName?:string;
    coordenadorName?:string;
}) =>{
  

  
  let profUsername = profName
  let coordUsername = coordenadorName
  let alunoUsername
   
  if(username){
   alunoUsername = username.split(' ')[0] + ' ' + username.split(' ')[1];
  }

    const imgProfile = convertBufferToImage(imgAvatar);
    const currentRole = role?.split(' ')[0];

return(
    <>
    <ContainerStyledProfile 
      $bgColor={bgColor}
    >
      <ContainerImageText>
        <ContainerImage
        $bgColor={bgColor}
        >
          {
            avatarUsername ? (
          <AvatarTemplate
          username={avatarUsername}
          heightImg={150}
          widthImg={150}
          />
            ) : (
          <Image
          priority
          alt='ProfileImg'
          src={natalia}

          />
            )
          }
        </ContainerImage>
        {
          (currentRole === 'aluno' && alunoUsername) && (
            <Text
            $fontSize={24}
            $fontWeight={700}
            >
              {alunoUsername}
            </Text>
          )
        }
                {
          currentRole === 'professor' && profUsername && (
            <Text
            $fontSize={24}
            $fontWeight={700}
            >
              {profName?.split(' ')[0] + ' ' + profName?.split(' ')[1]}
            </Text>
          )
        }
                {
          (currentRole === 'coordenador' && coordUsername) && (
            <Text
            $fontSize={24}
            $fontWeight={700}
            >
              {coordUsername.split(' ')[0] + ' ' + coordUsername.split(' ')[1]}
            </Text>
          )
        }
      </ContainerImageText>

     <ContainerText>
      <Message>
       <Text
      $fontSize={24}
      $fontWeight={700}
       >
       Olá, {username?.split(' ')[0]} !
        </Text>  
     
       {
        currentRole === 'aluno' && (
          // recebe props de tamanho 
          // estilo pra ficar bonito
          <Text
          $fontSize={20}
          $fontWeight={400}
          >
            Bom dia de estudos<br />hoje, sei que você<br />consegue.
          </Text>
        )
       }
       {
        currentRole === 'professor'  && (
          //legenda que o professor poderá colocar
          <Text
          $fontWeight={400}
          $fontSize={20}
          >
           Bem-vindo(a) a nossa sala virtual do preparar de 2024. Sou o professor {profName?.split(' ')[0] + ' ' + profName?.split(' ')[1]}.
          </Text>
        )
       }
       {
        currentRole === 'coordenador' && (
          <>
          </>
        )
       }

       
      </Message> 


     </ContainerText>

    {
      imgPlanet ? (
     <ContainerImgTextPlanet>
      <Image
      priority
      alt='imgPlanet'
      src={imgPlanet}
      width={120}
      height={120}
      />
      <Text
      $fontWeight={400}
      $fontSize={15}
      >
        {namePlanet}
      </Text>
     </ContainerImgTextPlanet>

      ) : (
          <>
          </>
      )
    }
 

    </ContainerStyledProfile>
    
    </>
)

}

export default ContainerProfile;