"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

export type coordenadorContextType = {

}
const coordenadorContext = createContext({} as coordenadorContextType);

const CoordenadorProvider = () =>{

}
export const useUserContext = () =>{
    
    const context = useContext(coordenadorContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {CoordenadorProvider , coordenadorContext};