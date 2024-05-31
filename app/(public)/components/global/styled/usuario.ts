import styled from 'styled-components'


export const ContainerPage = styled.div`
 height:100vh;
 width:75%;
 display: flex;
 flex-direction: column;
 margin-top: 0.5rem;
 gap:0rem; 
`
export const ContainerImageAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 45.26rem;
    height:15.6875rem;
    align-self: center;

`

// 2.5 - w
// 2.5 - w
// rgba(242, 105, 33, 1)
//100% - borderR
//29.25rem - w
//25.9rem - h

export const ButtonComponent = styled.button<{$width?:number; $height?:number;$borderRadius?:number; $backgroundColor:string}>`
width: ${props=>props.$width}rem;
height: ${props=>props.$height}rem;
border-radius: ${props=> props.$borderRadius}%;
background-color:${props=>props.$backgroundColor};
display: flex;
justify-content: center;
align-items: center;
&:disabled{
  background-color: transparent;
}
`

//vai ser foda deixar isso aq responsivo
//muda
export const ContainerButtons = styled.div`
width: 20%;
height: 3.6rem;
display: flex;
flex-direction: row;
position: relative;
align-self: center;
gap:6rem;
z-index: 0;
margin-top: 8.550rem;
margin-left: -1.750rem;
`
export const CardUserContainer = styled.div<{$width:number , $height:number}>`
width: ${props=> props.$width}rem;
height: ${props=>props.$height}rem;
margin-left: 26%;
background-color: rgba(244, 244, 244, 1);
border-radius: 10px 10px 10px 10px;
display: flex;
flex-direction: column;
gap:0;
`;
export const CardUserContainerExclude = styled.div<{$width:number , $height:number}>`
width: ${props=> props.$width}rem;
height: ${props=>props.$height}rem;
margin-left: 26%;
background-color: rgba(244, 244, 244, 1);
border-radius: 10px 10px 10px 10px;
display: flex;
flex-direction: column;
gap:0;
`;
export const Label = styled.h4`
padding: 0;
margin:0;
`
export const TextInfo = styled.p`
font-size: small;
color: black;
padding:0;
margin:0;
`
export const CardUserInfo = styled.div`
background-color:rgba(244, 244, 244, 1);
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
gap:2rem;
width: 100%;
height: 85%;
:hover{
  display: flex;
  border-radius: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  width: 100%;
  transition: all 3 ease-in-out;
  transform: unset;
 
  ${TextInfo} {
    border: none;
    border-radius: none;
  }
  ${Label}{
    border-radius: none;
    border:none;
  }


}




`
export const CardUserInfoExclude = styled.div`
background-color:rgba(244, 244, 244, 1);
display: flex;
flex-direction: column;

align-items: center;
justify-content: center;
gap:2rem;
width: 100%;
height: 85%;
`
export const TopUserContainerTitle = styled.div`
width: 100%;
height: 15%;
background-color: rgba(242, 105, 33, 1);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px 10px  0px 0px;
box-shadow: 1px 1px 1px rgba(242, 105, 33, 1);

h2{
padding: 0;
margin:0;
}
span{
 padding:0;// Adicione uma margem superior para mover a linha para baixo
 width:120px;
 height:1px;
 border-bottom: 1px solid black; // Cria uma linha abaixo do span
}


`
export const ContainerImage = styled.div`
 position:absolute;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 12.5%;
 align-self:center;
 height: 10.410625rem;
 background-color: rgba(252, 140, 40, 1);
 z-index: 1;
 border-radius: 50%;
 align-self: center ;

`
export const ContainerInfoField =  styled.div`
width:100%;
height: 3rem;
display:flex;
flex-direction: column;
gap:1px;
align-items: center;
justify-content: center;
`
export const ContainerInfoFieldExclude =  styled.div`
width:100%;
height: 3rem;
display:flex;
flex-direction: column;
gap:1px;
align-items: center;
justify-content: center;

`
export const Dialog = styled.div`
  box-shadow: 0px 0px 5px #757575;
  border-radius: 5px;
  border: .5px solid #757575;
  width: 30rem;
  height: 30rem;
  background-color: #e7ffb6;
  position:absolute;
  left:37rem;
`
export const InputStyles = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputUsuarioPage = styled.input`
width: 80%;
height: 100%;
border:none;
background-color:rgba(232, 218, 218, 1);
border-radius: 5px;
padding:10px;
font-size: 22px;
`
export const TextError =  styled.p`
width: 80%;
margin-top: 1.25rem;
color:red;
margin: 0;
padding: 0;
`