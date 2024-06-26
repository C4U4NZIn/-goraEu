"use client";
import {
    ButtonComponent,
    TopUserContainerTitle,
    ContainerButtons,
    CardUserContainerExclude,
    ContainerInfoFieldExclude,
    CardUserInfoExclude,
    InputUsuarioPage,
    TextError,
    Label
} from  '../styled/usuario';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    userFormSchemaUpdate,
    userFormSchemaPassword,
    userFormSchemaEmail,
    userFormSchemaTelefone,
    userFormTypeUpdate
  } from "../zod/usuario";
import { updateFieldType } from '../page';
import styled from 'styled-components';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useModalProfessor } from '../modals/zustand/useProfessorModal';
import { useUserContext } from '@/contexts';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
    const DefaultContainerExclude = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
    `
     const StepContainer = styled.div<{$transformProps:number;}>`
     width: 58.50rem;
     height: 100%;
     transform: translateX(${props=>props.$transformProps}rem);
     transition: 250ms ease-in-out;
     display: flex;
     margin-left:-29.25rem;
     flex-direction: row;
     padding: 0;
   `
const UpdateComponent = ({ otpCode ,nameField , widthContainer , heightContainer , tipoCampo , isOpenUpdateField , children}:updateFieldType) =>{
    const [isValidOtp , setIsValidOtp] = useState<boolean>(false);
    const [verifiedCode , setVerifiedCode] = useState<string>('I');
    const {open , close} = useModalProfessor();
    const [stepExclude , setStepExclude] = useState<number>(0);
    const transformProps = -stepExclude*29.25 + 29.25;
    const {verifyCode ,  userLogin, updateProfessorByPartialFields } = useUserContext();
    const router = useRouter();
    const useFormFactoryParcial = (nameField:string) =>{
   
         let field = nameField.toLowerCase();
         let resolverUser;
         let defaultValues;
          
         switch(field){

         case 'password':
          resolverUser = zodResolver(userFormSchemaPassword);
          defaultValues = {
            password:''
          }
          break;
        case 'email':
          resolverUser = zodResolver(userFormSchemaEmail);
          defaultValues = {
            email:''
          }
          break;
        case 'telefone':
          resolverUser = zodResolver(userFormSchemaTelefone);
          defaultValues = {
            telefone:''
          }
          break;
       }
     
      return useForm({
        resolver:resolverUser,
        defaultValues:defaultValues,
        mode:'onChange'
      })
   
    }
    const {
      register:registerPassword,
      handleSubmit:handlSubmitPassword,
      formState:{
        errors:errorsPassword
      }
    } = useFormFactoryParcial('password');
    const {
      register:registerUpdateComponent,
      handleSubmit:handlSubmitUpdateComponent,
      watch:watchUpdateComponent,
      formState:{
        errors:errorsUpdateComponent
      }
    } = useFormFactoryParcial(nameField);
       //envia o dado do input pra função do contexto atualizar 
       //os dados do usuário
       //recebe a confirmação do toast de update
      const handleSubmitUserUpdateComponent = async (data:userFormTypeUpdate) =>{
        let fieldName =nameField.toString().toLowerCase();
        // erro de tipagem
       let response
       
        if(fieldName){
         response = await updateProfessorByPartialFields({
          data,
          fieldName
         });
        if(response?.status === 202){
          toast.success(response?.messageFromApi);
          console.log("resposta=>",response?.messageFromApi);
        }


        }
        setTimeout(()=>{
          router.push('/dashboardProfessor/usuario');
          window.location.reload();
        },1000) 
        


       }
      const handleSubmitPasswordComponent = async (data:userFormTypeUpdate) =>{
        let fieldName = nameField.toString().toLowerCase();
        let response
        if(fieldName){
        response = await updateProfessorByPartialFields({
          data,
          fieldName
        });
         if(response?.status === 202){
            toast.success(response?.messageFromApi);
            console.log('resposta=>',response?.messageFromApi);
            setTimeout(()=>{
           router.push('/dashboardProfessor/usuario');
           window.location.reload();
            },1000);

         }else{
           toast.error(response?.messageFromApi);
         }
        }
      }
      let isLengthValidOtp = otpCode?.length === 4;
      
     const goToNextStep = async (event?:React.MouseEvent<HTMLButtonElement>) =>{
       let response;    
       event?.preventDefault();
      if(isLengthValidOtp && otpCode){

          response = await verifyCode({
           id:userLogin?.id,
           currentCode:otpCode
          }) 
            
          const isValidOtpUser = response?.isValidOtpCode;
     
          console.log(isValidOtp);
           if(isValidOtpUser){
            
             setStepExclude(stepExclude+1);
           }else{
             toast.error('Digite um código válido!');
           }
      }
        }

     {/**debug de código - remover depois */}
     const isOtpValid = otpCode === verifiedCode;


    console.log("código correto=>",verifiedCode);
    console.log("Ele é válido?=>",isValidOtp);
  

      {/** Teve nenhum erro - ent... Continuar como tá */}
      return(
    <>

     {tipoCampo !== 'password' ? (
      <CardUserContainerExclude $width={widthContainer} $height={heightContainer}>
    <form
    onSubmit={handlSubmitUpdateComponent(handleSubmitUserUpdateComponent)}
    >
<TopUserContainerTitle>
    <h2>Alterar {nameField}</h2>
   
</TopUserContainerTitle>


{/**Componente de Informações */}
<CardUserInfoExclude
style={{
  marginTop:'2rem',
  gap:'4rem'
}}
>
<ContainerInfoFieldExclude>
 <Label
 style={{
  fontSize:'22px',
  marginLeft:'2.2rem',
  alignSelf:'flex-start'
 }}
 >Insira o(a) {nameField}</Label>
 <InputUsuarioPage
 {...registerUpdateComponent(nameField.toLowerCase())}
 />
 {errorsUpdateComponent.email && typeof errorsUpdateComponent.email.message === 'string'  && (<TextError>{errorsUpdateComponent.email.message}</TextError>)}
 {errorsUpdateComponent.telefone && typeof errorsUpdateComponent.telefone.message === 'string' && (<TextError>{errorsUpdateComponent.telefone.message}</TextError>)}
</ContainerInfoFieldExclude>

{/**Adicionar um form nesse container */}
{/**Foram utilizados vários inline aqui, mas nada que prejudique legibilidade */}
<ContainerButtons
style={{
  position:'unset',
  width:'100%',
  marginTop:'-2rem',
  padding:0,
  gap:'1rem',
  zIndex:0
}}
>
  <ButtonComponent
   onClick={close}
    style={{
      borderRadius:'15px'
    }}
    $width={10}
    $height={2}
    $borderRadius={0}
    $backgroundColor="rgba(242, 105, 33, 1)"
  ><p
  style={{
    color:'#fff'
  }}
  >Cancelar</p></ButtonComponent>
  <ButtonComponent
  type="submit"
      style={{
          borderRadius:'15px'
        }}
      $width={10}
      $height={2}
      $borderRadius={0}
      $backgroundColor="rgba(242, 105, 33, 1)"
  ><p
  style={{
    color:"#fff"
  }}
  >Confirmar</p></ButtonComponent>
</ContainerButtons>
</CardUserInfoExclude>
    </form>

      </CardUserContainerExclude>  
     ):(
        <CardUserContainerExclude
         $width={widthContainer} $height={heightContainer}
         style={{
          overflow:'hidden'
         }}
         >
        
        <form
        style={{
      
        
        }}
        onSubmit={handlSubmitPassword(handleSubmitPasswordComponent)}
        >
    <TopUserContainerTitle>
        <h2>Alterar a {nameField}</h2>
       
    </TopUserContainerTitle>
    {/**Componente de Informações */}
    <CardUserInfoExclude
    style={{
      marginTop:'2rem',
      gap:'4rem'
    }}
    >
     <StepContainer $transformProps={transformProps}>
      <DefaultContainerExclude>
       {children}
      </DefaultContainerExclude>
      <DefaultContainerExclude>
       <ContainerInfoFieldExclude>
     <Label
     style={{
      fontSize:'22px',
      marginLeft:'2.2rem',
      alignSelf:'flex-start'
     }}
     >Insira a senha</Label>
     <InputUsuarioPage
     {...registerPassword('password')}
     />
     {/** Erro de baitola- tipagem */}
     {errorsPassword.password && typeof errorsPassword.password?.message === 'string' && (<TextError>{errorsPassword.password?.message}</TextError>)}
     </ContainerInfoFieldExclude>
      </DefaultContainerExclude>
     </StepContainer>

     
    {/**Adicionar um form nesse container */}
    {/**Foram utilizados vários inline aqui, mas nada que prejudique legibilidade */}
    
    {
       stepExclude === 0 && (
    <ContainerButtons
    style={{
      position:'unset',
      width:'100%',
      marginTop:'-2rem',
      padding:0,
      gap:'1rem',
      zIndex:0
    }}
    >
      {/** fechar componente */}
      <ButtonComponent
      onClick={close}
        style={{
          borderRadius:'15px'
        }}
        $width={10}
        $height={2}
        $borderRadius={0}
        $backgroundColor="rgba(242, 105, 33, 1)"
      ><p
      style={{
        color:'#fff'
      }}
     
      >Cancelar</p></ButtonComponent>
      <ButtonComponent
      onClick={goToNextStep}
      type="submit"
      disabled={!isValidOtp && !isLengthValidOtp && !isOtpValid}
          style={{
              borderRadius:'15px'
            }}
          $width={10}
          $height={2}
          $borderRadius={0}
          $backgroundColor="rgba(242, 105, 33, 1)"
      ><p
      style={{
        color:"#fff"
      }}
      >Próximo</p></ButtonComponent>
    </ContainerButtons>

       )
    }
    {
      stepExclude === 1 && (
        <ContainerButtons
        style={{
          position:'unset',
          width:'100%',
          marginTop:'-2rem',
          padding:0,
          gap:'1rem',
          zIndex:0
        }}
        >
          {/** fechar componente */}
          <ButtonComponent
          onClick={close}
            style={{
              borderRadius:'15px'
            }}
            $width={10}
            $height={2}
            $borderRadius={0}
            $backgroundColor="rgba(242, 105, 33, 1)"
          ><p
          style={{
            color:'#fff'
          }}
         
          >Cancelar</p></ButtonComponent>
          <ButtonComponent
           type="submit"
              style={{
                  borderRadius:'15px'
                }}
              $width={10}
              $height={2}
              $borderRadius={0}
              $backgroundColor="rgba(242, 105, 33, 1)"
          ><p
          style={{
            color:"#fff"
          }}
          >Confirmar</p></ButtonComponent>
        </ContainerButtons>
      )
    }
    


    </CardUserInfoExclude>
        </form>
    
        </CardUserContainerExclude>  
     )

    }


    </>
       )

}
export default UpdateComponent;