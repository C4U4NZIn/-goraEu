'use client';
import path from "path";
import { useEffect } from "react"
import { useState } from "react"
import { useUserContext } from '@/contexts';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputLabelContainer , Label , InputErrorMessage , InputForm , ErrorMessage } from '../styled/Input';

export default function ProfileCoordenador(){
    const [role , setRole] = useState('');
    
    useEffect(()=>{
    
    const pathname = window.location.pathname;
    const coordenador = pathname.split('/register/')[1];
    setRole(coordenador);

    },[])
    
    return(
        <>
        <h1>Coordenador:{role}</h1>
        </>
    )
}