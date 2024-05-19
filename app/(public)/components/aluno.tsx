"use client";
//por hora não vou colocar todas as imagens 
//numa pasta image em global
import styles from '../dashboardMain/css/dashboard.module.css'
import Image from 'next/image'
import ActiveLink from "../components/global/activeLink";
import mural from '../../(public)/dashboardMain/image/web-chat (1) 1.svg'
import desempenho from '../dashboardMain/image/diagrama 1.svg'
import usuario from '../../(public)/dashboardMain/image/do-utilizador (2) 1.svg'
import salas from '../../(public)/dashboardMain/image/casa 1.svg'
import fogueteAgora2 from '../../(public)/dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'

const AsideAluno = () =>{
 
   return (
    <>
       <aside className={styles.verticalSideBar}>
      
      <div className={styles.containerElipse}>

      <div className={styles.containerTextImage}>

       <Image
       priority
       alt=''
       src={fogueteAgora2}
       className={styles.styleImage}
       />
       
     
      </div>
      </div>
      
       <div
       className={styles.containerLinks}
       >

      <div className={styles.containerLink}>
       <Image
       priority
       alt=""
       src={salas}
       className={styles.stylesSalas}
       />
          <ActiveLink href="/dashboardMain/salas"><h1 className={styles.stylesH1}>Salas</h1></ActiveLink>
      </div>
      <div className={styles.containerLink}>
       <Image
       priority
       alt=""
       src={usuario}
       className={styles.stylesUsuario}
       />
          <ActiveLink href="/dashboardMain/usuario"><h1 className={styles.stylesH1}>Usuário</h1></ActiveLink>
      </div>
      <div className={styles.containerLink}>
       <Image
       priority
       alt=""
       src={desempenho}
       className={styles.stylesDesempenho}
       />
          <ActiveLink href="/dashboardMain/desempenho"><h1 className={styles.stylesH1}>Desempenho</h1></ActiveLink>
      </div>
      <div className={styles.containerLink}>
       <Image
       priority
       alt=""
       src={mural}
       className={styles.stylesMural}
       />
     <ActiveLink href="/dashboardMain/mural"><h1 className={styles.stylesH1}>Mural</h1></ActiveLink>
      </div>


    
   
       </div>

     </aside>
    
    </>
   )

}

export default AsideAluno;