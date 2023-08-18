import { PropTypes } from "prop-types";
import { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    function passarEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    function formularioAtual(etapa) {
        switch (etapa) {
            case 0:
                return <DadosUsuario aoEnviar={passarEtapa} />;
            case 1:
                return (
                    <DadosPessoais
                        aoEnviar={passarEtapa}
                        validarCPF={validarCPF}
                    />
                );
            case 2:
                return <DadosEntrega aoEnviar={aoEnviar} />;
            default:
                return <Typography>Erro ao selecionar formulário</Typography>;
        }
    }

    return <>{formularioAtual(etapaAtual)}</>;
}

FormularioCadastro.propTypes = {
    aoEnviar: PropTypes.func,
    validarCPF: PropTypes.func,
};

export default FormularioCadastro;
