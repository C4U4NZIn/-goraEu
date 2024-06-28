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
import AvatarTemplate from "../../usuario/avatar";
import lixeira  from '../../../../components/coordenador/images/lata-de-lixo 20.svg'
import Image from "next/image";
import lapis from '../../../../components/coordenador/images/ferramenta-lapis (1) 10 (1).svg';
import seta from '../../../../components/coordenador/images/image 97.png';
//fazer o html e css dos alunos e professorers e usuário
//chamar as funções

type InfoComponentProps = {
  role:string;
  ra?:string;
  nome:string;
  cpf?:string;
}

 export const InfoComponent = ({role , ra , nome , cpf}:InfoComponentProps) =>{
     return(
      <>
      {
        role === 'aluno' && (
      <div
      className={stylesAluno.infoComponenteStyle}
      >
       <p className={stylesAluno.textInfo1}>Nome: {nome}</p>
       <p className={stylesAluno.textInfo2}>RA: {ra}</p>
      </div>
        )
      } 
      {
        role === 'professor' && (
          <div
          className={stylesAluno.infoComponenteStyle}
          >
           <p className={stylesAluno.textInfo}>Nome: {nome}</p>
           <p className={stylesAluno.textInfo}>cpf: {cpf}</p>
          </div>
        )
      }
      
      </>
     )
}

 export  const ContainerActions = ({role}:{role:string}) =>{
   return(
    <>
    
    {
      role === 'aluno' && (
       <div
       className={stylesAluno.containerAreaActions}
       >
        <div
        className={stylesAluno.containerActions}
        >
         <button
         className={stylesAluno.stylesEditAction}
         >
          <Image
          alt="edit"
          className={stylesAluno.stylesImageAction}
          src={lapis}
          />
         </button>
         <button
         className={stylesAluno.stylesDeleteAction}
         >
          <Image
          alt="delete"
          className={stylesAluno.stylesImageAction}
          src={lixeira}          
          />
         </button>
        </div>
       </div>
      )
    }
    {
      role === 'professor' && (
        (
          <div
          className={stylesAluno.containerAreaActions}
          >
           <div
           className={stylesAluno.containerActions}
           >
          <button
         className={stylesAluno.stylesEditAction}
         >
          <Image
          alt="edit"
          className={stylesAluno.stylesImageAction}
          src={lapis}
          />
         </button>
         <button
         className={stylesAluno.stylesDeleteAction}
         >
          <Image
          alt="delete"
          className={stylesAluno.stylesImageAction}
          src={lixeira}          
          />
         </button>
           </div>
          </div>
         )
      )
    }
    
    </>
   )
}

export default function AlunosControllerView(){
    
    const {studentsFromTurmas , turmas , salas} = useCoordenadorContext();
    const [studentState , setStudentState] = useState<{[alunoId:string]:boolean}>({});
    const [selectedStudents , setSelectedStudents] = useState<[{alunoId:string}]>([{} as any]);
    const [isLoading , setIsLoading] = useState(false);
    const [students , setStudents] = useState<Student[]>([]);
    const [searchStudentId , setSearchStudentId] = useState<string | any>('');
    // a maior besteira de search que eu já vi na vida
    const debouncedValue = useDebounce(searchStudentId); 
  
    //prop driling eu irei cometer aqui 
   //depois crio um estado com zustand e mandp o search

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
    console.log("turmas=>", turmas);

    turmas.sort((current:any , next:any)=>{
      if(current.name_turma < next.name_turma){
        return -1;
    }
    if(current.name_turma > next.name_turma){
      return 1;
    }
    return 0;
    })

    


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
              turmas.length > 0 ? (

                turmas.map((turma)=>(
                    <div
                    key={turma.id}
                    style={{
                      display:'flex',
                      flexDirection:'column'
                    }}
                    >
                      <h5 className={stylesAluno.styleTurmaName}> Turma {turma.name_turma}  <Image className={stylesAluno.styleSetas} src={seta} alt="something"/>  </h5> 
                      <div
                      className={stylesAluno.containerStudentsTurma}
                      >
                      {
                        students.filter((student)=> student.turmaId === turma.id).map((filteredStudent)=>(
                          <div
                          onClick={()=> toggle(filteredStudent.alunoId)}
                          key={filteredStudent.alunoId}
                          className={ !studentState[filteredStudent.alunoId] ? `${stylesAluno.studentCardContainer}`:`${stylesAluno.studentCardContainer} ${stylesAluno.isActive}`}
                          >
                            <div
                            className={stylesAluno.containerAvatarStudent}
                            >
                          <AvatarTemplate
                          username={filteredStudent.alunoName.slice(0).toUpperCase()}
                          heightImg={120} 
                          widthImg={120}
                          fontSize="120"
                          />
                            </div>
                            <div
                            className={stylesAluno.containerInfoActions}
                            >
                              <InfoComponent
                              role="aluno"
                              ra={filteredStudent.matricula}
                              nome={filteredStudent.alunoName}
                              />
                            <ContainerActions
                            role="aluno"
                            />
        
                            </div>
                          </div>
                        ))
                      }
                      </div>

                    </div>
                ))

              
              ) : (
                  <div>
                  <h5
                  >Não existem turmas e salas ainda</h5>
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


{/**
 students.map((student)=>(
                  
                  <div
                  onClick={()=> toggle(student.alunoId)}
                  key={student.alunoId}
                  className={ !studentState[student.alunoId] ? `${stylesAluno.studentCardContainer}`:`${stylesAluno.studentCardContainer} ${stylesAluno.isActive}`}
                  >
                    <div
                    className={stylesAluno.containerAvatarStudent}
                    >
                  <AvatarTemplate
                  username={student.alunoName.slice(0).toUpperCase()}
                  heightImg={120} 
                  widthImg={120}
                  fontSize="120"
                  />
                    </div>
                    <div
                    className={stylesAluno.containerInfoActions}
                    >
                      <InfoComponent
                      role="aluno"
                      ra={student.matricula}
                      nome={student.alunoName}
                      />
                    <ContainerActions
                    role="aluno"
                    />

                    </div>
                  </div>
              
             ))

*/}