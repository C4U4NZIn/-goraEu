'use client';
import { useUserContext, userContext } from "@/contexts";
import { userContextType } from "@/contexts";
import { useEffect } from "react";


export default function Usuario(){
    
    const {userLogin} = useUserContext();
    
    useEffect(() => {
        console.log("User que seria salvo no Usuario =>" , userLogin);
      });


    return(
        <div>
            <h1>Era pra ter o nome do ricardo ferro aqui</h1>
        {userLogin?.username}
    
        </div>
    )
}