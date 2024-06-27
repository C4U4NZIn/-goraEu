"use client";
import styleAluno from '../styles/aluno.module.css'



type PropsTextView = {
        role:string;
}


export const TextView = ({role}:PropsTextView) =>{
 
 
 
    return(
     <>
     {role === 'aluno' && (

        <div
        className={styleAluno.containerTopText}
        >
         <div
         className={styleAluno.containerTextClass}
         >
         <p className={styleAluno.textNotifyUser}>NOSSOS</p>
         <p className={styleAluno.textNotifyUser}>ALUNOS</p>
         </div>
        </div>
     )}
     {
        role === 'professor' && (
            <div
            className={styleAluno.containerTopText}
            >
            <div
            className={styleAluno.containerTextClass}
            >
            <p className={styleAluno.textNotifyUser}>NOSSOS</p>
            <p className={styleAluno.textNotifyUser}>PROFESSORES</p>
            </div>
            </div>
        )
     }
     </>

    )   
}