export const URL_BASE = "http://localhost:3333";

//responsável por retornar no formato de imagem um buffer 
//lido do backend
export const convertBufferToImage = (imageData: any) => {
    if(imageData && imageData.length > 0){
        const base64Image = btoa(
          new Uint8Array(imageData.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        return base64Image; 
    }
  };