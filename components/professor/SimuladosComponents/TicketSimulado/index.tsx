"use client";

import Image from 'next/image'

import IconSimulado from '../Assets/icon_ticket_simulado.png'
import IconSend from '../Assets/icon_send.png'
import IconDelete from '../Assets/icon_delete.png'
import IconEdit from '../Assets/icon_edit.png'
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'

type SimuladoProps = {
  name: string,
  setData: any,
  deleteModal : any,
  numberQuestions: number,
  data: string
}

export default function TicketSimulado({name, setData, deleteModal, numberQuestions, data}: SimuladoProps){
  
  const router = useRouter();
  
  const handleToUpdateSimulado = () =>{
    router.push('/dashboardProfessor/simulado/AlterarSimulado');
  }


  return (
    <div className={styles.container}>
      <div className={styles.container_icon_left}>
        <Image className={styles.icon_left} src={IconSimulado} alt='simulado'/>
      </div>

      <div className={styles.container_data}>
        <h2 className={styles.name_simulado}>{name}</h2>
        <h3 className={styles.text_number_questions}>{numberQuestions} questões</h3>
      </div>

      <div className={styles.container_data_buttons}>
        <h1 style={{margin: 0, padding:0}} className={styles.text_number_questions}>{data}</h1>
      
        <div className={styles.container_buttons_right}>
          <button className={styles.buttons_right}>
            <Image className={styles.icon_right} src={IconSend} alt='Send'/> 
          </button>

          <button 
          onClick={handleToUpdateSimulado}
          className={styles.buttons_right}>
            <Image className={styles.icon_right} src={IconEdit} alt='edit'/> 
          </button>

          <button onClick={() => {setData(name), deleteModal()}} className={styles.buttons_right}>
            <Image className={styles.icon_right} src={IconDelete} alt='delete'/> 
          </button>
        </div>
      </div>
    </div>
  )
}