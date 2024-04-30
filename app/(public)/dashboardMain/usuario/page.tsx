'use client';
import { useUserContext, userContext } from "@/contexts";
import { userContextType } from "@/contexts";
import { useEffect } from "react";
import Natalia from '../salas/images/image 25Natália.svg'
import Delete from './images/lixeira 1.svg'
import EditProfile from './images/lapis 2.svg'
import Image from "next/image";
import {
  ContainerPage,
  ContainerImageAndButtons,
  ButtonComponent,
  CardUserContainer,
  CardUserInfo,
  TopUserContainerTitle,
  ContainerButtons
} from "../usuario/styled/usuario"
import { ContainerImage } from "../usuario/styled/usuario";


export default function Usuario(){
    
    const {userLogin} = useUserContext();


    if(!userLogin){
        return ""
    }

    return(
     <ContainerPage>
        {/**Componente de imagem */}
        <ContainerImageAndButtons>
            <ContainerImage>

                { userLogin?.avatar === "" ? (
                    <Image
                    style={{
                        width: '9.6875rem',
                        height: '9.733125rem',
                        borderRadius: '281.5px',
                    }}
                    alt="photoProfileUser"
                    priority
                    src={userLogin.avatar}
                    />

                ):(
                    <Image
                    style={{
                        width: '9.6875rem',
                        height: '9.733125rem',
                        borderRadius: '281.5px',
                    }}
                    alt="photoProfileUser"
                    priority
                    src={Natalia}
                    />
                )}

            </ContainerImage>
        {/** Botoes que vão abrir outros componentes*/}
       
       <ContainerButtons>
       {/** delete profile */}
        <ButtonComponent
  
        >
        <Image
        alt="imgDeleteProfile"
        priority
        src={Delete}
        style={{
            width:'1.5rem',
            height:'1.5rem'
        }}
        />
        </ButtonComponent>
        {/** edit profile */}
        <ButtonComponent

        >

        <Image
        alt="imgEditProfile"
        priority
        src={EditProfile}
        style={{
            width:'1.5rem',
            height:'1.5rem'
        }}
        />
        </ButtonComponent>

       </ContainerButtons>
     
        </ContainerImageAndButtons>
     
     {/** Componente de Card das informações */}
      <CardUserContainer>
        <TopUserContainerTitle>
            <h2>Informações</h2>
            <span></span>
       </TopUserContainerTitle>
        
        <CardUserInfo>
        <div>
         <h4>Nome</h4>
         <p>{userLogin?.username}</p>
        </div>
        <div>
         <h4>Email</h4>
         <p>{userLogin?.email}</p>
        </div>
        <div>
        <h4>Telefone</h4>
        <p>{userLogin?.phonePersonal}</p>
        </div>
        <div>
        <h4>Senha</h4>
        <p>********</p>
        </div>
        </CardUserInfo>

      </CardUserContainer>    

     
     </ContainerPage>
    )
}