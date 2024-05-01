"use client";

import { useModalAluno } from "../zustand/useModalAluno";
import { Dialog } from "../../styled/usuario";

const ModalAluno = () =>{

const {close} = useModalAluno();

return (
    <>
    <Dialog>
       <h1>Fechar Modal teste</h1>
        <button
        onClick={close}
        >fechar</button> 
    </Dialog>
    </>
)


}

export default ModalAluno;