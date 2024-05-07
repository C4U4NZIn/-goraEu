"use client";
import AvatarTemplate from "@/app/(public)/usuario/avatar";
import {
 ContainerCardClass,
 CardClass,
 CardTop,
 ContainerTitleImage,
 ContainerProfessorMessage,
 ContainerProfessor,
 ColorText
} from '../styled/salas';
import styles from '../css/salas.module.css'
import planeta from '../images/image 47planeta.svg';
import Image from "next/image";
export type cardClassProps = {
    className:string;
    teacherName:string;
    
}

{/** rendenrizar cores diferentes para diferentes salas */}
const CardClassComponent = ({className , teacherName}:cardClassProps) =>{

   return(
    <>
    <ContainerCardClass>
     <CardClass>
     <CardTop>

     </CardTop>

     <ContainerTitleImage>
        <h2>{className}</h2>
        <Image
        priority
        alt=""
        src={planeta}
        className={styles.stylesImage}
        />
     </ContainerTitleImage>

    <ContainerProfessorMessage>
     <ContainerProfessor>
    <AvatarTemplate username={teacherName}/>
    <h2>{teacherName}</h2>
     </ContainerProfessor>
    </ContainerProfessorMessage>



     </CardClass>

    </ContainerCardClass>
    
    
    </>
   )


}

export default CardClassComponent;