import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { PropTypes } from "prop-types";

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar();
            }}
        >
            <TextField
                value={email}
                id="email"
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
                label="Senha"
                type="password"
                variant="filled"
                fullWidth
                margin="normal"
                required
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
            />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

DadosUsuario.propTypes = {
    aoEnviar: PropTypes.func,
};

export default DadosUsuario;
