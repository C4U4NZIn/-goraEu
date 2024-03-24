import styled from "styled-components";


type FlexDirection = 'column' | 'row'
type justify = 'center' | 'around' | 'between'
interface SectionProps {
    $flexDirection?: FlexDirection;
    $justify?:justify
}

{/** Posso colocar um mesmo component e só alterar via props alguns parametros */}
export const Section = styled.section<SectionProps>`
position: relative;
min-height: 100vh;
width: 100%;

display: flex;
flex-direction: ${({$flexDirection = 'row'})=> $flexDirection};
justify-content: ${({$justify = 'center'})=> $justify === 'center' ? $justify:`space-${$justify}`};
align-items: center;
`
export const Title = styled.h2`
  color: #DA5F1E;
  font-size: 2.5em;
  padding: 2% 0 0 5%;
  width: 100%;
`
export const FooterComponent = styled.footer`
  background-color: #05175F;
  width: 100%;
  height: 75vh;

  display: grid;
  grid-template-rows: 80px 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-template-areas: "title title" "sergio gab" "caua lia";
`
export const CreditContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

 export const Credit = styled.p`
  color: white;
`;
export const Text = styled.p`
margin:0;
padding:0;
width: 280px;
color: #006792;
font-weight: bolder;
font-size: 1.7em;
`
export const SignUpContainer = styled.div`
position: relative;
width: 400px;
height: 300px;

display: flex;
justify-content: center;
align-items: center;
`;
export const CardsContainer = styled.div`
align-self: center;
display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
align-content: center;
width: 90%;
gap: 20px;
`;
export const Card = styled.div`
background-color: white;
border-radius: 8px;
padding: 0 20px;
width: 250px;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20%;
box-shadow: 0 0 3px #0003;
`
export const ContainerImage = styled.div`
background-color: #F9FBEA;
border-radius: 50%;
width: 128px;
height: 128px;

display: flex;
justify-content: center;
align-items: center;
`
export const DescriptionText = styled.p`
color: #F26921;
font-size: 20px;
text-align: center;
`
export const ViewLandingPage = styled.div`
min-height: 100vh;
width: 98.6vw;
display: flex;
flex-direction: column;
`
export const Button = styled.button`
height: 5rem;
width: 16rem;
border-radius: 8px;
background-color:rgba(205, 224, 89, 1);
align-items: center;
`
