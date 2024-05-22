import styled from 'styled-components'
//import { Tinos_Serif } from '@/lib/fonts';


export const ContainerPrincipal = styled.div`
    margin-top: 2.125rem;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    gap: 3rem;
    align-items: center;   
`
export const ContainerText = styled.div<{
    $role?:string;
    $width?:number;
}>`
 display: flex;
 flex-direction: column;
 width: 30%;
 height: 100%;
`
export const Text = styled.p<{
    $isActive?:boolean;
    $fontSize:number;
    $fontWeight:number;
}>`
 margin:0;
 padding: 0; 
 ${props => props.$isActive && 'color:#fff;'}
 font-size: ${props => props.$fontSize}px;
 font-weight: ${props => props.$fontWeight};
 font-family: 'Times New Roman', Times, serif;
 display: flex;
 flex-direction: row;
`
export const Message = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 gap: 15px;
 margin: 0;
 padding: 0;
`
export const ContainerStyledProfile = styled.div<{
    $bgColor?:string;

}>`
    display: flex;
    flex-direction: row;
    width: 83.875%;
    height:15.6875rem;
    background-color:${props => props.$bgColor};
    border-radius: 15px 15px 15px 15px;
    margin-top: 1.6875rem;
    gap:2rem;
`
export const ContainerImageText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.339375rem;
    margin-left: 0.539375rem;
    width: 10.305rem;
    height: 11.875rem;
    gap:5px;
    align-items: center;
    justify-content: center;
`
export const ContainerImage = styled.div<{
    $bgColor?:string
}>`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 10.410625rem;
 background-color: ${props => props.$bgColor ? props.$bgColor : 'rgba(205, 224, 89, 1)'} ;
 border-radius: 50%;
`
export const ContainerImgTextPlanet = styled.div`
width: 30%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:10px;
`
