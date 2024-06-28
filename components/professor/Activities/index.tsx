import styles from './styles.module.css'

type PropsActivitys = {
	type : string,
	title: string,
	data: string,
	hora: string
}

export default function TextActivitys({type, title, data, hora} : PropsActivitys){
	return (
		<div className={styles.container}>
			<p style={{color:type ==='Simulado' ? '#D91A1A' : 'black'}} className={styles.title}>{title}</p>
			
			<div className={styles.container_data_hour}>
				<p className={styles.text}>{data}</p>
				<p className={styles.text}>{hora}</p>
			</div>
		</div>
	)
}