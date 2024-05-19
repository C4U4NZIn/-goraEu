"use client";
import styled from "styled-components";
import AsideAluno from "../aluno";


type AsideProps = {
  role?:string;
}

const AsideContainerElements = styled.aside`

display: flex;
flex-direction: column;
gap:2rem;
`
const ContainerImageChildren = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const H1 = styled.h1`
  margin: 0;
  padding: 0;
`;


const AsideLateral = ({
   role
}:AsideProps) =>{
    
 

    return(
        <>
       {
        role === 'aluno' && (
        <AsideAluno/>
        )
       }
        </>
    )
}

export default AsideLateral;