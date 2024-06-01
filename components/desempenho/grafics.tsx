"use client";

import { Text } from "@/app/(public)/components/global/styled/profile";
import { useSubjectState } from "./zustand/use-button-subject";
import styled from "styled-components";

const ContainerGrafics = styled.div`
display: flex;
width: 100%;
height: 30rem;
flex-direction: column;


.topDetails{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20.25%;
    background-color:#FFA828;
    border-radius: 25px 25px 0 0;
}

.containerGrafic{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 79.75%;
    width:100%;
    background-color:#F7F7F7;
    border-radius: 0 0 25px 25px;
    box-shadow: 0px 4px 4px rgba(0 , 0, 0 , 0.3);
}

`

type Naturais = {
    [materia:string]:Simulado[];
}

type Simulado = {
    id: string;
    id_aluno: string;
    number_questions: number;
    correct_answers: number;
};
type Subjects = {
    "português":Simulado[];
    "matemática":Simulado[];
    "naturais":Naturais;
}
type Semestre = {
    Subjects:Subjects;
}

type ISemestresProps = {
    semestres:Semestre[]
}

const Grafic = ({index , subject , subjects}:{index?:number; subject?:string; subjects?:Simulado[] | Naturais }) =>{
    let semesterNumber
    if(!index){return <></>}
    semesterNumber = index

 
    return(
        <>
        <ContainerGrafics>
            { subject === 'português' && (
                <>
                <div
                className="topDetails"
                >
           <Text
           $fontSize={36}
           $fontWeight={700}
           style={{
            paddingLeft:'1em'
           }}
           >
           {semesterNumber}º SEMESTRE
           </Text>
            </div>
            <div
            className="containerGrafic"
            >
          <h1>Gráfico de barras normal de português</h1>
            </div>
                </>
            )}
          { subject === 'matemática' && (
                <>
                <div
                className="topDetails"
                >
           <Text
           $fontSize={36}
           $fontWeight={700}
           style={{
            paddingLeft:'1em'
           }}
           >
           {semesterNumber}º SEMESTRE
           </Text>
            </div>
            <div
            className="containerGrafic"
            >
          <h1>Gráfico de barras normal de matemática</h1>
            </div>
                </>
            )}
            {
                subject === 'naturais' && (
                    <>
                    <div
                    className="topDetails"
                    >
           <Text
           $fontSize={36}
           $fontWeight={700}
           style={{
            paddingLeft:'1em'
           }}
           >
           {semesterNumber}º SEMESTRE
           </Text>
            </div>
            <div
            className="containerGrafic"
            >
          <h1>Gráfico de barras de naturais</h1>
            </div>
                    </>)
            }
        </ContainerGrafics>
        </>
    )
}



const GraficBarTemplate = ({semestres}:ISemestresProps) =>{

   const {
    ptButtonState,
    mtButtonState,
    ntButtonState
   } = useSubjectState();

         {/**
            
            Object.keys(semestre.Subjects['naturais']).map((materia)=>(
               
          
              ))
        
           */}
            

    return(
        <>
        <div
        style={{
            display:'flex',
            width:'100%',
            flexDirection:'column',
            gap:'1.25rem',
        }}
        >
        {
            ptButtonState && semestres && (
                semestres.map((semestre:Semestre , index)=>(
                    
                    <Grafic
                    key={index}
                    index={index + 1}
                    subject="português"
                    subjects={semestre.Subjects['português']}
                    />
                     

                ))
            )
        }
        {
            mtButtonState && semestres && (
                semestres.map((semestre:Semestre , index)=>(
                    
                  <Grafic
                    key={index}
                    index={index + 1}
                    subject="matemática"
                    subjects={semestre.Subjects['matemática']}
                    />                    
                ))
            )
        }
        {
            ntButtonState && semestres && (
 
         semestres.map((semestre:Semestre , index)=>(
             <Grafic
              key={index}
             index={index + 1}
             subject="naturais"
            subjects={semestre.Subjects['naturais']}
            />    
         ))


            )
        }
        </div>
        </>
    )
}
export default GraficBarTemplate;