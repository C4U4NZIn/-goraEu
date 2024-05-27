"use client";
import Image from "next/image";
import AvatarTemplate from '../../app/(public)/usuario/avatar'
import {
   ContainerContent,
   ContainerAvatarTitles,
   ContainerMessage,
   Titles
} from '../../app/(public)/components/global/styled/post'
import { Text } from "@/app/(public)/components/global/styled/profile";



type IPostProps = {
    professorName?:string;
    createdAt:string;
    professorImg?:string;
    message:string;
    type:string;
    postImg?:string;
}


const Post = (data:IPostProps)=>{
  
    const {
        professorName,
        createdAt ,
        message,
        professorImg
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

        </ContainerContent>
        </>
    )
}
export default Post;