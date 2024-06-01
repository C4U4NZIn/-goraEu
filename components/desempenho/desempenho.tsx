"use client";
import { ContainerPrincipal } from '@/app/(public)/components/global/styled/profile';
import styled from 'styled-components'
import NavBarPage from './navBarPage';
import GraficBarTemplate from './grafics';
import MiddleAreaDetails from './middleArea';




export default function Desempenho(){
    

   {/** Alguns erros de lógica:
 
     naturais - 3 matérias - 3 simulados cada - 20 questoes cd
     total = 3X3X20 = 180
     ao contrário de matemática e pt que são 120
     distribuir corretamente e melhor as questões de cada prova
    */}

    const YearStudentPerformance:any[] = [
        {
            Subjects:{
                "português":[
                    {
                        id:'1',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {  
                        id:'2',
                        id_aluno:'aluno1',
                        number_questions:20,
                        correct_answers:15,
                    },
                    {
                        id:'3',
                        id_aluno:'aluno1',
                        number_questions:20,
                        correct_answers:15,
                    }
                ],
                "matemática":[
                    {
                        id:'1',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {
                        id:'2',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {
                        id:'3',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    }
                ],
                "naturais":{
                    "química":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ],
                    "física":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ],
                    "biologia":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ]
                }
            },
        },
        {
            Subjects:{
                "português":[
                    {
                        id:'1',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {  
                        id:'2',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {
                        id:'3',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    
                ],
                "matemática":[
                    {
                        id:'1',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {  
                        id:'2',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    },
                    {
                        id:'3',
                        id_aluno:'aluno1',
                        number_questions: 20,
                        correct_answers:15,
                    }
                ],
                "naturais":{
                    "química":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ],
                    "física":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ],
                    "biologia":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 10,
                            correct_answers:8,
                        }
                    ]       
                },
            } 
        },
        {
            statics:{
                "português":{
              total_questions:'120',
              total_correct_answers:'90'
                },
                "matemática":{
                    total_questions:'120',
                    total_correct_answers:'90'
                },
                "naturais":{
                    total_questions:'180',
                    total_correct_answers:'144'
                }
            }
        }
    ];

    const Semestres:any[] = [
        YearStudentPerformance[0],
        YearStudentPerformance[1]
    ];
    

    return(
        <>
       <ContainerDesempenhoPage
       >
        
      <NavBarPage/>


      <MiddleAreaDetails
      role='aluno'
      statics={YearStudentPerformance[2].statics}
      />
    
    <div
    className='containerGraficBar'
    >
      <GraficBarTemplate
      semestres={Semestres}
      />

    </div>


       </ContainerDesempenhoPage> 
        </>
    )
}

const ContainerDesempenhoPage = styled.div`
    margin-top: 1.75rem;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 104.85%;
    gap: 2rem;  
    align-items: center;
    .containerGraficBar{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 35rem;
        overflow: auto;
        padding-bottom: calc(10% - 5rem);
    }
    .containerGraficBar::-webkit-scrollbar{
        width: 0px;
    }
`