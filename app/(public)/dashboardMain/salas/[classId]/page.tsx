"use client";
import { useUserContext } from '@/contexts';
import {useParams} from 'next/navigation'
import { useClassColor } from '../zustand/classContext';
import {
  ContainerPrincipal
} from '../../../components/global/styled/profile'
import ContainerProfile from '@/app/(public)/components/global/profile';
import Bar from '@/app/(public)/components/global/bar';

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


   // console.log("current Class=>" , currentProfessorClass);

 

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
          isMuralActive={true}
          isTaskActive={false}
          bgColor={bgClassColor}
          />
          
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