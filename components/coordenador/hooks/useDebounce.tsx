"use client";
import { SettingsRemoteRounded } from "@mui/icons-material";
import { useEffect , useState } from "react";
import { setTimeout } from "timers";

//meio segundo
export const useDebounce = (value:any, delay = 1500) =>{
   const [debouncedValue , setDebouncedValue] = useState<any>(value);

    //executa um lag na busca com base no delay
   useEffect(()=>{
    const timeout = setTimeout(()=>{
        setDebouncedValue(value);
    },delay)

    //para o lag e dps volta ao normal
     return ()=> clearTimeout(timeout);

   },[value , delay]);

    
    //retorna o valor normalmente
   return debouncedValue;


}