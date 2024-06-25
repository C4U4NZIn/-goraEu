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
   const transformProps = -step*30 + 30;
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
        email_profissional:'',
        password:'',
        confirmPassword:'',
        username:'',
        name_instituicao:'',
        cep:'',
        telefone1:'',
        telefone2:'',
        endereco:''
        
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
            email_profissional:data.email_profissional,
            password:data.password,
            telefone1:data.telefone1,
            telefone2:data.telefone2,
            role:role,
            avatar:'',
            name_instituicao:data.name_instituicao,
            cep:data.cep,
            endereco:data.endereco
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
      width:'30rem', 
      height:'40rem', 
      display:"flex", 
      flexDirection:'column',
      alignItems:'center',
      borderRadius:'15px',
      overflow:'hidden',
      marginLeft:'0px',
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
     </ContainerTitleLine>
   <CustomizedStepperIcon
   currentStep={step + 1}
   />
     </ContainerTitleStepper>
 
       <ContainerSteps
     $transformProps={transformProps}
     >
            {/* Nome e nome_instituicao cep  step1*/}
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
{/** nome instituicao */}
<ContainerInputTitle>

<H3>Nome da instituição</H3>
<Input  
{...register('name_instituicao')}
type= 'text'
placeholder='' />

{
errors.name_instituicao && (
<TextError>{errors.name_instituicao.message}</TextError>
)
}
</ContainerInputTitle>

{/** cep */}       
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


<Button onClick={handleNextStep} 
style={{
 color:"#fff",
 border:'none'
}}
>
proximo
</Button>

            </DefaultContainer>
    {/** telefones e endereco step2 */}
             <DefaultContainer>
           {/**Telefone 1 */}
           <ContainerInputTitle>
 
 <H3>Telefone 1</H3>
<Input
 {...register('telefone1')}
 type= 'tel'
 placeholder='' 
/>
{
  errors.telefone1 && (
   <TextError>{errors.telefone1.message}</TextError>
 )
}
          </ContainerInputTitle>
       {/** Telefone 2 */}
      <ContainerInputTitle>
 
 <H3>Telefone 2</H3>
<Input
 {...register('telefone2')}
 type= 'tel'
 placeholder='(92) 99999-9999' 
/>
{
  errors.telefone2 && (
   <TextError>{errors.telefone2.message}</TextError>
 )
}
      </ContainerInputTitle>
        {/* endereço */}
     <ContainerInputTitle>
 
 <H3>Endereço</H3>
  <Input
  {...register('endereco')}
  type= 'text'
  placeholder='' 

/>
  {
  errors.endereco && (
   <TextError>{errors.endereco.message}</TextError>
 )
}
     </ContainerInputTitle>

     <ContainerButtons>
    
    <Button onClick={handlePreviousStep}
    style={{
       color:"#fff",
       border:'none'
    }}
    >
        anterior
      </Button>
  
   <Button onClick={handleNextStep}
   style={{
       color:"#fff",
       border:'none'
   }}
   >
      proximo
    </Button>

    </ContainerButtons>


             </DefaultContainer>

            {/** senha step3 */}
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
    
     <Button onClick={handlePreviousStep}
     style={{
        color:"#fff",
        border:'none'
     }}
     >
         anterior
       </Button>
   
    <Button onClick={handleNextStep} disabled={!isValidFieldStep2}
    style={{
        color:"#fff",
        border:'none'
    }}
    >
       proximo
     </Button>
 
            </ContainerButtons>
       
            </DefaultContainer>
             {/**step 4 */}
             <DefaultContainer>
        
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
 {...register('email_profissional')}
 type="email"
 placeholder='' 
/>
{
  errors.email_profissional && (
   <TextError>{errors.email_profissional.message}</TextError>
 )
}
      </ContainerInputTitle>

       
     <ContainerButtons>
       <Button onClick={handlePreviousStep}
       style={{
        color:'#fff',
        border:'none'
       }}
       >
         anterior
       </Button>
      
       <Button 
       type="submit" 
       disabled={!email}
       style={{
        color:"#fff",
        border:'none'
       }}
       >
          Criar Conta
         </Button>
         </ContainerButtons>
    
            </DefaultContainer>      


       </ContainerSteps>
    <div
    style={{
      display:'flex',
      width:'100%',
      height:'3rem',
      alignItems:'center',
      justifyContent:'center'
    }}
    >
    {/** componentizar isso */}
     <Link href='/SignUp' 
     style={{
        display:'flex',
        color:'#217097',
        textDecoration:'none',
       fontWeight:'700',
       fontSize:'19px',
       alignSelf:'center',
       justifySelf:'center',
       marginTop:'-3rem'
      }}
     
     >
        Já tenho Login
        </Link>

    </div>


 
     
     
        </form>
    </>
    )
}