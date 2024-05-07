"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

export type professorContextType = {

}

const professorContext = createContext({} as professorContextType);

const ProfessorProvider = () =>{

}

export const useUserContext = () =>{
    
    const context = useContext(professorContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {ProfessorProvider , professorContext};