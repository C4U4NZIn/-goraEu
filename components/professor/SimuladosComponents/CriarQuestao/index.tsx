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
  alternativa?: AlternativaType[],
  onChange: (data: { enunciado: string, assunto: string, alternativas: AlternativaType[] }) => void
};

export default function CreateQuestion({ alternativa = [], enunciado, id, assunto, onChange }: QuestaoProps) {
  const [enunciadoValue, setEnunciadoValue] = useState(enunciado);
  const [alternativas, setAlternativas] = useState<AlternativaType[]>(alternativa);
  const [assuntoValue, setAssuntoValue] = useState(assunto);

  const textAreaEnunciadoRef = useRef<HTMLTextAreaElement>(null);
  const textAreaRefs = useRef<(HTMLTextAreaElement | null)[]>([]);

  useEffect(() => {
    if (textAreaEnunciadoRef.current) {
      textAreaEnunciadoRef.current.style.height = 'auto';
      textAreaEnunciadoRef.current.style.height = textAreaEnunciadoRef.current.scrollHeight + 'px';
    }
  }, [enunciadoValue]);

  useEffect(() => {
    textAreaRefs.current.forEach((textarea, index) => {
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
    });
  }, [alternativas]);

  useEffect(() => {
    onChange({ enunciado: enunciadoValue, assunto: assuntoValue, alternativas });
  }, [enunciadoValue, assuntoValue, alternativas]);

  const handleEnunciadoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnunciadoValue(e.target.value);
  };

  const handleLabelChange = (index: number, value: string) => {
    const newAlternativas = [...alternativas];
    newAlternativas[index].label = value;
    setAlternativas(newAlternativas);
  };

  const addAlternativa = () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const newLetter = letras[alternativas.length % letras.length];
    setAlternativas([...alternativas, { letra: newLetter, label: '', resposta: false }]);
  };

  const toggleResposta = (index: number, isCorrect: boolean) => {
    const newAlternativas = alternativas.map((alt, i) => ({
      ...alt,
      resposta: i === index ? isCorrect : alt.resposta
    }));
    setAlternativas(newAlternativas);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.number}>N° {id}</h1>
        <input
          placeholder='Adicionar assunto' 
          value={assuntoValue} 
          className={styles.input_assunto}
          onChange={(e) => setAssuntoValue(e.target.value)} />
      </div>

      <div className={styles.body}>
        <textarea
          placeholder='Digite o enunciado da questão'
          className={styles.enunciado}
          value={enunciadoValue}
          onChange={handleEnunciadoChange}
          ref={textAreaEnunciadoRef}
        ></textarea>

        <div className={styles.container_alternativas}>
          {alternativas.length !== 0 &&
            alternativas.map((item, index) => (
              <div className={styles.container_alternativa} key={index}>
                <div className={styles.container_letra}>
                  <h1 className={item.resposta ? styles.letra_resposta : styles.letra}> {item.letra}</h1>
                </div>

                <textarea
                  className={item.resposta ? styles.input_label_resposta : styles.input_label}
                  value={item.label}
                  placeholder='Digite a alternativa da questão '
                  onChange={(e) => handleLabelChange(index, e.target.value)}
                  ref={(el) => {textAreaRefs.current[index] = el}}
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

          <button className={styles.button_add_alternativa} onClick={addAlternativa}>
            <h1 className={styles.label_add_alternativa}>Adicionar alternativa</h1>
          </button>
        </div>
      </div>
    </div>
  );
}