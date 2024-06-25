import styled from 'styled-components'

export const ContainerSteps = styled.div<{$transformProps:number}>`
display: flex;
flex-direction: row;
height: 500px;
width: 150rem;
margin-top: 30px;
border-radius: 10px;
justify-content: stretch;
transform: translateX(${props=>props.$transformProps}rem);
transition: 250ms ease-in-out;
`
export const DefaultContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 300px;
width: 30rem;

border-radius: 10px;
`
export const Button = styled.button`
width: 10.25rem;
height: 2.2rem;
border-radius: 10px;
background-color: rgba(242, 105, 33, 1);
&:disabled{
  background-color: transparent;
}

`
export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
padding: 0;
margin-top: 2rem;

`
export const ContainerTitleStepInputs = styled.div`
display: flex;
flex-direction: column;
gap:0.5rem;
width: 100%;
align-items: center;
margin-top: 2rem;
`
export const ContainerTitleStepper = styled.div`
display: flex;
flex-direction: column;
gap:1.5rem;
width: 100%;
justify-content: center;
align-items: center;
`
export const ContainerTitleLine = styled.div`
display: flex;
flex-direction: column;
gap:0.1rem;
`
export const Line = styled.span`
margin:0;
padding: 0;
height: 1px;
width:12rem;
background-color: blue;
`
export const H1 = styled.h1`
margin:0;
padding: 0;
border-bottom: 1px solid #217097;
margin-top: 10px;
color:black;

`
export const H3 = styled.h3`
margin:0;
padding: 0;
`
export const Span = styled.div`
border-bottom: 1px solid blue;
width: 8rem;
`
export const ContainerInputTitle = styled.div`
display: flex;
flex-direction: column;
gap:0.5rem;
width: 60%;
min-height: 5.625rem;
`
export const Input = styled.input`
height: 1.5rem;
width:100%;
margin:0;
padding-left: 10px;
border-radius: 10px;
background-color:  rgba(237, 237, 237, 1);
border: none;
`
export const TextError = styled.span`
color:red;
margin:0;
padding:0;

`
