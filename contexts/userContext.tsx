'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../app/services/__api';
import axios from 'axios';
import { AppError } from "@/utils/AppError";
import { Bounce, toast } from 'react-toastify';
import Cookies from "js-cookie";


type userType = {
    username:string;
    email:string;
    nickname:string;
    password:string;
    role:string;
}
type loginType = {
    email:string;
    password:string;
}

type auth = {
    email:string;
   jwtToken:string;
}


export type userContextType = {
    user: userType | void;
    createUser: (user:userType) => Promise<void>; 
    authLogin:(authUser:loginType) => void;
    jwtToken:string;

}



const userContext = createContext({} as userContextType);
   

    //const signUpAuthVerification = (email:string , token:string) =>{}


 const UserProvider = ({children}:{children:React.ReactNode}) => {

    const [user , setUser] = useState<userType | void>(
        {
            username:'',
            nickname:'',
            role:'',
            email:'',
            password:''
        }
    );
    const [jwtToken , setJwtToken] = useState('oi');
    const [userLoginTop , setUserLogin] = useState<auth>(
        {
            email:'',
            jwtToken:'',
        }
    )

    const createUser = async (data:userType) =>{
       try {
           if(data){
               
               setUser(data);
      
        
       const response = await api.post('/aluno/post',{

            username: data.username,
            nickname:data.nickname,
            role:data.role,
            email:data.email,
            password:data.password
    
            }).then((resolve)=>{
                console.log(resolve.data);
            }).catch(error=>{
                console.log(error);
            })

            console.log(response);  
        }
       } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível registrar conta. Tente Novamente';

    

      console.log(error);
        
       }
    }

 
    const  authLogin = async (data:loginType) =>{

      if(data){
      try {

      if(data){
      const response = await  api.post('/login-aluno',{
            email:data.email,
            password:data.password
         });
        
 
         const access_token = response.data.accessToken;

         const user = response.data.user;

         const values = {
            email:user.email,
            jwtToken:access_token
         }
         setUserLogin(values)

         setJwtToken(access_token);
    
        Cookies.set('agorafmm-web@token',access_token,{expires: 10*365*60*60});
          return {
            access_token: access_token,
         }


         
      }

           
        
       } catch (error) {

      
        const isAppError = error instanceof AppError;

        const title = isAppError ? error.message : 'Nenhum usuário do Ágora foi encontrado';

       }

     
    }



    }



  return (
      <userContext.Provider value={{ user , createUser , authLogin , jwtToken}}>
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