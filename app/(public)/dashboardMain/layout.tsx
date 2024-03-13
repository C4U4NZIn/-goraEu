
import Link from "next/link";
import { UserProviderFromProviders } from "@/providers";
import { usePathname } from "next/navigation";
import { isPublicRoute } from "@/functions/isPublic/is-public-route";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import globalStyle from './css/global.module.css'
import styles from './css/dashboard.module.css'
import Image from "next/image";
import fogueteAgora from '../../(public)/dashboardMain/image/image 15foguete.svg'
import fogueteAgora2 from '../dashboardMain/image/WhatsApp Image 2024-03-11 at 20.05 1fogueteAgora2.svg'
import { ActiveLink } from "./components/active-link";
import mural from './image/web-chat (1) 1.svg'
import desempenho from './image/diagrama 1.svg'
import usuario from './image/do-utilizador (2) 1.svg'
import salas from './image/casa 1.svg'
import stylesChildren from './css/children.module.css'

const inter = Inter({ subsets: ['latin'] })




export default function DashboardMainLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
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
           <ActiveLink href="/dashboardMain/salas"><h1 className={styles.stylesH1}>Salas</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={usuario}
        className={styles.stylesUsuario}
        />
           <ActiveLink href="/dashboardMain/usuario"><h1 className={styles.stylesH1}>Usuário</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={desempenho}
        className={styles.stylesDesempenho}
        />
           <ActiveLink href="/dashboardMain/desempenho"><h1 className={styles.stylesH1}>Desempenho</h1></ActiveLink>
       </div>
       <div className={styles.containerLink}>
        <Image
        priority
        alt=""
        src={mural}
        className={styles.stylesMural}
        />
      <ActiveLink href="/dashboardMain/mural"><h1 className={styles.stylesH1}>Mural</h1></ActiveLink>
       </div>


     
    
        </div>

      </aside>

    <div className={stylesChildren.containerChildrens}>

          {children}  

    </div>


      </body>
    </html>
  )
}
