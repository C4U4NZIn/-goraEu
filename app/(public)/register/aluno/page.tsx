'use client';
import { useEffect , useState } from "react";
import { useUserContext } from '@/contexts';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userForm } from "../zod/validation";
import { userFormSchema } from "../zod/validation";
import Link from "next/link";
import { toast } from "sonner";
import styled from "styled-components";
import CustomizedStepperIcon from "../../components/stepper";
import { AppError } from "@/utils/AppError";


const ContainerSteps = styled.div<{$transformProps:number}>`
display: flex;
flex-direction: row;
height: 300px;
width: 96.75rem;

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

border-radius: 10px;
`
const Button = styled.button`
width: 11.25rem;
height: 2.2rem;
border-radius: 10px;
background-color: rgba(242, 105, 33, 1);
&:disabled{
  background-color: transparent;
}

`
const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
padding: 0;
margin-top: 2rem;

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
const H3 = styled.h3`
margin:0;
padding: 0;
`
const Span = styled.div`
border-bottom: 1px solid blue;
width: 8rem;
`
const ContainerInputTitle = styled.div`
display: flex;
flex-direction: column;
gap:0.5rem;
width: 60%;
min-height: 5.625rem;
`
const Input = styled.input`
height: 1.8125rem;
width:100%;
margin:0;
padding-left: 10px;
border-radius: 10px;
background-color:  rgba(237, 237, 237, 1);
border: none;
`
const TextError = styled.span`
color:red;
margin:0;
padding:0;

`

export default function ProfileAluno(){
   
   const [role , setRole] = useState('');
    
   useEffect(()=>{
   
   const pathname = window.location.pathname;
   const aluno = pathname.split('/register/')[1];
   setRole(aluno);

   },[])

   const [step, setStep] = useState(0);

   const transformProps = -step*32.25 + 32.25;
 
  const { createUser , jwtToken } = useUserContext();

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
   const handleFormSubmit = async (data: userForm, event?: React.BaseSyntheticEvent) => {
     event?.preventDefault();
  
     if(data){

       const values = {
           username:data.username,
           email:data.email,
           nickname:data.nickname,
           password:data.password,
           role:role
       }
 
    const response = await createUser(values);
     if(response?.status){
       toast.success(response.message);
     }else{
       
       toast.error(response?.message);
     }
   
        
     
    };
  }

          

    return(
        
   <>
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
     marginLeft:'100px',
     marginTop:'20px',
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
     

     <ContainerInputTitle>

      <H3>Email</H3>
     <Input
      {...register('email')}
      type= 'email'
      placeholder='' 
     />
     {
       errors.email && (
        <TextError>{errors.email.message}</TextError>
      )
     }
     </ContainerInputTitle>

    
    <Button onClick={handleNextStep} disabled={!email}>
      proximo
    </Button>
      
   
    </DefaultContainer>
    <DefaultContainer>

 

    <ContainerInputTitle>

      <H3>Senha</H3>
    <Input
       {...register('password')}
       type= 'password'
       placeholder='' 
     
     />
      {
       errors.password && (
        <TextError>{errors.password.message}</TextError>
      )
     }
    </ContainerInputTitle>
   

     <ContainerInputTitle>

      <H3>Confirmar Senha</H3>
       <Input
       {...register('confirmPassword')}
       type= 'password'
       placeholder='' 
     
     />
       {
       errors.confirmPassword && (
        <TextError>{errors.confirmPassword.message}</TextError>
      )
     }
     </ContainerInputTitle>
  


    <ContainerButtons>
   
    <Button onClick={handlePreviousStep}>
        anterior
      </Button>
  
   <Button onClick={handleNextStep} disabled={!isValidFieldStep2}>
      proximo
    </Button>

    </ContainerButtons>
      
    </DefaultContainer>
    <DefaultContainer>
      

      <ContainerInputTitle>

      <H3>Nome</H3>
    <Input  
    {...register('username')}
     type= 'text'
     placeholder='' />

    {
       errors.username && (
        <TextError>{errors.username.message}</TextError>
      )
     }
      </ContainerInputTitle>
   
   <ContainerInputTitle>

    <H3>Apelido</H3>
    <Input 
    {...register('nickname')}
     type= 'text'
     placeholder='' 
     />

{
       errors.nickname && (
        <TextError>{errors.nickname.message}</TextError>
      )
     }
   </ContainerInputTitle>


        <ContainerButtons>
      <Button onClick={handlePreviousStep}>
        anterior
      </Button>
     
      <Button type="submit" disabled={!isValidFieldStep3}>
         Criar Conta
        </Button>

        </ContainerButtons>
  
      </DefaultContainer>
    </ContainerSteps>

 </ContainerTitleStepInputs>

    <Link href='/SignUp'>Já tenho Login</Link>
    
    
   </form>
   </>
    )
}