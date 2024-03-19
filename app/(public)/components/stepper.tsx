import { Step, Stepper , StepLabel } from "@mui/material";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import CheckIcon from '@mui/icons-material/Check';
import { StepIconProps } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import React from "react";



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: 'rgba(242, 105, 33, 1)',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: 'rgba(242, 105, 33, 1)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 2,
      border: 0.675,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 0.875,
    },
  }));
  
  const ColorLibStepIconRoot = styled('div')<{
    ownerState :{
        completed?:boolean,
        active?:boolean
    }
  }>(({theme , ownerState}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 41,
    height: 41,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: 'rgba(242, 105, 33, 1)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundColor: 'rgba(242, 105, 33, 1)',
    }),
  }));


   function ColorLibStepIconComponent(props:StepIconProps){
   
    const { active , completed , className } = props;


    const icons:{[index:string]:React.ReactElement} = {

    1: <PersonOutlineIcon/>,
    2: <LockIcon/>,
    3: <CheckIcon/>

    }

    return (
        <ColorLibStepIconRoot ownerState={ {completed , active} } className={className}>
        {icons[String(props.icon)]}
        </ColorLibStepIconRoot>
    )

    

   }

export default function CustomizedStepperIcon({currentStep}:{currentStep:number}){
    
    const steps = ['','','']

  return(


     <div style={
        {
            width:'80%'
        }
     }>

      <Stepper activeStep={currentStep} connector={<ColorlibConnector/>}>
        {
           steps.map((label)=>(
               <Step key={label}>
               <StepLabel StepIconComponent={ColorLibStepIconComponent}>{label}</StepLabel>
               </Step>
           ))
        }
      </Stepper>


     </div>


  );


}