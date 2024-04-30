import axios from 'axios';
import { AppError } from '@/utils/AppError';
    
const api = axios.create({
  baseURL:'http://localhost:3333',
  headers:{
      'Content-Type':'application/json'
  },
  withCredentials:true
});


api.interceptors.response.use((response) => response , (error) =>{

  if( error.response && error.response.data.message){
    return Promise.reject(new AppError(error.response.data.message));
    
  }else{
    return Promise.reject(new AppError('Erro no servidor.Tente novamente mais tarde.'))
  }



});



 export default api;