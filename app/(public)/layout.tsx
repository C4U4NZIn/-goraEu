'use client';
import { UserProviderFromProviders } from "@/providers";
import StyledComponentsRegistry from "@/lib/registry";
import {
 GlobalStyles
} from '../../app/(public)/components/global/styled/global'
import {Tinos } from "next/font/google";

const tinos = Tinos({
  weight:['400','700'],
  subsets:['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <UserProviderFromProviders>
    <html 
    lang="pt-br"
    className={tinos.className}
    >
      <StyledComponentsRegistry>
        
      <body>
       {children}  
      </body>
       
      </StyledComponentsRegistry>
    </html>
      </UserProviderFromProviders>
  )
}
