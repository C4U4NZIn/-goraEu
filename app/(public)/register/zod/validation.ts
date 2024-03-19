import * as zod from 'zod';
export const userFormSchema = zod.object({


    email: zod
    .string()
    .email()
    .refine(email=>/^[\w.+\-]+@gmail\.com$/.test(email),{
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
    
        username: zod
       .string()
       .min(8, 'Informe seu nome completo'),

   
       nickname: zod
       .string()
       .min(3, 'Informe um apelido válido')
 
 
 
 })
 
export  type  userForm =  zod.infer<typeof  userFormSchema>;