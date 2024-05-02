import { create } from 'zustand'

type modalAlunoState = {
    isOpenDelete:boolean;
    isOpenEdit:boolean;
    openDelete:()=>void;
    closeDelete:()=>void;
    openEdit:()=>void;
    closeEdit:()=>void;
}

export const useModalAluno = create<modalAlunoState>((set)=>({
    isOpenDelete:false,
    isOpenEdit:false,
    openDelete:()=>set({isOpenDelete:true}),
    closeDelete:()=> set({isOpenDelete:false}),
    openEdit:()=>set({isOpenEdit:true}),
    closeEdit:()=> set({isOpenEdit:false}),

}))