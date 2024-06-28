"use client";

import React from 'react';
import Image from 'next/image';
import ImageTop from './image_tabBar.png';
import styles from './styles.module.css';

type InputProps = {
  assunto: string;
  titulo: string;
  setAssunto: (value: string) => void;
  setTitulo: (value: string) => void;
};

export default function FrameCreate({setAssunto, assunto, titulo, setTitulo}: InputProps) {
  
	return (
    <div className={styles.container_body}>
      <Image className={styles.image} src={ImageTop} alt="image" />
      <div className={styles.container}>
        <div className={styles.container_title_input}>
          <h1 className={styles.title_input}>Título do simulado</h1>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Escreva título do simulado"
            className={styles.input}
          />
        </div>

        <div className={styles.container_title_input}>
          <h1 className={styles.title_input}>Assunto do simulado</h1>
          <input
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            placeholder="Escreva assunto do simulado"
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
}
