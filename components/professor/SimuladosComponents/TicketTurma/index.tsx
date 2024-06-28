"use client";

import styles from './styles.module.css'
import IconTurma from '../Assets/icon_turma.png'
import Image from 'next/image'

type TicketProps = {
	turma: string,

}

export default function TicketTurma({turma}:TicketProps){
	return(
		<div className={styles.container}>
			<div className={styles.container_icon}>
				<Image className={styles.icon} src={IconTurma} alt='Turma'/> 
			</div>

			<div className={styles.container_turma_checkbox}>
				<h1 className={styles.title}>{turma}</h1>
				<input
					className={styles.checkbox}
					type='checkbox'
				/>
			</div>
		</div>
	)
}