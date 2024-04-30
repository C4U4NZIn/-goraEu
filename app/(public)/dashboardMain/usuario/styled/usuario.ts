import {styled}  from 'styled-components'

export const ContainerPage = styled.div`
 height:100vh;
 width:100%;
 display: flex;
 flex-direction: column;
 margin-left: 12rem;
 margin-top: 0.5rem;
 gap:0rem;
 
`


export const ContainerImageAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    width: 45.26rem;
    height:15.6875rem;
`

export const ButtonComponent = styled.button`
width: 2.5rem;
height: 2.5rem;
border-radius: 100%;
background-color: rgba(242, 105, 33, 1);
display: flex;
justify-content: center;
align-items: center;
`
export const ContainerButtons = styled.div`
width: 20%;
height: 3.6rem;
display: flex;
flex-direction: row;
align-items: center;
gap:5rem;
position: absolute;
align-self: center;
z-index: 1;
margin-top: 8rem;
margin-left: 8rem;
`

export const CardUserContainer = styled.div`
position: relative;
z-index: 0;
width: 29.25rem;
height: 25.9rem;
margin-left: 7rem;
background-color: rgba(244, 244, 244, 1);
border-radius: 10px 10px 10px 10px;
`;

export const CardUserInfo = styled.div`
background-color: rgba(244, 244, 244, 1);
display: flex;
flex-direction: column;

align-items: center;
justify-content: flex-start;

margin-top: 5rem;
width: 100%;
height: 50%;

div{
  display: flex;
  flex-direction: column;
  
}
h4{
 margin: 0;
 padding:0;
}


`

export const TopUserContainerTitle = styled.div`
position: absolute;
width: 100%;
height: 15%;
z-index: 1;
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
 position:relative;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 23%;
 align-self:center;
 height: 10.410625rem;
 background-color: rgba(252, 140, 40, 1);
 z-index: 0;
 border-radius: 50%;
 align-self: center ;

`