'use client';
import styles from './perfil.module.css'
import { Toaster } from 'sonner'



export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body 
      className={styles.body}
      >
       
        <>
         {children}
        </>
        <Toaster richColors position='top-center'/>
      
      </body>
    </html>
  )
}
