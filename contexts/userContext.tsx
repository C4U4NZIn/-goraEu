'use client';
import React, { createContext, useContext , useState } from "react";
import api from '../app/services/__api';
import { AppError } from "@/utils/AppError";
import Cookies from "js-cookie";
import { useEffect } from "react";

//temporariamente eu vou fazer as requisições aqui
//ou seja
//como esse contexto tá por volta de tds as pags
// vou fzer requisição de tudo que é tipo aq
//e que Deus me perdoe pela minha decisão

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
type userLoginType = professorLoginType | alunoLoginType | coordenadorLoginType;
type professorLoginType = {
    id:string;
    email:string;
    emailInstitutional:string;
    phonePersonal:string;
    phoneInstitutional:string;
    avatar:string;
    username:string;
    role:string;
    password:string;
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
type alunoLoginType = {
    id:string;
    email:string;
    emailInstitutional:string;
    phonePersonal:string;
    phoneInstitutional:string;
    avatar:string;
    username:string;
    role:string;
    password:string;
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
    filiacao:{
        id:string;
        telefone1:string;
        telefone2:string;
        tipo_Relacionamento:string;
        username:string;
    }
}
type coordenadorLoginType = {
    id:string;
    email:string;
    emailInstitutional:string;
    phonePersonal:string;
    phoneInstitutional:string;
    avatar:string;
    username:string;
    role:string;
    password:string;
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
    role?:string;
}
type otpType = {
    currentCode:string;
    id:string|undefined;
}
type dataFromOtpRequestType = {
  message:string;
  isValidOtpCode:boolean;
}
type sendEmailToUserType = {
    email:string | undefined;
}
export type userContextType = {
    user: userType | undefined;
    userLogin:userLoginType | undefined;
    createUser: (user:userType) => Promise<feedbackApi | undefined>; 
    authLogin:(authUser:loginType) => Promise<feedbackApi | undefined>;
    jwtToken:string | undefined;
    role:string | undefined;
    sendEmailToUser:(data:sendEmailToUserType) => Promise<feedbackApi | undefined>;
    verifyCode:(data:otpType) => Promise<dataFromOtpRequestType | undefined>;
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
    const [role , setRole] = useState<string>();
    //temporariamente vou fazer uma função de verify aq no front
    //tem no backend - mas preguiça pra consumir...
   

    //passar email to api
    //acessar 
    const sendEmailToUser = async (data:sendEmailToUserType) =>{
       try {
        const response = await api.post('/email/SendEmail',{
            email:data.email
        });
        if(response.data.status === 202){
        return {
            message:response.data.message,
            status:response.data.status,
        }
        }else{
            return {
                status:403,
                message:response.data.message,
            }
        }
       } catch (error) {
        
       }
    }
    //passar id e o currentCode
    //acessar user/verify
    const verifyCode = async (data:otpType) =>{

      if(data){
          try {
            const response = await api.post('/user/verify', {
                id:data.id,
                currentCode:data.currentCode
            });

           if(response.data.status !== 202){
            return {
                message:response.data.message,
                isValidOtpCode:response.data.isValidCode
            } 
           }

          return {
            message:response.data.message,
            isValidOtpCode:response.data.isValidCode
          }



          } catch (error) {
            
          }

      }
    }

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
        Cookies.set('role',response.data.role);
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
        if(userToken)
         setJwtToken(userToken);
      }

     const atualizarDataUser = async () => {

       const tokenUser = Cookies.get('agorafmm-web@token');
       if(tokenUser){
           const responseFromGetDataUser = await api.get('/auth/data' , {
            headers:{
             Authorization: `Bearer ${tokenUser}`
            }
           })
    
         if(responseFromGetDataUser.data.status === 202){
            const newUser = {...responseFromGetDataUser.data.user} 
            console.log(newUser);
            switch(newUser.role){
               case 'coordenador':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    emailInstitutional:newUser.emailInstitutional,
                    phonePersonal:newUser.phonePersonal,
                    phoneInstitutional:newUser.phoneInstitutional,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password,
                    address:{
                       cep:newUser.address.cep,
                       numberHouse:newUser.address.numberHouse,
                       bairro:newUser.address.bairro,
                       estado:newUser.address.estado,
                       cidade:newUser.address.cidade,
                       country:newUser.address.country,
                       logradouro:newUser.address.logradouro,
                complemento:newUser.address.complemento }   } )   
                setRole(newUser.role);
                break;
               case 'professor':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    emailInstitutional:newUser.emailInstitutional,
                    phonePersonal:newUser.phonePersonal,
                    phoneInstitutional:newUser.phoneInstitutional,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password,
                    address:{
                       cep:newUser.address.cep,
                       numberHouse:newUser.address.numberHouse,
                       bairro:newUser.address.bairro,
                       estado:newUser.address.estado,
                       cidade:newUser.address.cidade,
                       country:newUser.address.country,
                       logradouro:newUser.address.logradouro,
                      complemento:newUser.address.complemento }, 
                  } )   
                setRole(newUser.role)
                break;
               case 'aluno':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    emailInstitutional:newUser.emailInstitutional,
                    phonePersonal:newUser.phonePersonal,
                    phoneInstitutional:newUser.phoneInstitutional,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password,
                    address:{
                       cep:newUser.address.cep,
                       numberHouse:newUser.address.numberHouse,
                       bairro:newUser.address.bairro,
                       estado:newUser.address.estado,
                       cidade:newUser.address.cidade,
                       country:newUser.address.country,
                       logradouro:newUser.address.logradouro,
                      complemento:newUser.address.complemento }, 
                    filiacao:{
                        id:newUser.filiacao.id,
                        telefone1:newUser.filiacao.telefone1,
                        telefone2:newUser.filiacao.telefone2,
                        tipo_Relacionamento:newUser.filiacao.tipo_Relacionamento,
                        username:newUser.filiacao.username,
                    }
            } )   
                setRole(newUser.role)
                break;
               default:
                console.log('Algo deu errado no servidor! Tente novamente!');
            }

             
               

             }

       }

     }

    useEffect(() => {
       atualizarDataUser();
      },[]);
      useEffect(()=>{
        atualizarUserToken();
      },[])


   const values = { verifyCode , sendEmailToUser , role , userLogin , setUserLogin,  user ,  createUser , authLogin , jwtToken , setUser }

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