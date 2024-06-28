'use client'

import styles from './styles.module.css'
import Image from 'next/image'

import EditIcon from '../Assets/icons/editar_icon.png'
import DeleteIcon from '../Assets/icons/lixeira_icon.png'
import { useEffect, useState } from 'react'
import Editar from '../editar/index'
import AvatarTemplate from '@/app/(public)/usuario/avatar'

type ComentarioProps = {
	comentario: string,
	imageUrl: string,
	teacher: string,
	data: string,
	onEdit: any,
	onDelete: any
}
//seria o post
export default function Comentario({comentario, imageUrl, teacher, data, onEdit, onDelete}:ComentarioProps){

	const handleEdit = (e: any) => {
		e.stopPropagation();
		onEdit(comentario)
	}

  const handleDelete = () => {
    onDelete()
  }

	return(
		<div className={styles.container}>
			<div className={styles.container_header}>
                {
                    !imageUrl  && (
                        <AvatarTemplate
                        username={teacher.slice(9).toUpperCase()}
                        widthImg={100}
                        heightImg={100}
                        fontSize='60'
                        />
                    )
                }
                {
                    imageUrl && (
				<div className={styles.container_image}>
					<img
						className={styles.image_profile}
						src={imageUrl} alt='perfil'/>
				</div>
                    )
                }
				
				<div style={{display:'flex', flexDirection:'column', gap:'0.5vw'}}>
					<p className={styles.text_name}>{teacher}</p>
					<p className={styles.text_data}>{data}</p>
				</div>
			</div>

			<div className={styles.container_bottom}>
				<p className={styles.text_comentario}>{comentario}</p>
				<div className={styles.container_button}>
					<button  onClick={(e) => handleEdit(e)} className={styles.button}>
						<Image className={styles.image_button} src={EditIcon} alt='Editar'/>
					</button>

					<button  onClick={()=>handleDelete()} className={styles.button}>
						<Image className={styles.image_button} src={DeleteIcon} alt='Delete'/>
					</button>
				</div>
			</div>
		</div> 
	)
}