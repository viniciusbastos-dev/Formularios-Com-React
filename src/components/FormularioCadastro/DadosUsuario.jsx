import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import ValidacoesDeCadastro from "../../contexts/ValidacoesDeCadastro";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

    const validacoes = useContext(ValidacoesDeCadastro);

    function validarCampos(event) {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

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
