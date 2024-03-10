'use client';
import {Controller , useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import agoraLogoSignUp from '../forgot/images/Logo_Agora 2.svg';
import styles from '../SignUp/background.module.css';
import { useUserContext } from '@/contexts';
import { ZodError } from './styled/zodErros/zodError';
import { Bounce, toast } from 'react-toastify';
import { AppError } from '@/utils/AppError';
import { Input } from './components/Input';

const userFormSchema = zod.object({

  username: zod
  .string()
  .min(8, 'Informe seu nome completo'),
 

  nickname: zod
  .string()
  .min(3,"Informe um nome válido")
  .max(12, "Informe um nome válido"),
  
  
   email: zod
   .string()
   .email()
   .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
    message:"O email deve ser um endereço gmail válido"
   }),

   password: zod
   .string()
   .min(8)
   .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Sua senha deve conter pelo menos um caracter em caixa alta , caixa baixa e um caracter númerico"
     ),

   tel: zod
   .string()
   .regex(/^\(\d{2}\) \d{5}-\d{4}$/,
    "Por favor digite seu número corretamente "
  )



})

type  userForm =  zod.infer<typeof  userFormSchema>;

export default function SignUp(){
   const { createUser } = useUserContext();

   const notifyUser = () =>{
    toast.success( 'Você foi cadastrado com sucesso!',
    {
        position:'top-center',
        autoClose:5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition:Bounce
    });

   }
 
 const {
  register,
  handleSubmit,
  watch,
  control,
  formState:{errors}
} = useForm({
  resolver: zodResolver(userFormSchema),
  defaultValues: 
  {
    username:'',
    nickname:'',  
    email:'',
    password:'',
    tel:''
  }
 });
 const handleSubmitValues =  (data:userForm)=>{

  try {
     const values = {
      username:data.username,
      nickname:data.nickname,
      email:data.email,
      password:data.password,
      phone:data.tel
     }
     toast.success( 'Você foi cadastrado com sucesso!',
     {
         position:'top-center',
         autoClose:5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         transition:Bounce
     });
     createUser(values);

     
    } catch (error) {

      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Nenhum usuário do Ágora foi encontrado';


      toast.error( title,
      {
          position:'top-center',
          autoClose:5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition:Bounce
      });
      
    }
    
   

}
 
 const username = watch('username')
 const nickname = watch('nickname')
 const email = watch('email')
 const password = watch('password')
 const tel = watch('tel')

 const isSubmitButtonCad = username && nickname && email && password && tel
   


return(

  <>



     
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

<Controller
name='username'
defaultValue = ""
control={control}
render={({field:{onChange, value , ref}})=>(
  <Input
  onChange={onChange}
  value={value}
  ref={ref}
  type='text'
  inputMode='text'
  label='Nome'
  errorMessage={errors?.username?.message}
  />
)}
/>

<div 
className={styles.gapBetweenInputLabel}
>
<label  className={styles.tinosStyleNamesInput}>Apelido</label>
<input 
 id="agoraApelidoCad" 
 className={styles.agoraInputCad} 
 type="text" 
 placeholder='Ex.:Nana Braga' 
 {...register("nickname")}
 />
 {errors.nickname && <span>{errors.nickname?.message}</span>}
</div>

<div 
className={styles.gapBetweenInputLabel}
>
<label  
className={styles.tinosStyleNamesInput}
>
   Email
  </label>
<input 
id="agoraEmailCad" 
className={styles.agoraInputCad} 
type="email" 
placeholder='Ex.:Nathalia.Braga@gmail.com' 
{...register('email')}
/>
{errors.email && <span>{errors.email?.message}</span>}
 </div>

<div
className={styles.gapBetweenInputLabel}
>
 <label 
 className={styles.tinosStyleNamesInput}
 >
Senha
</label>
 <input 
 id="agoraSenhaCad" 
 className={styles.agoraInputCad} 
 type="password" 
 placeholder='Mínimo de 8 caracteres' 
 {...register('password')}
 />
 {errors.password && <span>{errors.password?.message}</span>}
 </div>

<div 
className={styles.gapBetweenInputLabel}
>
 <label 
 className={styles.tinosStyleNamesInput}
 >
Telefone
</label>
 <input 
 id="agoraTelefoneCad" 
 className={styles.agoraInputCad} 
 type="tel" 
 placeholder='Ex.:(xx) xxxxx-xxxx'
 {...register('tel')}
 />
 {errors.tel && <span>{errors.tel.message}</span>}
 </div>

<div 
className={styles.agoraContainerLinkLogin}
>
  <Link 
  className={styles.agoraStylesLink} 
  href="/Login"
  >
  Já tenho Login
  </Link>
  </div>

</div>


<div 
className={styles.agoraContainerButtonForm}
>

<button type="submit"  
className={styles.agoraButtonCancel} 
disabled={!isSubmitButtonCad}>
<p className={styles.agoraColorLetterForm}
>
Cancelar
</p>
</button>

<button type="submit" 

className={styles.agoraButtonCad} 
disabled={!isSubmitButtonCad}>
<p 
className={styles.agoraColorLetterForm}
>
Cadastrar
</p>
</button>
</div>

 </form>
  </div>


  </div>
   
  

  </>

);



}