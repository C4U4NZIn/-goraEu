'use client';
import { UserProvider } from "@/contexts";

import React from "react";

const UserProviderFromProviders = ({children}:{children:React.ReactNode}) =>{


    return (

        <UserProvider>
           
            {children}
          
        </UserProvider>

    )
    


}

export {UserProviderFromProviders};