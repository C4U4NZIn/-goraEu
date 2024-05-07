import { Height, WidthNormal } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import  Stack  from "@mui/material/Stack";


export type AvatarProps = {
    username:string;
}


const AvatarTemplate = ({username}:AvatarProps) =>{

    function hashingColorsToAvatar(string:string){
       let i;
       let hash = 0;

    //variável de hash 
      for(i=0; i<string.length;i++){
        hash = string.charCodeAt(i) + ((hash<<5)-hash)
      }

        let color = "#";
     //cada avatar terá uma cor diferente- fazer isso também nas  cores das salas e das turmas

      for(i=0;i<3;i++){
       const value = (hash>>(i*8)) & 0xff;
       color += `00${value.toString(16)}`.slice(-2);
      }

       return color;
    }
     function convertUsernameForTwoCaracters(username:string){

     if(username){
         return {
          sx:{
            bgColor:hashingColorsToAvatar(username),
            width:150,
            height:150,
            fontSize:'50px'
           
          },
          children:`${username.split("")[0][0]}${username.split("")[1][0]}`
         }

     }
     }

  return (
    <>
    <Stack>
        <Avatar
        {...convertUsernameForTwoCaracters(username)}
        />
    </Stack>

    </>
   )


}
export default AvatarTemplate;