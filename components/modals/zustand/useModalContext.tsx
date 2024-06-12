import { create  } from "zustand";
import { persist } from "zustand/middleware";
export type modalType = "updateField" | "uploadImage";


interface IModalProps  {
  type: modalType | null;
  isOpenModal:boolean;
  onOpenModal:(type:modalType)=> void;
  onCloseModal:()=>void;
}



export const useModal = create<IModalProps>()(persist(
    (set)=>({
        type:null,
        isOpenModal:false,
         onOpenModal:(type:modalType)=>set({type,isOpenModal:true}),
         onCloseModal:()=> set({isOpenModal:false , type:null}),
    }),
    {
        name:"modal-store"
    }
));