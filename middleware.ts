
import { NextResponse , NextRequest } from "next/server";


export default function middleware(request:NextRequest){

    const token = request.cookies.get('agorafmm-web%40token');
    
    const signInUrl = new URL('/SignUp', request.url)

  
    
    if(!token){
        if(request.nextUrl.pathname === '/SignUp'){
            return NextResponse.next();
        }
        return NextResponse.redirect(signInUrl);
    }

   
 
     
     
     
}
export const config = {
    matcher:[
        '/',
        '/SignUp',
        '/dashboardMain',
        '/dashboardMain/salas',
        '/dashboardMain/desempenho',
        '/dashboardMain/usuario',
        '/dashboardMain/mural',
        
    ]    
} 