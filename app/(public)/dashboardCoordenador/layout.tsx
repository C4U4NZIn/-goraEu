"use client";
import { Tinos } from 'next/font/google'
import globalStyle from './css/global.module.css'
import styles from './css/dashboard-coordenador.module.css'
import Image from "next/image";
import fogueteAgora2 from '../dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'
import { ActiveLink } from "../dashboardMain/components/active-link";
import mural from '../dashboardMain/image/web-chat (1) 1.svg'
import desempenho from '../dashboardMain/image/diagrama 1.svg'
import usuario from '../dashboardMain/image/do-utilizador (2) 1.svg'
import salas from '../dashboardMain/image/casa 1.svg'
import professores  from '../dashboardMain/image/professor-no-quadro 1.svg'
import alunos from '../dashboardMain/image/usuario-graduado 1.svg'
import stylesChildren from '../dashboardMain/css/children.module.css'
import { UserProviderFromProviders } from '@/providers';
import { Toaster } from 'sonner';

const tinos = Tinos({ 
  weight:['400','700'],
  subsets: ['latin'] })


export default function DashboardCoordenadorLayout({
  children,
}: {
  children: React.ReactNode
}) {


   {/** componentizar essa barra lateral aside
      dar vida para ela
      torná-la responsiva e interativa
      clonar com ela algumas asides de famosos sites
  */}
  return (
   <UserProviderFromProviders>
    <html 
    lang="pt-br"
    className={tinos.className}
    style={{
      height:'47.144rem',
      width:'80rem'
    }}
    >
      <body className={globalStyle.body}>
      {/** fazer componente aside fodão */}
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
           <ActiveLink href="/dashboardCoordenador/salas"><h1 className={styles.stylesH1}>Salas</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={usuario}
        className={styles.stylesUsuario}
        />
           <ActiveLink href="/dashboardCoordenador/usuario"><h1 className={styles.stylesH1}>Usuário</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={desempenho}
        className={styles.stylesDesempenho}
        />
           <ActiveLink href="/dashboardCoordenador/professores"><h1 className={styles.stylesH1}>Professores</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={mural}
        className={styles.stylesMural}
        />
      <ActiveLink href="/dashboardCoordenador/alunos"><h1 className={styles.stylesH1}>Alunos</h1></ActiveLink>
       </div>


     
    
        </div>

      </aside>
   
   

    <div className={stylesChildren.containerChildrens}>
      <>
      {children}  
      </>
      <Toaster richColors position='top-center'/>
    </div>
 

      </body>
    </html>


   </UserProviderFromProviders>

  )
}
