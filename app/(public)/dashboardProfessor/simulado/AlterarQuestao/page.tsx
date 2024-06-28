"use client";

import React, { useState } from 'react';
import styles from './styles.module.css';
import QuestaoEdit from '../../../../../components/professor/SimuladosComponents/QuestaoEdit';
import { questoes as initialQuestoes } from '../AddQuestao/questoes';

export default function AlterarQuestao() {
  const [questoes, setQuestoes] = useState(initialQuestoes);

  const handleQuestaoChange = (updatedQuestao : any) => {
    setQuestoes((prevQuestoes) =>
      prevQuestoes.map((questao) =>
        questao.id === updatedQuestao.id ? updatedQuestao : questao
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_instrucao}>
        <h1 className={styles.title}>Alterar<br />Simulado</h1>
        <h1 className={styles.instrucao}>Clique no enunciado, alternativas ou gabarito para altera-lo</h1>
      </div>

      {questoes.map((item) => (
        <QuestaoEdit
          alternativa={item.alternativs}
          key={item.id}
          id={item.id}
          assunto={item.assunto}
          enunciado={item.enunciado}
          onQuestaoChange={handleQuestaoChange}
        />
      ))}
    </div>
  );
}
