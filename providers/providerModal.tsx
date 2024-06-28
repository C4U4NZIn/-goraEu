"use client";
import { useState , useEffect} from 'react'
import { UpdateFieldModal } from '@/components/modals/updateField';
import { UploadImageModal } from '@/components/modals/uploadImage';
import Modal from '@/components/professor/SimuladosComponents/Modal';

export const ModalProvider = () =>{

    const [isMounted , setIsMounted] = useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[]);

   if(!isMounted){return null}

    return(
        <>
        <UploadImageModal/>
        </>
    )



}