"use client";

import styles from './styles.module.css'
import { useState } from 'react'

type ExcluirProps = {
	onClose: any
}

export default function Excluir({onClose}:ExcluirProps){

	//Adiciona a lógica de excluir
	const Excluir = () => {

	}
	
	return(
		<div className={styles.container}>
			<p className={styles.title}>Excluir post</p>

			<div className={styles.input}>
				<p className={styles.text_confirmation}>Deseja excluir o post do mural?</p>
			</div>

			<div className={styles.container_bottom}>
				<div className={styles.container_buttons}>
					<button onClick={onClose} className={styles.buttons}>
						<p className={styles.label_button}>Cancelar</p>
					</button>

					<button onClick={Excluir} className={styles.buttons}>
						<p className={styles.label_button}>Excluir</p>
					</button>
				</div>
			</div>
		</div>
	)
}