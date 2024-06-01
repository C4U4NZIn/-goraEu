import { create } from "zustand";

//adicionar o persist posteriormente
//pq se ele der reload n irá dar pedra


type SubjectButtonState = {
    ptButtonState:boolean;
    mtButtonState:boolean;
    ntButtonState:boolean;

    onButtonPt:()=> void;
    onButtonNt:()=> void;
    onButtonMt:()=> void;
    closeButtonPt:()=> void;
    closeButtonMt:()=> void;
    closeButtonNt:()=> void;
}


export const useSubjectState = create<SubjectButtonState>((set)=>({
    ptButtonState:true,
    mtButtonState:false,
    ntButtonState:false,  


    onButtonPt:()=> set({ptButtonState:true}),
    onButtonMt:()=> set({mtButtonState:true}),
    onButtonNt:()=> set({ntButtonState:true}),
    closeButtonPt:()=> set({ptButtonState:false}),
    closeButtonMt:()=> set({mtButtonState:false}),
    closeButtonNt:()=> set({ntButtonState:false}),
   


}))