'use client';

import styles from '../Login/login.module.css'
import Link from 'next/link'
import Image from 'next/image'
import centralCompueterLoginImage from '../images/Computer_Lab_Abstract_Concept_Vector_Illustration 2.svg';
import agoraLogoSignUp from '../images/Logo_Agora 2.svg';



 const LoginPage = ()=>{
 
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
        <form className={styles.agoraFormContainerLog}>
   

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
 />
 </div>
    </div>




   <div 
  className={styles.agoraContainerLinks}
   >
  
      <Link
      className={styles.agoraStylesLink}  
      href=""
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
disabled >
<p className={styles.agoraColorLetterForm}
>
Cancelar
</p>
</button>

<button type="submit"  
className={styles.agoraButtonLog} 
disabled >
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