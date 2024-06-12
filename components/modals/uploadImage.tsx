"use client";
import styled from "styled-components";
import {useModal} from '../../components/modals/zustand/useModalContext'
import { useState , useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import { Text } from "@/app/(public)/components/global/styled/profile";
import Image from "next/image";
import foguete from '../../app/(public)/dashboardMain/image/image 15foguete.svg'
import { readFile } from "fs";
import { toast } from "sonner";
import { useImage } from "@chakra-ui/react";
import { useImageState } from "@/functions/user/zustand/useImageContext";


type IUploadProps = {
    children?:React.ReactNode;
}


export const UploadImageModal = ({children}:IUploadProps) =>{
   
    const {isOpenModal , type , onCloseModal} = useModal();
    const [isLoading , setIsLoading] = useState(false);
    const [imagePreview , setImagePreview ] = useState<any>('');
    const [base64Image , setBase64Image] = useState<string>('');
    const { onSetBase64 , onSetFileEvent , onResetBase64 , onResetFileEvent , stringBase64 , fileEvent} = useImageState();
    const [file , setFile] = useState('');
    const isOpenUpload = isOpenModal && type === 'uploadImage';
    const resetValues = () =>{
        onResetBase64();
        onResetFileEvent();
    }
   const handleClose = () =>{
    onCloseModal();
    resetValues();
   }
   const onSetChangeStatesReader = (evt?:any) =>{
    evt.preventDefault();
    let file = evt?.target.files[0];
    if(file){
       const reader = new FileReader();
       reader.onload = getBase64FromFiles;
       reader.readAsBinaryString(file);
    }
    evt.target.value = null;
   }
   const handleUploadAvatar =  (e:any) =>{
      e.preventDefault();
      console.log("evento=>" , e.target.files);
      /**
       * 
      */

        setIsLoading(true)
        //simulação retorno api - tempo
        let res
      setTimeout(()=>{
          res = true
          setIsLoading(false)
      },2000);  
  
      /**
       if(res){
           toast.success("Imagem de perfil alterada com sucesso!");
           resetValues();
           onCloseModal();
       }
       toast.error("Imagem de perfil não alterada , tente novamente!");
       resetValues();
       location.reload();
       * 
       */
    
    }

   const uploadAvatarToComponent = (e:any) =>{
    e.preventDefault();
    console.log(e?.target.files[0]);
    let file = e.target.files[0];
    const reader = new FileReader();
    //setar o que foi adicionado pelas outras funções 
    if(file !== undefined && reader !== undefined){
      //adicionar aos states   
      reader.onloadend = () =>{
       setImagePreview(file.result);
       onSetFileEvent(file);
      }
         reader.readAsDataURL(file);
    }



   }
    const getBase64FromFiles = (readerEvent:any) =>{
       let binaryStringFromFiles = readerEvent.target.result;
       onSetBase64(btoa(binaryStringFromFiles));
    }

   useEffect(()=>{
    console.log("isThereSomethingHere?=>" , base64Image);
   });


    return(
        <>
        { isOpenUpload && (
        <Modal>
        <div
        onClick={handleClose}
        className="backdropModal"
        >
        </div>
        <div
        className="WindowModal"
        >
        
        <div
        className="top-modal-container"
        >
           <Text
           $fontWeight={700}
           $fontSize={33}
           style={{
            color:'#EC641D',
            borderLeft:'2px solid',
            justifyContent:'flex-end',
            lineHeight:'1em',
            paddingLeft:'10px',
            alignContent:'flex-end'
           }}
           >Adicione sua foto</Text> 
        <div
        className="container-close-icon"
        onClick={handleClose}
        >
            <CloseIcon
            className="close-icon"
            style={{
                width:'3rem',
                height:'3rem'
            }}
            />
        </div>
        <div>

        </div>
        </div>

            <form
            className="form-card-profile"
            onSubmit={(e) => handleUploadAvatar(e)}
            onChange={(e)=> onSetChangeStatesReader(e)}
            >
             <div
             className="image-profile-container flip-container"
             >
                <div
                className="flipper"
                >

           {
            stringBase64 === '' ? (
            <>
            <div
            style={{
                backgroundColor:' #EC641D',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:185,
                height:185,
                borderRadius:'68%'
            }}
            className="front"
            >

            <Image
            className="preview-image"
            alt="foguete"
            src={foguete}
            width={180}
            height={180}
            style={{
                borderRadius:"65%",
                backgroundColor:'#fff'
            }}
            />
            </div>
            </>
            ) : (
             <>
             <div
            style={{
            backgroundColor:' #EC641D',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:185,
            height:185,
            borderRadius:'68%'
                        }}
                        className="back"
             >
             <Image
             className="profile-image"
             alt="image-profile"
             src={`data:image/png;base64,${stringBase64}`}
             width={100}
             height={100}
             style={{
                 borderRadius:"50%"
             }}
             />
             </div>
             </>
            )
           } 

                </div>
           <input
           className="input-image-profile" 
           type='file'
           accept=".jpeg , .jpg , .jpef , .png"
           name="profile-image"
           id="avatar-image"
           onChange={(e)=> uploadAvatarToComponent(e)}
           disabled={isLoading}
          />
             </div>
             <div
             className="containerButtons-modal-image"
             >

        {
            isLoading ?  (
                <div
                className="spinner-container"
                >
                 <CircularProgress
                 style={{
                    color:'#fff'
                 }}
                 />
                </div>
            ):(
                <>
            
                <button
                className="button-modal-image"
                ><Text 
                $fontSize={18} 
                $fontWeight={700}
                style={{
                    color:'#EFEFEF'
                }}
                >ALTERAR</Text></button>
                </>
            )
        }
        {
            !isLoading && (
               <>
                <button
                className="button-modal-image"
                onClick={resetValues}
                >
                <Text 
                $fontSize={18} 
                $fontWeight={700}
                style={{
                    color:'#EFEFEF'
                }}
                >CANCELAR</Text>
                </button>
               </>

            )
        }
             </div>

            </form>
    
         </div>
        </Modal>
        )}
        </>
    )
}

const Modal = styled.dialog`

z-index: 0;
opacity: 1;
background-color: rgba(0, 0, 0, 0.8);

position: absolute;
display: flex;
flex-direction: column;
height: 51rem;
width: 100%;
top: 0;
margin: 0;
padding: 0;
align-items: center;
flex-direction: center;

.backdropModal{
    position: relative;
    width: 100%;
    height: 100%;
}
.WindowModal{
    position: absolute;
    top: 50%;
    transform: translate(10% , -65%);
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 28rem;
    gap: 3rem;
    background-color:#fff;
    border-radius:15px;
    background-size: 55% , 80%;
    animation: effectShow 1s cubic-bezier(.1,.82,.25,1);


   @keyframes effectShow {
    0%{
      transform: scale(0.5);
      opacity: 0;
    }
  
    100%{
    transform: scale(8);
    opacity: 1;
    }
   }

}
.spinner-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 3rem;
    justify-self: center;
    background-color: #EC641D;
    border-radius: 25px;
    }
    
        .top-modal-container{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
            height: 3rem;
            margin-top: 20px;
            padding: 0;
        }
    
        .container-close-icon{            
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 18rem;
        }

         .container-close-icon:hover{
            background-color: #EC641D;
            border-radius: 10px;
            opacity: 1;
        }

    .form-card-profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self:center;
    width: 90%;
    height:20rem;
    background-color: #EFEFEF;
    border-radius:15px;
    gap: 1rem;
    }
    .image-profile-container{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    }
    .containerButtons-modal-image{
        display: flex;
        flex-direction: row;
        height: 3rem;
        width: 100%;
        justify-content: space-around;
    }
    .button-modal-image{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        height: 3rem;
        width: 30%;
        background-color: #EC641D;
    }
    input[type="file"]{
     opacity: 0;
     position: absolute;
     border-radius: 100%;
     cursor: pointer;
     z-index: 9999;
     width: 145px;
     height: 145px;
    }
    .profile-image{
        width: 180px;
        height: 180px;
        border-radius: 100%;
        transition: all 1s;
    }
  /**
    .flipper{
       position: relative;
       height: 100%;
       width: 100%;
       transform-style:preserve-3d;
       transition: transform 0.8s;
    }
    .flipper-container{
     perspective: 1000px;
    }
    .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.back {
    transform: rotateY(180deg);
}

.flip-container:hover .flipper {
    transform: rotateY(180deg);
}
  */
`