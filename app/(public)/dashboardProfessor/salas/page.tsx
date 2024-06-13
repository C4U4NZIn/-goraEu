"use client";
import styled from "styled-components";
import ContainerProfile from "../../components/global/profile";
import { useUserContext } from "@/contexts";
import marte from '../../components/global/images/image 53marte.svg'
import venus from '../../components/global/images/image 56venus.svg'
import saturno from '../../components/global/images/image 56saturno.svg'
import netuno from '../../components/global/images/image 53netuno.svg'
import terra from '../../components/global/images/image 56terra.svg'
import Salas from "../../dashboardMain/salas/page";
import { useRouter } from "next/navigation";
import { useClassColor } from "../../dashboardMain/salas/zustand/classContext";

//vou fazer td aq - outro dia existirá componentização
//array de todas as salas que o professor
//tem
//bgColor virá no contexto?
//se o cara for prof da matéria x 
// cor relacionado a matéria x
export default function SalasProfessor(){
    const { userLogin } = useUserContext();
    const { setColor } = useClassColor();
    const Router = useRouter();
    let username = userLogin?.username;
    let materia = 'gramatica'
    let avatarUsername:any
    const splitUsername = (name:any) =>{
        let splitedName:any
        let avatarUsername:any
        if(splitedName === undefined && name !== undefined){
         splitedName = name.split(' ');
         avatarUsername = splitedName[0][0] + (splitedName[1][0] ? splitedName[1][0] : '')
     }
      return avatarUsername;
     }
    avatarUsername = splitUsername(username);
    const arrImg:any = {
        'biologia':{img:terra , bgColor:'#93C75F' , namePlanet:'Terra'},
        'fisica':{img:marte , bgColor:'#FD7B23' , namePlanet:'Marte'},
        'quimica':{img:saturno , bgColor:'#FBD468', namePlanet:'Saturno'},
        'matematica':{img:netuno , bgColor:'#90D7F6', namePlanet:'Netuno'},
        'gramatica':{img:venus , bgColor:' #FFB028' , namePlanet:'Vênus'}     
        }
     //lembando que isso vai ser
     //dinâmico
    const arrSalasProfessor = [
        {
            salaName:'Gramática-A',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'550e8400-e29b-41d4-a716-446655440000'
        } ,
        {
            salaName:'Gramática-B',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'6ba7b810-9dad-11d1-80b4-00c04fd430c8'
        } ,
        {
            salaName:'Gramática-C',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'6ba7b814-9dad-11d1-80b4-00c04fd430c8'
        } ,
        {
            salaName:'Gramática-D',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'6ba7b820-9dad-11d1-80b4-00c04fd430c8'
        } ,
        {
            salaName:'Gramática-E',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'6ba7b864-9dad-11d1-80b4-00c04fd430c8'
        } ,
        {
            salaName:'Gramática-F',
            professorName:'Allan Santos',
            professorId:userLogin?.id,
            salaId:'6ba7b810-9dad-11d1-80b4-00c04fd430c9'
        } ,
    ]
    // é global
    //e cada sala possui suas atividades
    //um array dentro de outro array
    const arrSalaActivities = [
        {
            taskId:'1',
            taskName:'Simulado',
            expiresAt:'12/06/2024',
            hourExpiresAt:'23:59'
        } ,
        {
            taskId:'2',
            taskName:'atividade 3',
            expiresAt:'12/06/2024',
            hourExpiresAt:'23:59'
        }
    ]
    const removeAccToStr = (materia?:string) =>{
        if(typeof materia !== 'string'){return ""}
       let materiaReplaced = materia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().slice(0 , -2);
        return materiaReplaced
     }
   
   const goToClassId = (
    {
        classId ,
        salaName ,
        profName
    }:{
        classId:string;
        salaName?:string;
        profName?:string;
    }
   ) =>{
        
      return () =>{
      
       if(salaName && arrImg[removeAccToStr(salaName)]){
          setColor({
            bgClassColor:arrImg[removeAccToStr(salaName)].bgColor,
            profName:profName,
            avatarProfessorUsername:splitUsername(profName),
            imgPlanet:arrImg[removeAccToStr(salaName)].img,
            namePlanet:arrImg[removeAccToStr(salaName)].namePlanet
          })
       }

 
        Router.push(`/dashboardProfessor/salas/${classId}`)
      }

   }

    return(
        <>
        <ContainerPrincipal>
        <ContainerProfile
        username={username}
        profName={username}
        avatarUsername={avatarUsername}
        role="professor"
        bgColor={arrImg[materia].bgColor}
        />
        <div
        className="containerProfessorSalas"
        >
        {
            arrSalasProfessor.length > 0 ? (
               <>
               {
                arrSalasProfessor.map((salas)=>(
                    <div
                    onClick={ goToClassId({
                        classId:salas.salaId,
                        salaName:salas.salaName,
                        profName:salas.professorName
                    })}
                    className="containerCardClass"
                    key={salas.salaId}
                    >
                        <div
                        className="cardClass"
                        >
                            <CardTop
                            $bgColor={arrImg[materia].bgColor}
                            />

                             <div
                             className="salaNameContainer"
                             >
                            <h2>{salas.salaName}</h2>
                           </div>
                           <div
                           className="containerActivities"
                           >
                           {
                            arrSalaActivities.length > 0 ? (
                                <>
                                {arrSalaActivities.map((atividade)=>(
                                    <div
                                    className="task-style"
                                    key={atividade.taskId}
                                    >
                                     <h3>{atividade.taskName}</h3>
                                    <div
                                    style={{
                                        display:'flex',
                                        flexDirection:'row',
                                        gap:'1.75rem'
                                    }}
                                    >
                                        <p>{atividade.expiresAt}</p>
                                        <p>{atividade.hourExpiresAt}</p>
                                    </div>
                                    
                                    </div>
                                ))}
                                </>
                            ) : (
                                <>
                                <h1>Ainda não tem nada aqui</h1>
                                </>
                            )
                           }
                           </div>
                        </div>

                    </div>
                ))
               }
               </>
            ) : (
           <><h1>Não há Salas Ainda</h1></>
            )
        }
        </div>
        </ContainerPrincipal>
        </>
    )
}


const CardTop = styled.div<{
    $bgColor?:string;
}>`
    width: 100%;
    background-color: ${props => props.$bgColor};
    position: absolute;
    z-index: 0;
    height: 30%;
    border-radius: 1rem 1rem 0 0;
`



const ContainerPrincipal = styled.div<{
    $bgClassColor?:string;
}>`
    margin-top: 2.125rem;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 105%;
    gap: 3rem;
    padding: 0;
    align-items: center;  
   .containerProfessorSalas{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: auto;
    width: 95%;
    height: 33rem;
    background-color: #fff;
    align-self: flex-end;
    padding-bottom: calc(9% + 1rem); 
   }
   .containerProfessorSalas::-webkit-scrollbar{
    width: 0px;
   }

   .containerCardClass{
    width: calc(38.33% - 1rem);
    margin:3.5rem;
    height: 24rem;
    align-items: center;
    border-radius: 8px;
    background-color: #fff;   
    display: flex;
    justify-content: center;
   }
   .cardClass{
    width: 19.1875rem;
    background-color: rgba(255, 255, 255, 1);
    height: 24rem;
    border-radius: 1rem;
    margin-top: 0.5rem;
    position: relative;
    border: .0625rem solid #dadce0;
    cursor: pointer;
   }
   .cardClass:hover{
    box-shadow: 0 2px 4px rgba(0,0,0, 0.8);
   }

   .salaNameContainer{
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 22.75%;
    position: relative;
    z-index: 2;
    align-items: center;
    justify-content: center;
    gap: 5rem;
   }
   .salaNameContainer::after{
    content: " ";
    bottom: 0;
    position: absolute;
    border-bottom: 1px solid black;
    left: 15px;
    right: 15px;
   }


   .containerActivities{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left:1rem;
    margin-top: 2rem;
    align-items: center;
    gap: 1.250rem;
    height: 5rem;
    width: 90%;
   }
   .containerActivities::-webkit-scrollbar{
    width: 0px;
   }
  .task-style{
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    gap: -3rem;
    justify-content: center;
    border-bottom: 1px solid black;
  }

.task-style h3{
    margin-bottom: -4px;

}
.task-style div{
   margin-top: -4px;
}

`


