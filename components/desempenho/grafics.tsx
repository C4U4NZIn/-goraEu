"use client";

import { Text } from "@/app/(public)/components/global/styled/profile";
import { useSubjectState } from "./zustand/use-button-subject";
import styled from "styled-components";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




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
    height: 15.25%;
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

const Grafic = ({index , subject , subjects}:{index?:number; subject:string; subjects?:Simulado[] | Naturais }) =>{
    let semesterNumber
    let data:any = []
    if(!index){return <></>}
    semesterNumber = index
    let colors:any = {
        'química':'#FBD468',
        'física':'#FFB028',
        'biologia':'#B8FF70'
    }
    const getColor = (subject:string) =>{
        return colors[subject]
    }
    let naturaisSubjects = subjects as Naturais; 

     if(subject !== "naturais" && subjects && Array.isArray(subjects)){
      subjects.map((simulado:Simulado , key:number)=>{
           data.push({
           'simulado_name': `${key+1}º Simulado`,
           'id':simulado.id,
           'id_aluno':simulado.id_aluno,
           'correct_answers':simulado.correct_answers,
           'number_questions':simulado.number_questions 
           })
      })
     }

     if(subject === "naturais" && typeof subjects === "object" && subjects.constructor === Object){
        
        
        let simuladosSubject: any[] = [];
        
        Object.keys(naturaisSubjects).forEach((materia) => {
            naturaisSubjects[materia].forEach((simulado: Simulado, key: number) => {
                if (!data[key]) {
                    data[key] = {
                        'simulado_name': `${key+1}º Simulado`,
                        'id': simulado.id,
                        'id_aluno': simulado.id_aluno,
                        'color':materia,
                        'total_number_questions':simulado.number_questions
                    };
                }
                data[key][`${materia}_correct_answers`] = simulado.correct_answers;
                data[key][`${materia}_number_questions`] = simulado.number_questions;
            });
        });
        
        console.log("simuladosSubject =>", simuladosSubject);
         
    }
     console.log("array de subjects=> " ,  data);
 
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
          <ResponsiveContainer style={{
            alignSelf:'center',
            display:'flex'
          }} width="100%" height="80%">
        <BarChart
          width={10}
          height={170}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0"  vertical={false} />
          <XAxis dataKey="simulado_name" stroke="black" fontSize={18} fontWeight={700}/>
          <YAxis dataKey="number_questions" stroke="black"/>{/** n de questões */}
          <Tooltip cursor={{fill:'transparent'}}/>
          <Bar
          radius={[5 , 5 , 0 , 0]} 
          barSize={80}
          dataKey="correct_answers" fill="#2391EB"/> {/** n de acertos */}
        </BarChart>
      </ResponsiveContainer>
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
            <ResponsiveContainer style={{
            alignSelf:'center',
            display:'flex'
          }} width="100%" height="80%">
        <BarChart
          width={10}
          height={170}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0"  vertical={false} />
          <XAxis dataKey="simulado_name" stroke="black" fontSize={18} fontWeight={700}/>
          <YAxis dataKey="number_questions" stroke="black"/>{/** n de questões */}
          <Tooltip cursor={{fill:'transparent'}}/>
          <Bar
          radius={[5 , 5 , 0 , 0]} 
          barSize={80}
          dataKey="correct_answers" fill="#F26921"/> {/** n de acertos */}
        </BarChart>
      </ResponsiveContainer>
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
                 <ResponsiveContainer style={{
            alignSelf:'center',
            display:'flex'
          }} width="100%" height="80%">
        <BarChart
          width={10}
          height={170}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {Object.keys(naturaisSubjects).map((materia, index) => (
           <>
          <CartesianGrid strokeDasharray="0 0"  vertical={false} horizontal={true} stroke="black"/>
          <XAxis dataKey="simulado_name" stroke="black" fontSize={18} fontWeight={700}/>
          <YAxis dataKey="total_number_questions" fontWeight={700} stroke="black"/>{/** n de questões */}
          <Tooltip cursor={{fill:'transparent'}}/>
           <Bar
                key={index}
                radius={[5 , 5 , 0 , 0]} 
                barSize={32}
                dataKey={`${materia}_correct_answers`}
                fill={`${getColor(materia)}`} // Função para obter a cor com base na matéria
            />
           </>
        ))}
        </BarChart>
      </ResponsiveContainer>
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