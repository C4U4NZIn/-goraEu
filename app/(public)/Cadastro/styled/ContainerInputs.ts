import styled from "styled-components";
export const FormContainer = styled.form`
  border: 1px solid black;
  border-radius: 10px;

  

  width: 500px;
  min-height: 400px;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

`
export const ContainerAllSteps = styled.div<{$currentStep?:number}>`
   width:1500px;
  min-height: 150px;
  
  border: 0px solid red;

  display: flex;
  align-items: center;
  
  transform: ${props => `translateX(${ 500 +(props.$currentStep || 0)*500}px)}`};  /* modificando aqui */
  transition: translate 200ms;
`;
export const Container = styled.div`
  width: 500px;
  height: 200px;
  border: 1px solid blue;
`
