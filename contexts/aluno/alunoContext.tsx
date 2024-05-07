"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

export type alunoContextType  = {
  DataClass:any[]
}
//Que Deus me perdoe por isso...
//vejo mais vantagem em fazer a requisição na página mesmo e fazer a lógica por lá
//depois mudo a cagada
const alunoContext = createContext({} as alunoContextType);

const AlunoProvider = () => {
   
}
export const useUserContext = () =>{
    
    const context = useContext(alunoContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {AlunoProvider , alunoContext};