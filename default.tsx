export const URL_BASE = "http://localhost:3333";

//responsável por retornar no formato de imagem um buffer 
//lido do backend
export const convertBufferToImage = (imageData:any) =>{
    if(imageData && imageData.data && imageData.data.length >= 0){
     
        const base64Image = `data:image/png;base64,${btoa(
          new Uint8Array(imageData.data).reduce(
        
                (data , byte) => data + String.fromCharCode(byte),
                ""
          )
        )}`;
        return base64Image;
    }else{
        console.log("Usuário ainda não possui imagem de perfil!");
        return null;
    }
}