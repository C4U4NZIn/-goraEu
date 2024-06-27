"use client";

import { useUserContext } from "@/contexts";
import { setTimeout } from "timers";
import { useCoordenadorContext } from "@/contexts/coordenador";
export type Student = {
    alunoId:string;
    alunoEmail:string;
    alunoName:string;
    alunoTelefone:string;
    matricula:string;
    parent2_name:any;
    parent_name:string;
    telefone_parent2_1:any;
    telefone_parent_1:string;
    turma:string;
    turmaId:string;
    turmaName:string;
}



export const fetchStudents = async (search:string) =>{
   await new Promise((resolve)=>setTimeout(resolve , 1000))
  return studentsFromTurmas.filter((student:Student)=>
   student.alunoName.toLowerCase().includes(search.toLocaleLowerCase())
   ||
   student.turmaName.toLowerCase().includes(search.toLocaleLowerCase())
   ||
   student.matricula.toLowerCase().includes(search.toLocaleLowerCase())
) 


}