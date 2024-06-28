"use client";
import styles from './styles.module.css';

type QuestaoProps = {
  enunciado: string,
  id: number,
  bancoQuestao?: boolean,
  assunto: string,
  alternativa: { letra: string, label: string, resposta: boolean }[],
  onToggle: (id: number, checked: boolean) => void,
  checked: boolean
}

export default function Questao({ alternativa, bancoQuestao, enunciado, id, assunto, onToggle, checked }: QuestaoProps) {
  const handleCheckboxChange = (e: any) => {
    onToggle(id, e.target.checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.number}>
          {!bancoQuestao &&
            <input
              className={styles.checkBox}
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
          }
          N° {id}
        </h1>
        <h2 className={styles.assunto}>{assunto}</h2>
      </div>

      <div className={styles.body}>
        <p className={styles.enunciado}>{enunciado}</p>

        <div className={styles.container_alternativas}>
          {alternativa.map((item, index) => (
            <div className={styles.container_alternativa} key={index}>
              <div className={styles.container_letra}>
                <p className={item.resposta ? styles.letra_resposta : styles.letra}>{item.letra}</p>
              </div>
              <p className={item.resposta ? styles.label_resposta : styles.label}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
