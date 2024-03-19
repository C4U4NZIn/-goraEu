import styled from "styled-components"

export const InputLabelContainer = styled.div`
    
    display:flex;
    flex-direction: column;
    gap: 4rem;
    width: 80%;
  
  `
export const ErrorMessage = styled.span`
  flex: 1;
  color:red;
  font-size: 0.8rem;
  
  `
 export const InputForm = styled.input`
 flex: 1;
 height: 1.625rem;
 width: 19.375rem;
 border-radius: 5px 5px 5px 5px;
 background-color: rgba(237, 237, 237, 1);
 border-color: transparent;
  `
  export const Label = styled.label`
    flex: 1;
    font-family: 'Tinos', serif;
    font-size: 1.25rem;
  `
 export const InputErrorMessage = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
  `