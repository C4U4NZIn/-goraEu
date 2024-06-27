"use client";
import { useCoordenadorContext } from "@/contexts/coordenador";
import stylesAluno from '../../../../components/coordenador/styles/aluno.module.css'
import { useRef, useState } from "react";
import { TextView } from "@/components/coordenador/components/text";
import { ContainerSearch } from "@/components/coordenador/components/containerSearch";

export default function ProfessoresControllerView(){
     
  const {studentsFromTurmas} = useCoordenadorContext();
    const [studentState , setStudentState] = useState<{[alunoId:string]:boolean}>({});
    const [selectedStudents , setSelectedStudents] = useState<[{alunoId:string}]>([{} as any]);

    const handleSelectedStudentsId = () =>{
         let studentsId = Object.values(studentState);
    }

    const toggle = (alunoId:string) =>{
            

        setStudentState((prevStates)=>({
            ...prevStates,
            [alunoId]: !prevStates[alunoId]
        }))
        

    }
  
  
  return(
        <>
        <div
        className={stylesAluno.alunoContainerPage}
        >
         
         <div
         className={stylesAluno.section}
         >
      <TextView
      role="professor"
      />
    {/** adicionar a classe active quando ele for para a turma especifica */}
     <ContainerSearch
     
     role="professor"
     />
         </div>
     <div
     className={`${stylesAluno.section} ${stylesAluno.sectionBottom}`}
     >
      <div
      className={stylesAluno.containerStudents}
      >
   
       {
        studentsFromTurmas.length > 0 ? (
           studentsFromTurmas.map((student)=>(
            
                <div
                onClick={()=> toggle(student.alunoId)}
                key={student.alunoId}
                className={ !studentState[student.alunoId] ? `${stylesAluno.studentCardContainer}`:`${stylesAluno.studentCardContainer} ${stylesAluno.isActive}`}
                >
                  
                </div>
            
           ))

        ) : (
            <div>

            </div>
        )
       }

      </div>

     </div>
        </div>
        </>
      )
}