import { match } from "assert";
import { NextResponse , NextRequest, URLPattern } from "next/server";


  
function verifyUUID(data:{param:string}){
  const {param} = data;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  return uuidRegex.test(param);

}

export default function middleware(request:NextRequest){
    const token = request.cookies.get('agorafmm-web%40token');
    const role = request.cookies.get('role')?.value;
    const signInUrl = new URL('/SignUp', request.url)
    const currentPath = request.nextUrl.pathname;
    const privateRoutes:any = {
        '/dashboardMain':'aluno',
        '/dashboardMain/salas':'aluno',
        '/dashboardMain/usuario':'aluno',
        '/dashboardMain/desempenho':'aluno',
        '/dashboardMain/mural':'aluno',
        '/dashboardCoordenador/usuario':'coordenador',
        '/dashboardProfessor':'professor',
        '/dashboardProfessor/usuario':'professor',
        
    }
    const pattern = new URLPattern({pathname:currentPath});
    const isRoleValida =  privateRoutes[pattern.pathname] === role; 
    const match = currentPath.match(/\/([^\/]+)$/);
    const last_pathname = match ? match[1] : '';    
    const param = last_pathname
    const isDynamicRoute = verifyUUID({param});
  
    // se o usuário não tiver token
    if(!token){
        // e ele tiver na página de login
        if(currentPath === '/SignUp'){
            //ele continua na página de login
            return NextResponse.next();
        }
        //caso contrário , ele volta para a página de login
        return NextResponse.redirect(signInUrl);
    }
    //se o usuário tiver o token
   if(token){
      // e ele estiver na página de login
    if(currentPath === '/SignUp'){
        // e ele for aluno
      if(role === 'aluno'){
        // é redirecionado para seu dashboard
        const dashboardAlunoUrl = new URL('/dashboardMain/usuario' , request.url);
        return NextResponse.redirect(dashboardAlunoUrl)
    }else if(role === 'coordenador') {
        // se o usuário for coordenador
        const dashboardCoordenadorUrl = new URL('/dashboardCoordenador', request.url);
        return NextResponse.redirect(dashboardCoordenadorUrl);
      } else if(role === 'professor') {
        // se o usuário for professor
        const dashboardProfessorUrl = new URL('/dashboardProfessor/usuario', request.url);
        return NextResponse.redirect(dashboardProfessorUrl);
      }
    }
    
   }
 

   if(token && (role === 'aluno')){
     console.log("É aluno e está em uma dynamic route?=>",isDynamicRoute);
    return NextResponse.next();
    }


 
   //se ele tiver token
   if(token){
    // se ele não for para a página em que ele tem role válida
     if(!isRoleValida){
       
        // e se a regra dele existir
        let pathRole
        if(role){
            pathRole = role?.charAt(0).toUpperCase() + role?.slice(1);
          }else{
            return NextResponse.next();
          }
          // e ele for um aluno
          if(role === 'aluno' && !isDynamicRoute){
            // então ele volta para seu dashboard
            const dashboardAlunoUrl = new URL('/dashboardMain/usuario' , request.url);
            return NextResponse.redirect(dashboardAlunoUrl)
          }else{
              // então ele é redirecionado para seu próprio dashboard
              const dashboardRole = new URL(`/dashboard${pathRole}/usuario`,request.url);
              return NextResponse.redirect(dashboardRole);
          }
          }else{
            return NextResponse.next();
          }
    }

   }
   {/** colocar todas as rotas que devem sofrer
    influencia da função middleware neste objeto config com o matcher
  */}
export const config = {
    matcher:[
        '/SignUp',
        '/dashboardMain/:path*',
        '/dashboardCoordenador/:path*',
        '/dashboardProfessor/:path*',
    ],

      } 
