'use client';
import styles from './css/salas.module.css'
import Natalia from './images/image 25Natália.svg'
import Image from 'next/image'
import planeta from './images/image 47planeta.svg'
import jose from './images/image 36José.svg'
import { useUserContext } from '@/contexts'
import AvatarTemplate from '../../usuario/avatar';
import { convertBufferToImage } from '@/default';
import {useParams} from 'next/navigation'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/app/services/__api';

export type dataAlunoClass = {
    DataClass:any[]
}





export default function Salas(){
 
    const {userLogin , salas} = useUserContext();
    //const image = convertBufferToImage(userLogin?.avatar);
    const [currentWidth,setCurrentWidth] = useState<number>(0);
    const [currentHeight, setCurrentHeight] = useState<number>(0);
    
    const username = userLogin?.username;
    const image = convertBufferToImage(userLogin?.avatar);
    const Router = useRouter();
    const params = useParams();


    const goToProfessorClass = (classId:string) =>{
         


       return ()=>{
           
           Router.push(`/dashboardMain/salas/${classId}`)
        
       }


    }
    

    useEffect(()=>{
        setCurrentHeight(window.innerHeight);
        setCurrentWidth(window.innerWidth);
    },[])
    
        console.log("Altura e largura atual da tela=>",currentHeight , currentWidth);
        console.log("todas as salas que o aluno está veinculado" ,salas);

  



    return(

        <> 
        <div className={styles.containerPrincipal}>
       
       {/** global container Profile */}
        <div className={styles.containerProfile}>
            

        <div className={styles.containerImageText}>

            <div className={styles.containerImage}>
                {
                    username ? (
                        <>
                   <AvatarTemplate username={username}/>
                        </>

                    ):(
                <>
                     <Image
                        priority
                        alt=''
                        src={Natalia}
                        className={styles.styles2Image}
                        />
                   
                </>
                    ) }
            </div>


        </div>

        <div>
            <h1>Olá , {userLogin?.username}</h1>
            <h4>Bom dia de estudos<br />hoje, sei que você<br />consegue.</h4>
    
       
       </div>

        


        </div>
       {/** containerTemplate - styled components */}

      <div
      className={styles.salasContainer} 
      >

        {salas.map((salas)=>(
        <div 
        className={styles.containerCardClass} 
        key={salas.salaId}
        onClick={goToProfessorClass(salas.salaId)}
        
        >

            <div className={styles.cardClass}>
                <div className={styles.cardTop}>

                </div>

                <div className={styles.titleImageContainer}>
                 <h2
                 >{salas.salaName}</h2>

                
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
                        <h2 className={styles.h2Name}>{salas.professorName}</h2>
                    </div>

                    <h3 className={styles.colorText}> Sem atividades </h3>

                </div>

            </div>

        </div>
           
        ))}
      </div>



        </div>
        </>
    )
}