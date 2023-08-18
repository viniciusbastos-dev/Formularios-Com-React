import { Button, TextField } from "@mui/material";
import React from "react";

function DadosUsuario() {
    return (
        <form>
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="filled"
                fullWidth
                margin="normal"
            />
            <TextField
                id="senha"
                label="Senha"
                type="password"
                variant="filled"
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;
