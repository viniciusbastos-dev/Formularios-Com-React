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
                <FormularioCadastro aoEnviar={aoEnviarFormulario} />
            </Container>
        );
    }
}

function aoEnviarFormulario(dados) {
    console.log(dados);
}

export default App;
