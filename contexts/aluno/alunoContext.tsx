"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { convertBufferToImage } from "@/default";
import { useHandleImageBase64 , handleBase64} from "@/functions/user/useHandleUser";
import { useModal } from "@/components/modals/zustand/useModalContext";
import { useImageState } from "@/functions/user/zustand/useImageContext";
import { Message } from "@mui/icons-material";
import { useUserContext } from "../userContext";
type messageFromApi = {
  status:number;
  message:string;
}

export type alunoContextType  = {
   avatarBase64:string | any;
   responseAvatar:()=> Promise<messageFromApi>;
  }
//Que Deus me perdoe por isso...
//vejo mais vantagem em fazer a requisição na página mesmo e fazer a lógica por lá
//depois mudo a cagada
const alunoContext = createContext({} as alunoContextType);

const AlunoProvider = ({children}:{children:React.ReactNode}) => {
   const [avatarBase64 , setBase64] = useState<string | null>(''); 
   const {stringBase64 , onSetBase64} = useImageState();
   const {userLogin , role} = useUserContext();
   const data:any = {
    stringBase64:stringBase64 , 
    id:userLogin?.id , 
    role:role
   }
   // retornar isso daqui `data:image/png;base64,${stringBase64}` pra colocar no avatar do usuario
   const responseAvatar = async () =>{
    console.log(stringBase64);
     const AvatarBuffer = await  handleBase64(data)
     const base64Image = convertBufferToImage(AvatarBuffer?.avatar);
     console.log("Era pra ter algo=>" , base64Image);
     
     setBase64(base64Image);
     onSetBase64(stringBase64)
     if(base64Image){
       return{
        status:202,
        message:base64Image,
        
       }
     }else{
      return{
        status:403,
        message:`${base64Image}`
      }
     }
   }
   useEffect(()=>{
   responseAvatar(); 
  },[])

  const values = {avatarBase64 , responseAvatar}
  return(
    <alunoContext.Provider value={values}>
      {children}
    </alunoContext.Provider>
   )
}
export const useAlunoContext = () =>{
    
    const context = useContext(alunoContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {AlunoProvider , alunoContext};