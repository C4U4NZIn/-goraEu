"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useUserContext } from "../userContext";
import { 
    getAllSalasFromTurmaByCoordenadorId,
    getAllStudentsFromTurma
  
} from "@/functions/coordenador/coordenadorFunction";

export type coordenadorContextType = {

  studentsFromTurmas:any[];

}


const coordenadorContext = createContext({} as coordenadorContextType);



const CoordenadorProvider = ({children}:{children:React.ReactNode}) =>{
   
    const {userLogin} = useUserContext();
    const [studentsFromTurmas , setStudentsFromTurmas] = useState([] as any);

     const getStudents = async () => {
        const studentsByCoordenadorId = await getAllStudentsFromTurma(userLogin?.id);
         //qualquer coisa só tirar o object.values da função

         if(studentsByCoordenadorId){
             setStudentsFromTurmas(Object.values(studentsByCoordenadorId.alunosInsideTurma));
         }
     }
      //executar apenas se userLogin.id n for undefined- ou seja- n estiver atualizando
     useEffect(()=>{
        if(userLogin?.id){
            getStudents();
        }
     },[userLogin?.id]);


    const values = {studentsFromTurmas}


    return(
    <coordenadorContext.Provider value={values}>
        {children}
    </coordenadorContext.Provider>
    )
}
export const useCoordenadorContext = () =>{
    
    const context = useContext(coordenadorContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {CoordenadorProvider , coordenadorContext};