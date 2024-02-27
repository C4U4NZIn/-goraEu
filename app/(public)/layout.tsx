'use client';
import { UserProviderFromProviders } from "@/providers";
import { usePathname } from "next/navigation";
import { isPublicRoute } from "@/functions/isPublic/is-public-route";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })




export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();

  const isPublicPage = isPublicRoute(pathname!);
  
  
  console.log(isPublicPage);

  return (
    <html lang="pt-br">
      <body>
      <UserProviderFromProviders>

          {children}  

      </UserProviderFromProviders>
      </body>
    </html>
  )
}
