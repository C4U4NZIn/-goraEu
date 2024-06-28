"use client";
import styles from './styles.module.css'
import Image from 'next/image'
import Icon from '../Assets/icon_edit.png'
import { useRouter } from 'next/navigation';
type TicketProp = {
	enunciado : string,
	number: number
}

export default function TicketEdit({enunciado, number}:TicketProp){
	
	const router = useRouter();

     const handleToUpdateQuestionInSimulado = () =>{
		router.push('/dashboardProfessor/simulado/AlterarQuestao');
	 }


	return(
		<div className={styles.container}>
			<h1 className={styles.number_question}>Q{number + 1}</h1>

			<p className={styles.enunciado}>
				{enunciado}
			</p>

			<button 
			onClick={handleToUpdateQuestionInSimulado}
			className={styles.button_edit}>
				<Image className={styles.icon_edit} src={Icon} alt='edit'/>
			</button>
		</div>
	)
}