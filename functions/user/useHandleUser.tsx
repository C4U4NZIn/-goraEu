"use client";
import { useState , useEffect } from "react";
import api from "@/app/services/__api";
import { useUserContext } from "@/contexts";

type IBase64Props = {
    stringBase64:ArrayBuffer;
    id:string;
    role:string;
}

//retorna funções que retornam coisas na requisição
//literalmente acessar a função que tá dentro dq
// passar um parametro pelo contexto e acabou
export const useHandleImageBase64 = () =>{
    return{
        handleImageToUser: handleBase64
    }
}
 export async function handleBase64(data:IBase64Props){
   let result:any
  //dependendo da role , endpoints diferentes
  const {stringBase64 ,id , role} = data;

 console.log("era pra ter um array buffer aqui=>" , stringBase64);


  switch(role){
      case 'aluno':
          result = await api.post('/aluno/update-avatar' , {
            avatar:stringBase64,
            alunoId:id,
        });
        break;
    case 'professor':
        result = await api.post('/' , stringBase64);
        break;
    case 'coordenador':
        result = await api.post('/', stringBase64);
        break;
  }
    
     if(result){
       return {
        avatar:result.avatar,
        message:result.message
       }
     }
   
      }