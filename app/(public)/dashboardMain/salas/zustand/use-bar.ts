import {  create } from 'zustand';
import { persist } from 'zustand/middleware';
type IBarProps = {
    isMuralActive:boolean;
    isTaskActive:boolean;
    isStudentActive:boolean;
    
   openIsMuralState:()=> void;
   openIsTaskState:()=> void;
   openIsStudentState:()=> void;

   closeIsMuralState:()=> void;
   closeIsTaskState:()=> void;
   closeIsStudentState:()=> void;

}


export const useBarStore = create<IBarProps>()(persist(
    (set)=>({
        isMuralActive:true,
        isTaskActive:false,
        isStudentActive:false,
        openIsMuralState:()=> set({isMuralActive:true}),
        openIsTaskState:()=> set({isTaskActive:true}),
        openIsStudentState:()=> set({isStudentActive:true}),
        closeIsMuralState:()=> set({isMuralActive:false}),
        closeIsTaskState:()=> set({isTaskActive:false}),
        closeIsStudentState:()=> set({isStudentActive:false}),
    }),
    {
        name:'bar-store'
    }
))