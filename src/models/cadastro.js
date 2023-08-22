function validarCPF(CPF) {
    if (CPF.length < 11) {
        return { valido: false, texto: "CPF deve conter 11 dígitos" };
    }
    if (
        validaNumerosRepetidos(CPF) ||
        validaPrimeiroDigito(CPF) ||
        validaSegundoDigito(CPF)
    ) {
        return { valido: false, texto: "CPF Inválido" };
    }

    return { valido: true, texto: "" };
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

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return {
            valido: false,
            texto: "O campo deve ter entre 4 e 72 dígitos.",
        };
    } else {
        return { valido: true, texto: "" };
    }
}

export { validarCPF, validarSenha };
