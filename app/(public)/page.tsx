'use client';
import styled from "styled-components";
import { userForm } from "./register/zod/validation";
import { userFormSchema } from "./register/zod/validation";
import { useState } from "react";
import { Flex, Radio } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

  const ContainerSteps = styled.div<{$transformProps:number}>`
  display: flex;
  flex-direction: row;
  height: 300px;
  width: 1500px;
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
  width: 500px;
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

  const transformProps = -step*500 + 500;

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
   width:'500px', 
   height:'700px', 
   display:"flex", 
   flexDirection:'column',
   alignItems:'center',
   border:'5px solid gray',
   borderRadius:'10px',
   overflow:'hidden'
   
 
  
   }}>
    <ContainerSteps
    $transformProps={transformProps}
    >
    <DefaultContainer>
     
     <input 
      {...register('email')}
      type= 'email'
      placeholder='' 
     />
   
    </DefaultContainer>
    <DefaultContainer>
    <input
       {...register('password')}
       type= 'password'
       placeholder='' 
     
     />

       <input
       {...register('confirmPassword')}
       type= 'password'
       placeholder='' 
     
     />

         
      </DefaultContainer>
    <DefaultContainer>
      
    <input   
    {...register('username')}
     type= 'text'
     placeholder='' />
    <input 
    {...register('nickname')}
     type= 'text'
     placeholder='' 
     />
  
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
