"use client";
import styled from "styled-components";
import { ContainerPrincipal } from "@/app/(public)/components/global/styled/profile";
import ContainerProfile from "@/app/(public)/components/global/profile";
import { Container } from "@mui/material";
import { useBarStore } from "@/app/(public)/dashboardMain/salas/zustand/use-bar";
import { useUserContext } from "@/contexts";
import { useClassColor } from "@/app/(public)/dashboardMain/salas/zustand/classContext";
import Bar from "@/app/(public)/components/global/bar";

//é aq que o prof consegue modificar tudo
// pro aluno ver
export default function ProfessorClass(){
  
    const {userLogin} = useUserContext();
    const {
        bgClassColor,
        profName,
        imgPlanet,
        namePlanet,
        avatarProfessorUsername
    } = useClassColor();

    const {
        isMuralActive ,
        isTaskActive,
        isStudentActive
    } = useBarStore();
   
    return(
        <>
        <ContainerPrincipal>
        {
            bgClassColor !== '' && profName !== '' ? (
             <>
            <ContainerProfile
            username={userLogin?.username}
            profName={profName}
            avatarUsername={avatarProfessorUsername}
            role="professor"
            bgColor={bgClassColor}
            namePlanet={namePlanet}
            imgPlanet={imgPlanet}
            />
            <Bar
            numberBar={3}
            bgColor={bgClassColor}
            />
             </>
            ) : (
            <>
            </>
            )
        }
        </ContainerPrincipal>
        </>
    )


}