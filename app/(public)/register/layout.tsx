import { Inter } from 'next/font/google'
import styles from './perfil.module.css'
import { UserProviderFromProviders } from '@/providers'
const inter = Inter({ subsets: ['latin'] })


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
        <UserProviderFromProviders>

         {children}
        </UserProviderFromProviders>
      
      </body>
    </html>
  )
}