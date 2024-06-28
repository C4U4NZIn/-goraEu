"use client";

import { useState } from 'react';
import styles from './styles.module.css'

type TopBarProps = {
  setSelectedSubject: (subject: string) => void;
};

export default function TopBar({setSelectedSubject}: TopBarProps) {
  const [activeLink, setActiveLink] = useState<string>('Mural');

  const handleClick = (link: string) => {
    setActiveLink(link);
    setSelectedSubject(link);
  }
  
  return (
    <div className={styles.container}>
      <button 
				onClick={() => handleClick('Mural')} 
				className={activeLink === 'Mural' ? styles.text_label_bar_active_left : styles.text_label_bar_inactive}>
					Mural
			</button>

      <button 
				onClick={() => handleClick('Atividades')} 
				className={activeLink === 'Atividades' ? styles.text_label_bar_active_center : styles.text_label_bar_inactive}>
					Atividades
			</button>

      <button 
				onClick={() => handleClick('Alunos')}
				className={activeLink === 'Alunos' ? styles.text_label_bar_active_right : styles.text_label_bar_inactive}>
					Alunos
			</button>
    </div>
  );
}