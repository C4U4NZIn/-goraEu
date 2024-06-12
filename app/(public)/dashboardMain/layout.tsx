"use client";
import {Poppins, Tinos } from 'next/font/google'
import globalStyle from './css/global.module.css'
import styles from './css/dashboard.module.css'
import Image from "next/image";
import fogueteAgora2 from '../dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'
import { ActiveLink } from "./components/active-link";
import mural from './image/web-chat (1) 1.svg'
import desempenho from './image/diagrama 1.svg'
import usuario from './image/do-utilizador (2) 1.svg'
import salas from './image/casa 1.svg'
import stylesChildren from './css/children.module.css'
import { UserProviderFromProviders } from '@/providers';
import { Toaster } from 'sonner';
import backgroundAside from '../dashboardMain/image/image 20menuVertical.svg'
import AsideLateral from '../components/global/aside';
import { ModalProvider } from '@/providers/providerModal';

const tinos = Tinos({
  weight:['400'],
  subsets:['latin']
})




export default function DashboardMainLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
   <UserProviderFromProviders>
    
    <html
    className={tinos.className}
    lang="pt-br"
    style={{
      width:'80rem',
      height:'47.144rem',
      margin:0,
      padding:0
    }}
    >
      <body className={globalStyle.body}
      style={{
        position:'relative'
      }}
      >
      
  
    <AsideLateral
    role='aluno'
    />
        
   
       
      {children}  
      
       <Toaster richColors position='top-center'/>
      </body>
      
    <ModalProvider/>
    </html>


   </UserProviderFromProviders>

  )
}
