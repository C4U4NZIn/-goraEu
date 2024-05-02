'use client';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import styles from '../SignUp/background.module.css';
import { useUserContext } from '@/contexts';
import {useRouter} from 'next/navigation'
import { toast } from "sonner";
import {userForm , userFormSchema} from '../SignUp/zod/loginSchema'
import api from '@/app/services/__api';
import {
  H3,
  ContainerInputTitle,
  Input,
  TextError,
  DefaultContainer
} from '../register/styled/coordenador';


export default function SignUp(){
   const { authLogin , role } = useUserContext();

   const Router = useRouter();
 
 const {
  register,
  handleSubmit,
  watch,
  formState:{errors},
  
} = useForm({
  resolver: zodResolver(userFormSchema),
  defaultValues: 
  {
    email:'',
    password:'',
  
  },
  mode:'onChange'
 });
 const handleSubmitValues = async (data:userForm)=>{

  try {
 
   console.log(data);
    // createUser(values);
     const values ={
      email:data.email,
      password:data.password
     }

   const response = await authLogin(values)
   
   
   if(!response?.access_token){
       toast.error(response?.message);
   }
   Router.push('/dashboardMain');

    } catch (error) {     
      console.log(error); 
    }
    
   

}


return(

  <>
  <div className={styles.agoraContainerForm}>

  <div className={styles.agoraContentCadastroLineForm}>
  
  <div className={styles.agoraContainerLines}>

<span className={styles.agoraCadastroLine}>Login</span>
<a href="" className={styles.agoraCadastroFirstLine}></a>
<a href="" className={styles.agoraCadastroSecondLine}></a>

</div>


 <form 
 style={{
  alignItems:'center',
  justifyContent:"center",
  display:'flex',
  flexDirection:'column',
 }}
 onSubmit={handleSubmit(handleSubmitValues)}
 >



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
   <TextError
   >{errors.email.message}</TextError>
 )
}
     </ContainerInputTitle>

     {/** Senha input */}
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
  </DefaultContainer>


<div 
className={styles.agoraContainerButtonForm}
>


<button type="submit" 

className={styles.agoraButtonCad}>
<p 
className={styles.agoraColorLetterForm}
>
Logar
</p>
</button>
</div>
    


<div 
className={styles.agoraContainerLinkLogin}
>
  <Link 
  className={styles.agoraStylesLink} 
  href="/register"
  >
  Não tenho cadastro
  </Link>
  </div>


 </form>

  
  </div>


  </div>
  </>

);



}