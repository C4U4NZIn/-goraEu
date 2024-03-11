'use client';
import {useForm} from 'react-hook-form';
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


 
  
   email: zod
   .string()
   .email()
   .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
    message:"O email deve ser um endereço gmail válido"
   }),

   tel: zod
   .string()
   .regex(/^\(\d{2}\) \d{5}-\d{4}$/,
    "Por favor digite seu número corretamente "
  ),
    password: zod
   .string()
   .min(8)
   .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"
     ),

     confirmPassword: zod
     .string()
     .min(8)
     .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"
       ),
   username: zod
  .string()
  .min(8, 'Informe seu nome completo'),



})

type  userForm =  zod.infer<typeof  userFormSchema>;

export default function SignUp(){
   const { createUser } = useUserContext();

  
 
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
    tel:'',  
    password:'',
    confirmPassword:'',
    username:''
  }
 });
 const handleSubmitValues =  (data:userForm)=>{

  try {
 
     console.log(data);
    // createUser(values);

     
    } catch (error) {

   
      
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

     {/** Tel input */}
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

);



}