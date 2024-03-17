'use client';
import styled from "styled-components";
import { userForm } from "./register/zod/validation";
import { userFormSchema } from "./register/zod/validation";
import { useState } from "react";
import { Flex, Radio } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomizedStepperIcon from "./components/stepper";


  const ContainerSteps = styled.div<{$transformProps:number}>`
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 2400px;
  border: 1px solid blue;
  border-radius: 10px;
  justify-content: stretch;
  transform: translateX(${props=>props.$transformProps}px);
  transition: 500ms ease-in-out;
  `
  const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  width: 800px;
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

export default function Home() {

  const [step, setStep] = useState(0);

  const transformProps = -step*800 + 800;

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

  const watchAllFields = watch();



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
   width:'800px', 
   height:'700px', 
   display:"flex", 
   flexDirection:'column',
   alignItems:'center',
   border:'5px solid gray',
   borderRadius:'10px',
   overflow:'hidden'
   
 
  
   }}>


  <CustomizedStepperIcon
  currentStep={step}
  />

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
     
  
  
      </DefaultContainer>
    </ContainerSteps>

    <ContainerButtons>
    { step !==0 && (
      <Button onClick={handlePreviousStep}>
        anterior
      </Button>
      
    )}
    {
      step !== 2 && (
    <Button onClick={handleNextStep}>
      proximo
    </Button>
      ) 
    }
    {
      step === 2 && (
        <Button type="submit">
         Criar Conta
        </Button>
      )
    }
     </ContainerButtons>
    
    
   </form>
  )
}
