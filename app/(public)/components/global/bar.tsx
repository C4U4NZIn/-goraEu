"use client";
import styled from 'styled-components';
import {
 Text
} from '../global/styled/profile'


export const ContainerBar = styled.div<{
    $bgColor?:string;
    $isMuralActive?:boolean;
    $isTaskActive?:boolean;
    $isStudentActive?:boolean;
}>`
display: flex;
flex-direction: row;
height: 3.125rem;
width: 15.625rem;
border-radius: 7px;
${props=> props.$bgColor && `border: 1px solid ${props.$bgColor}`}; 
${props => props.$isTaskActive && 'gap: 1rem;'};
${props => props.$isTaskActive && 'width:20rem;'};
`
export const SectionBar = styled.div<{
    $bgColor?:string;
    $height?:number;
    $width?:number;
    $isMuralActive?:boolean;
    $isTaskActive?:boolean;
    $isStudentActive?:boolean;
}>`
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
    isMuralActive,
    isTaskActive,
    isStudentActive,
    bgColor
}:{
    numberBar:number;
    isMuralActive?:boolean;
    isTaskActive?:boolean;
    isStudentActive?:boolean;
    bgColor?:string;

}) =>{

     const words_bar = ['Mural' , 'Atividades' , 'Alunos'];


    return(
        <>
        <ContainerBar 
        $bgColor={bgColor}
        $isMuralActive={isMuralActive}
        $isTaskActive={isTaskActive}
        $isStudentActive={isStudentActive}
        >
             {
                numberBar === 2 && (
              <>
                   <SectionBar
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
                )
             }
            {
                numberBar === 3 && (
              <>
              
             <SectionBar
             $isMuralActive={isMuralActive}
             $bgColor={bgColor}
             $height={100}
             $width={33}
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
                    $isTaskActive={isTaskActive}
                    $bgColor={bgColor}
                    $height={100}
                    $width={33}
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
                    <SectionBar
                    $isStudentActive={isStudentActive}
                    $bgColor={bgColor}
                    $height={100}
                    $width={33}
                    >
                    <Text
                    $isActive={isStudentActive}
                    $fontWeight={700}
                    $fontSize={isStudentActive ? 28 : 24}
                    >
                   {
                    words_bar[2] && isStudentActive ? (
                     words_bar[2].toUpperCase()
                    ) : (
                     words_bar[2]
                    )
                   }
                    </Text>
                    </SectionBar>
              </>
                )
            }
 

        </ContainerBar>
        </>
    )
}
export default Bar;