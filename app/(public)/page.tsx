'use client';
import styled from "styled-components";
import { userForm } from "./register/zod/validation";
import { userFormSchema } from "./register/zod/validation";
import { useState } from "react";
import { Flex, Radio } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomizedStepperIcon from "./components/stepper";
import Link from "next/link";
import styles from './styled.module.css'

  const ContainerSteps = styled.div<{$transformProps:number}>`
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 96.75rem;
  border: 1px solid blue;
  border-radius: 10px;
  justify-content: stretch;
  transform: translateX(${props=>props.$transformProps}rem);
  transition: 500ms ease-in-out;
  `
  const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  width: 32.25rem;
  border: 3px solid black;
  border-radius: 10px;
  `
  const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;

  `
  const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  `
  const ContainerTitleStepInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.5rem;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
  `
  const ContainerTitleStepper = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  `
  const ContainerTitleLine = styled.div`
  display: flex;
  flex-direction: column;
  gap:0.1rem;
  `
 const Line = styled.span`
 margin:0;
 padding: 0;
 height: 1px;
 width:12rem;
 background-color: blue;
 `
 const H1 = styled.h1`
 margin:0;
 padding: 0;
 color:black;

 `
 const Span = styled.div`
  border-bottom: 1px solid blue;
  width: 8rem;
 `


export default function Home() {

  const [step, setStep] = useState(0);

  const transformProps = -step*32.25 + 32.25;

  const {
    register,
    handleSubmit,
    watch,
    getValues,
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
    },
    mode:'onChange'
   });

  const email = watch('email') && !errors.email;
  const password = watch('password') && !errors.password;
  const confirmPassword = watch('confirmPassword') && !errors.confirmPassword;
  const username = watch('username') && !errors.username;
  const nickname = watch('nickname') && !errors.nickname;
  const isValidFieldStep2 = password && confirmPassword;
  const isValidFieldStep3 = username && nickname;



  const handleNextStep = (event:React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    setStep(step+1);
  }

  const handlePreviousStep = (event:React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    setStep(step-1);
  }

  const handleFormSubmit = (data: any, event?: React.BaseSyntheticEvent) => {
    event?.preventDefault();
    console.log(data);
  };

  return (
   <form
   onSubmit={handleSubmit(handleFormSubmit)}
   style={{
   width:'32.25rem', 
   height:'579px', 
   display:"flex", 
   flexDirection:'column',
   alignItems:'center',
   border:'5px solid gray',
   borderRadius:'10px',
   overflow:'hidden',
   marginLeft:'450px',
   marginTop:'90px',
   backgroundColor:'#fff',
   gap:'2rem'

   }}>


 <ContainerTitleStepInputs>
   <ContainerTitleStepper>
    <ContainerTitleLine>
    <H1>Cadastro</H1>
    <Span></Span>
    <Line></Line>
    </ContainerTitleLine>
  <CustomizedStepperIcon
  currentStep={step}
  />
   </ContainerTitleStepper>

     <ContainerSteps
    $transformProps={transformProps}
    >
    <DefaultContainer>
     
     <input 
      {...register('email')}
      type= 'email'
      placeholder='' 
     />

     {
       errors.email && (
        <span>{errors.email.message}</span>
      )
     }
    
    <Button onClick={handleNextStep} disabled={!email}>
      proximo
    </Button>
      
   
    </DefaultContainer>
    <DefaultContainer>
    <input
       {...register('password')}
       type= 'password'
       placeholder='' 
     
     />
      {
       errors.password && (
        <span>{errors.password.message}</span>
      )
     }
   

       <input
       {...register('confirmPassword')}
       type= 'password'
       placeholder='' 
     
     />
       {
       errors.confirmPassword && (
        <span>{errors.confirmPassword.message}</span>
      )
     }
   
    <Button onClick={handlePreviousStep}>
        anterior
      </Button>
  
   <Button onClick={handleNextStep} disabled={!isValidFieldStep2}>
      proximo
    </Button>
      
    </DefaultContainer>
    <DefaultContainer>
      
    <input   
    {...register('username')}
     type= 'text'
     placeholder='' />

    {
       errors.username && (
        <span>{errors.username.message}</span>
      )
     }
   

    <input 
    {...register('nickname')}
     type= 'text'
     placeholder='' 
     />

{
       errors.nickname && (
        <span>{errors.nickname.message}</span>
      )
     }

      <Button onClick={handlePreviousStep}>
        anterior
      </Button>
     
      <Button type="submit" disabled={!isValidFieldStep3}>
         Criar Conta
        </Button>
  
      </DefaultContainer>
    </ContainerSteps>

 </ContainerTitleStepInputs>

    <Link href='/SignUp'>Já tenho Login</Link>
    
    
   </form>
  )
}
