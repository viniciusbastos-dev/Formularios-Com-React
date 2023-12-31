import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState, useContext } from "react";
import ValidacoesDeCadastro from "../../contexts/ValidacoesDeCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    const validacoes = useContext(ValidacoesDeCadastro);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                label="Nome"
                variant="filled"
                fullWidth
                margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="filled"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onBlur={validarCampos}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                label="CPF"
                variant="filled"
                fullWidth
                margin="normal"
                type="number"
            />

            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        checked={promocoes}
                    />
                }
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        checked={novidades}
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
