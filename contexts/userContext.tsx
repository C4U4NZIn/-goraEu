'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../app/services/__api';
import axios from 'axios';
import { AppError } from "@/utils/AppError";
import { Bounce, toast } from 'react-toastify';

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




export type userContextType = {
    user: userType;
    createUser: (user:userType) => void; 
    authLogin:(authUser:loginType) => void;
    jwtToken:string;
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
    const [jwtToken , setJwtToken] = useState('');
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

            toast.success( 'Você foi cadastrado com sucesso!',
                {
                    position:'top-center',
                    autoClose:5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition:Bounce
                });
              
           
            console.log(data);
        }
       } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível registrar conta. Tente Novamente';

      toast.error( title,
        {
            position:'top-center',
            autoClose:5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition:Bounce
        });


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

         if(access_token){
            setJwtToken(access_token);
         }
         toast.success('Logado com sucesso',
         {
             position:'top-center',
             autoClose:5000,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
             transition:Bounce
            });
            
                     console.log(access_token);
                     console.log(response);

         return {
            acess_token: access_token,
            user:user,
         }


         
      }

           
        
       } catch (error) {

      
        const isAppError = error instanceof AppError;

        const title = isAppError ? error.message : 'Nenhum usuário do Ágora foi encontrado';


        toast.error( title,
        {
            position:'top-center',
            autoClose:5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition:Bounce
        });

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