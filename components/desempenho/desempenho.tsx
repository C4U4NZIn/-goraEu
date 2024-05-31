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
                        number_questions: 120,
                        correct_answers:66,
                    },
                    {  
                        id:'2',
                        id_aluno:'aluno1',
                        number_questions: 120,
                        correct_answers:66,
                    },
                    {
                        id:'3',
                        id_aluno:'aluno1',
                        number_questions: 120,
                        correct_answers:66,
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
                    "física":[
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
                    "biologia":[
                        {
                            id:'1',
                            id_aluno:'aluno1',
                            number_questions: 20,
                            correct_answers:14,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 20,
                            correct_answers:14,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 20,
                            correct_answers:14,
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
                            number_questions: 20,
                            correct_answers:20,
                        },
                        {
                            id:'2',
                            id_aluno:'aluno1',
                            number_questions: 20,
                            correct_answers:20,
                        },
                        {
                            id:'3',
                            id_aluno:'aluno1',
                            number_questions: 20,
                            correct_answers:14,
                        }
                    ],
                    "física":[
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
                    "biologia":[
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
                    total_correct_answers:'179'
                }
            }
        }
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
      <GraficBarTemplate/>

        </ContainerDesempenhoPage> 
        </>
    )
}

const ContainerDesempenhoPage = styled.div`
 

    display: flex;
    flex-direction: column;
    width: 75%;
    height: 104.85%;
    gap: 2rem;  
    align-items: center;
`