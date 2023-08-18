import "./App.css";
import { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
    render() {
        return (
            <Container component="article" maxWidth="sm">
                <Typography variant="h3" align="center">
                    Formulário de cadastro
                </Typography>
                <FormularioCadastro
                    validarCPF={validarCPF}
                    aoEnviar={aoEnviarFormulario}
                />
            </Container>
        );
    }
}

function aoEnviarFormulario(dados) {
    console.log(dados);
}

function validarCPF(CPF) {
    if (CPF.length < 11) {
        return { cpf: { valido: false, texto: "CPF deve conter 11 dígitos" } };
    }
    if (
        validaNumerosRepetidos(CPF) ||
        validaPrimeiroDigito(CPF) ||
        validaSegundoDigito(CPF)
    ) {
        return { cpf: { valido: false, texto: "CPF Inválido" } };
    }

    return { cpf: { valido: true, texto: "" } };
}

function validaNumerosRepetidos(CPF) {
    const numerosRepetidos = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
    ];

    return numerosRepetidos.includes(CPF);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpf[10];
}

export default App;
