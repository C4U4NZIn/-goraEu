"use client";
import stylesContainerInput from '../styles/style-container.module.css'
import professor from '../images/prof (3) 4.svg'
import Image from 'next/image';
import { profileEnd } from 'console';
import { InputSearch } from './input';
type ComponentProps = {
    role:string;
    setStudent?:(searchStudent?:string)=> void;
    setTeacher?:(searchStudent?:string)=>void;
}

export const ContainerSearch = ({role , setStudent , setTeacher}:ComponentProps)=>{
    return(
        <>
        {
            role === 'aluno' && (
               <div
               className={stylesContainerInput.containerInputImage}
               >
                <div
                className={stylesContainerInput.stylesProfessor}
                >
              <Image
              alt='profImage'
              width={200}
              height={200}
              src={professor}
              /> 
            </div>
            <div
             className={stylesContainerInput.inputLabelContainer}
             >
             <p
             className={stylesContainerInput.titleSearchStudent}
             >PROCURAR ALUNO</p>
             <InputSearch
             onChangeStudent={setStudent}
             role='aluno'
             />
             </div>
               </div>
            )
        }
        {
            role === 'professor' && (
             <>
                            <div
               className={stylesContainerInput.containerInputImage}
               >
            <div
                className={stylesContainerInput.stylesProfessor}
                >
              <Image
              alt='profImage'
              width={200}
              height={200}
              src={professor}
              /> 
            </div>
            <div
             className={stylesContainerInput.inputLabelContainer}
             >
             <p
             className={stylesContainerInput.titleSearchStudent}
             >PROCURAR PROFESSOR</p>
             <InputSearch
             onChangeTeacher={setTeacher}
             role='professor'
             />
             </div>   
             
         </div>
             </>
            )
        }
        </>
    )
}