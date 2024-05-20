import { background } from "@chakra-ui/react";
import { Height, WidthNormal } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import  Stack  from "@mui/material/Stack";


export type AvatarProps = {
    username:string;
    heightImg?:number;
    widthImg?:number;
}


const AvatarTemplate = ({username , heightImg , widthImg}:AvatarProps) =>{

    function hashingColorsToAvatar(username:string){
       let i;
       let hash = 0;

    //variável de hash 
      for(i=0; i<username.length;i++){
        hash = username.charCodeAt(i) + ((hash<<5)-hash)
      }

        let color = "#";
     //cada avatar terá uma cor diferente - acho que não foi muito bem isso- fazer isso também nas  cores das salas e das turmas

      for(i=0;i<3;i++){
       const value = (hash>>(i*8)) & 0xff;
       color += ('00'+ value.toString(16)).substr(-2);
      }

       return color;
    }
     function convertUsernameForTwoCaracters(username:string){

     if(username){
         return {
          style:{
            backgroundColor:hashingColorsToAvatar(username),
            width:widthImg,
            height:heightImg,
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