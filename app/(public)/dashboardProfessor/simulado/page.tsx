"use client";

import FrameTop from '../../../../components/professor/SimuladosComponents/FrameTop'
import styles from './styles.module.css'
import TicketSimulado from '../../../../components/professor/SimuladosComponents/TicketSimulado'
import { useEffect, useState } from 'react'
import Modal from '../../../../components/professor/SimuladosComponents/Modal'

export default function SimuladoTeacher() {
  const [modalDelete, setModalDelete] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [simulado, setSimulado] = useState<{ name: string; data: string; numberQuestions: number } | null>(null)
  const [message, setMessage] = useState('')
	const [messageTwo, setMessageTwo] = useState('')

  useEffect(() => {
    if (simulado) {
      setMessage(`Deseja excluir simulado "${simulado.name}"?`)
			setMessageTwo(`"${simulado.name}" foi excluído com sucesso`)
    }
  }, [simulado])

  const simulados = [
    {name:'Simulado figuras de linguagem', data: '12/02/2024', numberQuestions:30},
    {name:'Simulado Orações Subordinadas', data: '12/03/2024', numberQuestions:20},
    {name:'Simulado Variação Linguística', data: '12/04/2023', numberQuestions:15},
    {name:'Simulado Verbos', data: '15/05/2023', numberQuestions:40}
  ]

  const onConfirm = (confirm: boolean) => {
    if(confirm){
			setSecondModal(true)
			setModalDelete(false)
      // código para excluir o simulado
    } else {
      setModalDelete(false)
			setSecondModal(false)
    }
  }

  const onSecondConfirm = () => {
      setSecondModal(false)
  }

  return (
    <div className={styles.container}>
      {modalDelete && (
        <Modal
          onConfirm={onConfirm}
          title="Excluir Simulado"
          labelConfirm="Excluir"
          labelCancel="Cancelar"
          message={message}
        />
      )}
      {secondModal && (
        <Modal
          onConfirm={onSecondConfirm}
          title="Excluir Simulado"
          labelCancel=''
          labelConfirm="Voltar para simulados"
          message={messageTwo}
        />
      )}
      {
				!secondModal && !modalDelete &&
				<div style={{ width: '90%', display: 'flex', flexDirection: 'column', alignItems: 'center' , height:'30vh' }}>
					<FrameTop numberSimulados={simulados.length} />

          <div className={styles.container_list}>
						{simulados.map((item, index) => (
							<TicketSimulado
								setData={(name: string) => setSimulado(item)}
								deleteModal={() => setModalDelete(true)}
								key={index}
								name={item.name}
								data={item.data}
								numberQuestions={item.numberQuestions}
							/>
						))}
					</div>

					<div className={styles.footer} />
				</div>
			}
    </div>
  )
}

{/**
					<div className={styles.container_list}>
						{simulados.map((item, index) => (
							<TicketSimulado
								setData={(name: string) => setSimulado(item)}
								deleteModal={() => setModalDelete(true)}
								key={index}
								name={item.name}
								data={item.data}
								numberQuestions={item.numberQuestions}
							/>
						))}
					</div>

*/}