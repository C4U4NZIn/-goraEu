import {create} from "zustand";
import { persist } from "zustand/middleware";

//não é mais necessário
//já ajeitei quando ele dá reload
//o persist com create tu precisa passar dois argumentos :
//respectivamente const any = create<Type>()(persist(...));
type IClassProps = {
    bgClassColor?:string;
    imgPlanet?:string;
    namePlanet?:string;
    avatarProfessorUsername?:string;
    profName?:string;
    setColor:(
        {
             bgClassColor,
             imgPlanet,
             namePlanet,
             profName,
             avatarProfessorUsername
        }:{
            bgClassColor?:string;
            imgPlanet?:string;
            namePlanet?:string;
            avatarProfessorUsername?:string;
            profName?:string;
        }
    
    )=> void;
}

export const useClassColor = create<IClassProps>()(persist(
    (set) => ({
        bgClassColor:'',
        imgPlanet:'',
        namePlanet:'',
        avatarProfessorUsername:'',
        profName:'',
        setColor:(
            {
                bgClassColor,
                imgPlanet,
                namePlanet,
                avatarProfessorUsername,
                profName
            }
        )=> set(
            {
            bgClassColor:bgClassColor,
            imgPlanet:imgPlanet,
            namePlanet:namePlanet,
            avatarProfessorUsername:avatarProfessorUsername,
            profName:profName
            })
 
  }),
  {
    name: "color-store", // unique name
     // (optional) by default the 'localStorage' is used
  }
));

{/**
    (set)=>({
    bgClassColor:'',
    imgPlanet:'',
    namePlanet:'',
    avatarProfessorUsername:'',
    profName:'',
    setColor:(
        {
            bgClassColor,
            imgPlanet,
            namePlanet,
            avatarProfessorUsername,
            profName
        }
    )=> set(
        {
        bgClassColor:bgClassColor,
        imgPlanet:imgPlanet,
        namePlanet:namePlanet,
        avatarProfessorUsername:avatarProfessorUsername,
        profName:profName
        })
}
*/}