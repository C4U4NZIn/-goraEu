"use client";

import { useState } from "react";
import FrameSearch from "../../../../../components/professor/SimuladosComponents/FrameSearch";
import styles from './styles.module.css';
import Questao from "../../../../../components/professor/SimuladosComponents/Questao";
import { questoes as todasQuestoes } from "../AddQuestao/questoes";
import Modal from "../../../../../components/professor/SimuladosComponents/Modal";
import { useRouter } from "next/navigation";



export default function BancoHome() {
  const [filteredQuestoes, setFilteredQuestoes] = useState(todasQuestoes);
  const [selectedQuestoes, setSelectedQuestoes] = useState<number[]>([]);
  const [checkBoxVisible, setCheckBoxVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const [actionType, setActionType] = useState('');
  const [foco, setFoco] = useState('')
  const messageExcluir = 'Deseja Excluir'
  const router = useRouter();


  const handleSearch = (searchTerm: string) => {
    const filtered = todasQuestoes.filter((questao) =>
      questao.id.toString().includes(searchTerm) ||
      questao.enunciado.toLowerCase().includes(searchTerm.toLowerCase()) ||
      questao.assunto.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuestoes(filtered);
  };

  const handleToggle = (id: number, checked: boolean) => {
    const selectedQuestao = filteredQuestoes.find(questao => questao.id === id);

    if (checked) {
      setSelectedQuestoes([...selectedQuestoes, id]);

      if (actionType === 'Excluir') {
        if (selectedQuestao) {
          setModalData(selectedQuestao);
          setIsModalOpen(true);
        }
      } else if (actionType === 'Editar') {
        if (selectedQuestao) {
          console.log('Questão selecionada para edição:', selectedQuestao);
        }
      }
    } else {
      setSelectedQuestoes(selectedQuestoes.filter(questaoId => questaoId !== id));
    }
  };

  const Excluir = () => {
    setFoco('Excluir')
    setCheckBoxVisible(true);
    setSelectedQuestoes([])
    setActionType('Excluir');
  };

  const Editar = () => {
    setFoco('Editar')
    setSelectedQuestoes([])
    setCheckBoxVisible(true);
    setActionType('Editar');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFoco('')
    setCheckBoxVisible(false);
    setSelectedQuestoes([]);
  };

  const handleConfirm = (confirm: boolean) => {
    if (confirm) {
      if (actionType === 'Excluir') {
        // Lógica para excluir a questão
        setFilteredQuestoes(filteredQuestoes.filter(questao => !selectedQuestoes.includes(questao.id)));
      }
      else if(actionType === 'Editar'){
        //Aqui você pode fazer a navegação para a tela de editar 
        console.log('Questão para editar: ', selectedQuestoes)
      }
    }
    closeModal();
  };
  const handleToCreateQuestionPage = () =>{
     router.push('/dashboardProfessor/simulado/CriarQuestao');
  }

  return (
      (isModalOpen && modalData) ? 
        <Modal
          title={actionType =='Excluir' ? messageExcluir : actionType}
          message={`Você realmente deseja ${actionType.toLowerCase()} a questão Nº${modalData.id}?`}
          onConfirm={handleConfirm}
          labelCancel="Cancelar"
          labelConfirm="Confirmar"
        />

      : 
      <div className={styles.container}>
        <h1 className={styles.title}>BANCO DE<br /> Questões</h1>
        <FrameSearch onSearch={handleSearch} />

        <div className={styles.container_buttons}>
          <button 
          onClick={handleToCreateQuestionPage}
          className={styles.button_create}>
            <h1 className={styles.label_button_create}>Criar</h1>
          </button>

          <button onClick={Excluir} className={styles.button_create}>
            <h1 style={{color: foco ==='Excluir' ? 'white' : '#4D4D4D'}} className={styles.label_button_create}>Excluir</h1>
          </button>

          <button onClick={Editar} className={styles.button_create}>
            <h1 style={{color: foco ==='Editar' ? 'white' : '#4D4D4D'}} className={styles.label_button_create}>Editar</h1>
          </button>
        </div>

        <div 
        className={styles.containerQuestions}
        >
          {filteredQuestoes.map((item) => (
            <Questao
              bancoQuestao={!checkBoxVisible}
              alternativa={item.alternativs}
              key={item.id}
              id={item.id}
              assunto={item.assunto}
              enunciado={item.enunciado}
              onToggle={handleToggle}
              checked={selectedQuestoes.includes(item.id)}
            />
          ))}
        </div>
        <div className={styles.footer} />
        
      </div>
  )
}
