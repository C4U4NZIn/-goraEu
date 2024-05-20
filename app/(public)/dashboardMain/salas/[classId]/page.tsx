"use client";
import { useUserContext } from '@/contexts';
import {useParams} from 'next/navigation'
import { useClassColor } from '../zustand/classContext';
const ProfessorClass = () =>{
  
    const {salas} = useUserContext();
    const param = useParams();
    
    let profClass = salas.filter((sala)=> sala.salaId === param.classId)[0];
    const {bgClassColor} = useClassColor();


   // console.log("current Class=>" , currentProfessorClass);

    console.log("String=>", param);
    console.log("Existe sala?=>",salas);
    console.log("Existe a sala atual?=>", profClass);

    console.log("Cor da sala da turma=>", bgClassColor);


    return(
        <>
        <div
        style={{
            display:'flex',
            flexDirection:'column'
        }}
        >
        <h1>Detallhes da sala para o aluno:</h1>
        <ul>{
            profClass ? (
             <>
             <li>{profClass.professorName}</li>
             <li>{profClass.salaName}</li>
             <li>{profClass.salaId}</li>
             </>

            ):(
                <>
                <h1>Loading...</h1>
                </>
            )
            }
            </ul>
        </div>
        </>
    )
}

export default ProfessorClass;