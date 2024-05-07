"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

export type alunoContextType  = {

}

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