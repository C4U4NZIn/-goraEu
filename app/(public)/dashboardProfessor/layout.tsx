"use client";
import { Inter, Tinos } from 'next/font/google'
import globalStyle from './css/global.module.css'
import styles from './css/dashboard-professor.module.css'
import Image from "next/image";
import fogueteAgora2 from '../dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'
import { ActiveLink } from "../dashboardMain/components/active-link";
import mural from '../dashboardMain/image/web-chat (1) 1.svg'
import desempenho from '../dashboardMain/image/diagrama 1.svg'
import usuario from '../dashboardMain/image/do-utilizador (2) 1.svg'
import salas from '../dashboardMain/image/casa 1.svg'
import stylesChildren from '../dashboardMain/css/children.module.css'
import simulado from '../dashboardMain/image/lista-de-embalagem 1.svg'
import { UserProviderFromProviders } from '@/providers';
import { Toaster } from 'sonner';

const tinos = Tinos({ 
  weight:['400','700'],  
  subsets: ['latin'] 
})




export default function DashboardProfessorLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
   <UserProviderFromProviders>
    <html 
    lang="pt-br"
    className={tinos.className}
    style={{
      width:'80rem',
      height:'47.144rem',
      margin:0,
      padding:0
    }}
    >
      <body className={globalStyle.body}>
      
      <aside className={styles.verticalSideBar}>
      
       <div className={styles.containerElipse}>

       <div className={styles.containerTextImage}>

        <Image
        priority
        alt=''
        src={fogueteAgora2}
        className={styles.styleImage}
        />
        
      
       </div>
       </div>
       
        <div
        className={styles.containerLinks}
        >

       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={salas}
        className={styles.stylesSalas}
        />
           <ActiveLink href="/dashboardProfessor/salas"><h1 className={styles.stylesH1}>Salas</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={usuario}
        className={styles.stylesUsuario}
        />
           <ActiveLink href="/dashboardProfessor/usuario"><h1 className={styles.stylesH1}>Usuário</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={desempenho}
        className={styles.stylesDesempenho}
        />
           <ActiveLink href="/dashboardProfessor/desempenho"><h1 className={styles.stylesH1}>Desempenho</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={mural}
        className={styles.stylesMural}
        />
      <ActiveLink href="/dashboardProfessor/mural"><h1 className={styles.stylesH1}>Mural</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={simulado}
        className={styles.stylesMural}
        />
      <ActiveLink href="/dashboardProfessor/simulado"><h1 className={styles.stylesH1}>Simulado</h1></ActiveLink>
       </div>

        </div>

      </aside>
      
      {children}  
       <Toaster richColors position='top-center'/>
    
 

      </body>
    </html>


   </UserProviderFromProviders>

  )
}
