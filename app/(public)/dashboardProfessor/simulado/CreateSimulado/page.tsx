"use client";

import FrameCreate from "../../../../../components/professor/SimuladosComponents/Create";
import styles from './styles.module.css'
import add from './add.png'
import Image from "next/image";
import { useState } from "react";

export default function CreateSimulado(){
	const [titulo, setTitulo] = useState('')
	const [assunto, setAssunto] = useState('')
	
	const AddQuestao = () => {
		if(titulo!=='' && assunto!==''){
			//FAx a nevegação aqui
		} else if (titulo === '') {
			alert('Digite um título para o simulado')
		} else if (assunto === ''){
			alert('Digite um assunto para o simulado')
		} 
	}
	
	return(
		<div className={styles.container}>
			<h1 className={styles.title}>Crie seu<br />simulado</h1>
			<FrameCreate
				assunto={assunto}
				titulo={titulo}
				setAssunto={(value: string) => setAssunto(value)}
				setTitulo={(value: string) => setTitulo(value)}
			/>

			<div className={styles.container_create}>
				<h1 className={styles.title_create}>Adicione Questões</h1>
				<div className={styles.container_image}>
					<button onClick={AddQuestao} style={{backgroundColor:'transparent', border:'none'}}>
						<Image className={styles.image_add} src={add} alt="add"/>
					</button>
				</div>
			</div>

			<div className={styles.footer}/>
		</div>
	)
}