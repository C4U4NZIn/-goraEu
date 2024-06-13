import styled from 'styled-components'


export const ContainerContent = styled.div`

height: 100%;
width: 90%;
display:flex;
flex-direction: column;
align-items: center;
background-color:#F8F8F8;
box-shadow: 0 0 5px black;    
gap: 1rem;

.container-task-preview , .container-simulate-preview{
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 0.125rem;
}


.container-task-preview::-webkit-scrollbar{
  width: 0px;
}
.container-simulate-preview::-webkit-scrollbar{
 width: 0px;
}

.container-simulate-preview , .container-task-preview{
  display :flex;
  flex-direction: row;
  width: 90%;
  height: fit-content;
  padding-bottom: 10px;
  gap: 1.75rem;
}

.container-description{
 display: flex;
 flex-direction: column;
 justify-content: center;
 width:auto;
 height: fit-content;
 gap: 0.5rem;
}
.limit-date-description{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: auto;
    gap: 1.750rem;
}

.containerButtonActions{
  display: flex;
  flex-direction: row;
  width: 3rem;
  height: 2rem;
  gap: 1rem;
  align-self: flex-end;
}
.containerButtonActions::-webkit-scrollbar{
 width: 0px;
}
.buttonAction{
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 60%;
 background-color: #fff;
 border: none;
}
.editAction{

}
.deleteAction{

}

.style-end{
  display: flex;
  align-self: flex-end;
}


`
export const ContainerAvatarTitles = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 gap: calc(8% - 1rem);
 width: 100%;
 height: 5rem;
 box-sizing: border-box;
 padding: 0 20px;   
 position: relative;
 
 ::after{
     content: " ";
     bottom: 0;
     position: absolute;
     left: 15px;
     right: 15px;
     border-bottom: solid 0.125px;
    
}



`
export const Titles = styled.div`
display: flex;
flex-direction: column;
gap: calc(10% - 1rem);
`
export const ContainerMessage = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
overflow: auto;
width:90%;
height: 90%;
gap: 1rem;


.containerText{
    display: flex;
    flex-direction: column;
    width:80%;
    height: 10rem;
    overflow: auto;
}
.containerText::-webkit-scrollbar{
    width: 0px;
}


`
