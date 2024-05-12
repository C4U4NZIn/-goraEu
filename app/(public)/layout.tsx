'use client';
import { UserProviderFromProviders } from "@/providers";
import StyledComponentsRegistry from "@/lib/registry";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
      <UserProviderFromProviders>
    <html lang="pt-br">
      <StyledComponentsRegistry>
      <body>
       {children}  
      </body>
      </StyledComponentsRegistry>
    </html>
      </UserProviderFromProviders>
  )
}
