
import { Inter } from 'next/font/google'
import styles from '../dashboard/dashBoard.module.css';

const inter = Inter({ subsets: ['latin'] })


export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
      className={styles.body} 
      >
      {children}
      
      </body>
    </html>
  )
}
