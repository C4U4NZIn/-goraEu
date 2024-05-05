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
import { useRouter } from "next/navigation";
import {
    ContainerSteps,
    DefaultContainer,
    Button,
    ContainerButtons,
    ContainerTitleStepInputs,
    ContainerTitleStepper,
    ContainerTitleLine,
    Line,
    H1,
    H3,
    Span,
    ContainerInputTitle,
    Input,
    TextError
} from '../styled/coordenador'






export default function ProfileCoordenador(){
    const [role , setRole] = useState('');
    
    useEffect(()=>{
    
    const pathname = window.location.pathname;
    const coordenador = pathname.split('/register/')[1];
    setRole(coordenador);

    },[])
    
   const [step, setStep] = useState(0);
   const transformProps = -step*50.75 + 50.75;
   const { createUser , jwtToken } = useUserContext();
   const router = useRouter();
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

        complemento:'',
        cep:'',
        logradouro:'',
        numberHouse:'',
        bairro:'',
        estado:'',
        cidade:'',
        country:'',
        telefone:'',
        telefonePersonal:'',
        emailInstitucional:'',
        
        
      },
      mode:'onChange'
     });
  
    const email = watch('email') && !errors.email;
    const password = watch('password') && !errors.password;
    const confirmPassword = watch('confirmPassword') && !errors.confirmPassword;
    const username = watch('username') && !errors.username;
    const isValidFieldStep2 = password && confirmPassword;


  
  
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
   
      console.log(data);

      if(data){
 
        const values = {
            username:data.username,
            email:data.email,
            emailInstitutional:data.emailInstitucional,
            password:data.password,
            phoneInstitutional:data.telefone,
            phonePersonal:data.telefonePersonal,
            role:role,
            avatar:'',
            address:{
                cep:data.cep,
                numberHouse:data.numberHouse,
                bairro:data.bairro,
                estado:data.estado,
                cidade:data.cidade,
                country:data.country,
                logradouro:data.logradouro,
                complemento:data.complemento,
            },
        }
     const response = await createUser(values);
      if(response?.status){
        toast.success(response.message);
        router.push('/SignUp')
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
      width:'50.25rem', 
      height:`${step === 1 ? '35rem':'60rem'}`, 
      display:"flex", 
      flexDirection:'column',
      alignItems:'center',
      borderRadius:'10px',
      overflow:'hidden',
      marginLeft:'200px',
      marginTop:'20px',
      backgroundColor:'#fff',
      gap:'1rem'
      
     }}>
     
  
 
     <ContainerTitleStepper
     style={{
        marginTop:'3.5rem'
     }}
     >
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
        {/**Pessoal */}
     <DefaultContainer style={{
        height:'600px'
     }}>
        
     {/** Email */}
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
     {/**Email Institucional */}
      <ContainerInputTitle>
 
 <H3>Email Institucional</H3>
<Input
 {...register('emailInstitucional')}
 type="email"
 placeholder='' 
/>
{
  errors.emailInstitucional && (
   <TextError>{errors.emailInstitucional.message}</TextError>
 )
}
      </ContainerInputTitle>
      {/**Telefone */}
      <ContainerInputTitle>
 
 <H3>Telefone</H3>
<Input
 {...register('telefone')}
 type= 'tel'
 placeholder='' 
/>
{
  errors.telefone && (
   <TextError>{errors.telefone.message}</TextError>
 )
}
      </ContainerInputTitle>
       {/** Telefone Pessoal */}
      <ContainerInputTitle>
 
 <H3>Telefone Pessoal</H3>
<Input
 {...register('telefonePersonal')}
 type= 'tel'
 placeholder='(92) 99999-9999' 
/>
{
  errors.telefonePersonal && (
   <TextError>{errors.telefonePersonal.message}</TextError>
 )
}
      </ContainerInputTitle>
      {/** País */}
      <ContainerInputTitle>
 
 <H3>País</H3>
<Input
 {...register('country')}
 type= 'text'
 placeholder='' 
/>
{
  errors.country && (
   <TextError>{errors.country.message}</TextError>
 )
}
      </ContainerInputTitle>
     {/** Estado */}
      <ContainerInputTitle>
 
 <H3>Estado</H3>
<Input
 {...register('estado')}
 type= 'text'
 placeholder='' 
/>
{
  errors.estado && (
   <TextError>{errors.estado.message}</TextError>
 )
}
      </ContainerInputTitle>
 
     <Button onClick={handleNextStep} disabled={!email}
     style={{
        color:"#fff"
     }}
     >
       proximo
     </Button>
       
    
     </DefaultContainer>

     {/** Senha e cep*/}
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
   
     
      <ContainerInputTitle>
 
       <H3>Cep</H3>
        <Input
        {...register('cep')}
        type= 'text'
        placeholder='' 
      
      />
        {
        errors.cep && (
         <TextError>{errors.cep.message}</TextError>
       )
      }
      </ContainerInputTitle>
   
 
     <ContainerButtons>
    
     <Button onClick={handlePreviousStep}
     style={{
        color:"#fff"
     }}
     >
         anterior
       </Button>
   
    <Button onClick={handleNextStep} disabled={!isValidFieldStep2}
    style={{
        color:"#fff"
    }}
    >
       proximo
     </Button>
 
     </ContainerButtons>
       
     </DefaultContainer>

      {/**Nome e endereço */}
      <DefaultContainer>
       
       {/** Nome */}
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
    
     {/** Number House */}
      <ContainerInputTitle>
 
     <H3>Número da Casa</H3>
     <Input 
     {...register('numberHouse')}
      type= 'text'
      placeholder='' 
      />
 
 {
        errors.numberHouse && (
         <TextError>{errors.numberHouse.message}</TextError>
       )
      }
      </ContainerInputTitle>

    {/**Bairro */}
      <ContainerInputTitle>
 
 <H3>Bairro</H3>
 <Input 
 {...register('bairro')}
  type= 'text'
  placeholder='' 
  />

{
    errors.bairro && (
     <TextError>{errors.bairro.message}</TextError>
   )
  }
      </ContainerInputTitle>

       {/**Logradouro */}
      <ContainerInputTitle>
 
 <H3>Logradouro</H3>
 <Input 
 {...register('logradouro')}
  type= 'text'
  placeholder='' 
  />

{
    errors.logradouro && (
     <TextError>{errors.logradouro.message}</TextError>
   )
  }
      </ContainerInputTitle>

    {/** Complemento */}
    <ContainerInputTitle>
 
 <H3>Complemento</H3>
 <Input 
 {...register('complemento')}
  type= 'text'
  placeholder='' 
  />

{
    errors.complemento && (
     <TextError>{errors.complemento.message}</TextError>
   )
  }
     </ContainerInputTitle>

    {/** Cidade */}
     <ContainerInputTitle>
 
 <H3>Cidade</H3>
 <Input 
 {...register('cidade')}
  type= 'text'
  placeholder='' 
  />

{
    errors.cidade && (
     <TextError>{errors.cidade.message}</TextError>
   )
  }
     </ContainerInputTitle>



 
 
         <ContainerButtons>
       <Button onClick={handlePreviousStep}
       style={{
        color:'#fff'
       }}
       >
         anterior
       </Button>
      
       <Button type="submit" 
       style={{
        color:"#fff"
       }}
       >
          Criar Conta
         </Button>
 
         </ContainerButtons>
   
       </DefaultContainer>
       </ContainerSteps>
 
     <Link href='/SignUp' 
     style={{
        display:'inline-block',
        color:'blue',
        textDecoration:'none'
     }}
     
     >
        Já tenho Login
        </Link>

 
     
     
        </form>
    </>
    )
}