"use client";
import { 
    Text
 } from "@/app/(public)/components/global/styled/profile";
import styled from 'styled-components'
import Post from "./post/post";
//relembrar a diferença intrinsica entre
//interfaces e types e as melhores práticas para
//usá-las
type IActivitiesProps = {
    bgColor?:string;
    professorTasks?: any[];
    professorSimulados?: any[];
    visible_for?:string;
    role?:string;
}

const Activities = (
    {
    bgColor , 
    professorSimulados , 
    professorTasks,
    role
}:IActivitiesProps) =>{
    return(
      <>
      <ContainerActivities
      $bgColorDiv={bgColor}
      >
        {
            role === 'aluno' && (
        <div
     className="container-sections"
     >
      <Text
        $fontSize={45}
        $fontWeight={700}
        style={{
            color:`${bgColor}`,
            alignSelf:'self-start',
            marginLeft:'3em'
        }}
        >
            Simulados
        </Text>

        <div
        className="simulado-section"
        >
      {
        professorSimulados?.map((professorSimulado)=>(
            <Post
            professorImg={professorSimulado.professorImg}
            professorName={professorSimulado.professorName}
            createdAt={professorSimulado.createdAt}
            simulado={professorSimulado}
            type="simulado"
            visible_for="aluno"
            />
        ))
      }
      </div>
      <Text
        $fontSize={45}
        $fontWeight={700}
        style={{
            color:`${bgColor}`,
            margin:0,
            padding:0,
            alignSelf:'flex-start',
            marginLeft:'3em'
            
        }}

        >
            Atividades
        </Text>
      <div
      className="task-section"
      >
      {
        professorTasks?.map((professorTask)=>(
            <Post
            professorImg={professorTask.professorImg}
            professorName={professorTask.professorName}
            createdAt={professorTask.createdAt}
            task={professorTask}
            type="task"
            visible_for="aluno"
            />
        ))
      }
      </div>
       </div>
            )
        }
       {
        role === 'professor' && (
            <div
            className="container-sections"
            >
             <Text
               $fontSize={45}
               $fontWeight={700}
               style={{
                   color:`${bgColor}`,
                   alignSelf:'self-start',
                   marginLeft:'3em'
               }}
               >
                   Simulados
               </Text>
       
               <div
               className="simulado-section"
               >
             {
               professorSimulados?.map((professorSimulado)=>(
                   <Post
                   professorImg={professorSimulado.professorImg}
                   professorName={professorSimulado.professorName}
                   createdAt={professorSimulado.createdAt}
                   simulado={professorSimulado}
                   type="simulado"
                   visible_for="professor"
                   />
               ))
             }
             </div>
             <Text
               $fontSize={45}
               $fontWeight={700}
               style={{
                   color:`${bgColor}`,
                   margin:0,
                   padding:0,
                   alignSelf:'flex-start',
                   marginLeft:'3em'
                   
               }}
       
               >
                   Atividades
               </Text>
             <div
             className="task-section"
             >
             {
               professorTasks?.map((professorTask)=>(
                   <Post
                   professorImg={professorTask.professorImg}
                   professorName={professorTask.professorName}
                   createdAt={professorTask.createdAt}
                   task={professorTask}
                   type="task"
                   visible_for="professor"
                   />
               ))
             }
             </div>
              </div>
        )
       }

      </ContainerActivities>
      
      </>
    )
}
//Teste de cores
const ContainerActivities = styled.div<{$bgColorDiv?:string}>`

margin-top: -8rem;
display: flex;
flex-direction: column;
width: 100%;
padding-top: calc(12% + 1rem);
//background-color: ${props => props.$bgColorDiv};
.simulado-section{
 
}
.task-section{
  
}

//teste
.simulado-section , .task-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    overflow: auto;
    height: 10rem;
    width: 100%;
    padding-bottom: 0.1rem;
    padding-top: 0.1rem;
   
    

}

.simulado-section::-webkit-scrollbar{
    width: 0px;
}

.task-section::-webkit-scrollbar{
    width: 0px;
}

.container-sections{
    display: flex;
    height: auto;
    align-items: center;
    width: auto;
    flex-direction: column;
    gap: 4rem;
    overflow: auto;
    padding-bottom: calc(2% + 1rem);
}

.container-sections::-webkit-scrollbar{
  width: 0px;
}





`


export default Activities;