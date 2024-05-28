"use client";
import Image from "next/image";
import lapis_editor from '../images_activities/editar 3.svg'
import lixeira_excluder from '../images_activities/lixeira (1) 3.svg'
import pracheta_activity from '../images_activities/prancheta 1.svg'
import AvatarTemplate from '../../app/(public)/usuario/avatar'
import {
   ContainerContent,
   ContainerAvatarTitles,
   ContainerMessage,
   Titles
} from '../../app/(public)/components/global/styled/post'
import { Text } from "@/app/(public)/components/global/styled/profile";



type ISimuladoProps = {
    expiresAt?:string;
    hourExpiresAt?:string;
    titleSimulado?:string;
}

type ITaskProps = {
    expiresAt?:string;
    hourExpiresAt?:string;
    titleTask?:string;
}


//type: pode ser um simulado , mensagem ou atividade
type IPostProps = {
    professorName?:string;
    createdAt:string;
    professorImg?:string;
    message?:string;
    type:string;
    visible_for?:string;
    postImg?:string;
    content?:string;
    task?:ITaskProps;
    simulado?:ISimuladoProps;
}


const Post = (data:IPostProps)=>{
  
    const {
        professorName,
        createdAt ,
        message,
        professorImg ,
        visible_for,
        task,
        simulado,
        type
    } = data;
   let nameProf
    if(!professorName){return <></>}
   
    nameProf = professorName?.split(' ')[0][0]+professorName?.split(' ')[1][0];

    //não sei onde ele usou useMemo e em qual contexto
    //ele utilizou , mas com o que eu sei nesse momento
    //dá de fechar todas as telas de aluno , professor e coordenador

    return(
        <>
        <ContainerContent>
        <ContainerAvatarTitles>
            <AvatarTemplate
            username={nameProf}
            heightImg={50}
            widthImg={50}
            fontSize="24"
            />
            <Titles>
                <Text
                $fontSize={20}
                $fontWeight={700}
                >Prof {professorName}</Text>
                <Text
                style={{
                    color:'#676767'
                }}
                $fontSize={15}
                $fontWeight={700}
                >{createdAt}</Text>
            </Titles>
        </ContainerAvatarTitles>


     {
        type === 'message' && (
        <ContainerMessage>
        <div
        className="containerText"
        >
       <Text
          $fontSize={16}
          $fontWeight={400}
          >
            {message}
          </Text>
        </div>
        </ContainerMessage>
        )
     }
     {
     (type === 'task' && visible_for === 'aluno') && (
      <>
      <h1>task</h1>
      <ul>
        <li>{task?.titleTask}</li>
        <li>{task?.expiresAt}</li>
        <li>{task?.hourExpiresAt}</li>
      </ul>
      </>
     )
    }
     {
         (type === 'simulado' && visible_for === 'aluno') && (
          <>

        <ul>
        <li>{simulado?.titleSimulado}</li>
        <li>{simulado?.expiresAt}</li>
        <li>{simulado?.hourExpiresAt}</li>
      </ul>
          </>
            )
     }
         {
         (type === 'task' && visible_for === 'professor') && (
            <h1>editar , excluir - task</h1>
         )
         }
        {
         (type === 'simulado' && visible_for === 'professor') && (
             <h1>editar , excluir - simulado</h1>
            )
        }
    

        </ContainerContent>
        </>
    )
}
export default Post;