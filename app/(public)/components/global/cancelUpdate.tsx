"use client";
import styled from "styled-components";

const ContainerUpdateTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-items: center;
width: 100%;
margin-left: 7rem;
gap: 0.45rem;
`
const H3 = styled.h3`
margin: 0;
padding:0;
color: rgba(242, 105, 33, 1);
`
export type CancelUpdateProps = {
    closeEdit():void;
}

const CancelUpdate = ({closeEdit}:CancelUpdateProps) =>{
    return(
     <ContainerUpdateTitles>
        <H3>
       Clique no campo que deseja alterar
        </H3>
        <H3
        onClick={closeEdit}
        >
       Cancelar Alteração
        </H3>
     </ContainerUpdateTitles>
    )
}

export default CancelUpdate;