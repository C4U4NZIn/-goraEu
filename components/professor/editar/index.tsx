"use client";

import styles from './styles.module.css'

import Image from 'next/image'

import Icon_Drive from '../Assets/icons/icon_drive.png'
import Icon_Upload from '../Assets/icons/icon_upload.png'
import Icon_Ligacao from '../Assets/icons/icon_ligacao.png'
import { useState } from 'react'

type EditarProps = {
	comentario : string,
	onClose: any
}

export default function Editar({comentario, onClose}:EditarProps){
	const [newComentary, setNewComentary] = useState(comentario)

	//Funcção pra fazer a alteração
	const Postar = () => {
		if(newComentary===comentario){
			return console.log('não postar')
		}
		console.log('Postar')
	} 

	const handleChange = (event : any) => {
    setNewComentary(event.target.value);
  }
	
	return(
		<div className={styles.container}>
			<p className={styles.title}>Clique em qualquer campo para editar</p>
			<textarea 
				onChange={handleChange}
				className={styles.input} 
				value={newComentary}
			>
			</textarea>


			<div className={styles.container_bottom}>
				<div className={styles.container_icons}>
					<button className={styles.icons_button}>
						<Image className={styles.icons_images} src={Icon_Drive} alt='Drive'/>
					</button>

					<button className={styles.icons_button}>
						<Image className={styles.icons_images} src={Icon_Upload} alt='Upload'/>
					</button>

					<button className={styles.icons_button}>
						<Image className={styles.icons_images} src={Icon_Ligacao} alt='Ligacao'/>
					</button>
				</div>

				<div className={styles.container_buttons}>
					<button onClick={onClose} className={styles.buttons}>
						<p className={styles.label_button}>Cancelar</p>
					</button>

					<button onClick={Postar} className={styles.buttons}>
						<p className={styles.label_button}>Postar</p>
					</button>
				</div>
			</div>
		</div>
	)
}