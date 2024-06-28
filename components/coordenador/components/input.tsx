"use client";
import styleContainerInput from '../styles/style-container.module.css'
import lupa from '../images/image 96lupa.svg'
import Image from 'next/image';
import { useCoordenadorContext } from "@/contexts/coordenador";

type InputSearch = {
    role:string;
    onChangeStudent?:(searchStudent?:string)=> void;
    onChangeTeacher?:(searchTeacher?:string)=>void;

}


export const InputSearch = ({role , onChangeStudent , onChangeTeacher}:InputSearch) =>{


  

    return(
        <>
        {
            role === 'aluno' && (

        <input 
        onChange={(e) => onChangeStudent?.(e.target.value)}
        className={styleContainerInput.styleSearchInput}
        type="text"
        placeholder="Pesquise o aluno por turma , RA ou nome"
        />
            )
        }
        {
            role === 'professor' && (
                <input 
                onChange={(e)=> onChangeTeacher?.(e.target.value)}
                className={styleContainerInput.styleSearchInput}
                type="text"
                placeholder="Pesquise o professor por turma , RA ou nome"
                />      
            )
        }
        </>
    )
}