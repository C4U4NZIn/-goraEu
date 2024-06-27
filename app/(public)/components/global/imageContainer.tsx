"use client";
import Image from "next/image";
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { 
  ContainerImageAndButtons,
  ContainerImage,
  ButtonComponent,
  ContainerButtons,
} from '../global/styled/usuario'
import AvatarTemplate from "../../usuario/avatar";
import { useImageState } from "@/functions/user/zustand/useImageContext";
export type ImageContainerButtonProps = {
    username?:string;
    imageProfile:string;
    imageDefault:string;
    
    
}
export type ButtonContainerProps = {
    imageEdit:string;
    imageDelete:string;
    openModal():void;
    openEdit():void;
    isOpenDelete:Boolean;
    isOpenEdit:Boolean;
    widthButton:number;
    heightButton:number;
    borderRadiusButton:number;

}
export type ImgContainerButtonProps = ImageContainerButtonProps & ButtonContainerProps;
const ButtonContainer = ({
    openModal ,
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
        onClick={openModal}
        >
        
        <LocalSeeIcon
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
   const {stringBase64 , fileEvent} = useImageState();
   
    let usernameImg = '' 
    if(username){
        usernameImg = usernameImg;
    }

    
    return(
        <>
     <ContainerImage>

     {
   fileEvent !== '' && username ? (
       <Image
       style={{
        borderRadius:'50%'
       }}
       alt="imagem"
          src={`data:image/png;base64,${fileEvent}`}
          width={150}
          height={150}    
       />
   ) : username ? (
       <AvatarTemplate 
          username={(username.split(' ')[0][0] || '')}
          heightImg={150}
          widthImg={150}
       />
   ) : null
}



     </ContainerImage>
        </>
    )
}

const ImageContainerButton = ({ 
    username ,
    imageProfile , 
    imageDefault , 
    openModal , 
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
        openModal={openModal}
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