import { CssBaseline, TextField, Box } from '@mui/material';
import { Layout, StyledButton } from './styles';

export function Publicar() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <CssBaseline />
      <form onSubmit={handleSubmit}>
      <h2>Publicar treino</h2>
        <TextField
          fullWidth
          label="URL da Imagem da Atividade"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="URL da Imagem do Usuário"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Distância (km)"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Calorias (kcal)"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Batimentos (BPM)"
          variant="outlined"
          margin="normal"
        />
        <Box display="flex" justifyContent="center" mt={2}>
          <StyledButton type="submit" variant="contained" color="primary">
            Enviar
          </StyledButton>
          <StyledButton type="reset" variant="outlined" color="secondary">
            Limpar
          </StyledButton>
        </Box>
      </form>
    </Layout>
  );
}
