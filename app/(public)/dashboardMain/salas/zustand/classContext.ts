import { create } from "zustand";

type IClassProps = {
    bgClassColor?:string;
    setColor:(bgColor:string)=> void
}

export const useClassColor = create<IClassProps>((set)=>({
    bgClassColor:'',
    setColor:(bgColor)=> set({bgClassColor:bgColor})
}))
