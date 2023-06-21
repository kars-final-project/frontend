import { TextField } from '@mui/material';
import { StyledModalPassword } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from '../../../contexts/auth.context';

function ModalPassword() {
  const { setModalPassword} = useAuth();
  return (
    <StyledModalPassword>
      <div className="modal-white-background">
        <div>
          <span onClick={()=> setModalPassword(false)}>
            <AiOutlineClose />
          </span>
          <form>
            <p>Informe seu e-mail para enviarmos o link de recuperação</p>
            <TextField label="Email" variant="outlined" type="email" id='recoverEmail' />
            <button>Enviar link</button>
          </form>
        </div>
      </div>
    </StyledModalPassword>
  );
}

export default ModalPassword;
