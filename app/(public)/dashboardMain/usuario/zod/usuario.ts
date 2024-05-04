import { Password } from '@mui/icons-material';
import * as zod from 'zod';

export const userFormSchema = zod.object({
    password: zod
    .string()
    .min(8)
    .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Deve conter pelo menos um caractere em caixa alta, um em caixa baixa e um caractere numérico."),
});
export const userFormSchemaUpdate = zod.object({
    username: zod.string().optional(),
    email:zod.string().email().optional(),
    telefone:zod.string().optional(),
    password: zod
    .string()
    .min(8)
    .regex(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"Deve conter pelo menos um caractere em caixa alta, um em caixa baixa e um caractere numérico.").optional(),
})


export type userFormExclude = zod.infer<typeof userFormSchema>;
export type userFormUpdateUser = zod.infer<typeof userFormSchemaUpdate>;
export type alunoFormUpdate = userFormUpdateUser & userFormExclude;
