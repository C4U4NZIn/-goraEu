"use client";
import { useUserContext } from '@/contexts';
import {useParams} from 'next/navigation'
import { useClassColor } from '../zustand/classContext';
import {
  ContainerPrincipal
} from '../../../components/global/styled/profile'
import ContainerProfile from '@/app/(public)/components/global/profile';
import Bar from '@/app/(public)/components/global/bar';
import { useBarStore } from '../zustand/use-bar';
import Post from '@/components/post/post';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import Activities from '@/components/activities-class';



const ContainerComponentsClass = styled.div`


width: 90%;
height: 40%;
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



const ProfessorClass = () =>{
  
    const {salas} = useUserContext();
    const param = useParams();
    const { userLogin } = useUserContext();
     


    let profClass = salas.filter((sala)=> sala.salaId === param.classId)[0];
    const {
        bgClassColor,
        profName,
        imgPlanet,
        namePlanet,
        avatarProfessorUsername
    
    } = useClassColor();
    const {
     isMuralActive,
     isTaskActive
    } = useBarStore();


   // console.log("current Class=>" , currentProfessorClass);
    //objeto de testes até a inserção do backend
     const professorPosts = [
      {
        professorName:profName,
        createdAt:'25/05/24',
        professorImg:'',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna.',
        type:'message',
        postImg:'',
      },
      {
        professorName:profName,
        createdAt:'25/05/24',
        professorImg:'',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna.',
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
     ]
    //retornar todas as atividades e/ou
    //simulados que o prof criou na sala para os alunos
    const professorTasks = [
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
        titleTask:'Segunda atividade do ano'
      },
      {
        professorName:profName,
        createdAt:'25/05/24',
        expiresAt:'02/05/24',
        hourExpiresAt:'23:59',
        professorImg:'',
        titleTask:'Terceira atividade do ano'
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
    return(
        <>
        <ContainerPrincipal>
       {
        (profClass && bgClassColor !== '') ? (

          <>
          <ContainerProfile
          username={userLogin?.username}
          profName={profName}
          role='professor aluno'
          avatarUsername={avatarProfessorUsername}
          bgColor={bgClassColor}
          namePlanet={namePlanet}
          imgPlanet={imgPlanet}
          />
          <Bar
          numberBar={2}
          bgColor={bgClassColor}
          />
          <ContainerComponentsClass>
            <div
            className='containerComponentsClass'
            >
            {
            isMuralActive ? (
              professorPosts.map((post)=>(
                <Post
                 professorName={post.professorName}
                 professorImg={post.professorImg}
                 createdAt={post.createdAt}
                 message={post.message}
                 type={post.type}
                 postImg={post.postImg}
                />
              ))
            ) : (
              //reaproveitar componentes
              <Activities
              bgColor={bgClassColor}
              professorSimulados={professorSimulados}
              professorTasks={professorTasks}
              />
            )
          }
            </div>
          </ContainerComponentsClass>
        
          </>
        ):(
            <>
            <h1>Loading...</h1>
            </>
        )
       }


        </ContainerPrincipal>
        </>
    )
}

export default ProfessorClass;