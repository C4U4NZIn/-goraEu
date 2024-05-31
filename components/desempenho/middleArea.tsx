"use client";
import { Text } from "@/app/(public)/components/global/styled/profile";
import { CircularProgressbar , buildStyles } from "react-circular-progressbar";
import styled from "styled-components";
//import 'react-circular-progressbar/dist/style.css'
//import { RadialBar, RadialBarChart, Tooltip , Legend, Cell, PieChart , Pie, PolarGrid, PolarAngleAxis } from "recharts";


type IMiddleProps = {
    role?:string;
    statics?:{
      "português"?:{
        total_questions?:string;
        total_correct_answers?:string;
      },
      "matemática"?:{
        total_questions?:string;
        total_correct_answers?:string;
      },
      "naturais"?:{
        total_questions?:string;
        total_correct_answers?:string;
      }
    }
}

const MiddleAreaDetails = ({statics , role}:IMiddleProps) =>{
   let percentualPt; 
   let percentualMt; 
   let percentualNt; 
   const subjects:string[] = ["português","matemática","naturais"];

   const calculePercentage = (statics:any , subject:string) => {
    let StaticsTotal;
    let StaticsAnswers;
    let percentual;
     
    if( statics[subject] && statics[subject].total_correct_answers && statics[subject].total_questions){
         StaticsTotal =  parseInt(statics[subject].total_questions)
         StaticsAnswers =  parseInt(statics[subject].total_correct_answers);
     
          percentual = (StaticsAnswers/StaticsTotal)*100;
          let percentuaPrecision = parseInt(percentual.toPrecision(4));
         return percentuaPrecision;
        }
    return 1;
   }
   
   percentualPt = calculePercentage(statics , subjects[0]);
   percentualMt = calculePercentage(statics, subjects[1])
   percentualNt = calculePercentage(statics , subjects[2])
  
  
    return(
        <>
        {/** caso seja um aluno */}
      {/** fazer pra caso seja um professor */}
      
      <ContainerArea>
        {/** português */}
      <div
      className="containerDetailsCircular"
      >
      <Text
      $fontSize={18}
      $fontWeight={400}
      >Acertos em português</Text>
      <div>
       <div
       className="containerCircularText"
       >
       <div
      className="containerHigherText"
       >
          <Text
        $fontSize={17}
        $fontWeight={700}
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
        }}
        >
          <Text
          $fontSize={17}
          $fontWeight={700}
           style={{
            marginLeft:'0.25rem'
           }}
 >
          {statics?.português?.total_correct_answers}
           </Text>
          
          <Text
          $fontSize={17}
          $fontWeight={700}
          >
          acertos
          </Text>
          
          </Text>
           <Text
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:"center"
        }}
        $fontSize={12}
        $fontWeight={400}
        >
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            marginLeft:'0.25rem'
          }}
          >
          De {statics?.português?.total_questions} questões
          </Text>
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            alignSelf:'center'
          }}
          >
             {statics?.português?.total_correct_answers} acertos</Text>

          </Text>
          </div>
          <div
       className="containerCircular"
        >
      <CircularProgressbar
        value={percentualPt}
        maxValue={100}
        background={false}
        strokeWidth={25}
        text={`${percentualPt}%`}
        className={"my-classes"}
        styles={{
            text:{
                display:'flex',
                fontSize:'24px',
                fontWeight:'700'
            },
            path:{
                stroke: '#006792',
                strokeLinecap:'round'
            },
            trail:{
                stroke:"#fff",
            }
        }}
      />
          </div>

       </div>
      </div>
      </div>
     {/** matemática */}
      <div
      className="containerDetailsCircular"
      >
      <Text
      $fontSize={18}
      $fontWeight={400}
      >Acertos em matemática</Text>
      <div>
      <div
       className="containerCircularText"
       >
       <div
      className="containerHigherText"
       >
          <Text
        $fontSize={17}
        $fontWeight={700}
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
        }}
        >
          <Text
          $fontSize={17}
          $fontWeight={700}
           style={{
            marginLeft:'0.25rem'
           }}
 >
          {statics?.matemática?.total_correct_answers}
           </Text>
          
          <Text
          $fontSize={17}
          $fontWeight={700}
          >
          acertos
          </Text>
          
          </Text>
           <Text
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:"center"
        }}
        $fontSize={12}
        $fontWeight={400}
        >
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            marginLeft:'0.25rem'
          }}
          >
          De {statics?.matemática?.total_questions} questões
          </Text>
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            alignSelf:'center'
          }}
          >
             {statics?.matemática?.total_correct_answers} acertos</Text>

          </Text>
          </div>
          <div
       className="containerCircular"
        >
      <CircularProgressbar
        value={percentualMt}
        maxValue={100}
        background={false}
        strokeWidth={25}
        text={`${percentualMt}%`}
        className={"my-classes"}
        styles={{
            text:{
                display:'flex',
                fontSize:'24px',
                fontWeight:'700'
            },
            path:{
                stroke:'#EC641D',
                strokeLinecap:'round'
            },
            trail:{
                stroke:"#fff",
            }
        }}
      />
          </div>

       </div>


      </div>
      </div>
      {/** naturais*/}
      <div
      className="containerDetailsCircular"
      >
      <Text
      $fontSize={18}
      $fontWeight={400}
      >Acertos em naturais</Text>
       <div
       className="containerCircularText lastOneUpdate"
       >
       <div
      className="containerHigherText"
       >
          <Text
        $fontSize={17}
        $fontWeight={700}
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center'
        }}
        >
          <Text
          $fontSize={17}
          $fontWeight={700}
           style={{
            marginLeft:'0.25rem'
           }}
 >
          {statics?.naturais?.total_correct_answers}
           </Text>
          
          <Text
          $fontSize={17}
          $fontWeight={700}
          >
          acertos
          </Text>
          
          </Text>
           <Text
        style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:"center"
        }}
        $fontSize={12}
        $fontWeight={400}
        >
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            marginLeft:'0.25rem'
          }}
          >
          De {statics?.naturais?.total_questions} questões
          </Text>
          <Text
          $fontSize={12}
          $fontWeight={400}
          style={{
            alignSelf:'center'
          }}
          >
             {statics?.naturais?.total_correct_answers} acertos</Text>

          </Text>
      </div>
       <div
       className="containerCircular"
        >
      <CircularProgressbar
        value={percentualNt}
        maxValue={100}
        background={false}
        strokeWidth={25}
        text={`${percentualNt}%`}
        className={"my-classes"}
        styles={{
            text:{
                display:'flex',
                fontSize:'24px',
                fontWeight:'700'
            },
            path:{
                stroke: '#CDE059',
                strokeLinecap:'round'
            },
            trail:{
                stroke:"#fff",
            }
        }}
      />
      </div>

       </div>
     </div>
      </ContainerArea>
        </>
    )
}


export default MiddleAreaDetails;


const ContainerArea = styled.div`

display:flex;
flex-direction:row;
align-items: center;
justify-content: center;
width:100%; 
height:9.25rem;
background-color:#F7F7F7;
border-radius: 25px;
box-shadow: 0px 1px 5px 0px rgba(0 , 0 , 0 , 0.4);
gap: 1.25rem;

.my-classes text{
   transform: translate(-23px,2px);
}
.containerCircular{
  width:55px;
  height:35px;
}

.containerDetailsCircular{
  display: flex;
  flex-direction: column;
  width: calc(35% - 1rem);
  height: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  gap:0.95rem;
}


.containerCircularText{
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  gap: 0.8rem;
}

.containerHigherText{
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
}
.lastOneUpdate{
  display: flex;
  flex-direction: row;
  height: 60%;
  width: auto;
}


`


