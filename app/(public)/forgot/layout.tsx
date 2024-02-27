import styles from '../forgot/forgot.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function EsqueceuSenhaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={styles.body}
      >
      {children}
      
      </body>
    </html>
  )
}

