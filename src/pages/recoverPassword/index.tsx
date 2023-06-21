import { TextField } from "@mui/material";
import { StyledRecoverPassword } from "./style";
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";

function RecoverPassword() {
  return (
    <StyledRecoverPassword>
      <Header />
      <div className="div-form-recover">
        <h2>Altere sua senha</h2>
        <form>
          <TextField
            label="Nova senha"
            variant="outlined"
            type="password"
          />
          <TextField
            label="Confirme sua senha"
            variant="outlined"
            type="password"
          />

          <button type="submit" className="button-brand">
            Alterar senha
          </button>
        </form>
      </div>
      <Footer />
    </StyledRecoverPassword>
  );
}

export default RecoverPassword;
