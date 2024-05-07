'use client';
import { useUserContext} from "@/contexts";
import React, { useEffect , useState } from "react";
import Natalia from './images/image 25Natália.svg'
import Delete from './images/lixeira 1.svg'
import EditProfile from './images/lapis 2.svg'
import Image from "next/image";
import bcrypt from 'bcryptjs'
import {
  ContainerPage,
  ContainerImageAndButtons,
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
  
} from "../usuario/styled/usuario"
import { ContainerImage } from "../usuario/styled/usuario";
import OtpInput from 'react-otp-input'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
   userFormExclude,
   userFormSchemaPassword,
   userFormSchemaUpdate,
   userFormUpdateUser,
   alunoFormUpdate
 } from "./zod/usuario";
import UpdateComponent from "./components/update";
import { useModalProfessor } from "./modals/zustand/useProfessorModal";
import AvatarTemplate from "../../usuario/avatar";
import { convertBufferToImage } from "@/default";
export  type updateFieldType = {
    nameField:string;
    widthContainer:number;
    heightContainer:number;
    tipoCampo:string;
    isOpenUpdateField?:boolean
    fecharUpdateFieldComponent?:()=>void;
    children?:React.ReactNode;
    otpCode?:string;
  
  }
  {/** infelizmente esse código todo era pra tá divido em mais de 10 arquivos e não está... */}
export default function Usuario(){
    // realizar posteriormente o processo de componentização
    //todos os componentes serão componentizados- redundancia
    //por enquanto não vou componentizar nada 
    //mas vou deixar comentado onde devem estar os componentes
    const {userLogin , sendEmailToUser , verifyCode} = useUserContext();
    const [isOpenDelete , setIsOpenDelete] = useState<Boolean>(false);
    const [isOpenEdit , setIsOpenEdit] = useState<Boolean>(false);
    const [otp , setOtp] = useState<string>('');
    const [isOpenUpdateField , setIsOpenUpdateField] = useState<Boolean>(false);
    const [propsUpdateComponent , setPropsUpdateComponent] = useState<updateFieldType>({} as updateFieldType);
    const {isOpen , open} = useModalProfessor();
    const username = userLogin?.username;
    const image = convertBufferToImage(userLogin?.avatar);
    const {
      register,
      handleSubmit,
      watch,
      formState:{errors},
      
    } = useForm({
      resolver: zodResolver(userFormSchemaPassword),
      defaultValues: 
      {
        password:'',
      },
      mode:'onChange'
     });
     const fecharDelete = () =>{
        setIsOpenDelete(false);
    }
     const fecharEdit = () =>{
        setIsOpenEdit(false);
     }
     const abrirDelete = async () =>{
         const response = await sendEmailToUser({
          email:userLogin?.email
         })
         console.log(response?.message);
         console.log(response?.status);
        setIsOpenDelete(true)
      }
     const abrirEdit = () =>{
        setIsOpenEdit(false);
      }
      const deleteUser = () =>{
        console.log('usuário deletado=>' , userLogin?.username);
      }
      const abrirUpdateFieldComponent = (data:updateFieldType) =>{
        setPropsUpdateComponent(data);
        setIsOpenUpdateField(true);
        open();
        resendEmailToUser();
      }
      const handleSubmitPassword = async (data:userFormExclude) =>{
        console.log(data.password);
        const userPassHashed = userLogin?.password;
        let isValidPassword
        if(userPassHashed){
          isValidPassword = bcrypt.compareSync(data.password,userPassHashed);
        }
        let response
        if(isVoidOtpField){
          response = await verifyCode({
            id:userLogin?.id,
            currentCode:otp
          })
        }
        const isValidOtp = response?.isValidOtpCode;
        
        if(isValidPassword && isValidOtp){
          deleteUser();
        }else{
          console.log('usuario não deletado=>',isValidPassword,isValidOtp);
        }
        
      }
      const resendEmailToUser = async (event?:React.BaseSyntheticEvent) =>{
         event?.preventDefault();
        const response = await sendEmailToUser({
          email:userLogin?.email
        })
        console.log("código reenviado?=>",response?.message)
      }
      const verifyCodeToUpdateComponent = async () =>{
        let response
        if(isVoidOtpField){
          response = await verifyCode({
            id:userLogin?.id,
            currentCode:otp
          })
        }
        const isValidOtp = response?.isValidOtpCode;

        return isValidOtp
      }
      
      if(!userLogin){
        return ""
      }
      
      {/** funções de debug */}
      useEffect(()=>{
        console.log(isOpenDelete);
        console.log(isOpenEdit);
        console.log(otp);
      })
      const isActivePasswordField = watch('password') && !errors.password;
      const isVoidOtpField = otp !== '';
      
      console.log(otp);


// quando tiver tempo componentizo isso tudo
    return(
      
     <ContainerPage>
        {/**Componente de imagem e botões*/}
        {/** Alterar apenas a imagem para um avatar padrão da material UI
         * Depois fazer tela de update de imagem
         */}
        <ContainerImageAndButtons>
            <ContainerImage>
            {
                 (image === null) &&  username ? (
                        <>
                   <AvatarTemplate username={username}/>
                        </>

                    ):(
                <>
                     <Image
                        priority
                        alt=''
                        src={Natalia}
                        />
                   
                </>
                    ) }

            </ContainerImage>
        {/** Botoes que vão abrir outros componentes*/}
       <ContainerButtons>
       {/** button delete profile */}

        { (!isOpenDelete && !isOpenEdit)  && (
        <ButtonComponent
        $width={2.5}
        $height={2.5}
        $borderRadius={100}
        $backgroundColor="rgba(242, 105, 33, 1)"
        onClick={abrirDelete}
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

        {/** button edit profile */}
        {((!isOpenEdit && !isOpenDelete) || (!isOpenDelete)) && (
        <ButtonComponent
        $width={2.5}
        $height={2.5}
        $borderRadius={100}
        $backgroundColor="rgba(242, 105, 33, 1)"
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
      <CardUserContainer $width={29.25} $height={25.9}>
        <TopUserContainerTitle>
            <h2>Informações</h2>
            <span></span>
       </TopUserContainerTitle>
        {/**Componente de Informações */}
        <CardUserInfo>
        <ContainerInfoField>
         <Label>Nome</Label>
         <TextInfo>{userLogin?.username}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
         <Label>Email</Label>
         <TextInfo>{userLogin?.email}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
        <Label>Telefone</Label>
        <TextInfo>{userLogin?.phonePersonal}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
        <Label>Senha</Label>
        <TextInfo>********</TextInfo>
        </ContainerInfoField>
        </CardUserInfo>

      </CardUserContainer>    
       )}
     {/**Componente que chama
      *  a função  de excluir */}
     {isOpenDelete && (
      <>
      {/**Componente de Exclude */}

      <CardUserContainerExclude $width={29.25} $height={29}>
      <form
    onSubmit={handleSubmit(handleSubmitPassword)}
    >
<TopUserContainerTitle>
    <h2>Excluir Conta</h2>
   
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
  {/** O onKeyPress está com dias contados
   * verifica e apenas permite o usuario 
   * digitar números
   * Componentizar esse OtpInput depois
   */}
  <Label
 style={{
  fontSize:'20px',
  alignSelf:'center'
 }}
 >Insira o código enviado no E-mail</Label>
   <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) =>
      <InputStyles
       {...props}
       onKeyPress={(event)=>{
        if(!/[0-9]/.test(event.key)){
         event.preventDefault();
        }
       }}
      />}
      containerStyle={{
        width:'60%',
        height:'100%',
        borderRadius:'none',
        border:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px'
      }}
      inputStyle={{
        width:'15%',
        height:'80%',
        border:'1px solid rgba(242, 105, 33, 1)',
        fontSize:'40px',
        backgroundColor:'rgba(232, 218, 218, 1)',
        borderRadius:'10px',
        WebkitAppearance:'none',
        margin:'0'
      }}
      inputType="text"
    />
    <p
    style={{
      margin:0,
      padding:0,
      border:'none',
      borderRadius:'none',
      color:'rgba(242, 105, 33, 1)'
    }}
    onClick={resendEmailToUser}
    >Reenviar código</p>
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
  onClick={fecharDelete}
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
  disabled={!isActivePasswordField || !isVoidOtpField}
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
  >Excluir</p></ButtonComponent>
</ContainerButtons>
</CardUserInfoExclude>
      </form>
      </CardUserContainerExclude> 

      </>
    )}

  {/**Componente que puxa função de update 
   * - possui outras funções */}
  {(isOpenEdit && !isOpen) && (
<>
     {/**Componente de edit que puxa um formulário de update */}
   <div
   style={{
    width:'29.25rem',
    height:'21rem',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignContent:'center',
    gap:'0.5rem'
}}>
<CardUserContainer $width={29.25} $height={20}>
<TopUserContainerTitle>
    <h2>Informações</h2>
    <span></span>
</TopUserContainerTitle>
{/**Componente de Informações update*/}
<CardUserInfo>
<ContainerInfoField
onClick={()=>{abrirUpdateFieldComponent({
  nameField:'Email',
  widthContainer:29.25,
  heightContainer:15,
  tipoCampo:'text'
})}}
>
 <Label>Email</Label>
 <TextInfo>{userLogin?.email}</TextInfo>
</ContainerInfoField>
<ContainerInfoField
onClick={()=>{abrirUpdateFieldComponent({
  nameField:'Telefone',
  widthContainer:29.25,
  heightContainer:15,
  tipoCampo:'text'
})}}
>
<Label>Telefone</Label>
<TextInfo>{userLogin?.phonePersonal}</TextInfo>
</ContainerInfoField>
<ContainerInfoField
onClick={()=>{abrirUpdateFieldComponent({
  nameField:'Senha',
  widthContainer:29.25,
  heightContainer:25,
  tipoCampo:'password'
})}}
>
<Label>Senha</Label>
<TextInfo>********</TextInfo>
</ContainerInfoField>
</CardUserInfo>

</CardUserContainer>   
  {/** Componente de Cancel Edit */}
   <div
  style={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyItems:'center',
    width:'100%',
    marginLeft:'7rem',
    gap:'0.45rem'
  }}
  >
    <h3
    style={{
        margin:0,
        padding:0,
        color:'rgba(242, 105, 33, 1)'
    }}
    >Clique no campo que deseja alterar</h3>
    <h3
    onClick={fecharEdit}
      style={{
        margin:0,
        padding:0,
        color:'rgba(242, 105, 33, 1)'
    }}
    >Cancelar Alteração</h3>
  </div>
   </div>
    
</>
  )}
   {/**Update Component - isso daq é um componente
    * 1% do arquivo componentizado
    */}
  {
    isOpen && (
      <>
      <UpdateComponent
      nameField={propsUpdateComponent.nameField}
      widthContainer={propsUpdateComponent.widthContainer}
      heightContainer={propsUpdateComponent.heightContainer}
      tipoCampo={propsUpdateComponent.tipoCampo}
      isOpenUpdateField={true}
      otpCode={otp}
      children={(
      <>
      <ContainerInfoFieldExclude
   style={{
  display:'flex',
  flexDirection:'column',
  gap:'0.25rem',
  height:'5rem'
     }}
       >
  {/** O onKeyPress está com dias contados
   * verifica e apenas permite o usuario 
   * digitar números
   * Componentizar esse OtpInput depois
   */}
  <Label
 style={{
  fontSize:'20px',
  alignSelf:'center'
 }}
 >Insira o código enviado no E-mail</Label>
   <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderInput={(props) =>
      <InputStyles
       {...props}
   
      />}
      containerStyle={{
        width:'60%',
        height:'100%',
        borderRadius:'none',
        border:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        gap:'10px'
      }}
      inputStyle={{
        width:'15%',
        height:'80%',
        border:'1px solid rgba(242, 105, 33, 1)',
        fontSize:'40px',
        backgroundColor:'rgba(232, 218, 218, 1)',
        borderRadius:'10px',
        WebkitAppearance:'none',
        margin:'0'
      }}
      inputType="text"
    />
    <p
    onClick={resendEmailToUser}
    style={{
      margin:0,
      padding:0,
      border:'none',
      borderRadius:'none',
      color:'rgba(242, 105, 33, 1)'
    }}
    >Reenviar código</p>
      </ContainerInfoFieldExclude>
      </>
        )}
     
      />
      </>
    )
  }

     </ContainerPage>
    )
}