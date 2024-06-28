"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import IconCheck from '../Assets/icon_check.png';
import IconError from '../Assets/icon_error.png';
import Image from 'next/image';

type AlternativaType = {
  letra: string,
  label: string,
  resposta: boolean
};

type QuestaoProps = {
  enunciado: string,
  id: number,
  assunto: string,
  alternativa: AlternativaType[],
  onQuestaoChange: (updatedQuestao: any) => void
};

export default function QuestaoEdit({ alternativa, enunciado, id, assunto, onQuestaoChange }: QuestaoProps) {
  const [enunciadoValue, setEnunciadoValue] = useState(enunciado);
  const [alternativas, setAlternativas] = useState(alternativa);

  const enunciadoRef = useRef<HTMLTextAreaElement>(null);
  const alternativaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    adjustHeight(enunciadoRef.current);
    alternativas.forEach((_, index) => adjustHeight(alternativaRefs.current[index]));
  }, [alternativas]);

  const adjustHeight = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  const handleEnunciadoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newEnunciado = event.target.value;
    setEnunciadoValue(newEnunciado);
    adjustHeight(event.target);
    onQuestaoChange({ id, enunciado: newEnunciado, assunto, alternativs: alternativas }); // notify parent
  };

  const handleAlternativaChange = (index: number, event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAlternativas = [...alternativas];
    newAlternativas[index] = { ...newAlternativas[index], label: event.target.value };
    setAlternativas(newAlternativas);
    adjustHeight(event.target);
    onQuestaoChange({ id, enunciado: enunciadoValue, assunto, alternativs: newAlternativas }); // notify parent
  };

  const handleAlternativaClick = (index: number) => {
    const newAlternativas = alternativas.map((alt, i) => ({
      ...alt,
      resposta: i === index
    }));
    setAlternativas(newAlternativas);
    onQuestaoChange({ id, enunciado: enunciadoValue, assunto, alternativs: newAlternativas }); // notify parent
  };

  const toggleResposta = (index: number, isCorrect: boolean) => {
    const newAlternativas = alternativas.map((alt, i) => ({
      ...alt,
      resposta: i === index ? isCorrect : alt.resposta
    }));
    setAlternativas(newAlternativas);
    onQuestaoChange({ id, enunciado: enunciadoValue, assunto, alternativs: newAlternativas }); // notify parent
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.number}>
          N° {id}
        </h1>
        <h2 className={styles.assunto}>{assunto}</h2>
      </div>

      <div className={styles.body}>
        <textarea
          ref={enunciadoRef}
          className={styles.enunciado}
          value={enunciadoValue}
          onChange={handleEnunciadoChange}
        ></textarea>

        <div className={styles.container_alternativas}>
          {alternativas.map((item, index) => (
            <div className={styles.container_alternativa} key={index}>
              <div className={styles.container_letra}>
                <button 
                  className={styles.container_letra} 
                  onClick={() => handleAlternativaClick(index)}
                >
                  <h1 className={item.resposta ? styles.letra_resposta : styles.letra}> {item.letra}</h1>
                </button>
              </div>

              <textarea
                ref={(el) => {
                  alternativaRefs.current[index] = el;
                }}
                className={item.resposta ? styles.input_label_resposta : styles.input_label}
                value={item.label}
                onChange={(event) => handleAlternativaChange(index, event)}
              ></textarea>

              <div className={styles.buttons_container}>
                <button className={styles.container_icon} onClick={() => toggleResposta(index, false)}>
                  <Image
                    className={styles.icon_error}
                    src={IconError}
                    alt='Error'
                  />
                </button>

                <button className={styles.container_icon} onClick={() => toggleResposta(index, true)}>
                  <Image
                    className={styles.icon_check}
                    src={IconCheck}
                    alt='check'
                  /> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}