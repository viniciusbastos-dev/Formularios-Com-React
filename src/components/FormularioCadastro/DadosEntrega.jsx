import { Button, TextField } from "@mui/material";
import { useState } from "react";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}
        >
            <TextField
                value={cep}
                id="cep"
                label="CEP"
                type="number"
                variant="filled"
                margin="normal"
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            />
            <TextField
                value={endereco}
                id="endereco"
                label="Endereço"
                type="text"
                variant="filled"
                fullWidth
                margin="normal"
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
            />
            <TextField
                value={numero}
                id="numero"
                label="Número"
                type="number"
                variant="filled"
                margin="normal"
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
            />
            <TextField
                value={estado}
                id="estado"
                label="Estado"
                type="text"
                variant="filled"
                margin="normal"
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
            />
            <TextField
                value={cidade}
                id="cidade"
                label="Cidade"
                type="text"
                variant="filled"
                margin="normal"
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;
