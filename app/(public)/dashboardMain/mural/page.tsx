"use client";
import styled from "styled-components";
import { useUserContext } from "@/contexts";
import ContainerProfile from "../../components/global/profile";
//import { ContainerPrincipal } from "../../components/global/styled/profile";
import Post from "@/components/post/post";
import { Text } from "../../components/global/styled/profile";

//fazer uma função para pegar todos os posts de professores de cada turma
//dá de fazer uma pesquisa pelos posts também
//por enquanto fazer um objeto de posts
//era pra eu ter feito uma função global de split
//teste 
//literalmente pegar o array da api e dar um map
export default function Mural(){

   //chamar dados dos hooks
   const { userLogin , salas} = useUserContext();
   
   if(!salas){return <></>}


   const sortedPostByName:any[] = []


   let AllPostsFromAllSalas:any[] = []

   salas.map((sala)=>{
    AllPostsFromAllSalas.push({
        professorName:sala.professorName,
        createdAt:'25/05/24',
        professorImg:'',
        message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor felis erat, viverra vulputate tellus dignissim nec. Mauris malesuada ipsum id turpis sagittis convallis. Nam viverra aliquet cursus. Curabitur non turpis eget ligula volutpat consectetur. Vivamus ultricies arcu sed quam porttitor placerat nec non nibh. Donec ornare ultricies aliquet. Maecenas imperdiet tortor at ornare euismod. In at vulputate urna.',
        type:'message',
        postImg:'',
    })
   })

   //ordenação básica de vetor em js
   //implementar o método disso em c , c++ e golang qnd tiver tempo
   AllPostsFromAllSalas.sort((previusPost , nextPost)=>{
    if(previusPost.professorName > nextPost.professorName){
      return 1;
    }

    if(previusPost.professorName < nextPost.professorName){
      return -1;
    }

    return 0;
   });


    if(!userLogin?.username){return <></>}


   const usernameSplited = userLogin.username.split(' ')[0]+' '+userLogin.username.split(' ')[1]
   const avatarUsernameSplited = userLogin.username.split(' ')[0][0] + userLogin.username.split(' ')[1][0];



    return(
    
        <MuralContainerPrincipal>

        <ContainerProfile
        username={usernameSplited}
        role="aluno"
        avatarUsername={avatarUsernameSplited}
        bgColor="rgba(253 , 123 , 35 , 1)"
        />
        
        <div
        className="containerTitles"
        >

            <Text
            $fontSize={45}
            $fontWeight={700}
            style={{
                marginLeft:'2.8em'
            }}
            >Mural Geral</Text>
          <div
          className="containerLines"
          >
         <span
         className="Line line1"   
           ></span>
           <span
           className="Line line2"
           ></span>
          </div>
        
        </div>


         <div
         className="ContainerOverallPosts"
         >
            {
                AllPostsFromAllSalas.length <= 0 ? (
                 <>
                 <h1>Não existe posts ou não existem salas...</h1>
                 </>
                ) : (
               <>
               {
                AllPostsFromAllSalas.map((post)=>(
                    <Post
                     professorName={post.professorName}
                     professorImg={post.professorImg}
                     createdAt={post.createdAt}
                     message={post.message}
                     type={post.type}
                     visible_for="aluno"
                    />
                ))
               }
               </>
                )
            
            }
         </div>
        </MuralContainerPrincipal>
    )
}


const MuralContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
    width: 75%;
    height: 100%;
    margin-top: 2.125rem;
    gap: 2rem;

   .ContainerOverallPosts{
     display: flex;
     flex-direction: column;
     align-items: center;
     gap:2rem;
     height: 21.750rem;
     width: 100%;
     overflow: auto;
     padding-top: 10px;
     padding-bottom: 1rem;
    }

   .ContainerOverallPosts::-webkit-scrollbar{
    width: 0px;
   }  
  
   .containerTitles{
     
     display: flex;
     flex-direction: column;
     height: 5rem;
     width: 100%;
     align-content: flex-start;
     align-self:first baseline;
     gap: 1px;
    }

    .containerLines{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:18px;
        align-self: flex-end;
    }
   .Line{
    position: relative;
    width: 100%;
}
.line1::after, .line2::after {
    content: " ";
    position: absolute;
    bottom: 0;
    border-bottom: solid 0.125px black;
}

.line1::after {
    left: 150px;
    right: 450px;
}

.line2::after {
    left: 180px;
    right: 400px; 
}

`
