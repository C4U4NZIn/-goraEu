'use client';
import { useUserContext, userContext } from "@/contexts";
import { userContextType } from "@/contexts";
import React, { useEffect , useState } from "react";
import Natalia from '../salas/images/image 25Natália.svg'
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
  
} from "../../components/global/styled/usuario"
import { ContainerImage } from "../../components/global/styled/usuario";
import OtpInput from 'react-otp-input'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
   userFormExclude,
   userFormSchemaPassword
 } from "./zod/usuario";
import UpdateComponent from "./components/update";
import { useModalAluno } from "./modals/zustand/useModalAluno";
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
  import AvatarTemplate from "../../usuario/avatar";
  import { convertBufferToImage } from "@/default";
  import CardInfoComponent from "../../components/global/info";
  import ImageContainerButton from "../../components/global/imageContainer";
  import CancelUpdate from "../../components/global/cancelUpdate";
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
    const {isOpen , open , close} = useModalAluno();
    
    let username = userLogin?.username;
    

    




    const image = userLogin?.avatar;
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
        setIsOpenEdit(true);
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
        <ImageContainerButton
       username={username}
       imageDefault={Natalia}
       imageProfile={image}
       isOpenDelete={isOpenDelete}
       isOpenEdit={isOpenEdit}
       openEdit={abrirEdit}
       openDelete={abrirDelete}
       imageDelete={Delete}
       imageEdit={EditProfile}
       widthButton={2.5}
       heightButton={2.5}
       borderRadiusButton={100}
      />
     {/** Componente de Card das informações */}
      {(!isOpenDelete === !isOpenEdit) && (
        <CardInfoComponent
        width={29.25}
        height={25.9}
        username={userLogin.username}
        email={userLogin.email}
        telefone={userLogin.phonePersonal}
        senha="******"
        />
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
  width:'80%',
  marginTop:'-2rem',
  padding:0,
  gap:'2rem',
  zIndex:0,
  marginLeft:'5%'

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
   
   {/** fazer um componente geral disso 
    * para evitar essa situação
    */}
   <div
   style={{
    width:'29.25rem',
    height:'21rem',
    display:'flex',
    flexDirection:'column',
    marginLeft:'15%',
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
  <CancelUpdate
  closeEdit={fecharEdit}
  />
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