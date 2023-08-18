import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { PropTypes } from "prop-types";
import { useState } from "react";

function DadosPessoais({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
            }}
        >
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
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
                label="Sobrenome"
                variant="filled"
                fullWidth
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={() => {
                    setErros(validarCPF(cpf));
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
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
                Cadastrar
            </Button>
        </form>
    );
}

DadosPessoais.propTypes = {
    aoEnviar: PropTypes.func,
    validarCPF: PropTypes.func,
};

export default DadosPessoais;
