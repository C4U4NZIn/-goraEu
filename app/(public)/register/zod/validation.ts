import * as zod from 'zod';

export const userFormSchema = zod.object({
  

    email: zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
     message:"O email deve ser um endereço gmail válido"
    }),
    emailInstitucional:zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@fmm\.org.br$/.test(email),{
      message:"O email deve ser um endereço gmail válido"
     }),

     password: zod
    .string()
    .min(8)
    .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Deve conter pelo menos um caractere em caixa alta, um em caixa baixa e um caractere numérico."
      ),
 
      confirmPassword: zod
      .string()
      .min(8)
      .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Deve conter pelo menos um caractere em caixa alta, um em caixa baixa e um caractere numérico."
      ),
      telefone:
      zod
      .string(),
      telefonePersonal:
      zod
      .string(),
    
        username: zod
       .string()
       .min(8, 'Informe seu nome completo'),
       cep:zod
       .string()
       .min(3, 'Informe um cep válido')
       .optional(),
       numberHouse:zod
       .string()
       .min(3, 'Informe um número de casa válido')
       .optional(),
       bairro:zod
       .string()
       .min(3, 'Informe um bairro válido')
       .optional(),
       estado:zod
       .string()
       .min(3, 'Informe um estado válido')
       .optional(),
       cidade:zod
       .string()
       .min(3, 'Informe uma cidade válido')
       .optional(),
       country:zod
       .string()
       .min(3, 'Informe um país válido')
       .optional(),
       logradouro:zod
       .string()
       .min(3, 'Informe um logradouro válido')
       .optional(),
       complemento:zod
       .string()
       .min(3, 'Informe um complemento válido')
       .optional()
 
 
 
 }).refine((data)=> data.password === data.confirmPassword , {
  message:"Digite sua senha corretamente",
  path:['confirmPassword']
 }) ;




export  type  userForm =  zod.infer<typeof  userFormSchema>;