'use client';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Link from 'next/link';
import { InputLabelContainer , Label , InputErrorMessage , InputForm , ErrorMessage } from '../../SignUp/styled/Input';
import { Container, ContainerAllSteps, FormContainer} from '../styled/ContainerInputs';
import { useState } from 'react';
import { Button, ContainerButtons } from '../styled/Button';



const userFormSchema = zod.object({

    username: zod
    .string()
    .min(8, 'Informe seu nome completo'),
   
  
    confirmPassword: zod
    .string()
    .min(8)
    .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"
      ),
 
    
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
          confirmPassword:'',  
          email:'',
          password:'',
          tel:''
        }
       });

       const [currentStep , setCurrentStep] = useState(0);

       const handleSubmitValues =  (data:userForm)=>{

        console.log(data);

      }
      const handleGoNext = () =>{
       setCurrentStep(currentStep+1);
      }
      const handleGoBack = () =>{
     setCurrentStep(currentStep - 1);
      }
       

    return(
        <>
        
    
     
     <FormContainer>
        <ContainerAllSteps $currentStep={currentStep}>

        <Container>

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
        </Container>
 
        <Container>
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

       {/** Confirmar senha input */}
       <InputLabelContainer>
    <Label>Confirmar Senha</Label>
    <InputErrorMessage>
     <InputForm
       {...register('confirmPassword')}
       type= 'text'
       placeholder='' 
       id="agoraUserConfirmPassword"
       />
     { errors.confirmPassword && (
       <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
     )}
    </InputErrorMessage>
       </InputLabelContainer>
        </Container>

       {/** Username input */}
        <Container>
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
        </Container>


  
        </ContainerAllSteps>

      <ContainerButtons>

    {currentStep !== 0 && (
     <Button onClick={handleGoBack}>
      Voltar
     </Button>
    )}

      <Button onClick={currentStep === 2 ? ()=>{handleSubmit(handleSubmitValues)} : handleGoNext}>
      {currentStep === 2 ? 'Enviar' : 'Proximo'}
      </Button>
      </ContainerButtons>


       </FormContainer>

      
       
  
       
        </>
    )
}
export default Form;