import { any } from 'zod';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type descriptionType = "base64" | "fileEvent";

 interface IImageProps  {
    stringBase64:any;
    fileEvent:any;
    onSetBase64:(base64:any)=>void;
    onResetBase64:()=>void;
    onSetFileEvent:(fileEvent:any)=>void;
    onResetFileEvent:() => void;
}

export const useImageState = create<IImageProps>()(persist(
    (set)=>(
        {
            stringBase64:'',
            fileEvent:'',
            onSetBase64:(base64:any) => set({stringBase64:base64}),
            onResetBase64:()=> set({stringBase64:''}),
            onResetFileEvent:()=> set({fileEvent:''}),
            onSetFileEvent:(fileEvent:any)=> set({fileEvent:fileEvent})
        }
    ) 
    , 
    {
     name:"image-store"
    }

));