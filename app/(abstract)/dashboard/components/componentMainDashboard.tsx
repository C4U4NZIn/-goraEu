import styles from '../dashBoard.module.css'

import girlUserExample from '../images/menina 1.svg'

import Image from 'next/image'


type user = {
    nickname:string;
    name:string;
    email:string;
    telefone:string;
  
 }


 export const ComponentMainDashboard=(props:user)=>{
  console.log(props);

    return (
       <>
       
       <div className={styles.containerPropsUser}>

       <div className={styles.containerGirlExample}>

         <Image
         className={styles.imageGirlUser}
         priority
         src={girlUserExample}
         alt = ""
         />

       </div>

       <div>
       <h1>Informações</h1>
         
        <div>

        <div>
            <h1 className={styles.stylesFontCardInfo}>Apelido</h1>
         <p className={styles.textoAdicional}>{props.nickname}</p>
         </div>

         <div>
            <h1 className={styles.stylesFontCardInfo}>Nome</h1>
        <p className={styles.textoAdicional}>{props.name}</p>
        </div>

        <div>
            <h1 className={styles.stylesFontCardInfo}>Email</h1>
        <p className={styles.textoAdicional}>{props.email}</p>
        </div>
        
        <div>
            <h1 className={styles.stylesFontCardInfo}>Telefone</h1>
       <p className={styles.textoAdicional}>{props.telefone}</p>
        </div>
        </div>

       </div>


       </div>


       </>
    )


 }
 