'use client';
import { UserProviderFromProviders } from "@/providers";
import { usePathname } from "next/navigation";
import { isPublicRoute } from "@/functions/isPublic/is-public-route";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Body } from "./styled/Body";


const inter = Inter({ subsets: ['latin'] })




export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {

 
  
  


  return (
    <html lang="pt-br">
     
    
     <Body>
      {children}  
     </Body>

    </html>
  )
}
