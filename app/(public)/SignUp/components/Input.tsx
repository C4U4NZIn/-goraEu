import * as React from 'react'
import styled from 'styled-components'



export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

const InputLabelContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 0.8rem;

`
const ErrorMessage = styled.span`
color:red;
font-size: 0.0001rem;

`
const InputForm = styled.input`
 height: 1.875rem;
 width: 21.5rem;
 border-radius: 5px 5px 5px 5px;
 background-color: rgba(237, 237, 237, 1);
 border-color: transparent;
`
const Label = styled.label`
  font-family: 'Tinos', serif;
  font-size: 1.375rem;
`
const InputErrorMessage = styled.div`
 display: flex;
 gap: 0.5rem;
`


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, errorMessage, ...props }, ref) => {
    return (
     <>
     
    <InputLabelContainer>
    <Label htmlFor=''>{label}</Label>
    <InputErrorMessage>
     <InputForm
       type={type}
       ref={ref}
       {...props}
     />
     { errorMessage && (
        <ErrorMessage>{errorMessage}</ErrorMessage>
     )}
    </InputErrorMessage>
    </InputLabelContainer>
     </>



    )
  },
)
Input.displayName = 'Input'

export { Input }