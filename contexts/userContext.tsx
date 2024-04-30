'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

type userType = {
    username:string;
    email:string;
    emailInstitutional:string;
    password:string;
    avatar:string;
    phonePersonal:string;
    phoneInstitutional?:string;
    role:string;
    address?:{
        cep:string | undefined;
        numberHouse:string|undefined;
        bairro:string|undefined;
        estado:string|undefined;
        cidade:string|undefined;
        country:string|undefined;
        logradouro:string|undefined;
        complemento:string|undefined;
    }
}
type userLoginType = {

    id:string;
    email:string;
    emailInstitutional:string;
    phonePersonal:string;
    phoneInstitutional:string;
    avatar:string;
    username:string;
    role:string;
    address:{
        cep:string | undefined;
        numberHouse:string|undefined;
        bairro:string|undefined;
        estado:string|undefined;
        cidade:string|undefined;
        country:string|undefined;
        logradouro:string|undefined;
        complemento:string|undefined;
    }
}
type loginType = {
    email:string;
    password:string;
}


type feedbackApi = {
    status: boolean;
    message:string;
    access_token?:string;
}


export type userContextType = {
    user: userType | undefined;
    userLogin:userLoginType | undefined;
    createUser: (user:userType) => Promise<feedbackApi | undefined>; 
    authLogin:(authUser:loginType) => Promise<feedbackApi | undefined>;
    jwtToken:string | undefined;
}


 const userContext = createContext({} as userContextType);  
 const UserProvider = ({children}:{children:React.ReactNode}) => {

    const [user , setUser] = useState<userType | undefined>(
     {} as userType
    );
    const [userLogin , setUserLogin] = useState<userLoginType | undefined>(
        {} as userLoginType
    );
    const [jwtToken , setJwtToken] = useState<string>();
  
    const createUser = async (data:userType) =>{
       try {
           if(data){
           const response = await api.post('/coordenador/post', data);
            if(response.data){
                return {
                    status:true,
                    message:'Você foi cadastrado com sucesso',
                }
            }
            

        }
       } catch (error) {

      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : 'Não foi possível registrar conta. Tente Novamente';

         return {
            status:false,
            message:title
         }
        
       }
    }
    const  authLogin = async (data:loginType) =>{

      if(data){
      try {

      if(data){
      const response = await  api.post('/auth/login',{
            email:data.email,
            password:data.password
         });
         const access_token = response.data.accessToken;
        Cookies.set('agorafmm-web@token',access_token,{expires: 10*365*60*60});
         
        return {
            access_token:access_token,
            message:'Autenticado com Sucesso!',
            status:true
        }
         
      }

           
        
       } catch (error) {

      
        const isAppError = error instanceof AppError;

        const title = isAppError ? error.message : 'Nenhum usuário do Ágora foi encontrado';


         return {

            access_token:'',
            message:title,
            status:false

        }


       }

     
    }



    }
 
     const atualizarUserToken  = async () =>{
         const userToken = Cookies.get('agorafmm-web@token');
         setJwtToken(userToken);
      }


     const atualizarDataUser = async () => {

       const tokenUser = Cookies.get('agorafmm-web@token');
       const responseFromGetDataUser = await api.get('/auth/data' , {
        headers:{
         Authorization: `Bearer ${tokenUser}`
        }
       })

     if(responseFromGetDataUser.data.status === 202){
        const newUser = {...responseFromGetDataUser.data.user} 
        console.log(newUser);
        
        setUserLogin({
         id:newUser.id,
         avatar:newUser.avatar,
         email:newUser.email,
         emailInstitutional:newUser.emailInstitutional,
         phonePersonal:newUser.phonePersonal,
         phoneInstitutional:newUser.phoneInstitutional,
         username:newUser.username,
         role:newUser.role,
         address:{
            cep:newUser.address.cep,
            numberHouse:newUser.address.numberHouse,
            bairro:newUser.address.bairro,
            estado:newUser.address.estado,
            cidade:newUser.address.cidade,
            country:newUser.address.country,
            logradouro:newUser.address.logradouro,
            complemento:newUser.address.complemento }   } )   
         }

     }

    useEffect(() => {
       atualizarDataUser();
      },[]);
      useEffect(()=>{
        atualizarUserToken();
      },[])


   const values = { userLogin , setUserLogin,  user ,  createUser , authLogin , jwtToken , setUser }

  return (
      <userContext.Provider value={values}>
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