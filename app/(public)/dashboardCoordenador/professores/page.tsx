"use client";
import { useCoordenadorContext } from "@/contexts/coordenador";
import stylesAluno from '../../../../components/coordenador/styles/aluno.module.css'
import stylesTeacher from '../../../../components/coordenador/styles/teacher.module.css';
import { useDebounce } from "@/components/coordenador/hooks/useDebounce";
import { useRef, useState , useEffect } from "react";
import { TextView } from "@/components/coordenador/components/text";
import { ContainerSearch } from "@/components/coordenador/components/containerSearch";
import { InfoComponent , ContainerActions } from "../alunos/page";
import { Subject } from "@mui/icons-material";
import seta from '../../../../components/coordenador/images/image 97.png'
import Image from "next/image";
import AvatarTemplate from "../../usuario/avatar";



export default function ProfessoresControllerView(){
     
  const {studentsFromTurmas , teachers} = useCoordenadorContext();

    const [teacherState , setTeacherState] = useState<{[teacherId:string]:boolean}>({});
    const [selectedStudents , setSelectedStudents] = useState<[{alunoId:string}]>([{} as any]);
    const [teacherId , setTeacherId] = useState<string | undefined>('');
    const debouncedValue = useDebounce(teacherId);
    const [isLoading , setIsLoading] = useState(false);
    const [teacher , setTeacher] = useState([] as any);
    
    const handleSelectedStudentsId = () =>{
         let studentsId = Object.values(teacherState);
    }

   teachers.sort((current:any , next:any)=>{
    if(current.subject < next.subject){
      return -1
    }
    if(current.subject > next.subject){
     return 1
    }
    return 0;
   })
   
   const subjects = [
    {
      subject:'biologia',
      id:1
    },
    {
      subject:'física',
      id:2
    },
    {
      subject:'matemática',
      id:3
    },
    {
      subject:'português',
      id:4

    },
    {
      subject:'química',
      id:5
    }
   ]

    const toggle = (teacherId:string) =>{
            

        setTeacherState((prevStates)=>({
            ...prevStates,
            [teacherId]: !prevStates[teacherId]
        }))
        }
  

        const fetchTeachers = async (search:string) =>{

          await new Promise((resolve)=>setTimeout(resolve , 1000))
         return studentsFromTurmas.filter((teacher)=>
          teacher.username.toLowerCase().includes(search.toLocaleLowerCase())
          ||
          teacher.subject.toLowerCase().includes(search.toLocaleLowerCase())
          ||
          teacher.cpf.toLowerCase().includes(search.toLocaleLowerCase())
       ) 
       
       
       }
      
          useEffect(()=>{
            const loadStudents = async () =>{
               
              setIsLoading(true);
      
              const teacher = await fetchTeachers(debouncedValue);
      
              setTeacher(teacher);
      
              setIsLoading(false);
      
            }
            loadStudents();
      
      
          },[teacherId])
      
      
  
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
     setTeacher={setTeacherId}
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
        teachers.length > 0 ? (
           subjects.map((subject)=>(
          
            <div
            key={subject.id}
            >

            <h5 className={stylesTeacher.textSubject}>{subject.subject} <Image className={stylesTeacher.imageSetaStyles} alt="some" src={seta}/></h5>
             {
              teachers.filter((teacher)=> teacher.subject === subject.subject).map((filteredTeachers)=>(
                <div
                onClick={()=> toggle(filteredTeachers.id)}
                key={filteredTeachers.id}
                className={ !teacherState[filteredTeachers.id] ? `${stylesAluno.studentCardContainer}`:`${stylesAluno.studentCardContainer} ${stylesAluno.isActive}`}
                >
                  <div
                  className={stylesAluno.containerAvatarStudent}
                  >
                <AvatarTemplate
                username={filteredTeachers.username.slice(0).toUpperCase()}
                heightImg={120} 
                widthImg={120}
                fontSize="120"
                />
                  </div>
                  <div
                  className={stylesAluno.containerInfoActions}
                  >
                    <InfoComponent
                    role="professor"
                    cpf={filteredTeachers.cpf}
                    nome={filteredTeachers.username}
                    />
                  <ContainerActions
                  role="professor"
                  />

                  </div>
                </div>
              ))
             }

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