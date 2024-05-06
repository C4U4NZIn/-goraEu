import { create } from 'zustand'

type modalCoordenadorState = {
    isOpen:boolean;
    open:()=>void;
    close:()=>void;
}

export const useModalCoordenador = create<modalCoordenadorState>((set)=>({
    isOpen:false,
    open:()=>set({isOpen:true}),
    close:()=> set({isOpen:false}),
}))