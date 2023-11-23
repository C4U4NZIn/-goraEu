'use client';

import {useForm} from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as zod from 'zod';

import Image from 'next/image';

import Link from 'next/link';

import agoraLogoSignUp from '../images/Logo_Agora 2.svg';

import styles from '../components/bakground.module.css';


const userFormSchema = zod.object({

  username: zod
  .string()
  .min(8, "Informe seu nome completo")
  .regex(/^[A-Za-z]+$/i,"One letters alowed"),

  nickname: zod
  .string()
  .min(3,"Informe um apelido válido")
  .max(12,"informe um apelido válido")
  .regex(/^[A-Za-z]+$/i,"One letters alowed"),
  
   email: zod
   .string()
   .email()
   .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
    message:"O email deve ser um endereço gmail válido"
   }),

   password: zod
   .string()
   .min(8),

   tel: zod
   .string()
   .regex(/^\(\d{2}\) \d{5}-\d{4}$/,"Please digit your right number ")



})

type  userForm =  zod.infer<typeof  userFormSchema>;

export default function App(){
 
 const {register,handleSubmit,watch} = useForm({
  resolver: zodResolver( userFormSchema),
  defaultValues: 
  {
    username:'',
    nickname:'',
    email:'',
    password:'',
    tel:''
  }
 });
 const handleSubmitValues = (data:userForm)=>{console.log(data)}
 
 const username = watch('username')
 const nickname = watch('nickname')
 const email = watch('email')
 const password = watch('password')
 const tel = watch('tel')

 const isSubmitButtonCad = username && nickname && email && password && tel


return(

  <main className={styles.agoraMainBackgroundSignUp}>



     
  <div className={styles.agoraContainerLogoElementElipse}>

  <Image
  priority
  src = {agoraLogoSignUp}
  alt=""
  className={styles.agoraLogoSignUp}
 />
  
  </div>

 

 <div className={styles.agoraContainerForm}>

  <div className={styles.agoraContentCadastroLineForm}>
  
  <div className={styles.agoraContainerLines}>

<span className={styles.agoraCadastroLine}>Cadastro</span>
<a href="" className={styles.agoraCadastroFirstLine}></a>
<a href="" className={styles.agoraCadastroSecondLine}></a>

</div>


 <form onSubmit={handleSubmit(handleSubmitValues)}>

<div className={styles.agoraContainsAllFormElements}>
<div>
 <label><h5>Nome</h5></label>

 <input 
 id="agoraNameCad" 
 className={styles.agoraInputCad} 
 type="text"
 placeholder='Ex.:Nathalia Silva da Braga' 
 {...register("username")}
 min={8}
 max={12}
 />

</div>

<div>
<label><h5>Apelido</h5></label>
<input 
 id="agoraApelidoCad" 
 className={styles.agoraInputCad} 
 type="text" 
 placeholder='Ex.:Nana Braga' 
 {...register("nickname")}
 min={3}
 max={12}
 />
</div>

<div>
<label><h5>Email</h5></label>
<input 
id="agoraEmailCad" 
className={styles.agoraInputCad} 
type="email" 
placeholder='Ex.:Nathalia.Braga@gmail.com' 
{...register('email')}
/>
 </div>

<div>
 <label><h5>Senha</h5></label>
 <input 
 id="agoraSenhaCad" 
 className={styles.agoraInputCad} 
 type="password" 
 placeholder='Mínimo de 8 caracteres' 
 {...register('password')}
  min={8}
 />
 </div>

<div>
 <label><h5>Telefone</h5></label>
 <input 
 id="agoraTelefoneCad" 
 className={styles.agoraInputCad} 
 type="tel" 
 placeholder='Ex.:(xx) xxxxx-xxxx'
 {...register('tel')}
 />
 </div>

<div className={styles.agoraContainerLinkLogin}><h6><Link className={styles.agoraStylesLink} href="">Já tenho conta</Link></h6></div>

</div>


<div className={styles.agoraContainerButtonForm}>
<button type="submit"  className={styles.agoraButtonCancel} disabled={!isSubmitButtonCad}><p className={styles.agoraColorLetterForm}>Cancelar</p></button>
<button type="submit"  className={styles.agoraButtonCad} disabled={!isSubmitButtonCad}><p className={styles.agoraColorLetterForm}>Cadastrar</p></button>
</div>

 </form>
  </div>


  </div>
   
  

  </main>

);



}