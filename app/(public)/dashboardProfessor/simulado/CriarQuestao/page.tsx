"use client";

import { useState } from 'react';
import styles from './styles.module.css';
import CreateQuestion from '../../../../../components/professor/SimuladosComponents/CriarQuestao';

export default function CreateQuestionScreen() {
  const [enunciado, setEnunciado] = useState('');
  const [assunto, setAssunto] = useState('');
  const [number, setNumber] = useState(0);
  const [alternativas, setAlternativas] = useState<{ letra: string, label: string, resposta: boolean }[]>([]);

  const handleQuestionChange = (data: { enunciado: string, assunto: string, alternativas: { letra: string, label: string, resposta: boolean }[] }) => {
    setEnunciado(data.enunciado);
    setAssunto(data.assunto);
    setAlternativas(data.alternativas);
  };

  const Criar = () => {
    if (enunciado === '') {
      alert('Defina um enunciado para a questão');
    } else if (assunto === '') {
      alert('Defina um assunto para a questão');
    } else if (alternativas.length === 0) {
      alert('Defina as alternativas para a questão');
    } else if (alternativas.length === 1) {
      alert('Defina mais de uma alternativa para a questão');
    } else if (alternativas.some(alt => alt.label === '')) {
      alert('Digite todas as alterantivas');
    } else if (!alternativas.some(alt => alt.resposta)) {
      alert('Defina uma alternativa como resposta correta');
    } else {
      console.log('Enunciado: ', enunciado);
      console.log('Alternativas: ', alternativas);
      console.log('Numero: ', number);
      console.log('Assunto: ', assunto);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Criar<br />questão</h1>
        <button onClick={Criar} className={styles.button_create}>
          Criar
        </button>
      </div>
      <CreateQuestion
        enunciado={enunciado}
        assunto={assunto}
        alternativa={alternativas}
        id={number}
        onChange={handleQuestionChange}
      />
			<div className={styles.footer}/>
    </div>
  );
}