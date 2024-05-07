'use client';
import styles from './css/salas.module.css'
import Natalia from './images/image 25Natália.svg'
import Image from 'next/image'
import planeta from './images/image 47planeta.svg'
import jose from './images/image 36José.svg'
import { useUserContext } from '@/contexts'
import AvatarTemplate from '../../usuario/avatar';
import { convertBufferToImage } from '@/default';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useState } from 'react';
import api from '@/app/services/__api';
export type dataAlunoClass = {
    DataClass:any[]
}





export default function Salas(){
 
    const {userLogin} = useUserContext();
    //const image = convertBufferToImage(userLogin?.avatar);
    const [salas , setSalas] = useState<any[]>([]);
    
    const username = userLogin?.username;
    const image = convertBufferToImage(userLogin?.avatar);
    const router = useRouter();
    const goToClassById = () =>{

    }
    const alunoId = userLogin?.id;

    const getAllSalas = async () =>{
        let salas
         const AllSalasHavingAluno = await api.post('/coordenador/getAllSalas',{
            alunoId:alunoId
         })
         console.log(AllSalasHavingAluno);
         if(AllSalasHavingAluno.data.status === 202){
            salas = AllSalasHavingAluno.data.data;
         }

         setSalas(salas);
    }

    useEffect(()=>{
        getAllSalas();
    },[])

    setTimeout(()=>{
        console.log(salas);
        
    },1500)


    return(

        <> 
        <div className={styles.containerPrincipal}>
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