import StudentsItems from '../Students_item/index'
import styles from './styless.module.css'


//pegar no contexto os alunos que fazem parte dessa sala
export default function ListStudents(){
	return(
		<div className={styles.container}>
			<StudentsItems
				name="Vithor Junior da Encarnação Vitório"
				RA={227072}
				url=""
			/>
			<StudentsItems
				name="Mikaella Costa Da Silva"
				RA={223344}
				url=""
			/>
			<StudentsItems
				name="Levi Da Silva Moreno"
				RA={223245}
				url=""
			/>
			<StudentsItems
				name="Roberta Da Silva"
				RA={223344}
				url=""
			/>
			<StudentsItems
				name="Paulo Roberto Sobrinho"
				RA={223239}
				url=""
			/>
			<StudentsItems
				name="Nivia Costa De Almeida"
				RA={223344}
				url=""
			/>
			<StudentsItems
				name="Caua Silva de Almeida"
				RA={224534}
				url=""
			/>

		</div>
	)
}