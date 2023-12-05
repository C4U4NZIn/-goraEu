import LogoAgora from '../images/Logo_Agora 2.svg'

import editais from '../images/Editais.svg'

import aprendizagem from '../images/aprendizagem-online 1.svg'

import simulados from '../images/teste (1) 3.svg'

import ranking from '../images/premio 1.svg'

import userImageIcon from '../images/conta-de-usuario (1) 1.svg'

import NotasCorteImageIcon from '../images/teste (1) 2 (1).svg'

import faculdades from '../images/faculdade 2.svg'

import desempenhoImageIcon from '../images/desempenho 1.svg'

import styles from '../dashBoard.module.css'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link'  


export  const NavMainDashboard:React.FC<any> =()=>{


    return (
       <>
       
        <div className={styles.navMainDashboard}>
       

       <div className={styles.containerLogoAgora}>
         <Image
         className={styles.dimensoesAgoraLogo}
         priority
         src={LogoAgora}
         alt=""
         
         />
       </div>





       <nav className={styles.navbarContainer}>
    
        <div className={styles.containerBetweenImageLink}>
       <Image
       src={userImageIcon}
       alt=""
       />
       <Link className={styles.styleLinks} href="">
       Usuário
       </Link>
        </div>


        <div className={styles.containerBetweenImageLink}>
        <Image
            src={simulados}
            alt=""
        />
       <Link className={styles.styleLinks} href="">
       Simulados
       </Link>
        </div>

        <div className={styles.containerBetweenImageLink}>
         <Image
             src={aprendizagem}
             alt=""
         />
         <Link className={styles.styleLinks} href="">
         Aulas
         </Link>
        </div>
        <div className={styles.containerBetweenImageLink}>
         <Image
             src={editais}
             alt=""
         />
         <Link className={styles.styleLinks} href="">
         Editais
         </Link>
        </div>
        <div className={styles.containerBetweenImageLink}>
        <Image
            src={ranking}
            alt=""
        />
         <Link className={styles.styleLinks} href="">
         Ranking
         </Link>
        </div>
        <div className={styles.containerBetweenImageLink}>
        <Image 
            src={NotasCorteImageIcon}
            alt=""
        />
         <Link className={styles.styleLinks} href="">
         Notas de Corte
         </Link>
        </div>
        <div className={styles.containerBetweenImageLink}>
        <Image
            src={faculdades }
            alt=""
        
        />
         <Link className={styles.styleLinks} href="">
         faculdades
         </Link>
        </div>
        <div className={styles.containerBetweenImageLink}>
         <Image
             src={desempenhoImageIcon}
             alt=""
         
         />
         <Link className={styles.styleLinks} href="">
         desempenho
         </Link>
        </div>
       
       </nav>


        </div>


       </>
    )


 }