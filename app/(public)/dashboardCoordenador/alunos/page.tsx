"use client";
import { useCoordenadorContext } from "@/contexts/coordenador";
import stylesAluno from '../../../../components/coordenador/styles/aluno.module.css'
import { useEffect, useRef, useState } from "react";
import { TextView } from "@/components/coordenador/components/text";
import { ContainerSearch } from "@/components/coordenador/components/containerSearch";
import { useSafeLayoutEffect } from "@chakra-ui/react";
import {  Student } from "@/components/coordenador/components/utils";
import { useDebounce } from "@/components/coordenador/hooks/useDebounce";
import { CircularProgress } from "@mui/material";
//fazer o html e css dos alunos e professorers e usuário
//chamar as funções
export default function AlunosControllerView(){
    
    const {studentsFromTurmas} = useCoordenadorContext();
    const [studentState , setStudentState] = useState<{[alunoId:string]:boolean}>({});
    const [selectedStudents , setSelectedStudents] = useState<[{alunoId:string}]>([{} as any]);
    const [isLoading , setIsLoading] = useState(false);
    const [students , setStudents] = useState<Student[]>([]);
    const [searchStudentId , setSearchStudentId] = useState<string | any>('');
    // a maior besteira de search que eu já vi na vida
    const debouncedValue = useDebounce(searchStudentId); 
  
    //prop driling eu irei cometer aqui 
   //depois crio um estado com zustand e mandp o search

   console.log("text id=>", searchStudentId);

    const fetchStudents = async (search:string) =>{

    await new Promise((resolve)=>setTimeout(resolve , 1000))
   return studentsFromTurmas.filter((student:Student)=>
    student.alunoName.toLowerCase().includes(search.toLocaleLowerCase())
    ||
    student.turmaName.toLowerCase().includes(search.toLocaleLowerCase())
    ||
    student.matricula.toLowerCase().includes(search.toLocaleLowerCase())
 ) 
 
 
 }

    useEffect(()=>{
      const loadStudents = async () =>{
         
        setIsLoading(true);

        const students = await fetchStudents(debouncedValue);

        setStudents(students);

        setIsLoading(false);

      }
      loadStudents();


    },[searchStudentId])



    const handleSelectedStudentsId = () =>{
         let studentsId = Object.values(studentState);
    }

    const toggle = (alunoId:string) =>{
            

        setStudentState((prevStates)=>({
            ...prevStates,
            [alunoId]: !prevStates[alunoId]
        }))
        

    }

    //cometi prop drilling , me perdoe quem está vendo meu código
    console.log("ids?=>", studentState);
    console.log("Data de students=>" , studentsFromTurmas);


     //irei cometer prop drilling
    return(
        <>
        <div
        className={stylesAluno.alunoContainerPage}
        >
         
         <div
         className={stylesAluno.section}
         >
      <TextView
      role="aluno"
      />
    {/** adicionar a classe active quando ele for para a turma especifica */}
     <ContainerSearch
     setStudent={setSearchStudentId}
     role="aluno"
     />
         </div>


     <div
     className={`${stylesAluno.section} ${stylesAluno.sectionBottom}`}
     >
      {isLoading && (<>
        <div
        style={{
            display:'flex',
            alignSelf:'center',
            width:'80%',
            alignItems:'center',
            justifyContent:'center' 
        }}
        >
        <CircularProgress
        style={{
            color:'#006792',
            display:'flex',
            
        }}
        />    
        </div>  
      </>)}
      {
        !isLoading && (
            <div
            className={stylesAluno.containerStudents}
            >
         
             {
              studentsFromTurmas.length > 0 ? (
                 students.map((student)=>(
                  
                      <div
                      onClick={()=> toggle(student.alunoId)}
                      key={student.alunoId}
                      className={ !studentState[student.alunoId] ? `${stylesAluno.studentCardContainer}`:`${stylesAluno.studentCardContainer} ${stylesAluno.isActive}`}
                      >
                        <h4>Nome:{student.alunoName}</h4>
                        <h4>Turma:{student.turmaName}</h4>
                      </div>
                  
                 ))
      
              ) : (
                  <div>
      
                  </div>
              )
             }
      
            </div>
        )
      }


     </div>





        </div>
        </>
    )
}