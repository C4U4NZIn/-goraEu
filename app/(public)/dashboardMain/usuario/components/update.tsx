"use client";
import {
    ButtonComponent,
    CardUserContainer,
    CardUserInfo,
    TopUserContainerTitle,
    ContainerButtons,
    ContainerInfoField,
    Label,
    TextInfo,
    InputStyles,
    CardUserContainerExclude,
    ContainerInfoFieldExclude,
    CardUserInfoExclude,
    InputUsuarioPage,
    TextError
    
} from  '../styled/usuario';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    userFormExclude,
    userFormSchemaUpdate,
    userFormUpdateUser,
    alunoFormUpdate,
    userFormSchemaPassword,
    userFormSchemaEmail,
    userFormSchemaTelefone,
    userFormTypeUpdate
  } from "../zod/usuario";
import { updateFieldType } from '../page';
import styled from 'styled-components';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useEffect } from 'react';
import { useModalAluno } from '../modals/zustand/useModalAluno';
type ErrorsType = {
    [key:string]:{message:string};
}



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
const UpdateComponent = ({nameField , widthContainer , heightContainer , tipoCampo , isOpenUpdateField , children}:updateFieldType) =>{
    const {close} = useModalAluno();
    const [stepExclude , setStepExclude] = useState<number>(0);
    const transformProps = -stepExclude*29.25 + 29.25;
    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
        
      } = useForm({
        resolver: zodResolver(userFormSchemaUpdate),
        defaultValues: 
        {
         
            username:'',
            password:'',
            telefone:'',
            email:''
          
        },
        mode:'onChange'
       });

     
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
      watch:watchPassword,
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



      const fecharUpdateField = () =>{
        isOpenUpdateField = false;
       }
       //envia o dado do input pra função do contexto atualizar 
       //os dados do usuário
       //recebe a confirmação do toast de update
      const handleSubmitUserUpdateComponent = (data:userFormTypeUpdate) =>{
        
        let value;
        
        // erro de tipagem
         switch(nameField.toLowerCase()){
          case 'email':
           if('email' in data){
             value = data.email;
           }

             break;
          case 'telefone':
             if('telefone' in data){
                 value = data.telefone;
             }
            break;
          
            default:
              console.log('Porque tu vens pra cá?');
          }
      
        console.log("pq dá certo?=>",data,value);  
       }
      const handleSubmitPasswordComponent = (data:userFormTypeUpdate) =>{
        console.log(data);
       }
      const goToNextStep = (event?:React.MouseEvent<HTMLButtonElement>) =>{
     event?.preventDefault();
     setStepExclude(stepExclude+1);
       }
      const goToPreviusStep = (event?:React.MouseEvent<HTMLButtonElement>) =>{
       event?.preventDefault();
       setStepExclude(stepExclude-1);
       }
      //mesmo truque do middleware
      const strToRegisterUpdateField = nameField.toLowerCase();
      const fieldsPossible:any = {
        username:"username",
        password:"password",
        telefone:"telefone",
        email:"email"
      }
   
      let errorsDynamic:ErrorsType
      const email = watch('email');
      const username = watch('username');
      const telefone = watch('telefone');
      const password = watchPassword('password');
      
  
    
     

  
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