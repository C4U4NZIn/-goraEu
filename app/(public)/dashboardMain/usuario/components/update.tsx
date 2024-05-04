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
    userFormSchema,
    userFormSchemaUpdate,
    userFormUpdateUser,
    alunoFormUpdate
  } from "../zod/usuario";
import { updateFieldType } from '../page';



type ErrorsType = {
    [key:string]:{message:string};
}


const UpdateComponent = ({nameField , widthContainer , heightContainer , tipoCampo , isOpenUpdateField}:updateFieldType) =>{

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


       const fecharUpdateField = () =>{
        isOpenUpdateField = false;
       }
       const handleSubmitUpdateComponent = (data:any) =>{
       console.log(data);   
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
    // se o campo for pra alterar a password
    //fazer literalmente algo chamado step...
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
        <CardUserContainerExclude $width={widthContainer} $height={heightContainer}>
        <form
        onSubmit={handleSubmit(handleSubmitUpdateComponent)}
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
    <ContainerInfoFieldExclude>
     <Label
     style={{
      fontSize:'22px',
      marginLeft:'2.2rem',
      alignSelf:'flex-start'
     }}
     >Insira a senha</Label>
     <InputUsuarioPage
     {...register('password')}
     />
     {errors.password && (<TextError>{errors.password.message}</TextError>)}
    </ContainerInfoFieldExclude>
    <ContainerInfoFieldExclude
    style={{
      display:'flex',
      flexDirection:'column',
      gap:'0.25rem',
      height:'5rem'
    }}
    >
     
    
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
     )

    }


    </>
   )

}
export default UpdateComponent;