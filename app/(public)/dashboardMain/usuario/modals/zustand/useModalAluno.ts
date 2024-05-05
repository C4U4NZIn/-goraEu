import { create } from 'zustand'

type modalAlunoState = {
    isOpen:boolean;
    open:()=>void;
    close:()=>void;
}

export const useModalAluno = create<modalAlunoState>((set)=>({
    isOpen:true,
    open:()=>set({isOpen:true}),
    close:()=> set({isOpen:false}),
}))