import { StyledModalEditAddress } from "./style";
import { AiOutlineClose } from "react-icons/ai";

function ModalEditAddress() {
  return (
    <StyledModalEditAddress>
      <div className="modal-white-background">
        <div className="form-div">
            <h2>Editar endereço</h2>
            <span>
              <AiOutlineClose />
            </span>
        </div>
        <form>
          <h3>Informações de endereço</h3>
          <div className="input">
            <label>CEP</label>
            <input type="text" />
          </div>
          <div className="double-input-container">
            <div className="double-input">
              <label>Estado</label>
              <input type="text"/>
            </div>
            <div className="double-input">
              <label>Cidade</label>
              <input type="text"/>
            </div>
          </div>
          <div className="input">
            <label>Rua</label>
            <input type="text" />
          </div>
          <div className="double-input-container">
            <div className="double-input">
              <label>Número</label>
              <input type="text" />
            </div>
            <div className="double-input">
              <label>Complemento</label>
              <input type="text"/>
            </div>
          </div>
          <div className="edit-form-buttons">
            <button type="button" className="cancelBtn">Cancelar</button>
            <button type="submit" className="saveBtn">Salvar alterações</button>
          </div>
        </form>
      </div>
    </StyledModalEditAddress>
  );
}

export default ModalEditAddress;
