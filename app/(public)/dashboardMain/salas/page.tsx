'use client';
import styles from './css/salas.module.css'
import Natalia from './images/image 25Natália.svg'
import Image from 'next/image'
import planeta from './images/image 47planeta.svg'
import jose from './images/image 36José.svg'
import { useUserContext } from '@/contexts'
import AvatarTemplate from '../../usuario/avatar';
import { convertBufferToImage } from '@/default';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/app/services/__api';
import marte from '../../components/global/images/image 53marte.svg'
import venus from '../../components/global/images/image 56venus.svg'
import saturno from '../../components/global/images/image 56saturno.svg'
import netuno from '../../components/global/images/image 53netuno.svg'
import terra from '../../components/global/images/image 56terra.svg'
import astronauta from '../../components/global/images/astronauta (1) 1.svg'
import { useClassColor } from './zustand/classContext';
export type dataAlunoClass = {
    DataClass:any[]
}
export default function Salas(){
 
    const arrImg:any = {
    'biologia':{img:terra , bgColor:'#93C75F'},
    'fisica':{img:marte , bgColor:'#FD7B23'},
    'quimica':{img:saturno , bgColor:'#FBD468'},
    'matematica':{img:netuno , bgColor:'#90D7F6'},
    'gramatica':{img:venus , bgColor:' #FFB028'}     
    }
 
   //função para dados experimentais
   const removeAccToStr = (materia?:string) =>{
       if(typeof materia !== 'string'){return ""}
      let materiaReplaced = materia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().slice(0 , -2);
       return materiaReplaced
    }
  

    const {setColor} = useClassColor();
    const {userLogin , salas} = useUserContext();
    //const image = convertBufferToImage(userLogin?.avatar);
    const [currentWidth,setCurrentWidth] = useState<number>(0);
    const [currentHeight, setCurrentHeight] = useState<number>(0);
    const username = userLogin?.username;
    const image = convertBufferToImage(userLogin?.avatar);
    const Router = useRouter();
    const splitUsername = (name:any) =>{
       let splitedName:any
       let avatarUsername:any
       if(splitedName === undefined && name !== undefined){
        splitedName = name.split(' ');
        avatarUsername = splitedName[0][0] + (splitedName[1][0] ? splitedName[1][0] : '')
    }


      return avatarUsername;

    }
    const concatName = (name:any) =>{
     let splitedName = name.split(' ');
     let username = splitedName[0]+ ' ' +splitedName[1]
    
     return username;

    } 

 
    let avatarUsername:any
    
    avatarUsername = splitUsername(username);
    
    const goToProfessorClass = (classId:string , salaName?:string) =>{ 
      


       return ()=>{

           if(salaName && arrImg[removeAccToStr(salaName)]){
             setColor(arrImg[removeAccToStr(salaName)].bgColor);
          }
           
          Router.push(`/dashboardMain/salas/${classId}`)
        
       }


    }
    
    console.log("Nome no avatar=>" , avatarUsername);

    useEffect(()=>{
        setCurrentHeight(window.innerHeight);
        setCurrentWidth(window.innerWidth);
    },[])
    
        console.log("Altura e largura atual da tela=>",currentHeight , currentWidth);
        console.log("todas as salas que o aluno está veinculado" ,salas);


        console.log("Imagens?=>" , salas.map((sala)=>{
            if(arrImg[removeAccToStr(sala.salaName)]){
               return arrImg[removeAccToStr(sala.salaName)].img
            }
        }) );

   
  



    return(

        <> 
        <div className={styles.containerPrincipal}>
       
       {/** global container Profile */}
        <div className={styles.containerProfile}>
            

        <div className={styles.containerImageText}>

            <div className={styles.containerImage}>
                {
                    avatarUsername ? (
                        <>
                   <AvatarTemplate 
                   username={avatarUsername}
                   heightImg={150}
                   widthImg={150}
                   />
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
        onClick={goToProfessorClass(salas.salaId , salas.salaName)}
        >

            <div className={styles.cardClass}>
                <div className={styles.cardTop}>

                </div>

                <div className={styles.titleImageContainer}>
                 <h2
                 >{salas.salaName}</h2>

                     {
                        arrImg[removeAccToStr(salas.salaName)] ? (
                            <Image
                            priority
                            alt=''
                            src={arrImg[removeAccToStr(salas.salaName)].img}
                            className={styles.stylesImage}
                            />
                        
                        ):(
                            <Image
                            priority
                            alt=''
                            src={planeta}
                            className={styles.stylesImage}
                            />
                        )
                     }

             

                </div>

                <div className={styles.containerProfessorMessage}>
                    <div className={styles.containerProfessor}>
                    {
                   
                    avatarUsername ? (
                        <>
                   <AvatarTemplate 
                   username={avatarUsername = splitUsername(salas.professorName)}
                   widthImg={100}
                   heightImg={100}
                   />
                        </>

                    ):(
                <>
                     <Image
                        priority
                        alt=''
                        src={jose}
                       className={styles.dimensionImage}
                        />
                   
                </>
                    ) }
                    
                        <h2 className={styles.h2Name}>{concatName(salas.professorName)}</h2>
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