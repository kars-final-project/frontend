import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/auth.context";
import { StyledModalEditAddress } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { zodResolver } from "@hookform/resolvers/zod";
import { iUpdateAddress, updateAddressSchema } from "../../../schemas/users.schema";

function ModalEditAddress() {
  const { setModalUpdateAddress, updateAddress } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateAddress>({
    resolver: zodResolver(updateAddressSchema),
  });

  const submit: SubmitHandler<any> = (data) => {
    const newData = Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== ''));
    updateAddress(newData)
  };

  return (
    <StyledModalEditAddress>
      <div className="modal-white-background">
        <div className="form-div">
            <h2>Editar endereço</h2>
            <span onClick={() => setModalUpdateAddress(false)} >
              <AiOutlineClose />
            </span>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h3>Informações de endereço</h3>
          <div className="input">
            <label>CEP</label>
            <input {...register("zip_code")} type="text" />
          </div>
          <div className="double-input-container">
            <div className="double-input">
              <label>Estado</label>
              <input {...register("state")} type="text"/>
            </div>
            <div className="double-input">
              <label>Cidade</label>
              <input {...register("city")} type="text"/>
            </div>
          </div>
          <div className="input">
            <label>Rua</label>
            <input {...register("street")} type="text" />
          </div>
          <div className="double-input-container">
            <div className="double-input">
              <label>Número</label>
              <input {...register("number")} type="text" />
            </div>
            <div className="double-input">
              <label>Complemento</label>
              <input {...register("complement")} type="text"/>
            </div>
          </div>
          <div className="edit-form-buttons">
            <button onClick={() => setModalUpdateAddress(false)} type="button" className="cancelBtn">Cancelar</button>
            <button type="submit" className="saveBtn">Salvar alterações</button>
          </div>
        </form>
      </div>
    </StyledModalEditAddress>
  );
}

export default ModalEditAddress;