"use client";

import TextActivitys from '../../Activities/index'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation';

type CardTurmasProps = {
	turma : string,
}

export default function Card_Turmas({turma} : CardTurmasProps){
	const router = useRouter();

	const handleNavigate = () => {
    router.push('/Desempenho/Home');
  };

	return(
		<div className={styles.container} onClick={handleNavigate}>
			<div className={styles.header}>
				<h1 className={styles.text_title}>{turma}</h1>
			</div>

			{/* 
					O TextActivitys são as atividades que serão listadas
					Você pode adquirir um array e colocar um map para renderizar cada elemento
					tipo assim: 

					{
						data.map((item, index) => 
							<TextActivitys key={index} title={item.title} type={item.type} data={item.data} hora={item.hora/>
						)
					}

					O Type é pra diferenciar um siludado de uma ativiade comum. Isso porque eu apresentam um estilo diferente 
			*/}

			<div className={styles.container_activitys}>
				<TextActivitys title='Simulado' type='Simulado' data='12/03/24' hora='12:29'/>
				<TextActivitys title='Simulado' type='Simulado' data='12/03/24' hora='12:29'/>
				<TextActivitys title='Atividade 1' type='Atividade' data='12/03/24' hora='12:29'/>
				<TextActivitys title='Atividade 2' type='Atividade' data='12/03/24' hora='12:29'/>
			</div>
		</div>
	)
}