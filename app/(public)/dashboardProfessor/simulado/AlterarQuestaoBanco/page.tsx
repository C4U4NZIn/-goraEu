"use client";

import React, { useState } from 'react';
import styles from './styles.module.css';
import QuestaoEdit from '../../../../../components/professor/SimuladosComponents/QuestaoEdit';

const initialQuestao = {
  id: 20,
  enunciado: `(ITA - 2024)
Leia abaixo o excerto do conto “A velhota”, de Luís Bernardo Honwana. Em seguida, assinale a alternativa INCORRETA.

“Não, eu não contaria. Não fora para isso que viera para casa. Além disso, não seria eu a destruir neles fosse o que fosse. A seu tempo alguém se encarregaria de os pôr na raiva. Não, eu não contaria.”
  `,
  assunto: 'Figuras de Linguagem',
  alternativs: [
    {
      letra: 'A',
      label: 'O narrador revela a sua certeza em relação ao futuro de seus irmãos e deixa transparecer a sua impotência para evitar isso.',
      resposta: false
    },
    {
      letra: 'B',
      label: 'A recusa do narrador em relatar o que lhe acontecera é uma maneira de poupar a sua família de maiores preocupações.',
      resposta: false
    },
    {
      letra: 'C',
      label: 'A violenta dominação portuguesa é representada por aqueles que agrediram o narrador.',
      resposta: false
    },
    {
      letra: 'D',
      label: 'A raiva a que se refere o narrador aparece, o tempo todo, em suas relações familiares, tanto com seus irmãos, quanto com sua mãe.',
      resposta: true
    },
    {
      letra: 'E',
      label: 'Assim como Madala, o narrador do conto não tem o que fazer, além de suportar as violências às quais é submetido, inclusive para proteger sua família.',
      resposta: false
    }
  ]
};

export default function AlterarQuestaoBanco() {
  const [questao, setQuestao] = useState(initialQuestao);

  const handleQuestaoChange = (updatedQuestao : any) => {
    setQuestao(updatedQuestao);
  };

	const Salvar = () => {
		console.log(questao)
	}

  return (
    <div className={styles.container}>
      <div className={styles.container_instrucao}>
        <h1 className={styles.title}>Alterar<br/>Questão</h1>
        <h1 className={styles.instrucao}>Clique no enunciado, alternativas ou gabarito para altera-lo</h1>
      </div>

			{/*Esse boão não está no design mas é só pra mostar que a questão está sendo atualizada automaticamente */}
			<button onClick={Salvar} className={styles.button_salvar}>
				Salvar
			</button>

      <QuestaoEdit
        alternativa={questao.alternativs}
        key={questao.id}
        id={questao.id}
        assunto={questao.assunto}
        enunciado={questao.enunciado}
        onQuestaoChange={handleQuestaoChange}
      />
    </div>
  );
}