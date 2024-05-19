"use client";
import {useParams} from 'next/navigation'

const ProfessorClass = () =>{
  
    const param = useParams();

    console.log("String=>", param);
    return(
        <>
        <div
        style={{
            display:'flex',
            flexDirection:'column'
        }}
        >

        <h1>Era pra ser a sala do professor de id:</h1>
        <h1>{param.classId}</h1>
        </div>
        </>
    )
}

export default ProfessorClass;