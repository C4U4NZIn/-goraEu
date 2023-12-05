'use client';

import {useForm} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

import styles from '../Login/login.module.css'

import Link from 'next/link'

import Image from 'next/image'

import centralCompueterLoginImage from '../images/Computer_Lab_Abstract_Concept_Vector_Illustration 2.svg';

import agoraLogoSignUp from '../images/Logo_Agora 2.svg';



   const userSchemaLogin = zod.object({

    email: zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
     message:"O email deve ser um endereço gmail válido"
    }),
    password: zod
    .string()
    .min(8),

   });

type  userForm =  zod.infer<typeof  userSchemaLogin>;
    


 const LoginPage = ()=>{

   const {register,handleSubmit,watch} = useForm({

    resolver: zodResolver(userSchemaLogin),
      defaultValues:{
        email:'',
        password:'',
      }
    })
     
    const email = watch('email')
    const password = watch('password')

    const isButtonAbled = email && password 
   

   const useDataUser = (data:userForm)=>{
    console.log(data);
   }

    return (
      <>
       
       
       <div 
       className =
       {styles.leftContainerElementAgora}
       >

       <div className={styles.containerMainText}>
        <h1 className={styles.specialAgoraText}>Ágora</h1>
         <p className={styles.specialAgoraFrase}>{'Criando educação \ncom inovação'}</p>
       </div>

        <Image
        priority
        src={centralCompueterLoginImage}
        alt=''
        className = {styles.imageLoginCentral}
        />
       </div>
       
       
     <div className={styles.rightContainerElementAgora}>
     
     <div 
     className={styles.agoraContentLoginForm}
     >
        <div className={styles.agoraContainerLines}>

       <span className={styles.agoraLoginLine}>Login</span>
       <a href="" className={styles.agoraLoginFirstLine}></a>
       <a href="" className={styles.agoraLoginSecondLine}></a>

       </div>


       <div 
       className={styles.agoraContainsAllFormElements}
       >
        <form onSubmit={handleSubmit(useDataUser)} className={styles.agoraFormContainerLog}>
   

   <div 
   className={styles.agoraContainerBetweenInputsLinks}
   >
   <div 
    className={styles.agoraContainerCamposLogin}
    >
        
 <div 
 className={styles.gapBetweenInputLabel}
 >
 <label  
 className={styles.tinosStyleNamesInput}
 >
   Email
  </label>
<input 
id="agoraEmailCad" 
className={styles.agoraInputCad} 
type="email" 
placeholder='Ex.:Nathalia.Braga@gmail.com' 
{...register("email")}
/>
 </div>

<div
className={styles.gapBetweenInputLabel}
>
 <label 
 className={styles.tinosStyleNamesInput}
 >
Senha
</label>
 <input 
 id="agoraSenhaCad" 
 className={styles.agoraInputCad} 
 type="password" 
 placeholder='Mínimo de 8 caracteres' 
  min={8}
  {...register("password")}
 />
 </div>
    </div>




   <div 
  className={styles.agoraContainerLinks}
   >
  
      <Link
      className={styles.agoraStylesLink}  
      href="/forgot"
      >Esqueci minha senha</Link>
      <Link 
      className={styles.agoraStylesLink} 
      href="/SignUp"
      >
      Não tenho cadastro
      </Link>
    
   </div>

   </div>
   <div 
className={styles.agoraContainerButtonForm}
>


<button type="submit"  
className={styles.agoraButtonCancel} 
disabled ={!isButtonAbled} >
<p className={styles.agoraColorLetterForm}
>
Cancelar
</p>
</button>

<button type="submit"  
className={styles.agoraButtonLog} 
disabled={!isButtonAbled} >
<p 
className={styles.agoraColorLetterForm}
>
Logar
</p>
</button>
</div>
   </form>


       </div>
     </div>

     
     <div className={styles.agoraContainerLogoElementElipse}>

    <Image
     priority
     src = {agoraLogoSignUp}
     alt=""
     className={styles.agoraLogoSignUp}
    />

    </div>

     </div>




      </>
    )

    }
export default LoginPage;