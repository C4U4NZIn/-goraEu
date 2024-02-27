
import styles from '../dashboard/dashBoard.module.css';

import {NavMainDashboard} from '../dashboard/components/navMainDashboard';

import {ComponentMainDashboard} from '../dashboard/components/componentMainDashboard'

import {ActivitiesDashboard} from '../dashboard/components/activitiesDashboard'
  
import backgroundImageActive from '../dashboard/images/backgroundActivities.png'

import Image from 'next/image'

 const userMain = {
      nickname:"Nana Braga",
      name:"Nathalia Silva da Braga",
      email:"Nathaliabraga123@gmail.com",
      telefone:"(92) 99214-3666",

 }


const DashBoard = ()=>{

    
     return (
        <>
        
       
       <NavMainDashboard/>
       
       <div className={styles.componentMainDashboard}>

       <ComponentMainDashboard
        nickname={userMain.nickname}
        name={userMain.name}
        email={userMain.email}
        telefone={userMain.telefone}
       />



       <div className={styles.activitiesDashboard}>
       <Image
        priority
        src={backgroundImageActive}
        alt=""
        className={styles.backgroundImageActive}
       />
       </div>
       </div>
      


        </>
     )


  }

  export default DashBoard;