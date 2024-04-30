'use client';
import styles from './perfil.module.css'
import Link from 'next/link'
import Image from 'next/image'
import student from './images/lendo 1Aluno.svg'
import coordenator from './images/coordenacao 1.svg'
import { useRouter } from 'next/navigation'
export default function Perfil(){


    const router = useRouter();
    const handleProfileRoute = (pathname:string) =>{
        router.push(`register/${pathname}`);
    }
    
   


    return (
        <>
        <div className={styles.containerPrincipal}>
           <div className={styles.containerTexto}><h1>Escolha o tipo de conta</h1></div>
           <div className={styles.containerButtons}>
        
            <button 
            className={styles.buttonClass}
            onClick={()=>handleProfileRoute('coordenador')}
            >
                <div className={styles.containerRightImage}>
                    <Image
                    priority
                    alt=''
                    className={styles.imageStyle}
                    src={coordenator}
                    />
                </div>
          <div className={styles.centerTextButton}><h1>Coordenação</h1></div>
            </button>
            </div>
          
        <div
        className={styles.containerLink}
        ><Link
        className={styles.stylesLink}
        href='/SignUp'
        ><h1>Já tenho Login</h1></Link></div>

        </div>
        </>
    )
}