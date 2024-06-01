"use client";
import styled from "styled-components";



type ITextProps = {
    role?:string;
}


const ContainerTextDesempenho = styled.div`
   display: flex;
   height: auto;
   width: 60%;
   border-left: 4px solid #EC641D;
   flex-direction: column;
   gap:0;
   margin: 0;
   padding-left: 1rem;

   .text{
    padding: 0;
    margin: 0;
    color: #EC641D;
    font-size: 38px;
    font-weight: 700;
   }

`

const TextDesempenho = ({role}:ITextProps) =>{
    return (
        <>
        <ContainerTextDesempenho>
            { role === 'teacher' && (
               <>
                <h1
                className="text"
                >
             ACOMPANHE O                
                </h1>
                <h1
               className="text"
                >
            CRESCIMENTO
                </h1>
    
               </>
            )}
            { role === 'student' && (
               <>
                <h1
                className="text"
                >
             ACOMPANHE SEU                
                </h1>
                <h1
               className="text"
                >
            CRESCIMENTO
                </h1>
    
               </>
            )}
            { role === 'question' && (
               <>
                <h1
                className="text"
                >
             BANCO DE                
                </h1>
                <h1
               className="text"
                >
            QUESTÕES
                </h1>
    
               </>
            )}
          {role === 'createQuestion' && (
            <>
                <h1
                className="text"
                >
             CRIAR             
                </h1>
                <h1
               className="text"
                >
            QUESTÃO
                </h1>
            </>
          )}
          {role === 'updateQuestion' && (
            <>
                <h1
                className="text"
                >
             Alterar               
                </h1>
                <h1
               className="text"
                >
            Questão
                </h1>
            </>
          )  }
          {role === 'insertQuestions' && (
            <>
                <h1
                className="text"
                >
             ADICIONE             
                </h1>
                <h1
               className="text"
                >
            QUESTÕES
                </h1>
            </>
          )
          }
          {role === 'createSimulate' && (
            <>
                <h1
                className="text"
                >
             CRIE SEU               
                </h1>
                <h1
               className="text"
                >
            SIMULADO
                </h1>
            </>
          )
          }
          {role === 'updateSimulate' && (
            <>
                <h1
                className="text"
                >
             Alterar              
                </h1>
                <h1
               className="text"
                >
            Simulado
                </h1>
            </>
          )
          }
        </ContainerTextDesempenho>
        </>
    )
}

export default TextDesempenho;