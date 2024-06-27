import api from "@/app/services/__api"

export const createStudent = () =>{
    
}
export const createTeacher = () =>{

}
export const createManyStudentsByFile = () =>{

}
export const createManyTeachersByFile = () =>{

}
export const createTurma = () =>{

}
export const createSala = () =>{

}
//feito aqui
export const getAllStudentsFromTurma = async (coordenadorId?:string) =>{
    
    let queryAlunos = `coordenador/getAllStudentsInTurma/${coordenadorId}`;

    console.log("era pra ter um id aq na função=>", coordenadorId);
     try {
        

       const responseAllStudentsFromApi = await api.get(queryAlunos);

        if(responseAllStudentsFromApi){
            return responseAllStudentsFromApi.data
        }



      } catch (error) {
        console.log(`erro na função get Alunos ${error}`);
     }


}
//feito aqui
export const getAllSalasFromTurmaByCoordenadorId = async (coordenadorId?:string) =>{
  let queryAlunos = `coordenador/getAllSalasInTurmaByCoordenadorId/${coordenadorId}`;

     try {

      const responseAllSalasFromTurmaByCoordenadorId = await api.get(queryAlunos);
      if(responseAllSalasFromTurmaByCoordenadorId){
         return responseAllSalasFromTurmaByCoordenadorId.data
      }


     } catch (error) {
      console.log(`${error}`);
     }

}
//feito aqui
export const getAllTurmas = async (coordenadorId:string) =>{

      
      try {
        
     const getAllTurmas = await api.post('/coordenador/findAllTurmas',{
      idCoordenador:coordenadorId
     })


      if(getAllTurmas){
        return getAllTurmas.data
      }


      } catch (error) {
        console.log(`${error}`);
      }


}
//feito aqui
export const getAllTeachers = async () =>{
     try {
      
     const getAllTeachers = await api.get('/coordenador/getAllTeachers')
     
     if(getAllTeachers){
       return getAllTeachers.data
     }


     } catch (error) {
      console.log(`${error}`);
     }
}
export const updateTeacherByPartialField = () =>{

}
export const updateStudentByPartialField = () =>{

}
//passar o id da turma
export const deleteTurmaById = async (turmaId:string)=>{

    
    let queryDeleteTurma = `/coordenador/turma/${turmaId}`;

   try {
    
    const deletedTurmaById = await api.delete(queryDeleteTurma);

    if(deletedTurmaById){
      return deletedTurmaById.data
    }



   } catch (error) {
    console.log(`${error}`);
   }


}
//passar o id da sala
export const deleteSalaById = () =>{

}
//passar o id do aluno
export const deleteStudentById = () =>{

}
//passar o id do professor
export const deleteTeacherById = () =>{

}
export const deleteStudentFromTurma = () =>{

}
export const deleteStudentFromSala = () =>{

}
export const deleteManyStudentsByCoordenadorId = () =>{

}

export const deleteManyTeachersByCoordenadorId = () =>{

}