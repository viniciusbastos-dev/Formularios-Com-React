import React from "react";
import { validarCPF, validarSenha } from "../models/cadastro";

const ValidacoesDeCadastro = React.createContext({
    cpf: validarCPF,
    senha: validarSenha,
    nome: validarSenha,
});

export default ValidacoesDeCadastro;
