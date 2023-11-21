import Image from 'next/image';

import Link from 'next/link';

import agoraLogoSignUp from '../images/Logo_Agora 2.svg';

import styles from '../components/bakground.module.css';

export default function App(){

return(

  <main className={styles.agoraMainBackgroundSignUp}>



     
  <div className={styles.agoraContainerLogoElementElipse}>

  <Image
  priority
  src = {agoraLogoSignUp}
  alt=""
  className={styles.agoraLogoSignUp}
 />
  
  </div>

 

 <div className={styles.agoraContainerForm}>

  <div className={styles.agoraContentCadastroLineForm}>
  
  <div className={styles.agoraContainerLines}>

<span className={styles.agoraCadastroLine}>Cadastro</span>
<a href="" className={styles.agoraCadastroFirstLine}></a>
<a href="" className={styles.agoraCadastroSecondLine}></a>

</div>


 <form action="">

<div className={styles.agoraContainsAllFormElements}>
<div>
 <label><h5>Nome</h5></label>
 <input id="agoraNameCad" name="agoraNameCad" className={styles.agoraInputCad} type="text" placeholder='Ex.:Nathalia Silva da Braga' />
</div>

<div>
<label><h5>Apelido</h5></label>
<input id="agoraApelidoCad" name="agoraApelidoCad" className={styles.agoraInputCad} type="text" placeholder='Ex.:Nana Braga' />
</div>

<div>
<label><h5>Email</h5></label>
<input id="agoraEmailCad" name="agoraEmailCad" className={styles.agoraInputCad} type="email" placeholder='Ex.:Nathalia.Braga@gmail.com' />
 </div>

<div>
 <label><h5>Senha</h5></label>
 <input id="agoraSenhaCad" name="agoraSenhaCad" className={styles.agoraInputCad} type="password" placeholder='Mínimo de 8 caracteres' />
 </div>

<div>
 <label><h5>Telefone</h5></label>
 <input id="agoraTelefoneCad" name="agoraTelefoneCad" className={styles.agoraInputCad} type="text" placeholder='Ex.:9299123456' />
 </div>

<div className={styles.agoraContainerLinkLogin}><h6><Link className={styles.agoraStylesLink} href="">Já tenho conta</Link></h6></div>

</div>


<div className={styles.agoraContainerButtonForm}>
<button type="submit"  className={styles.agoraButtonCancel} disabled><p className={styles.agoraColorLetterForm}>Cancelar</p></button>
<button type="submit"  className={styles.agoraButtonCad} disabled><p className={styles.agoraColorLetterForm}>Cadastrar</p></button>
</div>

 </form>
  </div>


  </div>
   
  

  </main>

);



}