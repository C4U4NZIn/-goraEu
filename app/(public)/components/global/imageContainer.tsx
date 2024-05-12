"use client";
import Image from "next/image";
import { 
  ContainerImageAndButtons,
  ContainerImage,
  ButtonComponent,
  ContainerButtons,
} from '../../dashboardCoordenador/usuario/styled/usuario'
import AvatarTemplate from "../../usuario/avatar";
export type ImageContainerButtonProps = {
    username?:string;
    imageProfile:string;
    imageDefault:string;
    
    
}
export type ButtonContainerProps = {
    imageEdit:string;
    imageDelete:string;
    openDelete():void;
    openEdit():void;
    isOpenDelete:Boolean;
    isOpenEdit:Boolean;
    widthButton:number;
    heightButton:number;
    borderRadiusButton:number;

}
export type ImgContainerButtonProps = ImageContainerButtonProps & ButtonContainerProps;
const ButtonContainer = ({
    openDelete ,
    isOpenDelete , 
    isOpenEdit , 
    imageEdit , 
    imageDelete , 
    openEdit , 
    widthButton , 
    heightButton , 
    borderRadiusButton
 }:ButtonContainerProps) =>{
    return(
        <>
         <ContainerButtons>
       {/** button delete profile */}

        { (!isOpenDelete && !isOpenEdit)  && (
        <ButtonComponent
        $width={widthButton}
        $height={heightButton}
        $borderRadius={borderRadiusButton}
        $backgroundColor="rgba(242, 105, 33, 1)"
        onClick={openDelete}
        >
        <Image
        alt="imgDeleteProfile"
        priority
        src={imageDelete}
        style={{
            width:'1.5rem',
            height:'1.5rem'
        }}
        />
        </ButtonComponent>
        )}

        {/** button edit profile */}
        {((!isOpenEdit && !isOpenDelete) || (!isOpenDelete)) && (
        <ButtonComponent
        $width={widthButton}
        $height={heightButton}
        $borderRadius={borderRadiusButton}
        $backgroundColor="rgba(242, 105, 33, 1)"
         onClick={openEdit}
        >

        <Image
        alt="imgEditProfile"
        priority
        src={imageEdit}
        style={{
            width:'1.5rem',
            height:'1.5rem'
        }}
        />
        </ButtonComponent>
         )}


       </ContainerButtons>
        
        </>
    )
}
const ContainerImg = ({username , imageProfile , imageDefault}:ImageContainerButtonProps) =>{
    return(
        <>
     <ContainerImage>

{

   (imageProfile !== null) &&  username ? (
          <>
     <AvatarTemplate username={username}/>
          </>

      ):(
  <>
       <Image
          priority
          alt=''
          src={imageDefault}
          />
     
  </>
      ) }

     </ContainerImage>
        </>
    )
}

const ImageContainerButton = ({ 
    username ,
    imageProfile , 
    imageDefault , 
    openDelete , 
    openEdit , 
    isOpenDelete , 
    isOpenEdit,
    imageDelete,
    imageEdit,
    widthButton,
    heightButton,
    borderRadiusButton
 }:ImgContainerButtonProps) =>{
  return(
    <>
       <ContainerImageAndButtons>
         <ContainerImg
          username={username}
          imageDefault={imageDefault}
          imageProfile={imageProfile}
         />
        {/** Botoes que vão abrir outros componentes*/}
        <ButtonContainer
        openDelete={openDelete}
        openEdit={openEdit}
        isOpenDelete={isOpenDelete}
        isOpenEdit={isOpenEdit}
        imageDelete={imageDelete}
        imageEdit={imageEdit}
        widthButton={widthButton}
        heightButton={heightButton}
        borderRadiusButton={borderRadiusButton}
        />
       </ContainerImageAndButtons>
    </>
  )
}

export default ImageContainerButton;