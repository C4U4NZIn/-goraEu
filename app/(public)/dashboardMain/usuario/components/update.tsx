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
    userFormSchemaEmail
  } from "../zod/usuario";
import { updateFieldType } from '../page';
import styled from 'styled-components';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useEffect } from 'react';
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
  
    const [otp , setOtp] = useState<string>('');
    const [stepExclude , setStepExclude] = useState<number>(0);
    const transformProps = -stepExclude*29.25 + 29.25;
    const [isSubmited , setIsSubmited] = useState<boolean>(false);
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

         default:
          throw new Error(`Campo ${field} inválido`); 
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




    const fecharUpdateField = () =>{
        isOpenUpdateField = false;
       }
     const handleSubmitUpdateComponent = (data:userFormUpdateUser) =>{
      console.log(data.password);  
      }
      const handleSubmitPasswordComponent = (data:userFormExclude) =>{
        console.log(data.password);
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
    onSubmit={handleSubmit(handleSubmitUpdateComponent)}
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
 {...register(fieldsPossible[strToRegisterUpdateField])}
 />
 {errors.email  && (<TextError>{errors.email.message}</TextError>)}
 {errors.telefone  && (<TextError>{errors.telefone.message}</TextError>)}
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
   onClick={fecharUpdateField}
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
     {errorsPassword.password && (<TextError>{errorsPassword.password.message}</TextError>)}
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
           onClick={()=>{
            setIsSubmited(true)
           }}
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