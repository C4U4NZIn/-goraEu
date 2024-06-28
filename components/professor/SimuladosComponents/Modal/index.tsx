import styles from './styles.module.css'

type ModalProps = {
	title : string, 
	message: string,
	onConfirm : any,
	labelCancel : string,
	labelConfirm: string
}

export default function Modal({title, message, onConfirm, labelCancel, labelConfirm} : ModalProps){

	return(
		<div className={styles.container}>
			<div className={styles.container_modal}>

				<h1 className={styles.title}>{title}</h1>

				<div className={styles.container_body}>
					<div className={styles.container_body_text}>
						<h1 style={{padding:'2vw 4vw'}} className={styles.message}>{message}</h1>

						<div style={{justifyContent: (labelCancel==='' || labelConfirm==='') ? 'center' : 'space-between'}} className={styles.container_buttons}>
							{
								labelConfirm !== '' &&
								<button className={styles.button} onClick={()=> onConfirm(true)}>
									<h1 style={{color:'white'}} className={styles.message}>{labelConfirm}</h1>
								</button>
							}

							{
								labelCancel !== '' &&
								<button  className={styles.button} onClick={()=> onConfirm(false)}>
									<h1 style={{color:'white'}} className={styles.message}>{labelCancel}</h1>
								</button>
							}
						</div>
					</div>
				</div>	
			</div>
		</div>
	)
}