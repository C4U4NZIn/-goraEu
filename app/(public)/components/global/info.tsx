"use client";
import {
  CardUserContainer,
  CardUserInfo,
  TopUserContainerTitle,
  ContainerInfoField,
  Label,
  TextInfo

} from '../../dashboardCoordenador/usuario/styled/usuario'

// componente de card das informações

export type CardInfoType = {
    width:number;
    height:number;
    username?:string | undefined;
    email?:string | undefined;
    telefone?:string | undefined;
    senha?:string | undefined;

}



const CardInfoComponent = ({width , height , username ,email , telefone , senha }:CardInfoType) =>{
    
    return(
        <>
          <CardUserContainer $width={width} $height={height}>
        <TopUserContainerTitle>
            <h2>Informações</h2>
            <span></span>
       </TopUserContainerTitle>
        {/**Componente de Informações */}
        <CardUserInfo>
        <ContainerInfoField>
         <Label>Nome</Label>
         <TextInfo>{username}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
         <Label>Email</Label>
         <TextInfo>{email}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
        <Label>Telefone</Label>
        <TextInfo>{telefone}</TextInfo>
        </ContainerInfoField>
        <ContainerInfoField>
        <Label>Senha</Label>
        <TextInfo>{senha}</TextInfo>
        </ContainerInfoField>
        </CardUserInfo>

      </CardUserContainer>    
       
      </>
    )
}
export default CardInfoComponent;