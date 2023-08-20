import { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    const formularios = [
        <DadosUsuario key="0" aoEnviar={coletarDados} />,
        <DadosPessoais
            key="1"
            aoEnviar={coletarDados}
            validarCPF={validarCPF}
        />,
        <DadosEntrega key="2" aoEnviar={coletarDados} />,
    ];

    useEffect(() => {
        console.log(dadosColetados);
    }, [dadosColetados]);

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        passarEtapa();
    }

    function passarEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;
