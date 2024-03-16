'use client';
import { useEffect } from "react";
import { useState } from "react";
import styles from '../css/register.module.css';
import { useUserContext } from '@/contexts';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputLabelContainer , Label , InputErrorMessage , InputForm , ErrorMessage } from '../styled/Input';
import { userForm } from "../zod/validation";
import { userFormSchema } from "../zod/validation";
import Link from "next/link";
import { Bounce, toast , ToastContainer} from "react-toastify";

export default function ProfileAluno(){
    
    const { createUser , user , jwtToken } = useUserContext();
    const [role , setRole] = useState('');
    useEffect(()=>{
     const path = window.location.pathname;
     const aluno = path.split('/register/')[1];
     setRole(aluno);
     }, [])

     const {
        register,
        handleSubmit,
        watch,
        control,
        formState:{errors , touchedFields},
        
      } = useForm({
        resolver: zodResolver(userFormSchema),
        defaultValues: 
        {
          email:'',  
          password:'',
          confirmPassword:'',
          username:'',
          nickname:''
        }
       });
       const notify = () => toast("Wow so easy!");
       const handleSubmitValues = async (data:userForm)=>{
      
        try {
       
            const values = {
                username:data.username,
                email:data.email,
                nickname:data.nickname,
                password:data.password,
                role:role
            }

         const response = await createUser(values);
      
         
         toast.success( 'Você foi cadastrado com sucesso!',
         {
             position:'top-center',
             autoClose:5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
             transition: Bounce
         });
           
          } catch (error) {
      
         console.log(error);
            }
        }
          

    return(
        <>
       <div className={styles.agoraContainerForm}>

<div className={styles.agoraContentCadastroLineForm}>

<div className={styles.agoraContainerLines}>

<span className={styles.agoraCadastroLine}>Cadastro</span>
<a href="" className={styles.agoraCadastroFirstLine}></a>
<a href="" className={styles.agoraCadastroSecondLine}></a>

</div>


<form onSubmit={handleSubmit(handleSubmitValues)}>

<div className={styles.agoraContainsAllFormElements}>
    
   <div className={styles.agoraContainerInputsButton}>

    {/** Email input */}
  <InputLabelContainer>
  <Label>Email</Label>
  <InputErrorMessage>
   <InputForm
     {...register('email')}
     type= 'email'
     placeholder='' 
     id="agoraEmail"

   />
   { errors.email && (
      <ErrorMessage>{errors.email.message}</ErrorMessage>
   )}

  </InputErrorMessage>

  
  </InputLabelContainer>


   {/** Senha input */}
  <InputLabelContainer>
  <Label>Senha</Label>
  <InputErrorMessage>
   <InputForm
     {...register('password')}
     type= 'password'
     placeholder='' 
     id="agoraUserPassword"

   />
   { errors.password && (
      <ErrorMessage>{errors.password.message}</ErrorMessage>
   )}
  </InputErrorMessage>

  </InputLabelContainer>

   {/** Confirm Password input */}
  <InputLabelContainer>
  <Label>Confirmar Senha</Label>
  <InputErrorMessage>
   <InputForm
     {...register('confirmPassword')}
     type= 'password'
     placeholder='' 
     id="agoraUserConfirmPassword"

   />
   { errors.confirmPassword && (
      <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
   )}
  </InputErrorMessage>
  </InputLabelContainer>

  {/** Nome input */}
  <InputLabelContainer>
  <Label>Nome</Label>
  <InputErrorMessage>
   <InputForm
     {...register('username')}
     type= 'text'
     placeholder='' 
     id="agoraUserUsername"

   />
   { errors.username && (
      <ErrorMessage>{errors.username.message}</ErrorMessage>
   )}
  </InputErrorMessage>
  </InputLabelContainer>

     {/** Nickname input */}
     <InputLabelContainer>
  <Label>Apelido</Label>
  <InputErrorMessage>
   <InputForm
     {...register('nickname')}
     type= 'text'
     placeholder='' 
     id="agoraUserNickname"
   />
   { errors.nickname && (
      <ErrorMessage>{errors.nickname.message}</ErrorMessage>
   )}
  </InputErrorMessage>
  </InputLabelContainer>



<div 
className={styles.agoraContainerButtonForm}
>

<button type="submit"  
className={styles.agoraButtonCancel}>
<p className={styles.agoraColorLetterForm}
>
Cancelar
</p>
</button>

<button type="submit" 

className={styles.agoraButtonCad}>
<p 
className={styles.agoraColorLetterForm}
>
Cadastrar
</p>
</button>
</div>
   </div>
</div>

<div 
className={styles.agoraContainerLinkLogin}
>
<Link 
className={styles.agoraStylesLink} 
href="/Login"
>
Já tenho Login
</Link>
</div>


</form>


</div>


</div>
        </>
    )
}