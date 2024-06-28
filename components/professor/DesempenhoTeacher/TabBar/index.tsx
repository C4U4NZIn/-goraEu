"use client";

import styles from './styles.module.css'
import StudentsItems from '../../Students_item/index'
import Image from 'next/image'

import ImageTop from './image_tabBar.png'

type TabBarProps = {
  setTitle: (value: string) => void,
  title: string | undefined,
  labels: string[],
  turma: string | undefined,
  displayTitle: string,
  alunos?: [string, { acertos: number[], ra: number, url: string }][],
  handleAlunoSelect?: (value: string) => void
}

export default function TabBar({ displayTitle, setTitle, title, turma, labels, alunos = [], handleAlunoSelect }: TabBarProps) {

  const handlePress = (value: string) => {
    setTitle(value)
  }

  return (
    <div className={styles.container_body}>
      <div className={styles.container_image}>
        <Image className={styles.image_top} src={ImageTop} alt='Image'/>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>{displayTitle}</h1>
        <div className={styles.container_nav}>
          {labels.map((label) => (
            <button
              key={label}
              className={title === label || turma === label ? styles.button_active : styles.button_inactive}
              onClick={() => handlePress(label)}
            >
              <p className={title === label || turma === label ? styles.text_active : styles.text_inactive}>{label}</p>
            </button>
          ))}
        </div>
        {
        turma && alunos.length > 0 && (
          <div className={styles.container_list}>
            <h2 className={styles.title_list}>Alunos de {turma}</h2>
            {alunos.map(([aluno, { ra, url }]) => (
              <button
                key={aluno}
                className={styles.button_list}
                onClick={() => handleAlunoSelect && handleAlunoSelect(aluno)}
              >
              <StudentsItems
                name={aluno}
                RA={ra}
                url={url}
              />
            </button>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}
