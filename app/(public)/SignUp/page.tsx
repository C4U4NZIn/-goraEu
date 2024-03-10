'use client';
import {Controller , useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import agoraLogoSignUp from '../forgot/images/Logo_Agora 2.svg';
import styles from '../SignUp/background.module.css';
import { useUserContext } from '@/contexts';
import { ZodError } from './styled/zodErros/zodError';
import { Bounce, toast } from 'react-toastify';
import { AppError } from '@/utils/AppError';
import { InputLabelContainer , Label , InputErrorMessage , InputForm , ErrorMessage } from './styled/Input';

const userFormSchema = zod.object({

  username: zod
  .string()
  .min(8, 'Informe seu nome completo'),
 

  nickname: zod
  .string()
  .min(3,"Informe um nome válido")
  .max(12, "Informe um nome válido"),
  
  
   email: zod
   .string()
   .email()
   .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
    message:"O email deve ser um endereço gmail válido"
   }),

   password: zod
   .string()
   .min(8)
   .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"
     ),

   tel: zod
   .string()
   .regex(/^\(\d{2}\) \d{5}-\d{4}$/,
    "Por favor digite seu número corretamente "
  )



})

type  userForm =  zod.infer<typeof  userFormSchema>;

export default function SignUp(){
   const { createUser } = useUserContext();

   const notifyUser = () =>{
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
        transition:Bounce
    });

   }
 
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
    username:'',
    nickname:'',  
    email:'',
    password:'',
    tel:''
  }
 });
 const handleSubmitValues =  (data:userForm)=>{

  try {
     const values = {
      username:data.username,
      nickname:data.nickname,
      email:data.email,
      password:data.password,
      phone:data.tel
     }
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
         transition:Bounce
     });
     createUser(values);

     
    } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Nenhum usuário do Ágora foi encontrado';


      toast.error( title,
      {
          position:'top-center',
          autoClose:5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition:Bounce
      });
      
    }
    
   

}
 



   


return(

  <>



     
  <div className={styles.agoraContainerLogoElementElipse}>

  <Image
  priority
  src = {agoraLogoSignUp}
  alt=""
  className={styles.agoraLogoSignUp}
 />
  
  </div>

 

 <div className={styles.agoraContainerForm}>

  <div className={styles.agoraContentCadastroLineForm}>
  
  <div className={styles.agoraContainerLines}>

<span className={styles.agoraCadastroLine}>Cadastro</span>
<a href="" className={styles.agoraCadastroFirstLine}></a>
<a href="" className={styles.agoraCadastroSecondLine}></a>

</div>


 <form onSubmit={handleSubmit(handleSubmitValues)}>

<div className={styles.agoraContainsAllFormElements}>



<InputLabelContainer>
    <Label>Nome</Label>
    <InputErrorMessage>
     <InputForm
       {...register('username')}
       type= 'text'
       placeholder='' 
       id="agoraUsername"

     />
     { errors.username && (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
     )}

    </InputErrorMessage>

    
    </InputLabelContainer>

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

     
    <InputLabelContainer>
    <Label>Email</Label>
    <InputErrorMessage>
     <InputForm
       {...register('email')}
       type= 'email'
       placeholder='' 
       id="agoraUserEmail"

     />
     { errors.email && (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
     )}
    </InputErrorMessage>

    </InputLabelContainer>

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
  
    <InputLabelContainer>
    <Label>Telefone</Label>
    <InputErrorMessage>
     <InputForm
       {...register('tel')}
       type= 'text'
       placeholder='(xx) xxxxx-xxxx' 
       id="agoraUserTel"

     />
     { errors.tel && (
        <ErrorMessage>{errors.tel.message}</ErrorMessage>
     )}
    </InputErrorMessage>
    </InputLabelContainer>


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

</div>


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

 </form>
  </div>


  </div>
   
  

  </>

);



}