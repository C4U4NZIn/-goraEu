'use client';
import Input from "./input"
import { useState } from "react";
export default function Otp(){
    const [isLoading , setIsLoading] = useState(false);
    
    const handleSubmit = (code) =>{
       if(code)
        setIsLoading(true);
        console.log(code)
       
        console.log("Você não digitou nada")
    }
    
    
    return(
        <>
        <div style={{width:"20rem" , height:'20rem' , display:"flex", flexDirection:'column', justifyContent:'center'}}>
        <Input  isLoading={isLoading} callback={handleSubmit}/>
        <button onClick={()=> handleSubmit} style={{backgroundColor:'#fff'}}>submit</button>
        </div>
        </>
    )
}