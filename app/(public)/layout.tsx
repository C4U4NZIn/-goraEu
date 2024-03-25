'use client';
import { UserProviderFromProviders } from "@/providers";
import { Inter } from 'next/font/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <UserProviderFromProviders>
    <html lang="pt-br">
      <body>
       {children}  
      </body>
    </html>
      </UserProviderFromProviders>
  )
}
