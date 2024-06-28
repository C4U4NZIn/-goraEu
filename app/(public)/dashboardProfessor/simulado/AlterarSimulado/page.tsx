"use client";

import styles from './styles.module.css'
import { simulado } from '../AlterarQuestao/simulado'
import TicketEdit from '../../../../../components/professor/SimuladosComponents/TicketEdit'
import Image from 'next/image'
import icon from './icon_edit.png'

export default function AlterarSimulado(){
	return(
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Alterar<br/>Simulado</h1>
			  
				<div style={{width:'60%'}}>
					<div className={styles.container_informations}>
						<h1 className={styles.subtitle}>Título:</h1>
						<h1 className={styles.text_data}>{simulado.título}</h1>
						<button className={styles.button_edit}>
							<Image className={styles.icon_edit} src={icon} alt='edit'/>
						</button>
					</div>

					<div className={styles.container_informations}>
						<h1 className={styles.subtitle}>Assunto:</h1>
						<h1 className={styles.text_data}>{simulado.assunto}</h1>
						<button className={styles.button_edit}>
							<Image src={icon} alt='edit' className={styles.icon_edit}/>
						</button>
					</div>
				</div>
			</div>

			<div className={styles.container_questions}>
				{
					simulado.questoes.map((item, index) => (
						<TicketEdit
							key={index}
							number={index}
							enunciado={item.enunciado}
						/>
					))
				}
			</div>

			<div className={styles.footer}/>
		</div>
	)
}