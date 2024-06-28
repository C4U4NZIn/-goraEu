"use client";

import TabBar from '../../../../components/professor/DesempenhoTeacher/TabBar'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import ColumnsChart from '../../../../components/professor/DesempenhoTeacher/columnsChart'

type AlunoData = {
  acertos: number[];
  ra: number;
  url: string;
}

export default function DesempenhoProf() {
  const [title, setTitle] = useState('Geral')
  const [isSelectingTurma, setIsSelectingTurma] = useState(false)
  const [isSelectingAluno, setIsSelectingAluno] = useState(false)
  const [turma, setTurma] = useState<string | undefined>(undefined)
  const [aluno, setAluno] = useState<string | undefined>(undefined)
  const [acertos, setAcertos] = useState<number[]>([0, 0, 0])

  const labelsDefault = ['Geral', 'Turma', 'Aluno']

  //Você só precisa definir esse array
  //Os dados somados por turma serão definidas baseando-se nisso
  const initialData: { [key: string]: { [key: string]: { acertos: number[], ra: number, url: string } } } = {
    'Língua Portuguesa - A': {
      'Vithor Junior da Encarnação Vitório': { acertos: [70, 80, 40], ra: 227001, url: 'https://th.bing.com/th/id/OIP.EpAQHDG4kbjKqkjA4ruRyQHaHa?w=202&h=188&c=7&r=0&o=5&pid=1.7' },
      'Caua Silva de Almeida': { acertos: [60, 70, 50], ra: 227002, url: 'https://th.bing.com/th/id/OIP.pVy65CxjPJ_X0yyaxz1OWAHaJQ?w=175&h=218&c=7&r=0&o=5&pid=1.7' },
      'Simon Paris': { acertos: [60, 70, 50], ra: 227002, url: 'https://th.bing.com/th/id/OIP.pVy65CxjPJ_X0yyaxz1OWAHaJQ?w=175&h=218&c=7&r=0&o=5&pid=1.7' },
    },
    'Língua Portuguesa - B': {
      'Mikaella Costa Da Silva': { acertos: [90, 85, 75], ra: 227003, url: 'https://th.bing.com/th/id/R.3348220e2b3b547cee7b211589dd8074?rik=q%2fbnOinzigFSJw&pid=ImgRaw&r=0' },
      'Maria Izabell Costa Da Silva': { acertos: [50, 60, 40], ra: 227004, url: 'https://th.bing.com/th/id/OIP.fvO3pFM0CuEEC446JfGdegHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7' },
      'Fulano de Tal' : {acertos: [23, 56, 120], ra: 223344, url:'https://th.bing.com/th/id/OIP.ccWXIuMdr3OfZrRG1D6OlQHaHa?w=219&h=218&c=7&r=0&o=5&pid=1.7'}
    },
    'Língua Portuguesa - C': {
      'Mikaella Costa Da Silva': { acertos: [90, 85, 75], ra: 227003, url: 'https://th.bing.com/th/id/R.3348220e2b3b547cee7b211589dd8074?rik=q%2fbnOinzigFSJw&pid=ImgRaw&r=0' },
      "Paulo Roberto Sobrinho": { acertos: [50, 60, 40], ra: 227004, url: "https://th.bing.com/th/id/OIP.twSC5fyqz7wd373HLjUEZgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7" }
    },
    'Língua Portuguesa - D': {
      'Mikaella Costa Da Silva': { acertos: [90, 85, 75], ra: 227003, url: 'https://th.bing.com/th/id/R.3348220e2b3b547cee7b211589dd8074?rik=q%2fbnOinzigFSJw&pid=ImgRaw&r=0' },
      'Maria Izabell Costa Da Silva': { acertos: [50, 60, 40], ra: 227004, url: 'https://th.bing.com/th/id/OIP.fvO3pFM0CuEEC446JfGdegHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7' }
    }
  }

  const dataGeral = [100, 230, 240];
  
  const [turmasData, setTurmasData] = useState<{ [key: string]: { [key: string]: AlunoData } }>(initialData);

  const labelsTurmas = Object.keys(turmasData);
  const alunos = turma ? Object.entries(turmasData[turma] || {}) : [];

  useEffect(() => {
    if (aluno && turmasData[turma ? turma : 0] && turmasData[turma ? turma : 0][aluno]) {
      setAcertos(turmasData[turma ? turma : 0][aluno].acertos || [0, 0, 0]);
    } else if (turma && title === 'Turma' && turmasData[turma]) {
      const turmaAcertos = Object.values(turmasData[turma]).reduce((acc, curr) => {
        if (curr.acertos) {
          return acc.map((val : any, index : any) => val + curr.acertos[index]);
        } else {
          return acc;
        }
      }, [0, 0, 0]);
      setAcertos(turmaAcertos);
    } else {
      setAcertos(dataGeral);
    }
  }, [turma, aluno, title, turmasData]);

  const handleTitleChange = (value: string) => {
    if (value === 'Turma') {
      setTitle('Turma');
      setIsSelectingTurma(true);
      setTurma(undefined);
      setAluno(undefined);
    } else if (value === 'Aluno') {
      setTitle('Aluno');
      setIsSelectingTurma(true);
      setTurma(labelsTurmas[0]);
      setAluno(undefined);
    } else {
      setTitle(value);
      setIsSelectingTurma(false);
      setTurma(undefined);
      setAluno(undefined);
    }
  };

  const handleTurmaSelect = (value: string) => {
    if (title === 'Aluno') {
      setTurma(value);
      setIsSelectingAluno(true);
    } else {
      setTurma(value);
      setAluno(undefined);
      setIsSelectingTurma(false);
    }
  };

  const handleAlunoSelect = (value: string) => {
    setAluno(value);
    setIsSelectingTurma(false)
    setIsSelectingAluno(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acompanhe o<br />crescimento</h1>
      {!isSelectingTurma && !isSelectingAluno && (
        <TabBar
          setTitle={handleTitleChange}
          title={title}
          displayTitle='FILTRAR DESEMPENHO POR'
          turma=''
          labels={labelsDefault}
        />
      )}
      {isSelectingTurma && title === 'Turma' && (
        <TabBar
          setTitle={handleTurmaSelect}
          title={turma}
          displayTitle='Turmas'
          turma={turma}
          labels={labelsTurmas}
        />
      )}
      {isSelectingTurma && title === 'Aluno' && (
        <TabBar
          setTitle={handleTurmaSelect}
          title={turma}
          displayTitle='ESCOLHA  ALUNO'
          turma={turma}
          labels={labelsTurmas}
          alunos={alunos as [string, AlunoData][]}
          handleAlunoSelect={handleAlunoSelect}
        />
      )}

      <div className={styles.container_chart}>
        <h1 className={styles.title_chart}>1º Semestre - <span style={{color:'#3A3A3A'}}>{aluno || turma || title}</span></h1> 
        <ColumnsChart acertos={acertos} />
      </div>

      
      <div className={styles.footer} />
    
    </div>
  );
}