'use client';
import { useUserContext, userContext } from "@/contexts";
import { userContextType } from "@/contexts";
import { useEffect , useState } from "react";

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
import { useModalAluno } from "./modals/zustand/useModalAluno";
import ModalAluno from "./modals/modal/modalAluno";


export default function Usuario(){
    
    const {userLogin} = useUserContext();


    const [isOpenDelete , setIsOpenDelete] = useState<Boolean>(false);
    const [isOpenEdit , setIsOpenEdit] = useState<Boolean>(false);


    const fecharDelete = () =>{
        setIsOpenDelete(false);
    }
    const fecharEdit = () =>{
        setIsOpenEdit(false);
    }
    const abrirDelete = () =>{
         setIsOpenDelete(true)
    }
    const abrirEdit = () =>{
         setIsOpenEdit(false);
    }

    if(!userLogin){
        return ""
    }
    
    useEffect(()=>{
        console.log(isOpenDelete);
        console.log(isOpenEdit);

    })



    return(
     <ContainerPage>
        {/**Componente de imagem e botões*/}
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

        { (!isOpenDelete && !isOpenEdit)  && (
        <ButtonComponent
        onClick={()=>{setIsOpenDelete(true)}}
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
        )}

        {/** edit profile */}
        {((!isOpenEdit && !isOpenDelete) || (!isOpenDelete)) && (
        <ButtonComponent
         onClick={()=>{setIsOpenEdit(true)}}
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
         )}


       </ContainerButtons>
        </ContainerImageAndButtons>
     
     {/** Componente de Card das informações */}
      {(!isOpenDelete === !isOpenEdit) && (
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
       )}
     
     {/**botão que chama a função do componente de excluir */}
     {isOpenDelete && (
     <button onClick={fecharDelete}>Fechar Delete</button>
    )}

  {/**Botão que a função do componente de update 
   * - possui outras funções */}
  {isOpenEdit && (
  <button onClick={fecharEdit}>Fechar Edit</button> 
  )}

     </ContainerPage>
    )
}