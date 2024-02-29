'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../app/services/__api';
import axios from 'axios';
import { AppError } from "@/utils/AppError";
import { useToast } from '@chakra-ui/react'
import { useEffect } from "react";
import { error } from "console";

type userType = {
    username:string;
    nickname:string;
    email:string;
    phone:string;
    password:string;
}
type loginType = {
    email:string;
    password:string;
}
type jwtToken = {
    acess_token:string;
}



export type userContextType = {
    user: userType;
    createUser: (user:userType) => void; 
    authLogin:(authUser:loginType) => void;
}



const userContext = createContext({} as userContextType);
   

    //const signUpAuthVerification = (email:string , token:string) =>{}


 const UserProvider = ({children}:{children:React.ReactNode}) => {

    const [user , setUser] = useState<userType>(
        {
            username:'',
            nickname:'',
            email:'',
            phone:'',
            password:''
        }
    );

    const [userLoginTop , setUserLogin] = useState<loginType>(
        {
            email:'',
            password:''
        }
    )

    const createUser = (data:userType) =>{
       try {
        if(data){
             
        setUser(data);
        
        api.post('/user/post',{

            username: data.username,
            nickname:data.nickname,
            email:data.email,
            phone:data.phone,
            password:data.password
    
            }).then((resolve)=>{
                console.log(resolve.data);
            }).catch(error=>{
                console.log(error);
            })
           
            console.log(data);
        }
       } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível registrar conta. Tente Novamente';

       const toast = useToast();

       useEffect(() => {
        toast({
          title: "Conta não registrada",
          description: "Não foi possível registrar conta. Tente Novamente",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }, [toast]); 
      console.log(error);
        
       }
    }

 
    const  authLogin = async (data:loginType) =>{

      if(data){

      setUserLogin(data);

       try {

      if(data){
      const response = await  api.post('/login',{
            email:data.email,
            password:data.password
         });
        
 
         const access_token = response.data.accessToken;

         const user = response.data.user;

         return {
            acess_token: access_token,
            user:user,
         }

         console.log(access_token);
         console.log(response);
         
      }

           
        
       } catch (error) {
        console.log(error);
       }

     
    }



    }



  return (
      <userContext.Provider value={{ user , createUser , authLogin}}>
        {children}
      </userContext.Provider>
  ) 

}

export const useUserContext = () =>{
    
    const context = useContext(userContext);

    if(!context){
    throw new Error('Something went wrong! Try make sure you are setting the correct values');
    }
    return context;

}

export {UserProvider , userContext};