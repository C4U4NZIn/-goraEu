 'use client';

 import {useForm} from 'react-hook-form';

 import { zodResolver } from '@hookform/resolvers/zod';

 import * as zod from 'zod';

 import styles from '../forgot/forgot.module.css'; 
 
 import centralCompueterLoginImage from '../images/Computer_Lab_Abstract_Concept_Vector_Illustration 2.svg'
 
 import Image from 'next/image'
 
 import Link from 'next/link'
 
 import agoraLogoSignUp from '../images/Logo_Agora 2.svg'
import { register } from 'module';
 
 
 
 const userSchemaForgotPassword = zod.object({

  email: zod
  .string()
  .email()
  .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
   message:"O email deve ser um endereço gmail válido"
  }),
 
 });

 
  type userForgotPasswordClient = zod.infer<typeof userSchemaForgotPassword>
 
 const EsqueceuSenha = () =>{

  const {register,handleSubmit,watch} = useForm({
    
    resolver: zodResolver(userSchemaForgotPassword),
    defaultValues:{
      email:'',
    }

  });

   const useHandleSubmitEmailUser = (data:userForgotPasswordClient)=>{
    console.log(data);
   }

    const email = watch('email')
    const isButtonAbled = email

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

       <span className={styles.agoraLoginLine}>Esqueci minha Senha</span>
       <a href="" className={styles.agoraLoginFirstLine}></a>
       <a href="" className={styles.agoraLoginSecondLine}></a>

       </div>


       <div 
       className={styles.agoraContainsAllFormElements}
       >
        <form onSubmit={handleSubmit(useHandleSubmitEmailUser)} className={styles.agoraFormContainerLog}>
   

   
   <div 
    className={styles.agoraContainerCamposLogin}
    >
        <div className={styles.containerForgotPasswordFrase}>
          <p className={styles.forgotPasswordFrase}>{'iremos enviar um email \npara redefinição de senha'}</p>
        </div>
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





  

   </div>
   <div 
className={styles.agoraContainerButtonForm}
>


<button type="submit"  
className={styles.agoraButtonLog} 
disabled = {!isButtonAbled} >
    <Link 
    href={isButtonAbled ? "/Login":""}
    className={styles.agoraColorLetterForm}
    >
     Voltar para o Login
    </Link>
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
export default EsqueceuSenha;