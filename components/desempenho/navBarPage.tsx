"use client";
import styled from "styled-components";
import TextDesempenho from "./text_desempenho";
import { Text } from "@/app/(public)/components/global/styled/profile";
import { useSubjectState } from "./zustand/use-button-subject";


//fazer um estado global pra mudar a matéria e  o semestre

type ActiveButtonsState = {
    $ptState?:boolean;
    $mtState?:boolean;
    $ntState?:boolean;
}


const ContainerButtonsSubjects =  styled.div<ActiveButtonsState>`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  

  .textButtonSubject{
    color:#006792;
  }

  .buttonSubject{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:#F0F0FA;
    border: #F0F0FA;
    border-radius: 25px;
    width: 9rem;
}

.activeTextButton{
    color: #F0F0FA;
}
.activeButtonSubject{
    background-color:#006792;
}

`
const ContainerSubjectsComponent = () =>{
    
    const { 
     ptButtonState,
     mtButtonState,
     ntButtonState,
     onButtonPt,
     onButtonMt,
     onButtonNt,
     closeButtonPt,
     closeButtonMt,
     closeButtonNt
    } = useSubjectState();
    const openButtonPt = () =>{
        onButtonPt();
        closeButtonMt();
        closeButtonNt();
    }
    const openButtonMt = () =>{
        onButtonMt();
        closeButtonPt();
        closeButtonNt();
    }
    const openButtonNt = () =>{
        onButtonNt();
        closeButtonPt();
        closeButtonMt();
    }

    return(
    <>

   <ContainerButtonsSubjects>
    
    <button
    onClick={openButtonPt}
    className={`buttonSubject ${ptButtonState ? 'activeButtonSubject': ''}`}
    >
    <Text
    className={`textButtonSubject ${ptButtonState ? 'activeTextButton':''}`}
    $fontSize={27}
    $fontWeight={700}    
    >
    Português
    </Text>
    </button>
    <button
    onClick={openButtonMt}
    className={`buttonSubject ${mtButtonState ? 'activeButtonSubject': ''}`}
    >
    <Text
    className={`textButtonSubject ${mtButtonState ? 'activeTextButton':''}`}
    $fontSize={27}
    $fontWeight={700}
    >
    Matemática
    </Text>
    </button>
    <button
    onClick={openButtonNt}
    className={`buttonSubject ${ntButtonState ? 'activeButtonSubject': ''}`}
    >
    <Text
    className={`textButtonSubject ${ntButtonState ? 'activeTextButton':''}`}
    $fontSize={27}
    $fontWeight={700}
    >
    Naturais
    </Text>
    </button>

   </ContainerButtonsSubjects>  
    
    </>
  )


}



const NavBarPage = () =>{
    return (
        <>
        <div
        style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            gap:'2rem'
        }}
        >
             <TextDesempenho
             role="student"
             />
             <ContainerSubjectsComponent/>
        </div>
        </>
    )
}
export default NavBarPage;