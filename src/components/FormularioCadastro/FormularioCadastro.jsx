import { PropTypes } from "prop-types";
import { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    const formularios = [
        <DadosUsuario key="0" aoEnviar={passarEtapa} />,
        <DadosPessoais
            key="1"
            aoEnviar={passarEtapa}
            validarCPF={validarCPF}
        />,
        <DadosEntrega key="2" aoEnviar={aoEnviar} />,
    ];

    function passarEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    return <>{formularios[etapaAtual]}</>;
}

FormularioCadastro.propTypes = {
    aoEnviar: PropTypes.func,
    validarCPF: PropTypes.func,
};

export default FormularioCadastro;
