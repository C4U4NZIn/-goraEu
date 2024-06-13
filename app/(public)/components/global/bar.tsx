"use client";
import styled from 'styled-components';
import {
 Text
} from '../global/styled/profile'
import { useBarStore } from '../../dashboardMain/salas/zustand/use-bar';
import { number } from 'zod';


export const ContainerBar3 = styled.div<{
  $bgColor?:string;
  $isMuralActive?:boolean;
  $isTaskActive?:boolean;
  $isStudentActive?:boolean;
}>`
display: flex;
flex-direction: row;
height: 3.125rem;
width: 40rem;
justify-content: center;
//align-items: center;

//width: ${props => props.$isStudentActive ? '25rem' : '20rem'}; /* Ajusta a largura do ContainerBar */
border-radius: 20px;
${props=> props.$bgColor && `border: 1px solid ${props.$bgColor}`}; 
gap: 1rem;
`

export const SectionBar3 = styled.div<{
  $bgColor?:string;
  $height?:number;
  $width?:number;
  $isMuralActive?:boolean;
  $isMuralActiveTwo?:boolean;
  $isTaskActive?:boolean;
  $isStudentActive?:boolean;
}>`
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: ${props => props.$height};
width: calc(33% - 1rem); /* Define a largura de cada seção para ser um terço da largura total */
${props => props.$isMuralActiveTwo && `background-color:${props.$bgColor};`}
${props => props.$isMuralActiveTwo && 'border-radius:20px 20px 20px 20px;'};
${props => props.$isTaskActive && `background-color: ${props.$bgColor}`};
${props => props.$isTaskActive && 'border-radius:20px 20px 20px 20px;'};
${props => props.$isStudentActive && `background-color: ${props.$bgColor}`};
${props => props.$isStudentActive && 'border-radius:20px 20px 20px 20px;'};
${props => props.$isStudentActive && 'padding-left:2rem;'};
${props => props.$isMuralActiveTwo && 'padding-right:2rem;'};
${props => props.$isTaskActive && 'padding-left:-2rem;'};
`
export const ContainerBar = styled.div<{
    $bgColor?:string;
    $isMuralActive?:boolean;
    $isTaskActive?:boolean;
    $isStudentActive?:boolean;
}>`
display: flex;
flex-direction: row;
height: 3.125rem;
width: ${props => props.$isStudentActive ? '23.4375rem' : '15.625rem'};
border-radius: 7px;
${props=> props.$bgColor && `border: 1px solid ${props.$bgColor}`}; 
${props => props.$isTaskActive && 'gap: 1rem;'};
${props => props.$isTaskActive && 'width:20rem;'};
${props => props.$isStudentActive && 'gap: 1.5rem;'};
${props => props.$isStudentActive && 'width:23.4375rem;'};
`
export const SectionBar = styled.div<{
    $bgColor?:string;
    $height?:number;
    $width?:number;
    $isMuralActive?:boolean;
    $isTaskActive?:boolean;
    $isStudentActive?:boolean;
}>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.$height};
  ${props => props.$isMuralActive && `background-color: ${props.$bgColor}`};
  ${props => props.$isMuralActive && props.$width && `width: calc(${(props.$width+30)}% - 1rem);`};
  ${props => props.$isMuralActive && 'border-radius:0 20px 20px 0'};
  ${props => props.$isTaskActive && `background-color: ${props.$bgColor}`};
  ${props => props.$isTaskActive && 'border-radius:20px 0 0 20px;'};
  ${props => props.$isTaskActive && props.$width && `width: calc(${(props.$width+30)}% - 1rem);`};
  //${props => props.$isMuralActive && 'align-items:flex-start'};
`


const Bar = ({
    numberBar,
    bgColor
}:{
    numberBar:number;
    bgColor?:string;

}) =>{
     const words_bar = ['Mural' , 'Atividades' , 'Alunos'];
     const {
      openIsMuralState,
      openIsStudentState,
      openIsTaskState,
      closeIsMuralState,
      closeIsTaskState,
      closeIsStudentState,
      isMuralActive,
      isTaskActive,
      isStudentActive
     } = useBarStore();

  

    const setTaskState = () =>{
      closeIsMuralState();
      closeIsStudentState();
      openIsTaskState();
    }
    const setMuralState = () => {
      openIsMuralState();
      closeIsTaskState();
      closeIsStudentState();
    }
    const setStudentState = () => {
       openIsStudentState();
       closeIsMuralState();
       closeIsTaskState();
    }
    
     return(
        <>

       {
        numberBar === 2 && (
    
        <ContainerBar 
        $bgColor={bgColor}
        $isMuralActive={isMuralActive}
        $isTaskActive={isTaskActive}
        $isStudentActive={isStudentActive}
        >
         <>
                   <SectionBar
                   onClick={setMuralState}
                   $isMuralActive={isMuralActive}
                   $bgColor={bgColor}
                   $height={100}
                   $width={50}
                   >

                    <Text
                    $isActive={isMuralActive}
                    $fontWeight={700}
                    $fontSize={isMuralActive ? 28 : 24}
                    >
                   {
                    words_bar[0] && isMuralActive ? (
                     words_bar[0].toUpperCase()
                    ) : (
                     words_bar[0]
                    )
                   } 
                    </Text>
                    </SectionBar>
                    <SectionBar
                    $bgColor={bgColor}
                    $height={100}
                    $width={50}
                    $isTaskActive={isTaskActive}
                    onClick={setTaskState}
                    >
                    <Text
                    $isActive={isTaskActive}
                    $fontWeight={700}
                    $fontSize={isTaskActive ? 28 : 24}
                    >
                    {
                    words_bar[1] && isTaskActive ? (
                     words_bar[1].toUpperCase()
                    ) : (
                     words_bar[1]
                    )
                   }
                    </Text>
                    </SectionBar>
         </>        
          

        </ContainerBar>
        )
       }

        {
          numberBar === 3 && (
          
            <>
            <ContainerBar3
            $bgColor={bgColor}
            >
            <SectionBar3
            onClick={setMuralState}
            $isMuralActiveTwo={isMuralActive}
            $bgColor={bgColor}
            $height={100}
            $width={33}
            >
                  <Text
                   $fontWeight={700}
                   $fontSize={isMuralActive ? 24 : 18}
                  >
                {
                   words_bar[0]  ? (
                    words_bar[0].toLowerCase()
                   ) : (
                    words_bar[0]
                   )
                  }
                  </Text>
                   </SectionBar3>
                   <SectionBar3
                   onClick={setTaskState}
                   $isTaskActive={isTaskActive}
                   $bgColor={bgColor}
                   $height={100}
                   $width={33}
                   >
                   <Text
                   
                   $fontWeight={700}
                   $fontSize={isTaskActive ? 24 : 18}
                   >
                 {
                   words_bar[1] ? (
                    words_bar[1].toLowerCase()
                   ) : (
                    words_bar[1]
                   )
                  }
                   </Text>
                   </SectionBar3>
                   <SectionBar3
                   onClick={setStudentState}
                   $isStudentActive={isStudentActive}
                   $bgColor={bgColor}
                   $height={100}
                   $width={33}
                   >
                   <Text
                   $fontWeight={700}
                   $fontSize={isStudentActive ? 24 : 18}
                   >
                  {
                   words_bar[2]  ? (
                    words_bar[2].toLowerCase()
                   ) : (
                    words_bar[2]
                   )
                  }
                   </Text>
                   </SectionBar3>
            </ContainerBar3>
             </>
          )
        }
        </>
    )
}
export default Bar;