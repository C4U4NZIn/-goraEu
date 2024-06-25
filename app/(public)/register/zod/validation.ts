import * as zod from 'zod';

export const userFormSchema = zod.object({
    email: zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
     message:"O email deve ser um endereço gmail válido"
    }),
    email_profissional:zod
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
      telefone1:
      zod
      .string(),
      telefone2:
      zod
      .string(),
        username: zod
       .string()
       .min(8, 'Informe seu nome completo'),
       name_instituicao:zod
       .string()
       .min(3, "Informe o nome da instituição"),
       cep:zod
       .string()
       .min(3, 'Informe um cep válido')
       .optional(),
       endereco:zod  
       .string()
       .min(3, 'Informe um endereço válido')
       .optional(),
 }).refine((data)=> data.password === data.confirmPassword , {
  message:"Digite sua senha corretamente",
  path:['confirmPassword']
 }) ;




export  type  userForm =  zod.infer<typeof  userFormSchema>;