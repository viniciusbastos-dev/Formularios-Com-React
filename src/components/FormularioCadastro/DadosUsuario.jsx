import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import ValidacoesDeCadastro from "../../contexts/ValidacoesDeCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {
    const validacoes = useContext(ValidacoesDeCadastro);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                }
            }}
        >
            <TextField
                value={email}
                id="email"
                name="email"
                label="Email"
                type="email"
                variant="filled"
                fullWidth
                margin="normal"
                required
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField
                value={senha}
                id="senha"
                name="senha"
                label="Senha"
                type="password"
                variant="filled"
                fullWidth
                margin="normal"
                required
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;
