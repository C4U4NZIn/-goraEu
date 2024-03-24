

import 
{ 
  FooterComponent , 
  CreditContainer ,  
  Credit ,  
  Title 
} 
from "../styled/styles";

export default function Footer(){
    return(
    <FooterComponent>
         <Title style={{ gridArea: 'title'}}>Equipe Ágora</Title>
        <CreditContainer style={{ gridArea: 'sergio' }}>
          <Credit style={{ fontSize: 20 }}>Sérgio Roberto Costa Vieira</Credit>
          <Credit style={{ fontSize: 16 }}>sergio@fmm.org.br</Credit>
        </CreditContainer>
        <CreditContainer style={{ gridArea: 'gab' }}>
          <Credit style={{ fontSize: 20 }}>Gabriely Emilly Martins Da Silva</Credit>
          <Credit style={{ fontSize: 16 }}>gabriely.227107@fmm.org.br</Credit>
        </CreditContainer>
        <CreditContainer style={{ gridArea: 'caua' }}>
          <Credit style={{ fontSize: 20 }}>Cauã Silva De Almeida</Credit>
          <Credit style={{ fontSize: 16 }}>caua.112233@fmm.org.br</Credit>
        </CreditContainer>
        <CreditContainer style={{ gridArea: 'lia' }}>
          <Credit style={{ fontSize: 20 }}>Lia Caroline Monteiro Peixoto</Credit>
          <Credit style={{ fontSize: 16 }}>lia.227322@fmm.org.br</Credit>
        </CreditContainer>
    </FooterComponent>
    )
}