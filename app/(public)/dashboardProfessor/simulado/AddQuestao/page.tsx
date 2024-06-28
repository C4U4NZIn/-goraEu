"use client";

import { useState } from "react";
import FrameSearch from "../../../../../components/professor/SimuladosComponents/FrameSearch";
import styles from './styles.module.css';
import Questao from "../../../../../components/professor/SimuladosComponents/Questao";
import { questoes as todasQuestoes } from "./questoes";
import Modal from "../../../../../components/professor/SimuladosComponents/Modal";

export default function AddQuestao() {
  const [filteredQuestoes, setFilteredQuestoes] = useState(todasQuestoes);
  const [selectedQuestoes, setSelectedQuestoes] = useState<number[]>([]);
  const [modalSucessVisible, setModalVisibleSucess] = useState(false)

  const handleSearch = (searchTerm: string) => {
    const filtered = todasQuestoes.filter((questao) =>
      questao.id.toString().includes(searchTerm) ||
      questao.enunciado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      questao.assunto.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestoes(filtered);
  };

  const handleToggle = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedQuestoes([...selectedQuestoes, id]);
    } else {
      setSelectedQuestoes(selectedQuestoes.filter(questaoId => questaoId !== id));
    }
  };

  
	const criarSimulado = () => {
    if(selectedQuestoes.length !== 0){
      setModalVisibleSucess(true)
      console.log(selectedQuestoes)
    } else {
      alert('Nenhuma questão selecionada')
    }
	}

  const OnConfirm = (confirm : boolean) => {
    if(confirm){
      alert('Enviando para turma')
    } else {
      setModalVisibleSucess(false)
    }
  }

  return (
    <div className={styles.container}>

      {
        modalSucessVisible 
        ? <Modal
          labelConfirm="Enviar"
          labelCancel="Não"
          title='Seu simulado foi criado!'
          message="Deseja enviar simulado para alguma turma?"
          onConfirm={OnConfirm}
        />
        :
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <h1 className={styles.title}>Adc<br/> Questões</h1>
            <FrameSearch onSearch={handleSearch} />
    
            <button onClick={criarSimulado} className={styles.button_create}>
              <h1 className={styles.label_button_create}>Criar</h1>
            </button>
    
            <div
            className={styles.containerQuestions}
            >
              {
                filteredQuestoes.map((item) => (
                  <Questao
                    alternativa={item.alternativs}
                    key={item.id}
                    id={item.id}
                    assunto={item.assunto}
                    enunciado={item.enunciado}
                    onToggle={handleToggle}
                    checked={selectedQuestoes.includes(item.id)}
                  />
                ))
              }
            </div>
          <div className={styles.footer} />
       </div>
      }
    </div>
  );
}