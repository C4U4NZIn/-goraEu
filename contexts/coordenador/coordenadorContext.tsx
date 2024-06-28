"use client";
import React, { createContext, useContext , useState } from "react";
import api from '../../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useUserContext } from "../userContext";
import { 
    getAllSalasFromTurmaByCoordenadorId,
    getAllStudentsFromTurma ,
    getAllTeachers ,
    getAllTurmas
  
} from "@/functions/coordenador/coordenadorFunction";

export type coordenadorContextType = {

  studentsFromTurmas:any[];
  turmas:any[];
  teachers:any[];
  salas:any[];
}


const coordenadorContext = createContext({} as coordenadorContextType);



const CoordenadorProvider = ({children}:{children:React.ReactNode}) =>{
   
    const {userLogin} = useUserContext();
    const [studentsFromTurmas , setStudentsFromTurmas] = useState([] as any);
    const [teachers , setTeachers] = useState([] as any);
    const [turmas , setTurmas] = useState([] as any);
    //salas em cada turma , ent é só renderizar um map com uma condição
    const [salas , setSalas] = useState([] as any);
     const getStudents = async () => {
        const studentsByCoordenadorId = await getAllStudentsFromTurma(userLogin?.id);
         //qualquer coisa só tirar o object.values da função

         if(studentsByCoordenadorId){
             setStudentsFromTurmas(Object.values(studentsByCoordenadorId.alunosInsideTurma));
         }
     }

    const getTeachers = async () =>{
        const teachers = await getAllTeachers();

        if(teachers){
           setTeachers(Object.values(teachers.teachers));
        }
    }

    const getTurmasByCoordenadorId = async () =>{
        let turmas

        if(userLogin?.id){
            turmas = await getAllTurmas(userLogin?.id);
            if(turmas){
                setTurmas(Object.values(turmas.turmas));

            }
        }
    }
    const getSalasByCoordenadorId = async () =>{
       let salas

      if(userLogin?.id){
        salas = await getAllSalasFromTurmaByCoordenadorId(userLogin.id);
        if(salas){
            setSalas(Object.values(salas.salas));  
        }
    
      }

    
    }

      //executar apenas se userLogin.id n for undefined- ou seja- n estiver atualizando
     useEffect(()=>{
        if(userLogin?.id){
            getStudents();
        }
     },[userLogin?.id]);

    useEffect(()=>{
        getTeachers();
    },[]);

    useEffect(()=>{
        if(userLogin?.id){
            getTurmasByCoordenadorId();
        }
    },[userLogin?.id])
    useEffect(()=>{
        if(userLogin?.id){
            getSalasByCoordenadorId();
        }
    },[userLogin?.id])


    const values = {studentsFromTurmas , teachers , turmas , salas}


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