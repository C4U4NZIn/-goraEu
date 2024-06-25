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
    email_profissional:string;
    name_instituicao:string;
    password:string;
    avatar:string;
    telefone1:string;
    telefone2?:string;
    role:string;
    cep:string | undefined;
    endereco:string | undefined;

    
}
type userLoginType = professorLoginType | alunoLoginType | coordenadorLoginType;
type professorLoginType = {
    id:string;
    email:string;
    emailInstitutional:string;
    telefone1:string;
    telefone2:string;
    avatar:any|undefined;
    username:string;
    role:string;
    password:string;
    
}
type alunoLoginType = {
    id:string;
    email:string;
    emailInstitutional:string;
    phonePersonal:string;
    phoneInstitutional:string;
    avatar:any | undefined;
    username:string;
    role:string;
    password:string;

}
type coordenadorLoginType = {
    id:string;
    email:string;
    email_profissional:string;
    telefone1:string;
    telefone2:string;
    avatar:any|undefined;
    username:string;
    role:string;
    password:string;
    cep:string;
    name_instituicao:string;
    endereco:string;
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
  returnedCode:string;
}
type sendEmailToUserType = {
    email:string | undefined;
}
type updateAlunoPartial = {
    data:any;
    fieldName:string
}
type updateProfessorPartial = {
    data:any;
    fieldName:string;
}
type updateCoordenadorPartial = {
    data:any;
    fieldName:string;
}
type message = {
    messageFromApi:any;
    status:number;
}


//invés de fazer os 3 em 3 contextos diferentes, infelizmente vou fazer em um contexto só
//pq eu to - infelizmente-sem tempo pra pensar e isso me quebra por dentro
//meu código não está nem um pouco organizado
//meu raciocinio já foi morto há bastante tempo
//dividir a lógica pra 3 contextos pq senão vai dar merda
export type userContextType = {
    user: userType | undefined;
    userLogin:userLoginType | undefined;
    createUser: (user:userType) => Promise<feedbackApi | undefined>; 
    authLogin:(authUser:loginType) => Promise<feedbackApi | undefined>;
    jwtToken:string | undefined;
    role:string | undefined;
    sendEmailToUser:(data:sendEmailToUserType) => Promise<feedbackApi | undefined>;
    verifyCode:(data:otpType) => Promise<dataFromOtpRequestType | undefined>;
    updateAlunoByPartialFields:(updateAluno:updateAlunoPartial)=> Promise<message | undefined>;
    updateProfessorByPartialFields:(updateProfessor:updateProfessorPartial)=> Promise<message | undefined>;
    updateCoordenadorByPartialFields:(updateCoordenador:updateCoordenadorPartial)=>Promise<message|undefined>;
    salas:any[];
}


 const userContext = createContext({} as userContextType);  
 const UserProvider = ({children}:{children:React.ReactNode}) => {
 
    const [salas , setSalas] = useState<any[]>([]);

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
        console.log(`erro: ${error}`)
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
                isValidOtpCode:response.data.isValidCode,
                returnedCode:response.data.currentCode
            } 
           }

          return {
            message:response.data.message,
            isValidOtpCode:response.data.isValidCode,
            returnedCode:response.data.currentCode
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
               case 'Coordenador':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    email_profissional:newUser.email_profissional,
                    telefone1:newUser.telefone1,
                    telefone2:newUser.telefone2,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password,
                    cep:newUser.cep,
                    endereco:newUser.endereco,
                    name_instituicao:newUser.name_instituicao
                    
                } 
            
            )   
                setRole(newUser.role);
                break;
               case 'professor':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    emailInstitutional:newUser.emailInstitutional,
                    phonePersonal:newUser.telefone1,
                    phoneInstitutional:newUser.phoneInstitutional,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password
                })   
                setRole(newUser.role)
                break;
               case 'aluno':
                setUserLogin({
                    id:newUser.id,
                    avatar:newUser.avatar,
                    email:newUser.email,
                    emailInstitutional:newUser.emailInstitutional,
                    phonePersonal:newUser.telefone,
                    phoneInstitutional:newUser.phoneInstitutional,
                    username:newUser.username,
                    role:newUser.role,
                    password:newUser.password,
            } )   
                setRole(newUser.role)
                getAllSalas(newUser.id);
                break;
               default:
                console.log('Algo deu errado no servidor! Tente novamente!');
            }

             
               

             }

       }

     }
     const updateAlunoByPartialFields = async  (updateAluno:updateAlunoPartial) =>{
      
         const {fieldName , data} = updateAluno;
         let fieldUpdate
 

         if('telefone' in data){
          fieldUpdate = data.telefone;
         }
         if('email' in data){
         fieldUpdate = data.email
         }
         if('password' in data){
            fieldUpdate = data.password;
         }

        try {
            if(fieldUpdate){
                const updatedAlunoByPartialField = await api.post('/aluno/updatePartial',{
                    idAluno:userLogin?.id,
                    fieldName:fieldName,
                    fieldUpdate:fieldUpdate
                });
                if(updatedAlunoByPartialField){
                return {
                    status:updatedAlunoByPartialField.data.status,
                    messageFromApi:updatedAlunoByPartialField.data.message
                }
                }

            }

        } catch (error) {
            
        }


     }
    
     const updateProfessorByPartialFields = async (updateProfessor:updateProfessorPartial) =>{
     
        const {fieldName , data} = updateProfessor;
        let fieldUpdate


        if('telefone' in data){
         fieldUpdate = data.telefone;
        }
        if('email' in data){
        fieldUpdate = data.email
        }
        if('password' in data){
           fieldUpdate = data.password;
        }

       try {
           if(fieldUpdate){
               const updatedProfessorByPartialField = await api.post('/professor/updatePartial',{
                   idProfessor:userLogin?.id,
                   fieldName:fieldName,
                   fieldUpdate:fieldUpdate
               });
               if(updatedProfessorByPartialField){
               return {
                   status:updatedProfessorByPartialField.data.status,
                   messageFromApi:updatedProfessorByPartialField.data.message
               }
               }

           }

       } catch (error) {
           
       }

     }
     const updateCoordenadorByPartialFields = async (updateCoordenador:updateCoordenadorPartial) =>{
        const {fieldName , data} = updateCoordenador;
        let fieldUpdate


        if('telefone' in data){
         fieldUpdate = data.telefone;
        }
        if('email' in data){
        fieldUpdate = data.email
        }
        if('password' in data){
           fieldUpdate = data.password;
        }

       try {
           if(fieldUpdate){
               const updatedCoordenadorByPartialField = await api.post('/coordenador/updatePartial',{
                   idCoordenador:userLogin?.id,
                   fieldName:fieldName,
                   fieldUpdate:fieldUpdate
               });
               if(updatedCoordenadorByPartialField){
               return {
                   status:updatedCoordenadorByPartialField.data.status,
                   messageFromApi:updatedCoordenadorByPartialField.data.message
               }
               }

           }

       } catch (error) {
           
       }
     }
 
     const getAllSalas = async (alunoId:string) =>{
        let salas
        if(alunoId){
            const AllSalasHavingAluno = await api.post('/coordenador/getAllSalas',{
               alunoId:alunoId
            })
            console.log(AllSalasHavingAluno);
            if(AllSalasHavingAluno.data.status === 202){
               salas = Object.values(AllSalasHavingAluno.data.data);
               setSalas(salas);
               
            }

        }
        console.log(salas);
    }

    useEffect(() => {
        atualizarDataUser();
    },[]);
    useEffect(()=>{
        atualizarUserToken();
    },[])


   const values = {salas , updateCoordenadorByPartialFields, updateProfessorByPartialFields , updateAlunoByPartialFields ,  verifyCode , sendEmailToUser , role , userLogin , setUserLogin,  user ,  createUser , authLogin , jwtToken , setUser }

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