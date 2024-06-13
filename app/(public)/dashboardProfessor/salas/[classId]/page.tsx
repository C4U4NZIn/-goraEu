"use client";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import styled from "styled-components";
import { ContainerPrincipal, Text } from "@/app/(public)/components/global/styled/profile";
import ContainerProfile from "@/app/(public)/components/global/profile";
import { Container } from "@mui/material";
import { useBarStore } from "@/app/(public)/dashboardMain/salas/zustand/use-bar";
import { useUserContext } from "@/contexts";
import { useClassColor } from "@/app/(public)/dashboardMain/salas/zustand/classContext";
import Bar from "@/app/(public)/components/global/bar";
import Post from "@/components/post/post";
import Activities from '@/components/activities-class';
import mikaella from './image_temp_aluno/image 75 (1).svg'
import maria from './image_temp_aluno/image 76.svg'
import levi from './image_temp_aluno/image 82.svg'
import mariah from './image_temp_aluno/image 78 (1).svg'
import Image from 'next/image';
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
        isMuralActive,
        isTaskActive,
        isStudentActive
       } = useBarStore();
  
     const arrPostsProfessor = [
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        },
        {
            professorName:profName,
            createdAt:'25/05/24',
            professorImg:'',
            message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna',
            type:'message',
            postImg:'',
        }
     ]
 
     const arrTaskProfessor = [
        {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          },
          {
            professorName:profName,
            createdAt:'25/05/24',
            expiresAt:'02/06/24',
            hourExpiresAt:'23:59',
            professorImg:'',
            titleTask:'Primeira atividade do ano'
          }
        ]
     const professorSimulados = [
         {
             professorName:profName,
          createdAt:'25/05/24',
          expiresAt:'02/06/24',
          hourExpiresAt:'23:59',
          professorImg:'',
          titleSimulado:'Primeiro simulado do ano'
        },
        {
          professorName:profName,
          createdAt:'25/05/24',
          expiresAt:'02/06/24',
          hourExpiresAt:'23:59',
          professorImg:'',
          titleSimulado:'Segundo simulado do ano'
        },
        {
          professorName:profName,
          createdAt:'25/05/24',
          expiresAt:'02/06/24',
          hourExpiresAt:'23:59',
          professorImg:'',
          titleSimulado:'Terceiro simulado do ano'
        }
      ]
      const arrStudentsSalaProfessor = [
        {
            alunoId:'1',
            avatarAluno:mikaella,
            alunoName:'Mikaella Costa da Silva',
            alunoRa:'227107'
        },
        {
            alunoId:'2',
            avatarAluno:maria,
            alunoName:'Maria Izabel Costa Da Silva',
            alunoRa:'237697'
        },
        {
            alunoId:'3',
            avatarAluno:levi,
            alunoName:'Levi Da Silva Moreno',
            alunoRa:'227322'
        },
        {
            alunoId:'4',
            avatarAluno:mariah,
            alunoName:'Mariah Contom do Salmo',
            alunoRa:'221770'
        }
      ]


    
       console.log("No professor" , isMuralActive);

    return(
        <>
        <ContainerPrincipalProfessorClass
        style={{
            height:'50rem',
            overflow:'auto'
        }}
        >
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
    

            <div
            className="containerContentConditional"
            >
           {
            isMuralActive && (
                <>
                <div
                className="containerComponentsClass"
                >
                  {arrPostsProfessor.map((posts)=>(
                    <Post
                 professorName={posts.professorName}
                 professorImg={posts.professorImg}
                 createdAt={posts.createdAt}
                 message={posts.message}
                 type={posts.type}
                 postImg={posts.postImg}
                 visible_for="professor"
                />
                  ))}
                </div>
                </>
            )
           }
           {
            isTaskActive && (
                <>
               <div
               className='containerComponentsClass'
               >
              <Activities
              bgColor={bgClassColor}
              professorSimulados={professorSimulados}
              professorTasks={arrTaskProfessor}
              role='professor'
              />
               </div>
                </>
            )
           }
                     {
            isStudentActive && (
                <>
                <div
                className='containerAlunosSala'
                >
                {
                arrStudentsSalaProfessor.map((students)=>(
                <div
                key={students.alunoId}
                className='containerStudentDetails'
                >
                <div
                className='containerImageAlunoName'
                >
                <Image
                alt='alunoImg'
                src={students.avatarAluno}
                />
                <Text
                $fontSize={28}
                $fontWeight={400}
                style={{
                    borderBottom:'1px solid black',
                    marginBottom:'2rem',
                    marginTop:'1rem'
                }}
                >{students.alunoName}</Text>
                </div>
                <div
                className='containerRa'
                >
                    <Text
                    $fontSize={25}
                    $fontWeight={700}
                    >{students.alunoRa}</Text>
                </div>
                </div>
                ))
                }
                </div>
                </>
            )
           }

            </div>

             </>
            ) : (
            <>
          <h1>Loading....</h1>
            </>
            )
        }
        </ContainerPrincipalProfessorClass>
        </>
    )


}
const ContainerPrincipalProfessorClass = styled.div`
    margin-top: 2.125rem;
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 80%;
    gap: 3rem;
    align-items: center;
  
   .containerAlunosSala{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    gap: 2rem;
    width: 80%;
    margin-left: 5rem;
    justify-content: center;

}
   .containerStudentDetails{
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
    background-color:rgba(246, 246, 246, 1);
    box-shadow: 0px 1px 4px 0px rgba(0,0,0.25);
    border-radius: 7px;
  }
   .containerImageAlunoName{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-left: 1rem;
    margin-top: 1rem;
}
   .containerRa{
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    height: 50%;
    width: 15%;
    background-color: rgba(236, 236, 236, 1);
    margin-left: 6rem;
   }
   
    .containerContentConditional{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  height: 40%;
  gap:4rem;
  overflow: auto;
    }

    .containerContentConditional::-webkit-scrollbar{
        width: 0px;
    }
    .containerComponentsClass{
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
margin-top: 0rem;
padding-bottom: calc(10% + 1rem);
padding-top: calc(0.8% + 1rem);
gap: 3rem;
overflow: auto;
    }

.containerComponentsClass::-webkit-scrollbar{
 width: 0px;
}


`



 


