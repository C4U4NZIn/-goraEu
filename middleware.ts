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
        '/dashboardCoordenador/salas':'Coordenador',
        '/dashboardCoordenador/professores':'Coordenador',
        '/dashboardCoordenador/alunos':'Coordenador',
        '/dashboardCoordenador/usuario':'Coordenador',
        '/dashboardProfessor':'professor',
        '/dashboardProfessor/usuario':'professor',
        '/dashboardProfessor/salas':'professor',
        '/dashboardProfessor/simulado':'professor',
        '/dashboardProfessor/mural':'professor',
        '/dashboardProfessor/desempenho':'professor'
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
                const dashboardCoordenadorUrl = new URL('/dashboardCoordenador/usuario', request.url);
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
     if(token && (role === 'professor')){
      console.log("É professor e está em uma dynamic route?=>",isDynamicRoute);
     return NextResponse.next();
     }

    // se o usuário tiver token e for aluno
    if(token && (role === 'aluno')){
        // se a rota não pertencer ao aluno
        if(!isRoleValida){
            // redireciona para o dashboard do aluno
            const dashboardAlunoUrl = new URL('/dashboardMain/usuario' , request.url);
            return NextResponse.redirect(dashboardAlunoUrl)
        }
        
    if(isDynamicRoute){
      return NextResponse.next();
    }
        // se a rota pertencer ao aluno
        else{
            return NextResponse.next();
        }
    }
    if(token && (role === 'professor')){
      if(!isRoleValida){
        // redireciona para o dashboard do aluno
        const dashboardProfessorUrl = new URL('/dashboardProfessor/usuario' , request.url);
        return NextResponse.redirect(dashboardProfessorUrl)
    }
    
if(isDynamicRoute){
  return NextResponse.next();
}
    // se a rota pertencer ao aluno
    else{
        return NextResponse.next();
    }
    }


    // se o usuário tiver token e a rota não pertencer à sua função
    if(token && !isRoleValida && role){
        // redireciona para o dashboard correspondente à sua função
        const dashboardRole = new URL(`/dashboard${role.charAt(0).toUpperCase() + role.slice(1)}/usuario`,request.url);
        return NextResponse.redirect(dashboardRole);
    }

    // se o usuário tiver token e a rota pertencer à sua função
    if(token && isRoleValida){
        return NextResponse.next();
    }

}

export const config = {
    matcher:[
        '/SignUp',
        '/dashboardMain/:path*',
        '/dashboardCoordenador/:path*',
        '/dashboardProfessor/:path*',
    ],
}
