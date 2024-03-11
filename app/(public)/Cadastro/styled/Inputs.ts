import styled from "styled-components"

export const InputLabelContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 0.8rem;
  
  `
export const ErrorMessage = styled.span`
  color:red;
  font-size: 0.8rem;
  
  `
 export const InputForm = styled.input`
   height: 29px;
   width: 100%;
   border-radius: 5px 5px 5px 5px;
   background-color: rgba(237, 237, 237, 1);
   border-color: transparent;
  `
  export const Label = styled.label`
    font-family: 'Tinos', serif;
    font-size: 10px;
  `
 export const InputErrorMessage = styled.div`
   display: flex;
   flex-direction: column;
   gap: 4px;
  `