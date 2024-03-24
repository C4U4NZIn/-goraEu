
import { NextResponse , NextRequest } from "next/server";


export default function middleware(request:NextRequest){

    const token = request.cookies.get('agorafmm-web%40token');
    
    const signInUrl = new URL('/SignUp', request.url)

   const dashboardMainUsuarioUrl = new URL('/dashboardMain/usuario' , request.url)
    
    if(!token){
        if(request.nextUrl.pathname === '/SignUp'){
            return NextResponse.next();
        }
        return NextResponse.redirect(signInUrl);
    }
   if(token){
    if(request.nextUrl.pathname === '/SignUp'){
     return NextResponse.redirect(dashboardMainUsuarioUrl)
    }
    
   }
   
 
     
     
     
}
export const config = {
    matcher:[
        '/SignUp',
        '/dashboardMain',
        '/dashboardMain/desempenho',
        '/dashboardMain/usuario',
        '/dashboardMain/mural',
        
    ]    
} 