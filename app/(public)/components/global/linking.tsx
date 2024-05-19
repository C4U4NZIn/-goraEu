"use client";
import ActiveLink from "./activeLink";
import Image from "next/image";
import styled from "styled-components";

type containerLinkProps = {
    $width?:number;
    $height?:number;
}

const ContainerImageChildren = styled.div`
display: flex;
flex-direction: row;
width: 100%;

`
const ContainerLinks = styled.div<containerLinkProps>`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: ${props => props.$width}rem;
height: ${props => props.$height}rem;

`
const H1 = styled.h1`

`

export type alunoLinkComponentProps = {
    role?:string;
    imgSalas:string;
    imgUsuario:string;
    imgDesempenho:string;
    imgMural:string;
    widthLink:number;
    heightLink:number;
}


const ContainerImageLink = (data:{imageLink:string , children:React.ReactNode}) =>{
    
    const {imageLink , children} = data;
    
    return(
        <>
        <ContainerImageChildren>
            <Image
            priority
            alt=""
            src={imageLink}
            />
            {children}
        </ContainerImageChildren>
        </>
        )
}

const AlunoLinkComponent = (
    {
        imgSalas,
        imgUsuario,
        imgDesempenho,
        imgMural ,
        width,
        height
    } : {
     imgSalas:string;
     imgUsuario:string;
     imgDesempenho:string;
     imgMural:string;
     width:number;
     height:number;
    }
) =>{
    return(
        <>
       <ContainerLinks
       $height={height}
       $width={width}
       >
        <ContainerImageLink
        imageLink={imgSalas}
        >
        <ActiveLink href="/dashboardMain/salas"><H1>Salas</H1></ActiveLink>
        </ContainerImageLink>
        <ContainerImageLink
        imageLink={imgUsuario}
        >
             <ActiveLink href="/dashboardMain/usuario"><H1>Usuário</H1></ActiveLink>
        </ContainerImageLink>
        <ContainerImageLink
        imageLink={imgDesempenho}
        >
            <ActiveLink href="/dashboardMain/desempenho"><H1>Desempenho</H1></ActiveLink>
        </ContainerImageLink>
        <ContainerImageLink
        imageLink={imgMural}
        >
           <ActiveLink href="/dashboardMain/mural"><H1>Mural</H1></ActiveLink>
        </ContainerImageLink>
       </ContainerLinks>
        </>
    )
}
const ProfessorLinkComponent = () =>{
    return(
        <>
        </>
    )
}
const CoordenadorLinkComponent = () =>{
    return(
        <>
        </>
    )
}


const LinkComponent = ({
    role ,
    imgSalas , 
    imgUsuario , 
    imgDesempenho , 
    imgMural,
    widthLink,
    heightLink
 }:alunoLinkComponentProps) =>{
    
    let roleUser
    if(role){
        roleUser = role.toLowerCase();
    }

    return(
        <>
       {
        roleUser === 'aluno' && (
       <AlunoLinkComponent
       imgSalas={imgSalas}
       imgUsuario={imgUsuario}
       imgDesempenho={imgDesempenho}
       imgMural={imgMural}
       width={widthLink}
       height={heightLink}
       />
        )
       }   
       {
        roleUser === 'professor' && (
            <ProfessorLinkComponent/>
        )
       }
       {
        roleUser === 'coordenador' && (
            <CoordenadorLinkComponent/>
        )
       }
        </>
    )
}

export default LinkComponent;