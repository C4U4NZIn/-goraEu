"use client";

import Image from "next/image";
import ImageTop from './frame_simulado.png'
import { useRouter } from "next/navigation";
import styles from './styles.module.css'
import { useState } from "react";

type FrameProps = {
	numberSimulados: number
}

export default function FrameTop({numberSimulados}:FrameProps){
     
	const router = useRouter();

	const handleCreateSimulado = () =>{
		router.push('/dashboardProfessor/simulado/CreateSimulado');
	}

	const handleToBancoHome = () =>{
		router.push('/dashboardProfessor/simulado/BancoHome');
	}


	return (
		<div className={styles.container}>
			<div className={styles.container_top}>
				<div className={styles.container_body}>
					<div className={styles.container_button_left}>
						<h1 className={styles.title}>Seus<br/>simulados</h1>
						
						<button 
						onClick={handleCreateSimulado}
						className={styles.button_create}>
							<h1 className={styles.label_create}>Criar</h1>
						</button>
					</div>

					<div className={styles.container_button}>
							<button className={styles.button_rigth}>
									<h1 className={styles.label_button_right}>
											- Você já criou <span style={{color:"#94A52D"}} className={styles.label_button_right}>{numberSimulados} simulados</span>
									</h1>
							</button>

							<button className={styles.button_rigth}>
									<h2 className={styles.label_button_right}>
											- Ver <span style={{color:"#94A52D"}} className={styles.label_button_right}>resultados </span>dos simulados
									</h2>
							</button>

							<button 
							onClick={handleToBancoHome}
							className={styles.button_rigth}>
									<h2 className={styles.label_button_right}>
											- Visitar <span style={{color:"#94A52D"}} className={styles.label_button_right}>banco de questões</span>
									</h2>
							</button>
					</div>

				</div>
			</div>

			<Image className={styles.image} src={ImageTop} alt="frame"/>
		</div>
	)
}