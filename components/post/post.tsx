"use client";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
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
import { useClassColor } from "@/app/(public)/dashboardMain/salas/zustand/classContext";


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

// só puxar as funções pra abrir o modal
//isso daq tá muito confuso e muito estranho

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
    const { bgClassColor } = useClassColor();
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
        (type === 'message' &&  visible_for === "aluno") && (
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
        (type === 'message' &&  visible_for === "professor") && (
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
        <div
        className="containerButtonActions"
        >
        <button
        className="buttonAction editAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lapis_editor}
        />
        </button>
        <button
        className="buttonAction deleteAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lixeira_excluder}
        />
        </button>
        </div>
        </ContainerMessage>
        )
     }
     {
     (type === 'task' && visible_for === 'aluno') && (
      <>

          <div
        className="container-task-preview"
        >
           
                <div
                style={{
                    width:'45px',
                    height:'45px',
                    display:'flex',
                    backgroundColor:`${bgClassColor}`,
                    opacity:'0.6',
                    borderRadius:'100%'
                }}
                >
            <Image
            priority
            alt="prancheta"
            src={pracheta_activity}
            width={35}
            height={35}
            style={{
                color:`${bgClassColor}`,
                alignSelf:'center',
                padding:'8.5px'
            }}
            />
                </div>
            <div
            className="container-description"
            >
            <Text
            $fontSize={20}
            $fontWeight={700}
            >{task?.titleTask}</Text>
            <div
            className="limit-date-description"
            >
            <Text
            $fontSize={16}
            $fontWeight={400}
            style={{
                color:'#525252'
            }}
            >Entrega: {task?.expiresAt}</Text>
            
            <Text
            $fontSize={16}
            $fontWeight={400}
            style={{
                color:'#525252'
            }}
            >{task?.hourExpiresAt}</Text>
            </div>
            </div>
           
          </div>
      </>
     )
    }
     {
         (type === 'simulado' && visible_for === 'aluno') && (
          <>
        {/** div container text e vapo vapo */}  

          <div
        className="container-simulate-preview"
        >
           
                <div
                style={{
                    width:'45px',
                    height:'45px',
                    display:'flex',
                    backgroundColor:`${bgClassColor}`,
                    opacity:'0.6',
                    borderRadius:'100%'
                }}
                >
            <Image
            priority
            alt="prancheta"
            src={pracheta_activity}
            width={35}
            height={35}
            style={{
                color:`${bgClassColor}`,
                alignSelf:'center',
                padding:'8.5px'
            }}
            />
                </div>
            <div
            className="container-description"
            >
            <Text
            $fontSize={20}
            $fontWeight={700}
            >{simulado?.titleSimulado}</Text>
            <div
            className="limit-date-description"
            >
            <Text
            $fontSize={16}
            $fontWeight={400}
            style={{
                color:'#525252'
            }}
            >Entrega: {simulado?.expiresAt}</Text>

            <Text
            $fontSize={16}
            $fontWeight={400}
            style={{
                color:'#525252'
            }}
            >{simulado?.hourExpiresAt}</Text>
            </div>
            </div>
           
          </div>
          </>
            )
     }
         {
         (type === 'task' && visible_for === 'professor') && (
            <div
            className="container-simulate-preview"
            >
               
                    <div
                    style={{
                        width:'45px',
                        height:'45px',
                        display:'flex',
                        backgroundColor:`${bgClassColor}`,
                        opacity:'0.6',
                        borderRadius:'100%'
                    }}
                    >
                <Image
                priority
                alt="prancheta"
                src={pracheta_activity}
                width={35}
                height={35}
                style={{
                    color:`${bgClassColor}`,
                    alignSelf:'center',
                    padding:'8.5px'
                }}
                />
                    </div>
                <div
                className="container-description"
                >
                <Text
                $fontSize={20}
                $fontWeight={700}
                >{task?.titleTask}</Text>
                <div
                className="limit-date-description"
                >
                <Text
                $fontSize={16}
                $fontWeight={400}
                style={{
                    color:'#525252'
                }}
                >Entrega: {task?.expiresAt}</Text>
    
                <Text
                $fontSize={16}
                $fontWeight={400}
                style={{
                    color:'#525252'
                }}
                >{task?.hourExpiresAt}</Text>
                </div>
                </div>
                <div
        className="containerButtonActions"
        >
        <button
        className="buttonAction editAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lapis_editor}
        />
        </button>
        <button
        className="buttonAction deleteAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lixeira_excluder}
        />
        </button>
               </div>
              </div>
         )
         }
        {
         (type === 'simulado' && visible_for === 'professor') && (
            <div
            className="container-simulate-preview"
            >
               
                    <div
                    style={{
                        width:'45px',
                        height:'45px',
                        display:'flex',
                        backgroundColor:`${bgClassColor}`,
                        opacity:'0.6',
                        borderRadius:'100%'
                    }}
                    >
                <Image
                priority
                alt="prancheta"
                src={pracheta_activity}
                width={35}
                height={35}
                style={{
                    color:`${bgClassColor}`,
                    alignSelf:'center',
                    padding:'8.5px'
                }}
                />
                    </div>
                <div
                className="container-description style-end"
            
            >
                <Text
                $fontSize={20}
                $fontWeight={700}
                >{simulado?.titleSimulado}</Text>
                <div
                className="limit-date-description"
                >
                <Text
                $fontSize={16}
                $fontWeight={400}
                style={{
                    color:'#525252'
                }}
                >Entrega: {simulado?.expiresAt}</Text>
    
                <Text
                $fontSize={16}
                $fontWeight={400}
                style={{
                    color:'#525252'
                }}
                >{simulado?.hourExpiresAt}</Text>
                </div>
                </div>
                <div
        className="containerButtonActions style-end"
        >
        <button
        className="buttonAction editAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lapis_editor}
        />
        </button>
        <button
        className="buttonAction deleteAction"
        >
        <Image
        alt=""
        width={25}
        height={25}
        src={lixeira_excluder}
        />
        </button>
               </div>
              </div>
            )
        }

        </ContainerContent>
        </>
    )
}
export default Post;