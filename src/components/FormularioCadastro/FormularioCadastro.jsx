import { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

function FormularioCadastro({ aoEnviar }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    const formularios = [
        <DadosUsuario
            key="0"
            aoEnviar={coletarDados}
        />,
        <DadosPessoais
            key="1"
            aoEnviar={coletarDados}
        />,
        <DadosEntrega
            key="2"
            aoEnviar={coletarDados}
        />,
        <Typography key="3" variant="h5">
            Obrigado pelo Cadastro!
        </Typography>,
    ];

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    });

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        passarEtapa();
    }

    function passarEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            <Stepper activeStep={etapaAtual}>
                <Step>
                    <StepLabel>Login</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Pessoal</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entrega</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;
