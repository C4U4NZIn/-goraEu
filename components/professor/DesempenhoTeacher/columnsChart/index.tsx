"use client";

import { useEffect, useState } from 'react';
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  TooltipProps,
  ResponsiveContainer, 
  LabelList
} from 'recharts';

type MyBarChartProps = {
  acertos: number[];

};

export default function ColumnsChart({acertos}: MyBarChartProps) {
	const [data, setData] = useState<{ name1: string, name2: string, name3: string, Materia1: number, Materia2: number, Materia3: number }[]>([]);

	useEffect(()=>{
    function getData(){
      const test = [
        { name1: 'Simulado 1' , name2:'Simulado 2',  name3:'Simulado 3', Materia1: acertos[0], Materia2: acertos[1], Materia3: acertos[2] },
      ];

			setData(test)
    }

    getData();
	},[acertos])


  return (
    <div style={{backgroundColor:'white', borderBottomLeftRadius:'1.5vw', borderBottomRightRadius:'1.5vw', padding: '2vh 0px', width:"100%", display:'flex', flexDirection:'column', alignItems:'center'}}>
      <ResponsiveContainer style={{backgroundColor:'white', borderBottomLeftRadius:'1.5vw', margin:'2vw 0vw', borderBottomRightRadius:'1.5vw'}} width="90%" height={300}>
          <BarChart 
          data={data} 
          barGap={'10%'} >
          <CartesianGrid  stroke='#000' vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tick={{ fontSize: '14px', fontFamily: 'Times', fontWeight: 'bold', fill: 'black' }}/>
          <Bar 
            dataKey="Materia1" 
            fill={'#F26921'}
            barSize={'10%'}>
              <LabelList 
                fontSize={'1.7vw'}
                fontWeight='bold'
                fontFamily='Times'
                width={90} 
                style={{fill:'black'}}
                offset={15}
                dataKey={"name1" }
                position="bottom" />
          </Bar>

          <Bar 
            dataKey="Materia2" 
            fill={'#F26921'} 
            barSize={'10%'} >
              <LabelList 
                offset={15}
                fontSize={'1.7vw'}
                fontWeight='bold'
                fontFamily='Times'
                width={90}
                style={{fill:'black'}}
                dataKey={"name2"}
                position="bottom" />
          </Bar>

          <Bar 
            dataKey="Materia3" 
            fill={'#F26921'} 
            barSize={'10%'}>	
              <LabelList 
                fontSize={'1.7vw'}
                fontWeight='bold'
                fontFamily='Times'
                width={90}
                dataKey={"name3" }
                style={{fill:'black'}}
                offset={15}
                position="bottom" />
              
            </Bar>
          </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
