 import styles from '../forgot/forgot.module.css'; 
 import centralCompueterLoginImage from '../images/Computer_Lab_Abstract_Concept_Vector_Illustration 2.svg'
 import Image from 'next/image'
 import Link from 'next/link'
 import agoraLogoSignUp from '../images/Logo_Agora 2.svg'
 const EsqueceuSenha = () =>{

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
        <form className={styles.agoraFormContainerLog}>
   

   
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





  

   </div>
   <div 
className={styles.agoraContainerButtonForm}
>


<button type="submit"  
className={styles.agoraButtonLog} 
disabled >
    <Link 
    href=''
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