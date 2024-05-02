"use client";
import { Inter } from 'next/font/google'
import globalStyle from '../dashboardMain/css/global.module.css'
import styles from '../dashboardMain/css/dashboard.module.css'
import Image from "next/image";
import fogueteAgora2 from '../dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'
import { ActiveLink } from "../dashboardMain/components/active-link";
import mural from '../dashboardMain/image/web-chat (1) 1.svg'
import desempenho from '../dashboardMain/image/diagrama 1.svg'
import usuario from '../dashboardMain/image/do-utilizador (2) 1.svg'
import salas from '../dashboardMain/image/casa 1.svg'
import stylesChildren from '../dashboardMain/css/children.module.css'
import { UserProviderFromProviders } from '@/providers';


const inter = Inter({ subsets: ['latin'] })




export default function DashboardProfessorLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
   <UserProviderFromProviders>
    <html lang="pt-br">
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
           <ActiveLink href="/dashboardProfessor"><h1 className={styles.stylesH1}>Salas</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={usuario}
        className={styles.stylesUsuario}
        />
           <ActiveLink href="/dashboardProfessor"><h1 className={styles.stylesH1}>Usuário</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={desempenho}
        className={styles.stylesDesempenho}
        />
           <ActiveLink href="/dashboardProfessor"><h1 className={styles.stylesH1}>Desempenho</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={mural}
        className={styles.stylesMural}
        />
      <ActiveLink href="/dashboardProfessor"><h1 className={styles.stylesH1}>Mural</h1></ActiveLink>
       </div>


     
    
        </div>

      </aside>
   
   

    <div className={stylesChildren.containerChildrens}>
      {children}  
    </div>
 

      </body>
    </html>


   </UserProviderFromProviders>

  )
}
