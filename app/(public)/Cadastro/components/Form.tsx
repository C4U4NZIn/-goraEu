'use client';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Link from 'next/link';
import { InputLabelContainer , Label , InputErrorMessage , InputForm , ErrorMessage } from '../../SignUp/styled/Input';



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


 const Form = ()=>{

    const {
        register,
        handleSubmit,
        watch,
        control,
        formState:{errors},
        
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


      }
       

    return(
        <>
        <form onSubmit={handleSubmit(handleSubmitValues)}>

             {/** Username input */}
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

     {/** Apelido input */}
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

     {/** email input */}
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

     {/** password input */}
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
  
    {/** Telefone input */}
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


        </form>
        </>
    )
}
export default Form;