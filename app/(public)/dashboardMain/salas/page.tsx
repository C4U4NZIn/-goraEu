'use client';
import styles from './css/salas.module.css'
import Natalia from './images/image 25Natália.svg'
import Image from 'next/image'
import planeta from './images/image 47planeta.svg'
import jose from './images/image 36José.svg'
import { useUserContext } from '@/contexts'
export default function Salas(){
 
    const {userLogin} = useUserContext();


    return(

        <> 
        <div className={styles.containerPrincipal}>
        <div className={styles.containerProfile}>
            

        <div className={styles.containerImageText}>

            <div className={styles.containerImage}>
          <Image
          priority
          alt=''
          src={Natalia}
          className={styles.styles2Image}

          />
            </div>

        <h3 className={styles.stylesH3}>Natália Braga</h3>

        </div>

        <div>
            <h1>Olá , {userLogin?.username}</h1>
            <h4>Bom dia de estudos<br />hoje, sei que você<br />consegue.</h4>
        </div>

        


        </div>

        <div className={styles.containerCardClass}>

            <div className={styles.cardClass}>
                <div className={styles.cardTop}>

                </div>

                <div className={styles.titleImageContainer}>
                 <h2>Física B</h2>

                
                    <Image
                    priority
                    alt=''
                    src={planeta}
                    className={styles.stylesImage}
                    />
             

                </div>

                <div className={styles.containerProfessorMessage}>
                    <div className={styles.containerProfessor}>
                        <Image
                        alt=''
                        src={jose}
                        className={styles.dimensionImage}
                        priority
                        />
                        <h2 className={styles.h2Name}>José Neto</h2>
                    </div>

                    <h3 className={styles.colorText}> Sem atividades </h3>

                </div>

            </div>

        </div>

        </div>
        </>
    )
}