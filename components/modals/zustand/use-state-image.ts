import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IStateImageProps {
    isOpenImage?:boolean;
    onOpen:()=>void;
    onClose:()=> void;

}

export const useImageStateComponent = create<IStateImageProps>()(persist(
    (set)=>(
     {
        isOpenImage:false,
        onOpen:()=> set({isOpenImage:true}),
        onClose:()=> set({isOpenImage:false})
     }
   ),
   {
    name:'image-component-store'
   }

))