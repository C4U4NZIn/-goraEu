import styled from 'styled-components'

export const ContainerContent = styled.div`

height: 100%;
width: 80%;
display:flex;
flex-direction: column;
align-items: center;
background-color:#F8F8F8;
box-shadow: 0 0 5px black;    
gap: 1rem;



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
     border-bottom: solid 1px;
     

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
flex-direction: column;
overflow: auto;
width:90%;
height: 60%;


.containerText{
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    overflow: auto;
}
.containerText::-webkit-scrollbar{
    width: 0px;
}


`
