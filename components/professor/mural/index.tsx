"use client";

import styles from './styles.module.css'
import Comentario from '../comentarios'
import { useState } from 'react';
import Editar from '../editar';
import Excluir from '../excluir';
import { useUserContext } from '@/contexts';

export default function MuralComponent(){
  const [isEditing, setIsEditing] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [comentarioValue, setComentarioVelue] = useState('')
  const {userLogin} = useUserContext();

  const handleEdit = (comentario: string) => {
    setComentarioVelue(comentario);
    setIsEditing(true);
  }

	const handleDelete = () => {
    setIsDelete(true);
  }

	const comentario1 = `Olá, alunos.
Boa tarde, não esqueçam de fazer o simulado.
	`

	const comentario2 = `Olá, alunos!
Este é nosso primeiro simulado do ano, façam com atenção e cuidado.
	`

	/*
		Aqui é o elemento de comentário do mural
		Uma única obiservação: 
		Quando você mandar o comentário com prop eu sugiro que armazene a string entre ``
		Isso pq assim é possível detectar a quebra de linha diferentemente da aspas duplas ou simples
	
		Eu sei q vc vai precisar de outros dados pra fazer a parte de editar exluir (token, id, etc)
		Nesse caso, é só pegar do contexto e enviar como prop pra cada componente de comentário
		Usa a mesma lógica que eu usei para armazenar a string de 'comentário' no comentarioValue e enviar pro componente de Editar
	*/


	return(
		<div className={styles.container_screen}>
		  {
				isEditing ?

				<Editar onClose={()=>setIsEditing(false)} comentario={comentarioValue}/> :
				
				(isDelete ? <Excluir onClose={()=>setIsDelete(false)}/> 
				
				:
				
				<div style={{width:'100%', alignItems:'center', display:'flex', flexDirection:'column'}}>
						<Comentario
							onDelete={()=>handleDelete()}
							onEdit={(value: string) => handleEdit(value)}
							imageUrl=''
							teacher={`prof. (a)${userLogin?.username}`}
							data='12/06/24'
							comentario={comentario1}
						/>

						<Comentario
							onDelete={()=>handleDelete()}
							onEdit={(value: string) => handleEdit(value)}
							imageUrl=''
							teacher={`prof. (a)${userLogin?.username}` }
							data='12/06/24'
							comentario={comentario2}
						/>

						<Comentario
							onDelete={()=>handleDelete()}
							onEdit={(value: string) => handleEdit(value)}
							imageUrl=''
							teacher={`prof. (a)${userLogin?.username}`}
							data='12/06/24'
							comentario={comentario1}
						/>
					</div>)
		}
		</div>
	)
}