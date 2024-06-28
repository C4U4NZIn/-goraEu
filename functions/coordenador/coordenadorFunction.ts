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
  let queryAlunos = `/coordenador/getAllSalasInTurmaByCoordId/${coordenadorId}`;

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

      let queryTurmasByCoordenadorId = `/coordenador/getAllTurmasByCoordenadorId/${coordenadorId}`;    


      try {
        
     const getAllTurmas = await api.get(queryTurmasByCoordenadorId);


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
//feito aqui
//feito aqui
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
//feito aqui
export const deleteSalaById = async (salaId:string) =>{

    let queryDeleteSala = `/coordenador/sala/${salaId}`

   try {
    
    const deletedSalaResponseFromApi = await api.delete(queryDeleteSala);

    if(deletedSalaResponseFromApi){
      return deletedSalaResponseFromApi.data
    }
   } catch (error) {
    console.log(`${error}`);
   }

}
//passar o id do aluno
//feito aqui
export const deleteStudentById = async (alunoId:string) =>{

    let queryDeleteAlunoId = `/coordenador/student/${alunoId}`;
    
    try {
    
    const  deleteAlunoIdResponsedFromApi = await api.delete(queryDeleteAlunoId);

    if(deleteAlunoIdResponsedFromApi){
      return deleteAlunoIdResponsedFromApi.data
    }




   } catch (error) {
    console.log(`${error}`);
   }

}
//passar o id do professor
//feito aqui
export const deleteTeacherById = async (teacherId:string) =>{

    let queryDeleteTeacher = `/coordenador/teacher/${teacherId}`

   try {
    
   const deletedTeacherByIdResponsedFromApi = await api.delete(queryDeleteTeacher);

   if(deletedTeacherByIdResponsedFromApi){
      return deletedTeacherByIdResponsedFromApi.data
   }




   } catch (error) {
    console.log(`${error}`);
   }


}
//feito aqui
export const deleteStudentFromTurma = async (data:{alunoId:string , turmaId:string}) =>{

     let {alunoId , turmaId} = data;


      try {
        
      const deletedStudentFromTurmaResponsedFromApi = await api.delete('student-turma',{
        data:{
          alunoId:alunoId,
          turmaId:turmaId
        }
      }); 

     if(deletedStudentFromTurmaResponsedFromApi){
        return deletedStudentFromTurmaResponsedFromApi.data
     }



      } catch (error) {
        console.log(`${error}`);
      }

}
//feito aqui
export const deleteStudentFromSala = async (data:{alunoId:string , salaId:string}) =>{
  let {alunoId , salaId} = data;


  try {
    
  const deletedStudentFromSalaResponsedFromApi = await api.delete('student-sala',{
    data:{
      alunoId:alunoId,
      turmaId:salaId
    }
  }); 

 if(deletedStudentFromSalaResponsedFromApi){
    return deletedStudentFromSalaResponsedFromApi.data
 }



  } catch (error) {
    console.log(`${error}`);
  }
}
export const deleteManyStudentsByCoordenadorId = () =>{

}

export const deleteManyTeachersByCoordenadorId = () =>{

}